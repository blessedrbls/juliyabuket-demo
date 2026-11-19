/*
 * Каталог букетів Juliya Buket.
 * Щоб змінити асортимент — редагуйте цей масив.
 *
 * Поля:
 *   photo    — шлях до фото в папці images/ (якщо файлу немає, показується заглушка)
 *   name     — назва букета
 *   price    — ціна в гривнях (число)
 *   category — одна з: "do1000", "1000-2000", "2000-3000", "3000-5000", "kulky"
 *              (для букетів можна не вказувати — категорія визначиться за ціною)
 */
const BOUQUETS = [
  { photo: "images/750.jpg",  name: "Ромашкова ніжність",      price: 750,  category: "do1000" },
  { photo: "images/890.jpg",  name: "Тюльпани в крафті",       price: 890,  category: "do1000" },
  { photo: "images/950.jpg",  name: "Мініатюра з еустомою",    price: 950,  category: "do1000" },

  { photo: "images/1250.jpg", name: "Рожевий світанок",        price: 1250, category: "1000-2000" },
  { photo: "images/1450.jpg", name: "Півонієві троянди",       price: 1450, category: "1000-2000" },
  { photo: "images/1800.jpg", name: "Весняний настрій",        price: 1800, category: "1000-2000" },

  { photo: "images/2200.jpg", name: "Кремова класика",         price: 2200, category: "2000-3000" },
  { photo: "images/2500.jpg", name: "Бордо з евкаліптом",      price: 2500, category: "2000-3000" },
  { photo: "images/2900.jpg", name: "Капелюшна коробка",       price: 2900, category: "2000-3000" },

  { photo: "images/3400.jpg", name: "51 троянда",              price: 3400, category: "3000-5000" },
  { photo: "images/3900.jpg", name: "Авторський «Оболонь»",    price: 3900, category: "3000-5000" },
  { photo: "images/4700.jpg", name: "Розкішні півонії",        price: 4700, category: "3000-5000" },

  { photo: "images/kulky-serdtsia.jpg",  name: "Фонтан із сердець",       price: 950,  category: "kulky" },
  { photo: "images/kulky-den-narodz.jpg", name: "Кульки «З днем народження»", price: 1350, category: "kulky" },
  { photo: "images/kulky-tsyfry.jpg",    name: "Фольговані цифри + гелієві", price: 1700, category: "kulky" }
];

const CATEGORIES = [
  { id: "all",       label: "Всі" },
  { id: "do1000",    label: "До 1000 ₴" },
  { id: "1000-2000", label: "1000–2000 ₴" },
  { id: "2000-3000", label: "2000–3000 ₴" },
  { id: "3000-5000", label: "3000–5000 ₴" },
  { id: "kulky",     label: "Кульки" }
];
