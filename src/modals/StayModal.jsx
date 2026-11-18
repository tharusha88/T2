import { ArrowUpRight, Car, Check, Coffee, Users, Wifi } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import Modal from "../components/Modal.jsx";

export default function StayModal({ stay, onClose, onEnquire }) {
  return (
    <Modal label={stay.name} onClose={onClose} className="room-modal">
      <img className="room-modal-image" src={stay.image} alt={stay.name} />
      <div className="room-modal-copy">
        <Eyebrow>{stay.tag}</Eyebrow>
        <h2>{stay.name}</h2>
        <div className="stay-meta">
          <span>
            <Users size={15} />
            {stay.guests}
          </span>
          <span>{stay.area}</span>
        </div>
        <p>{stay.text}</p>
        <p>{stay.options}</p>
        <div className="room-amenities">
          <span>
            <Wifi size={16} />
            Free Wi-Fi
          </span>
          <span>
            <Coffee size={16} />
            Kettle
          </span>
          <span>
            <Car size={16} />
            Free parking
          </span>
          <span>
            <Check size={16} />
            {"Hot water & private bathroom"}
          </span>
        </div>
        <div className="room-modal-bottom">
          <span>
            {"From "}
            <strong>
              {"LKR "}
              {stay.price}
            </strong>
            {" / night"}
            <small>Indicative rate. Confirm current pricing with us.</small>
          </span>
          <button type="button" className="button button-dark" onClick={() => onEnquire(stay.short)}>
            {"Enquire about this stay "}
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </Modal>
  );
}
