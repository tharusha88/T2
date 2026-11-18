import { contact } from "../data/content.js";

export const MAX_GUESTS = 16;

/** Formats a date as YYYY-MM-DD (the value format of <input type="date">), in local time. */
export function toDateInputValue(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/** The day after a YYYY-MM-DD date, as YYYY-MM-DD. */
export function nextDay(date) {
  const next = new Date(`${date}T12:00:00`);
  next.setDate(next.getDate() + 1);
  return toDateInputValue(next);
}

/** Returns an error message for the enquiry, or "" when it is valid. */
export function validateEnquiry({ arrival, departure, guests }, today = toDateInputValue()) {
  if (!arrival || !departure) return "Please choose your arrival and departure dates.";
  if (arrival < today) return "Your arrival date cannot be in the past.";
  if (departure <= arrival) return "Please choose a departure date after your arrival.";
  const count = Number(guests);
  if (!Number.isInteger(count) || count < 1 || count > MAX_GUESTS) {
    return `Please select between 1 and ${MAX_GUESTS} guests.`;
  }
  return "";
}

/** A wa.me link that opens WhatsApp with the enquiry pre-filled. */
export function buildWhatsAppLink({ arrival, departure, guests, stay }) {
  const message = `Hello Top Mountain Resort! I'd like to enquire about a stay.
Check-in: ${arrival}
Check-out: ${departure}
Guests: ${guests}
Accommodation: ${stay || "Please help me choose"}
Could you please confirm availability and the current rate?`;
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
