(() => {
  const config = window.SKYGRIND_CONFIG || {};
  const serverIp = config.SERVER_IP || "play.skygrind.online";
  const serverPort = config.SERVER_PORT_JAVA || "25489";

  document.querySelectorAll("[data-server-ip]").forEach((el) => {
    el.textContent = serverIp;
  });

  document.querySelectorAll("[data-server-port]").forEach((el) => {
    el.textContent = serverPort;
  });

  document.querySelectorAll("[data-copy-server]").forEach((button) => {
    button.dataset.copy = serverIp;
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
})();