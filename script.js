const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const footerIntro = document.querySelector(".footer > div:first-child");

if (footerIntro && !footerIntro.querySelector(".footer-social")) {
  const social = document.createElement("nav");
  social.className = "footer-social";
  social.setAttribute("aria-label", "Social media links");
  social.innerHTML = `
    <a href="https://www.facebook.com/profile.php?id=61573043893871" target="_blank" rel="noopener" aria-label="HJ Fence on Facebook">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.4 8.6V6.9c0-.8.5-1 1-1h1.5V3.2c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v1.6H8.2v3h2.5V21h3.1v-9.4h2.6l.4-3h-3.4z" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/chandler-xu-4507ba361/" target="_blank" rel="noopener" aria-label="HJ Fence on LinkedIn">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 8.9H3.5V21h3.1V8.9zM5 3a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5 3zm6.6 5.9h-3V21h3v-6c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21H19v-6.7c0-3.3-.7-5.8-4.5-5.8-1.8 0-3 1-3.5 1.9h-.1V8.9z" />
      </svg>
    </a>
    <a href="https://wa.me/8615202231235" target="_blank" rel="noopener" aria-label="HJ Fence on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.1 3a8.8 8.8 0 0 0-7.6 13.2L3.3 21l4.9-1.2A8.8 8.8 0 1 0 12.1 3zm0 2.8a6 6 0 0 1 5.1 9.1 6 6 0 0 1-7.1 2.1l-.5-.2-2.4.6.6-2.3-.3-.5a6 6 0 0 1 4.6-8.8zm-2.4 3c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.5c.1.2 1.7 2.7 4.2 3.6 2.1.8 2.5.5 3 .5.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.3-1.8-.9c-.3-.1-.5-.2-.7.2l-.8 1c-.2.2-.4.2-.7.1-.4-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.4-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-.8-1.9c-.2-.4-.4-.4-.7-.4h-.6z" />
      </svg>
    </a>
  `;
  footerIntro.appendChild(social);
}

const footerContact = document.querySelector(".footer > div:last-child");

if (footerContact && !footerContact.classList.contains("footer-contact")) {
  footerContact.classList.add("footer-contact");
  const contactItems = footerContact.querySelectorAll("a, span");
  contactItems.forEach((item) => {
    const href = item instanceof HTMLAnchorElement ? item.getAttribute("href") || "" : "";
    const iconName = href.startsWith("https://wa.me/") ? "phone" : href.startsWith("mailto:") ? "mail" : "location";
    item.classList.add("footer-contact-item", `footer-contact-${iconName}`);
  });
}
