import { ArrowUpRight, CalendarDays, ChevronDown } from "lucide-react";
import { MAX_GUESTS, nextDay } from "../lib/enquiry.js";

/** Quick check-in / check-out / guests bar under the hero. Submitting opens the enquiry form. */
export default function BookingStrip({ today, arrival, departure, guests, onArrivalChange, onDepartureChange, onGuestsChange, onSubmit }) {
  return (
    <section className="booking-strip" aria-label="Plan your stay">
      <div className="booking-intro">
        <span>YOUR NEXT DEEP BREATH</span>
        <p>
          Make a little time
          <br />
          {" for "}
          <em>yourself.</em>
        </p>
      </div>
      <form
        className="quick-booking"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <label>
          <span>CHECK IN</span>
          <div>
            <input
              aria-label="Check-in date"
              type="date"
              min={today}
              value={arrival}
              onChange={(event) => onArrivalChange(event.target.value)}
            />
            <CalendarDays size={17} />
          </div>
        </label>
        <label>
          <span>CHECK OUT</span>
          <div>
            <input
              aria-label="Check-out date"
              type="date"
              min={nextDay(arrival || today)}
              value={departure}
              onChange={(event) => onDepartureChange(event.target.value)}
            />
            <CalendarDays size={17} />
          </div>
        </label>
        <label className="guest-field">
          <span>YOUR COMPANY</span>
          <div>
            <select aria-label="Number of guests" value={guests} onChange={(event) => onGuestsChange(event.target.value)}>
              {Array.from({ length: MAX_GUESTS }, (_, index) => (
                <option key={index} value={index + 1}>
                  {String(index + 1).padStart(2, "0")} {index === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
            <ChevronDown size={16} />
          </div>
        </label>
        <button className="button button-dark" type="submit">
          {"Enquire about a stay "}
          <ArrowUpRight size={18} />
        </button>
      </form>
    </section>
  );
}
