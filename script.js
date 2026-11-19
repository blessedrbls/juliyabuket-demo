(function () {
  "use strict";

  const PRICE_RANGES = {
    "do1000": [0, 999],
    "1000-2000": [1000, 1999],
    "2000-3000": [2000, 2999],
    "3000-5000": [3000, 5000]
  };

  // Категорія за ціною, якщо в data.js її не вказано
  function categoryOf(item) {
    if (item.category) return item.category;
    for (const id in PRICE_RANGES) {
      const [min, max] = PRICE_RANGES[id];
      if (item.price >= min && item.price <= max) return id;
    }
    return "3000-5000";
  }

  const items = BOUQUETS.map((b, i) => Object.assign({ id: i }, b, { category: categoryOf(b) }));
  const formatPrice = (p) => p.toLocaleString("uk-UA").replace(/ /g, " ") + " ₴";

  const FLOWER_SVG =
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M32 34v24M32 46c-6 0-10-4-11-9 5 0 9 3 11 9zM32 50c5 0 9-4 10-8-5 0-8 3-10 8z"/>' +
    '<path d="M32 34c-7 0-12-5-12-12 0-3 1-6 3-8 2 4 5 6 9 6s7-2 9-6c2 2 3 5 3 8 0 7-5 12-12 12z"/>' +
    '<path d="M24 15c1-5 4-9 8-11 4 2 7 6 8 11"/></svg>';

  // ---------- Каталог ----------
  const grid = document.getElementById("grid");
  const emptyMsg = document.querySelector(".grid__empty");
  const filtersEl = document.querySelector(".filters");

  const BALLOON_SVG =
    '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<ellipse cx="26" cy="22" rx="11" ry="13"/><ellipse cx="41" cy="27" rx="10" ry="12"/>' +
    '<path d="M26 35l-2 3h4zM41 39l-2 3h4zM26 38c0 8 6 10 6 20M41 42c0 6-6 9-9 16"/></svg>';

  function placeholder(item) {
    const d = document.createElement("div");
    d.className = "card__placeholder";
    d.innerHTML = (item.category === "kulky" ? BALLOON_SVG : FLOWER_SVG) + "<small>фото незабаром</small>";
    d.setAttribute("aria-label", item.name);
    return d;
  }

  const PAGE = 12;
  const moreBtn = document.getElementById("showMore");
  let currentList = [];
  let shown = 0;

  function renderCards(filter) {
    grid.innerHTML = "";
    currentList = filter === "all" ? items : items.filter((b) => b.category === filter);
    shown = 0;
    emptyMsg.hidden = currentList.length > 0;
    renderMore();
  }

  function renderMore() {
    const batch = currentList.slice(shown, shown + PAGE);
    shown += batch.length;
    moreBtn.hidden = shown >= currentList.length;
    moreBtn.textContent = "Показати ще (" + (currentList.length - shown) + ")";
    batch.forEach((b, idx) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.animationDelay = Math.min(idx * 40, 300) + "ms";

      const media = document.createElement("div");
      media.className = "card__media";
      const img = new Image();
      img.alt = b.name;
      img.loading = "lazy";
      img.decoding = "async";
      img.onerror = () => { img.remove(); media.appendChild(placeholder(b)); };
      img.src = b.photo;
      media.appendChild(img);

      const body = document.createElement("div");
      body.className = "card__body";
      body.innerHTML =
        '<h3 class="card__name"></h3>' +
        '<div class="card__price"></div>' +
        '<p class="card__note">ціна на момент публікації</p>' +
        '<button class="btn btn--primary" type="button">Замовити</button>';
      body.querySelector(".card__name").textContent = b.name;
      body.querySelector(".card__price").textContent = formatPrice(b.price);
      body.querySelector("button").addEventListener("click", () => openOrder(b.id));

      card.append(media, body);
      grid.appendChild(card);
    });
  }
  moreBtn.addEventListener("click", renderMore);

  CATEGORIES.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter" + (i === 0 ? " is-active" : "");
    btn.textContent = c.label;
    btn.dataset.filter = c.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter").forEach((f) => {
        f.classList.toggle("is-active", f === btn);
        f.setAttribute("aria-selected", f === btn ? "true" : "false");
      });
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      renderCards(c.id);
    });
    filtersEl.appendChild(btn);
  });
  renderCards("all");

  // ---------- Плаваюча кнопка «Замовити» (телефони) ----------
  // Ховаємо її, коли на екрані вже є своя кнопка замовлення: у hero та в контактах/футері
  const fab = document.querySelector(".fab");
  const zones = [".hero", "#contacts", ".footer"].map((s) => document.querySelector(s)).filter(Boolean);
  function updateFab() {
    const vh = window.innerHeight;
    const zoneOnScreen = zones.some((z) => {
      const r = z.getBoundingClientRect();
      return r.bottom > 0 && r.top < vh;
    });
    fab.classList.toggle("is-visible", !zoneOnScreen);
  }
  if (fab) {
    window.addEventListener("scroll", updateFab, { passive: true });
    window.addEventListener("resize", updateFab);
    updateFab();
  }

  // ---------- Магазини і карта ----------
  const mapFrame = document.getElementById("mapFrame");
  document.querySelectorAll(".location").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".location").forEach((b) => b.classList.toggle("is-active", b === btn));
      mapFrame.src = "https://www.google.com/maps?q=" + encodeURIComponent(btn.dataset.q) + "&hl=uk&z=16&output=embed";
      // На телефоні карта під списком — прокручуємо до неї
      if (window.matchMedia("(max-width: 959px)").matches) {
        mapFrame.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // ---------- Форма замовлення ----------
  const modal = document.getElementById("orderModal");
  const form = document.getElementById("orderForm");
  const success = document.getElementById("orderSuccess");
  const select = document.getElementById("bouquetSelect");
  const addressField = document.getElementById("addressField");
  const addressInput = form.elements.address;
  const pickupField = document.getElementById("pickupField");
  let lastFocus = null;

  // Список букетів у селекті, згрупований за категоріями
  const emptyOpt = new Option("Оберу разом із флористом", "");
  select.appendChild(emptyOpt);
  CATEGORIES.filter((c) => c.id !== "all").forEach((c) => {
    const group = document.createElement("optgroup");
    group.label = c.label;
    items.filter((b) => b.category === c.id).forEach((b) => {
      group.appendChild(new Option(b.name + " — " + formatPrice(b.price), String(b.id)));
    });
    if (group.children.length) select.appendChild(group);
  });
  select.required = false;

  function todayISO() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function openOrder(bouquetId) {
    lastFocus = document.activeElement;
    form.reset();
    form.querySelectorAll(".is-invalid").forEach((f) => f.classList.remove("is-invalid"));
    togglePickup();
    select.value = bouquetId != null ? String(bouquetId) : "";
    form.elements.date.min = todayISO();
    form.elements.date.value = todayISO();
    form.hidden = false;
    success.hidden = true;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    modal.querySelector(".modal__dialog").scrollTop = 0;
    setTimeout(() => form.elements.name.focus({ preventScroll: true }), 50);
  }

  function closeOrder() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function togglePickup() {
    const pickup = form.elements.delivery.value === "pickup";
    addressField.hidden = pickup;
    addressInput.required = !pickup;
    pickupField.hidden = !pickup;
  }

  document.querySelectorAll("[data-order]").forEach((b) => b.addEventListener("click", () => openOrder(null)));
  modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeOrder));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeOrder(); });
  form.querySelectorAll('input[name="delivery"]').forEach((r) => r.addEventListener("change", togglePickup));
  form.addEventListener("input", (e) => {
    const f = e.target.closest(".field");
    if (f) f.classList.remove("is-invalid");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("input[required]").forEach((input) => {
      const field = input.closest(".field");
      let ok = input.value.trim() !== "";
      if (ok && input.name === "phone") ok = input.value.replace(/\D/g, "").length >= 10;
      field.classList.toggle("is-invalid", !ok);
      if (!ok && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    // Демо: дані нікуди не надсилаються
    const data = Object.fromEntries(new FormData(form));
    const chosen = items.find((b) => String(b.id) === data.bouquet);
    data.bouquet = chosen ? chosen.name : "на вибір флориста";
    console.log("Демо-заявка:", data);

    form.hidden = true;
    success.hidden = false;
    success.querySelector("button").focus();
  });
})();
