import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Product-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Product-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Product-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Product-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: "https://randomuser.me/api/portraits/women/4.jpg",
    customerName: "Hannah Black",
    rating: 4.5,
    feedback:
      "I'm so happy with my purchase. The product is high quality and the delivery was fast.",
  },
  {
    imgURL: "https://randomuser.me/api/portraits/men/5.jpg",
    customerName: "John Doe",
    rating: 4.5,
    feedback:
      "The product is amazing. I'm so happy with my purchase. The quality is top-notch.",
  },
  {
    imgURL: "https://randomuser.me/api/portraits/women/1.jpg",
    customerName: "Mary Jane",
    rating: 4.5,
    feedback:
      "The quality of the product is top-notch. I'm so happy with my purchase. Thank you!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Product 1", link: "/" },
      { name: "Product 2", link: "/" },
      { name: "Product 3", link: "/" },
      { name: "Product 4", link: "/" },
      { name: "Product 5", link: "/" },
      { name: "Product 6", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@test.com", link: "mailto:customer@test.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
