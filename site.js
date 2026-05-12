// ============================================================
// shared icon SVGs + tweaks panel + small helpers
// ============================================================

// inline SVG icons (so they inherit currentColor)
const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.06c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.13v3.16c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>`,
  devto: `<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="47" height="31" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="24" y="22" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="14" letter-spacing="-0.5" fill="currentColor">DEV</text></svg>`,
  scholar: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/></svg>`,
};

// social links data — used on all pages
const SOCIALS = [
  { id: "linkedin", url: "https://www.linkedin.com/in/adithya-pillai16/", label: "linkedin" },
  { id: "github",   url: "https://github.com/", label: "github" },
  { id: "devto",    url: "https://dev.to/", label: "dev.to" },
  { id: "scholar",  url: "https://scholar.google.co.in/citations?user=WTX6An8AAAAJ&hl=en", label: "google scholar" },
];

function renderSocials(targetSel) {
  const target = document.querySelector(targetSel);
  if (!target) return;
  target.innerHTML = SOCIALS.map(s => `
    <a class="social-link" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}">
      ${ICONS[s.id]}
    </a>
  `).join("");
}

// nav data
const NAV = [
  { label: "experience",          href: "pages/experience.html",   key: "experience" },
  { label: "education",           href: "pages/education.html",    key: "education" },
  { label: "blogs & publications",href: "pages/blogs.html",        key: "blogs" },
  { label: "projects",            href: "pages/projects.html",     key: "projects" },
  { label: "other",               href: "pages/other.html",        key: "other" },
  { label: "resume",              href: "pages/resume.html",       key: "resume" },
  { label: "cv",                  href: "pages/cv.html",           key: "cv" },
];

function renderNav(targetSel, opts = {}) {
  const { prefix = "", current = null } = opts;
  const target = document.querySelector(targetSel);
  if (!target) return;
  target.innerHTML = NAV.map(item => `
    <li>
      <a href="${prefix}${item.href}" class="${current === item.key ? "is-current" : ""}">${item.label}</a>
    </li>
  `).join("");
}

// ============================================================
// tweaks panel (typography swap)
// ============================================================
const TYPE_OPTIONS = [
  { id: "serif", label: "editorial serif", subtitle: "newsreader + manrope" },
  { id: "mono",  label: "mono + sans",      subtitle: "jetbrains mono + manrope" },
  { id: "sans",  label: "humanist sans",    subtitle: "work sans" },
];

function initTweaks() {
  const stored = localStorage.getItem("typeChoice") || "serif";
  document.body.setAttribute("data-type", stored);

  // listen for host messages (edit mode)
  let panelOpen = false;
  const panel = document.getElementById("tweaks-panel");
  if (!panel) return;

  // render panel content
  panel.innerHTML = `
    <div class="tweaks-header">
      <h3 class="tweaks-title">tweaks</h3>
      <button class="tweaks-close" aria-label="close">×</button>
    </div>
    <div class="tweaks-group-label">typography</div>
    <div class="tweaks-radio" id="type-radio">
      ${TYPE_OPTIONS.map(opt => `
        <label data-id="${opt.id}">
          <input type="radio" name="type" value="${opt.id}" ${opt.id === stored ? "checked" : ""}/>
          <span>
            <div>${opt.label}</div>
            <div style="font-size:0.72rem;opacity:0.6;margin-top:1px;">${opt.subtitle}</div>
          </span>
        </label>
      `).join("")}
    </div>
  `;

  // mark active
  const syncActive = () => {
    panel.querySelectorAll("[data-id]").forEach(el => {
      el.classList.toggle("is-active", el.dataset.id === document.body.getAttribute("data-type"));
    });
  };
  syncActive();

  panel.querySelectorAll("input[name='type']").forEach(inp => {
    inp.addEventListener("change", e => {
      const v = e.target.value;
      document.body.setAttribute("data-type", v);
      localStorage.setItem("typeChoice", v);
      syncActive();
    });
  });

  // open via floating button OR host edit mode
  const openBtn = document.getElementById("tweaks-open-btn");
  const open = () => { panel.classList.add("is-open"); panelOpen = true; if (openBtn) openBtn.style.display = "none"; };
  const close = () => {
    panel.classList.remove("is-open");
    panelOpen = false;
    if (openBtn) openBtn.style.display = "";
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
  };

  if (openBtn) openBtn.addEventListener("click", open);
  panel.querySelector(".tweaks-close").addEventListener("click", close);

  // host integration
  window.addEventListener("message", (e) => {
    const d = e.data;
    if (!d || !d.type) return;
    if (d.type === "__activate_edit_mode") open();
    if (d.type === "__deactivate_edit_mode") close();
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // apply stored type on every page that includes this file
  const stored = localStorage.getItem("typeChoice") || "serif";
  if (!document.body.getAttribute("data-type")) {
    document.body.setAttribute("data-type", stored);
  }
});
