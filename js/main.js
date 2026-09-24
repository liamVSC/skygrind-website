(() => {
  const config = window.SKYGRIND_CONFIG || {};

  document.querySelectorAll("[data-server-ip]").forEach((el) => {
    el.textContent = config.SERVER_IP || "play.skygrind.online";
  });

  document.querySelectorAll("[data-copy-server]").forEach((button) => {
    const value = config.SERVER_IP || "play.skygrind.online";
    button.dataset.copy = value;
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy || "";
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "COPIED!";
        setTimeout(() => { button.textContent = original; }, 1400);
      } catch {
        button.textContent = "COPY FAILED";
        setTimeout(() => { button.textContent = original; }, 1400);
      }
    });
  });

  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll("[data-discord-link]").forEach((a) => {
    if (config.DISCORD_URL) a.href = config.DISCORD_URL;
  });

  document.querySelectorAll("[data-store-link]").forEach((a) => {
    if (config.STORE_URL) {
      a.href = config.STORE_URL;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const status = document.querySelector("[data-server-status]");
  if (status) {
    status.textContent = config.API_BASE_URL ? "CHECKING SERVER…" : "STATUS COMING SOON";
    status.classList.add("status-pending");
  }
})();