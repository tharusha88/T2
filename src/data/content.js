import { Coffee, Flame, TreePine } from "lucide-react";
import { asset } from "../lib/asset.js";

// Everything here is site content: edit text, prices and photos in this file.

export const contact = {
  phoneDisplay: "+94 77 736 8264",
  phoneTel: "+94777368264",
  whatsapp: "94777368264",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Top+Mountain+Resort+Diyatalawa+Sri+Lanka",
};

export const images = {
  hero: asset("images/highlands.webp"),
  estate: asset("images/estate.webp"),
  cabana: asset("images/cabana.webp"),
  villa: asset("images/villa.webp"),
  mud: asset("images/mud-house.webp"),
  timber: asset("images/timber.webp"),
  balcony: asset("images/balcony.webp"),
  fire: asset("images/campfire.webp"),
};

export const navLinks = [
  ["The resort", "#resort"],
  ["Our stays", "#stays"],
  ["Experiences", "#experiences"],
  ["The surroundings", "#surroundings"],
];

// The first three are shown by default; "Explore all stays" reveals the rest.
export const stays = [
  {
    name: "The Wooden Cabanas",
    short: "Wooden Cabana",
    tag: "A LITTLE CLOSER TO NATURE",
    image: images.cabana,
    guests: "2–4 guests",
    area: "25–35 m²",
    price: "8,000",
    type: "Cabanas",
    text: "Warm timber, a private balcony, and nothing between you and the hills. Our handcrafted cabanas make space for the simple things.",
    options: "Double and family rooms available.",
  },
  {
    name: "The Hillside Villas",
    short: "Hillside Villa",
    tag: "ROOM TO SLOW DOWN",
    image: images.villa,
    guests: "2–6 guests",
    area: "45–120 m²",
    price: "16,500",
    type: "Villas",
    text: "Light-filled rooms and a balcony that opens onto the valley. A peaceful, spacious home base for couples and families.",
    options: "Double, family and family deluxe options available.",
  },
  {
    name: "The Mud House",
    short: "Mud House",
    tag: "ROOTED IN THE EARTH",
    image: images.mud,
    alt: "Earth-toned clay family villa surrounded by greenery",
    guests: "4 guests",
    area: "40 m²",
    price: "13,200",
    type: "Nature stays",
    text: "Earthy textures, hand-finished clay walls, and a natural rock face. A characterful family hideaway with a lantern-lit veranda.",
    options: "Family villa with space for 4 adults and 1 child.",
  },
  {
    name: "The Whole Bungalow",
    short: "Whole Bungalow",
    tag: "BETTER TOGETHER",
    image: images.balcony,
    guests: "8 guests",
    area: "150 m²",
    price: "31,200",
    type: "Villas",
    text: "Bring your favourite people and make the hillside your own. A whole bungalow for unhurried holidays and memories around the table.",
    options: "Accommodates 8 adults and 3 children.",
  },
];

// Extra choice in the enquiry form's "Your hideaway" list (not shown as a card).
export const extraStayOptions = ["Luxury Cabana (12 adults)"];

export const experiences = [
  {
    title: "Mornings without an alarm",
    subtitle: "SLOW LIVING",
    description:
      "Wake to birdsong, let the mist lift, and take your Ceylon tea outside. There is nowhere else you need to be.",
    image: images.hero,
    icon: Coffee,
  },
  {
    title: "A little closer to the wild",
    subtitle: "WANDER & DISCOVER",
    description:
      "Follow the tea-estate paths, breathe in the pine-scented air, or find a quiet corner across our three-acre hillside.",
    image: images.estate,
    icon: TreePine,
  },
  {
    title: "Evenings around the fire",
    subtitle: "AFTER THE SUN GOES DOWN",
    description:
      "A crackling campfire, a sky full of stars, and the people you love. Settle into the kind of evening you wish would last longer.",
    image: images.fire,
    icon: Flame,
  },
];

// The grid shows the first four; the lightbox pages through all of them.
export const gallery = [
  { src: images.estate, title: "Three acres, all yours to discover" },
  { src: images.cabana, title: "Handcrafted hideaways in the hills" },
  { src: images.timber, title: "Warm timber. Thoughtful little details." },
  { src: images.villa, title: "Your quiet corner of Diyatalawa" },
  { src: images.balcony, title: "A front-row seat to slower days" },
];

export const nearby = [
  ["Idalgashinna", "Misty ridges & mountain trails", "13 km"],
  ["Ella & Nine Arch Bridge", "A little adventure beyond the hills", "22 km"],
  ["Horton Plains", "Wild beauty, wide open spaces", "28 km"],
];
