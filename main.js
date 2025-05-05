// Show the footer only when at the bottom of the page
console.log("JavaScript file loaded successfully.");

(function() {
    const footer = document.querySelector('.footer-glass');
    function toggleFooter() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        footer.style.transform = "translateY(0)";
      } else {
        footer.style.transform = "translateY(120%)";
      }
    }
    window.addEventListener('scroll', toggleFooter);
    window.addEventListener('resize', toggleFooter);
    window.addEventListener('DOMContentLoaded', toggleFooter);
  })();

  // Portfolio content

  // main.js

const niches = [
  {
    title: "Restaurant Websites",
    intro: "Modern, appetizing sites for restaurants and cafes.",
    demo: "https://demo.example.com/restaurant",
    img: "images/restaurant-thumb.jpg"
  },
  {
    title: "Fitness Trainers",
    intro: "Personal trainer and gym sites with booking features.",
    demo: "https://demo.example.com/fitness",
    img: "images/fitness-thumb.jpg"
  },
  {
    title: "E-commerce Stores",
    intro: "Beautiful, secure online shops for any product.",
    demo: "https://demo.example.com/ecommerce",
    img: "images/ecommerce-thumb.jpg"
  },
  {
    title: "Consultants & Coaches",
    intro: "Professional sites for consultants, coaches, and freelancers.",
    demo: "https://demo.example.com/consultant",
    img: "images/consultant-thumb.jpg"
  },
  {
    title: "Beauty & Wellness",
    intro: "Salons, spas, and wellness centers with booking and galleries.",
    demo: "https://demo.example.com/beauty",
    img: "images/beauty-thumb.jpg"
  },
  {
    title: "Construction & Trades",
    intro: "Showcase your work and get more leads for your business.",
    demo: "https://demo.example.com/construction",
    img: "images/construction-thumb.jpg"
  }
  // Add more niches as needed
];

const grid = document.getElementById('portfolioGrid');
niches.forEach(niche => {
  grid.innerHTML += `
    <div class="portfolio-card">
      <img src="${niche.img}" alt="${niche.title}">
      <h3>${niche.title}</h3>
      <p>${niche.intro}</p>
      <a href="${niche.demo}" class="demo-btn" target="_blank" rel="noopener">View Demo</a>
    </div>
  `;
});
