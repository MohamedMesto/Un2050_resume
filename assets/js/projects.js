// Project data

// {
//   img,           // imported image (project1–project9)
//   titleLink,     // link for the title
//   websiteLink,   // link for the website name
//   websiteName,   // short tagline
//   title,         // displayed title under the image
//   description    // detailed project info paragraph
// }

// UN2050 Projects Carousel Script

const projects = [
    {
      img: "assets/images/project/project1.jpg",
      titleLink: "https://dealna-de-v1-4-c11110135cbe.herokuapp.com/",
      websiteLink: "https://github.com/MohamedMesto/Dealna.de_v1.4",
      websiteName: "Dealna.de v1.4 — Modern E-Commerce Platform",
      title: "Dealna.de v1.4",
      description: `Dealna.de v1.4 is a modern, responsive e-commerce platform developed to deliver a seamless shopping experience. Built with performance and scalability in mind, it enables users to browse, search, and purchase products effortlessly. The platform integrates personalized product recommendations, secure checkout processes, and a clean user interface optimized for all devices. Deployed on Heroku for high availability, Dealna.de v1.4 demonstrates advanced full-stack development practices and a focus on user-centered design.`,
    },

    {
    img: "assets/images/project/project2.jpg",
    titleLink: "https://www.ifrc.org/",
    websiteLink: "https://www.ifrc.org/",
    websiteName: "Integrated management system - www.ifrc.org",
    title: "www.ifrc.org",
    description: `The customer details feature in the integrated management system captures and manages comprehensive client information, including personal data, contact details, and transaction history. Designed using C# for robust application logic and SQL for efficient data storage and retrieval, the system ensures seamless interaction and data consistency across the head office, branches, warehouses, and registration centers.`,
  },
  {
    img: "assets/images/project/project3.jpg",
    titleLink: "https://Dealna.de/",
    websiteLink: "https://Dealna.de/",
    websiteName: "Our E-Commerce Website",
    title: "www.Dealna.de",
    description: `At Dealna.de, we value our customers' unique needs by offering a wide range of personal, home, and car electronic accessories. Our detailed customer profiles help us tailor recommendations and ensure a personalized shopping experience that meets every customer's lifestyle and preferences.`,
  },
  {
  img: "assets/images/project/project4.jpg",
  titleLink: "https://un2050.com/WordsAdventure",
  websiteLink: "https://github.com/MohamedMesto/Word_adventure",
  websiteName: "Words Adventure — Educational Word Puzzle Game",
  title: "Words Adventure",
  description: `Words Adventure is an interactive educational game designed to enhance vocabulary, logical thinking, and language learning through engaging word puzzles. Built with a focus on simplicity and fun, the game challenges players to form words, solve riddles, and progress through multiple difficulty levels. The project demonstrates a clean user interface, smooth performance, and effective educational gamification — making it a perfect blend of entertainment and learning.`,
  },


  {
    img: "assets/images/project/project5.jpg",
    titleLink: "https://Dealnah.de/",
    websiteLink: "https://Dealnah.de/",
    websiteName: "Delivering personalized deals and exclusive discounts for a premium shopping experience.",
    title: "www.Dealnah.de",
    description: `At Dealnah.de, we value our customers as our top priority, offering tailored deals and exclusive discounts to ensure a premium shopping experience. Discover personalized offers that cater to your needs, delivering exceptional value in no time.`,
  },
  {
    img: "assets/images/project/project6.jpg",
    titleLink: "https://mohamedmesto.github.io/love-your-body2/",
    websiteLink: "https://github.com/MohamedMesto/love-your-body2",
    websiteName: "Love Your Body (Fasting Treatment) Documentation.",
    title: "To the Love Your Body Website",
    description: `"Love Your Body (Fasting Treatment)" a digital haven dedicated to the transformative power of fasting for holistic well-being. Our platform is a nurturing guide, offering insights into the profound connection between self-love and the art of intentional fasting. Explore evidence-backed fasting treatments, tailor-made to rejuvenate your body, mind, and spirit. Immerse yourself in a wealth of resources, from expert advice on fasting protocols to delicious and nutritious recipes that support your wellness journey.`,
  },
  {
  img: "assets/images/project/project7.jpg",
  titleLink: "https://loqta2050-v1-3-e08d6b94e893.herokuapp.com/",
  websiteLink: "https://github.com/MohamedMesto/Un2050.de_blog",
  websiteName: "UN2050 Blog — Modern Full-Stack Blogging Platform",
  title: "UN2050 Blog",
  description: `The UN2050 Blog (Loqta2050 v1.3) is a modern full-stack web application that serves as a blogging and content-sharing platform for the UN2050 digital community. Built with Node.js, Express, MongoDB, and React, it allows users to create, edit, and manage posts through a clean and intuitive interface. With responsive design, SEO optimization, and secure backend integration, it offers a professional and reliable space for sharing knowledge and insights.`,
},

  {
    img: "assets/images/project/project8.jpg",
    titleLink: "https://love-cake-0ca041934c7d.herokuapp.com/",
    websiteLink: "https://github.com/MohamedMesto/Ultimate_Battleship",
    websiteName: "Ultimate Battleship Documentation.",
    title: "Ultimate Battleship Game.",
    description: `Welcome to the classic game of Battleship! Battleship is a strategic naval combat game where players engage in a thrilling battle of wits on the high seas. Each player commands a fleet of ships hidden on a grid, aiming to strategically locate and sink the opponent's fleet first.`,
  },
  {
    img: "assets/images/project/project9.jpg",
    titleLink: "https://mohamedmesto.github.io/Love-CrossWords/",
    websiteLink: "https://github.com/MohamedMesto/Love-CrossWords",
    websiteName: "Love Cross Words (Think and play rationally forever) Documentation.",
    title: "To The Love-CrossWords Website.",
    description: `"Love Cross Words (Think and play rationally forever)" encourages mental stimulation, vocabulary growth, and cognitive flexibility through challenging and fun crossword puzzles.`,
  },
    {
    img: "assets/images/project/project10.jpg",
    titleLink: "https://vosonbilash.de/",
    websiteLink: "https://vosonbilash.de/",
    websiteName: "Connecting diverse customers to authentic, culturally fused cuisine in a warm and inviting atmosphere.",
    title: "www.vosonbilash.de",
    description: `Voson Bilash Kulturcafe & Restaurant serves a diverse clientele, attracting both locals and tourists with its unique blend of traditional and modern cuisine. Customers appreciate the warm, inviting atmosphere, exceptional service, and authentic flavors that reflect a fusion of cultures.`,
  },
    {
    img: "assets/images/project/project11.jpg",
    titleLink: "https://omarion.co/",
    websiteLink: "https://omarion.co/",
    websiteName: "Reliable electrical solutions for homeowners and small businesses.",
    title: "www.omarion.co",
    description: `Omarion serves homeowners and small businesses seeking reliable and efficient electrical solutions. Customers appreciate the company's expertise, timely service, and commitment to safety and quality.`,
  },
    {
    img: "assets/images/project/project12.jpg",
    titleLink: "https://github.com/aminjaber25/Passfinder",
    websiteLink: "https://github.com/aminjaber25/Passfinder",
    websiteName: "PassFinder: Custom Password Generator and Archive Manager Documentation.",
    title: "To The Passfinder App",
    description: `The program is a comprehensive tool that combines secure password generation with archive management capabilities. It provides extensive customization for creating passwords of various lengths and character compositions, ensuring security and flexibility.`,
  },
];

// Carousel Logic
let currentIndex = 0;
const container = document.querySelector(".projects-container");
const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

function renderProjects() {
  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);
  container.innerHTML = visibleProjects
    .map(
      (p) => `
      <div class="project">
        <h3>
          <a href="${p.titleLink}" target="_blank">
            <img src="${p.img}" alt="${p.title}">
            ${p.title}
          </a>
        </h3>
        <p class="website-name"><a href="${p.websiteLink}" target="_blank">${p.websiteName}</a></p>
        <p class="justified-text">${p.description}</p>
      </div>`
    )
    .join("");
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? projects.length - 3 : currentIndex - 3;
  renderProjects();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 3) % projects.length;
  renderProjects();
});

// Auto-rotate every 20 seconds
setInterval(() => {
  nextBtn.click();
}, 20000);

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", renderProjects);
