import { ArrowUpRight, Check, Phone } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import Modal from "../components/Modal.jsx";
import { contact, extraStayOptions, stays } from "../data/content.js";
import { MAX_GUESTS, buildWhatsAppLink, nextDay } from "../lib/enquiry.js";

/**
 * Enquiry form. Nothing is sent from the site: once the details are valid,
 * it shows a button that opens WhatsApp with the enquiry pre-filled.
 */
export default function BookingModal({ enquiry, today, onArrivalChange, onChange, onSubmit, onClose }) {
  const { arrival, departure, guests, stay, error, ready } = enquiry;

  return (
    <Modal label="Plan your mountain escape" onClose={onClose} className="booking-modal">
      <Eyebrow>YOUR HILLSIDE ESCAPE</Eyebrow>
      <h2>
        <span className="heading-phrase">A little time</span>
        <br />
        <span className="heading-phrase">
          {"for "}
          <em>you.</em>
        </span>
      </h2>
      <p>Tell us what you have in mind. Our team will help you find your perfect hideaway.</p>
      <form onSubmit={onSubmit}>
        <div className="modal-form-grid">
          <label>
            Check in
            <input
              type="date"
              aria-label="Enquiry check-in"
              min={today}
              value={arrival}
              required
              onChange={(event) => onArrivalChange(event.target.value)}
            />
          </label>
          <label>
            Check out
            <input
              type="date"
              aria-label="Enquiry check-out"
              min={nextDay(arrival || today)}
              required
              value={departure}
              onChange={(event) => onChange({ departure: event.target.value })}
            />
          </label>
        </div>
        <div className="modal-form-grid">
          <label>
            Guests
            <select aria-label="Guests" value={guests} onChange={(event) => onChange({ guests: event.target.value })}>
              {Array.from({ length: MAX_GUESTS }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} {index === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>
          <label>
            Your hideaway
            <select aria-label="Your hideaway" value={stay} onChange={(event) => onChange({ stay: event.target.value })}>
              <option value="">Help me choose</option>
              {stays.map((option) => (
                <option key={option.short}>{option.short}</option>
              ))}
              {extraStayOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {ready ? (
          <div className="inquiry-ready" role="status">
            <p>
              <Check size={18} />
              {" Your escape is ready to enquire about."}
            </p>
            <a
              className="button button-dark"
              href={buildWhatsAppLink({ arrival, departure, guests, stay })}
              target="_blank"
              rel="noreferrer"
            >
              {"Send enquiry on WhatsApp "}
              <ArrowUpRight size={18} />
            </a>
            <small>This opens WhatsApp. Your stay is only confirmed when our team replies.</small>
          </div>
        ) : (
          <button className="button button-dark modal-submit" type="submit">
            {"Prepare my enquiry "}
            <ArrowUpRight size={18} />
          </button>
        )}
        <p className="booking-note">No payment needed. Rates and availability confirmed by our team.</p>
      </form>
      <a className="booking-call" href={`tel:${contact.phoneTel}`}>
        <Phone size={14} />
        {` Prefer a conversation? ${contact.phoneDisplay}`}
      </a>
    </Modal>
  );
}
