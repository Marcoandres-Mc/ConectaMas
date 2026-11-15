document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNav();
  initHobbyChips();
  initMap();
  initFaq();
  initSignupModal();
  initContactForm();
});

function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    btn.firstElementChild.className = open
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };

  btn.addEventListener("click", () =>
    setOpen(!menu.classList.contains("is-open")),
  );
  menu
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function initActiveNav() {
  const links = [...document.querySelectorAll(".menu__link")];
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute("href") === "#" + entry.target.id;
          l.classList.toggle("is-active", active);
          if (active) l.setAttribute("aria-current", "true");
          else l.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}

function initHobbyChips() {
  const chips = [...document.querySelectorAll("#hobbyChips .chip")];
  const cards = [...document.querySelectorAll("#communityGrid .community")];
  const result = document.getElementById("chipResult");
  if (!chips.length) return;

  const select = (chip) => {
    chips.forEach((c) => {
      const on = c === chip;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });

    const hobby = chip.dataset.hobby;
    let matches = 0;
    cards.forEach((card) => {
      const match = card.dataset.hobby === hobby;
      card.classList.toggle("is-match", match);
      card.classList.toggle("is-dimmed", !match);
      if (match) matches++;
    });

    result.textContent = matches
      ? `Mostrando ${matches} comunidad${matches > 1 ? "es" : ""} de ${chip.textContent.trim()}.`
      : `Pronto habrá comunidades de ${chip.textContent.trim()} cerca de ti.`;
    if (!matches) cards.forEach((c) => c.classList.remove("is-dimmed"));
  };

  chips.forEach((chip) => chip.addEventListener("click", () => select(chip)));
  select(chips[0]);
}

function initMap() {
  const pins = [...document.querySelectorAll("#mapBox button.pin")];
  const title = document.getElementById("mapCardTitle");
  const info = document.getElementById("mapCardInfo");
  if (!pins.length) return;

  const show = (pin) => {
    pins.forEach((p) => p.classList.toggle("is-active", p === pin));
    title.textContent = pin.dataset.title;
    info.textContent = pin.dataset.info;
  };

  pins.forEach((pin) => pin.addEventListener("click", () => show(pin)));
  show(pins[2]);
}

function initFaq() {
  document.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setError(input, errorEl, message) {
  const field = input.closest(".field");
  field.classList.toggle("has-error", Boolean(message));
  errorEl.textContent = message || "";
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) input.setAttribute("aria-describedby", errorEl.id);
  return !message;
}

function initSignupModal() {
  const modal = document.getElementById("signupModal");
  const form = document.getElementById("signupForm");
  const ok = document.getElementById("signupOk");
  if (!modal || typeof modal.showModal !== "function") return;

  const $ = (id) => document.getElementById(id);

  document.querySelectorAll("[data-open-signup]").forEach((btn) =>
    btn.addEventListener("click", () => {
      ok.hidden = true;
      modal.showModal();
      $("sName").focus();
    }),
  );
  $("signupClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("sName"),
      email = $("sEmail"),
      pass = $("sPass"),
      pass2 = $("sPass2");

    const results = [
      setError(
        name,
        $("sNameErr"),
        name.value.trim().length < 3 ? "Escribe tu nombre completo." : "",
      ),
      setError(
        email,
        $("sEmailErr"),
        !EMAIL_RE.test(email.value.trim())
          ? "Ingresa un correo válido, por ejemplo nombre@correo.com."
          : "",
      ),
      setError(
        pass,
        $("sPassErr"),
        pass.value.length < 8 ? "Usa al menos 8 caracteres." : "",
      ),
      setError(
        pass2,
        $("sPass2Err"),
        pass2.value !== pass.value || !pass2.value
          ? "Las contraseñas no coinciden."
          : "",
      ),
    ];

    if (results.every(Boolean)) {
      ok.hidden = false;
      form.reset();
      setTimeout(() => modal.close(), 1600);
    }
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const ok = document.getElementById("contactOk");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName");
    const email = document.getElementById("cEmail");
    const msg = document.getElementById("cMsg");

    const results = [
      setError(
        name,
        document.getElementById("cNameErr"),
        name.value.trim().length < 2 ? "Cuéntanos cómo te llamas." : "",
      ),
      setError(
        email,
        document.getElementById("cEmailErr"),
        !EMAIL_RE.test(email.value.trim())
          ? "Ingresa un correo válido, por ejemplo nombre@correo.com."
          : "",
      ),
      setError(
        msg,
        document.getElementById("cMsgErr"),
        msg.value.trim().length < 10
          ? "Escribe un mensaje de al menos 10 caracteres."
          : "",
      ),
    ];

    ok.hidden = !results.every(Boolean);
    if (!ok.hidden) form.reset();
  });
}
