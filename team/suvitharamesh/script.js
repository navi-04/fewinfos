import siteData from "./data.js";

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Active navigation links based on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// CTA button handlers
document.querySelector(".primary-btn").addEventListener("click", () => {
  const cvUrl = "resume.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.querySelector(".secondary-btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Typing effect
const typingText = document.querySelector(".hero-content h1");
const originalText = typingText.textContent;
typingText.textContent = "";

function typeText() {
  let charIndex = 0;
  const typing = setInterval(() => {
    if (charIndex < originalText.length) {
      typingText.textContent += originalText.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typing);
    }
  }, 100);
}

// Typewriter effect for hero section
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.querySelector(".typewriter");
  const name = siteData.personalInfo.name;
  let charIndex = 0;

  function type() {
    if (charIndex < name.length) {
      typewriter.textContent += name.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    }
  }

  // Start typing animation
  type();
});

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
scrollBtn.className = "scroll-to-top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Page loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  typeText();

  // Animate stats counter
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.textContent);
    let count = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCount = () => {
      if (count < target) {
        count += increment;
        stat.textContent = Math.ceil(count) + "+";
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target + "+";
      }
    };
    updateCount();
  });
});

// Update hero section
document.querySelector(".hero-description").textContent =
  siteData.personalInfo.description;
document.querySelectorAll(".stat").forEach((stat, index) => {
  const statData = siteData.personalInfo.stats[index];
  stat.querySelector(".stat-number").textContent = statData.number + "+";
  stat.querySelector(".stat-label").textContent = statData.label;
});

// Update about section
document.querySelector(".about-paragraph").innerHTML =
  siteData.about.description;

// Update education section
const eduContent = document.querySelector(".education-content");
eduContent.innerHTML = siteData.education
  .map(
    (edu) => `
  <div class="edu-card" data-aos="fade-up">
    <div class="edu-icon"><i class="bx bxs-graduation"></i></div>
    <h3>${edu.degree}</h3>
    <p class="institution">${edu.institution}</p>
    <p class="year">${edu.year}</p>
    <p class="grade">${edu.grade}</p>
  </div>
`
  )
  .join("");

// Update experience section
const expTimeline = document.querySelector(".experience-timeline");
expTimeline.innerHTML = siteData.experience
  .map(
    (exp) => `
  <div class="exp-card" data-aos="fade-up">
    <div class="exp-icon"><i class="bx bx-code-block"></i></div>
    <div class="exp-content">
      <h3>${exp.title}</h3>
      <h4>${exp.company}</h4>
      <p class="exp-date">${exp.period}</p>
      <ul class="exp-details">
        ${exp.details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
    </div>
  </div>
`
  )
  .join("");

// Update skills section
const technicalSkills = document.querySelector(
  ".skill-category:first-child .skill-items"
);
const professionalSkills = document.querySelector(
  ".skill-category:last-child .skill-items"
);

technicalSkills.innerHTML = siteData.skills.technical
  .map(
    (skill) => `
  <div class="skill-item">
    <span>${skill.name}</span>
    <div class="progress-bar">
      <div class="progress" style="width: ${skill.level}%"></div>
    </div>
  </div>
`
  )
  .join("");

professionalSkills.innerHTML = siteData.skills.professional
  .map(
    (skill) => `
  <div class="skill-item">
    <span>${skill.name}</span>
    <div class="progress-bar">
      <div class="progress" style="width: ${skill.level}%"></div>
    </div>
  </div>
`
  )
  .join("");

// Update projects section
const projectsGrid = document.querySelector(".projects-grid");
projectsGrid.innerHTML = siteData.projects
  .map(
    (project) => `
  <div class="project-card" data-aos="fade-up">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tech">
      ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
    </div>
    <div class="project-links">
      <a href="${project.links.github}"><i class="bx bxl-github"></i></a>
      <a href="${project.links.live}"><i class="bx bx-link-external"></i></a>
    </div>
  </div>
`
  )
  .join("");

// Update certifications section
const certWrapper = document.querySelector(".cert-wrapper");
certWrapper.innerHTML = siteData.certifications
  .map(
    (cert) => `
  <div class="cert-card">
    <div class="cert-icon"><i class="bx ${cert.icon}"></i></div>
    <h3>${cert.title}</h3>
    <p>${cert.subtitle}</p>
    <span class="issuer">${cert.issuer}</span>
    ${cert.details ? `<span class="cert-details">${cert.details}</span>` : ""}
    <span class="date">${cert.date}</span>
  </div>
`
  )
  .join("");

// Update contact info
const contactInfo = document.querySelector(".contact-info");
contactInfo.innerHTML = `
  <p><i class="bx bx-phone"></i> ${siteData.personalInfo.contact.phone}</p>
  <p><i class="bx bx-envelope"></i> ${siteData.personalInfo.contact.email}</p>
  <p><i class="bx bx-map"></i> ${siteData.personalInfo.contact.location}</p>
`;

// Update social links
const socialLinksContainer = document.querySelector(".social-links");
socialLinksContainer.innerHTML = `
  <a href="${siteData.personalInfo.socialLinks.github}"><i class="bx bxl-github"></i></a>
  <a href="${siteData.personalInfo.socialLinks.linkedin}"><i class="bx bxl-linkedin"></i></a>
  <a href="${siteData.personalInfo.socialLinks.twitter}"><i class="bx bxl-twitter"></i></a>
  <a href="${siteData.personalInfo.socialLinks.instagram}"><i class="bx bxl-instagram"></i></a>
`;

// Certification horizontal scroll
document.addEventListener("DOMContentLoaded", () => {
  const certContainer = document.querySelector(".cert-container");
  const certPrevBtn = document.querySelector(".prev");
  const certNextBtn = document.querySelector(".next");

  if (certPrevBtn && certNextBtn && certContainer) {
    certPrevBtn.addEventListener("click", () => {
      certContainer.scrollBy({
        left: -330,
        behavior: "smooth",
      });
    });

    certNextBtn.addEventListener("click", () => {
      certContainer.scrollBy({
        left: 330,
        behavior: "smooth",
      });
    });
  }
});
