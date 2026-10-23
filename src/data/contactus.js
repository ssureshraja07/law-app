// Contact details inga maathunga, Contact page auto update aagum.
import officeImg from "../images/office.png";
import bannerImg from "../images/contact-banner.png";

export const contact = {
  officeImg,
  bannerImg,
  phone: "+91 98765 43210",
  phoneLink: "tel:+919876543210",
  whatsappNumber: "919876543210", // country code + number, no + or spaces
  email: "contact@yourlawfirm.com",
  addressLines: ["No. 12, Court Road, Near District Court", "Madurai, Tamil Nadu - 625 001"],
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed (Appointment only)" },
  ],
  // Google Maps la share -> Embed a map -> src URL copy paste pannunga
  mapEmbed: "https://www.google.com/maps?q=Madurai,Tamil+Nadu&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Madurai,Tamil+Nadu",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};