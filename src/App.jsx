import { useEffect, useState } from "react";
import { nextDay, toDateInputValue, validateEnquiry } from "./lib/enquiry.js";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import BookingStrip from "./sections/BookingStrip.jsx";
import Intro from "./sections/Intro.jsx";
import Stays from "./sections/Stays.jsx";
import Experiences from "./sections/Experiences.jsx";
import Dining from "./sections/Dining.jsx";
import Gallery from "./sections/Gallery.jsx";
import Surroundings from "./sections/Surroundings.jsx";
import EscapeBanner from "./sections/EscapeBanner.jsx";
import Footer from "./sections/Footer.jsx";
import BookingModal from "./modals/BookingModal.jsx";
import StayModal from "./modals/StayModal.jsx";
import FilmModal from "./modals/FilmModal.jsx";
import Lightbox from "./modals/Lightbox.jsx";

const EMPTY_ENQUIRY = { arrival: "", departure: "", guests: "2", stay: "", error: "", ready: false };

/** Adds the "visible" class to each .reveal element the first time it scrolls into view. */
function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedStay, setSelectedStay] = useState(null);
  const [filmOpen, setFilmOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [enquiry, setEnquiry] = useState(EMPTY_ENQUIRY);
  const today = toDateInputValue();

  useRevealOnScroll();

  const updateEnquiry = (changes) => setEnquiry((prev) => ({ ...prev, ...changes }));

  function openBooking(stay = "") {
    updateEnquiry({ stay, ready: false, error: "" });
    setSelectedStay(null);
    setBookingOpen(true);
    setMenuOpen(false);
  }

  // A new arrival date pushes the departure forward if it would no longer be after it.
  function handleArrivalChange(arrival) {
    setEnquiry((prev) => ({
      ...prev,
      arrival,
      departure: prev.departure && prev.departure <= arrival ? nextDay(arrival) : prev.departure,
      ready: false,
    }));
  }

  function handleEnquirySubmit(event) {
    event.preventDefault();
    const error = validateEnquiry(enquiry);
    setEnquiry((prev) => ({ ...prev, error, ready: error ? prev.ready : true }));
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        onPlanEscape={() => openBooking()}
      />
      <main>
        <Hero onWatchFilm={() => setFilmOpen(true)} />
        <div className="atmosphere atmosphere--booking">
          <BookingStrip
            today={today}
            arrival={enquiry.arrival}
            departure={enquiry.departure}
            guests={enquiry.guests}
            onArrivalChange={handleArrivalChange}
            onDepartureChange={(departure) => updateEnquiry({ departure })}
            onGuestsChange={(guests) => updateEnquiry({ guests })}
            onSubmit={() => openBooking()}
          />
        </div>
        <div className="atmosphere atmosphere--resort">
          <Intro />
          <Stays onSelectStay={setSelectedStay} />
        </div>
        <Experiences />
        <div className="atmosphere atmosphere--living">
          <Dining onEnquire={() => openBooking()} />
          <Gallery onOpenPhoto={setLightboxIndex} />
        </div>
        <div className="atmosphere atmosphere--surroundings">
          <Surroundings />
        </div>
        <EscapeBanner onPlanEscape={() => openBooking()} />
      </main>
      <div className="atmosphere atmosphere--footer">
        <Footer />
      </div>

      {bookingOpen && (
        <BookingModal
          enquiry={enquiry}
          today={today}
          onArrivalChange={handleArrivalChange}
          onChange={(changes) => updateEnquiry({ ...changes, ready: false })}
          onSubmit={handleEnquirySubmit}
          onClose={() => setBookingOpen(false)}
        />
      )}
      {selectedStay && (
        <StayModal stay={selectedStay} onClose={() => setSelectedStay(null)} onEnquire={openBooking} />
      )}
      {filmOpen && <FilmModal onClose={() => setFilmOpen(false)} />}
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
