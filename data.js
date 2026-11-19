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
  { photo: "images/buket-01.jpg", name: "Мила дрібничка", price: 850, category: "do1000" },
  { photo: "images/buket-02.jpg", name: "Солодка вата", price: 950, category: "do1000" },
  { photo: "images/buket-03.jpg", name: "Рожевий ранок", price: 990, category: "do1000" },

  { photo: "images/buket-04.jpg", name: "Класика: 11 троянд", price: 1050, category: "1000-2000" },
  { photo: "images/buket-05.jpg", name: "15 червоних троянд", price: 1100, category: "1000-2000" },
  { photo: "images/buket-06.jpg", name: "Сніжок", price: 1100, category: "1000-2000" },
  { photo: "images/buket-07.jpg", name: "Фісташковий", price: 1200, category: "1000-2000" },
  { photo: "images/buket-08.jpg", name: "Хризантеми з ведмедиком", price: 1250, category: "1000-2000" },
  { photo: "images/buket-09.jpg", name: "Біла еустома", price: 1300, category: "1000-2000" },
  { photo: "images/buket-10.jpg", name: "М'ятний букет", price: 1300, category: "1000-2000" },
  { photo: "images/buket-11.jpg", name: "Ваніль", price: 1350, category: "1000-2000" },
  { photo: "images/buket-12.jpg", name: "Пастельний сад", price: 1400, category: "1000-2000" },
  { photo: "images/buket-13.jpg", name: "Персиковий шепіт", price: 1400, category: "1000-2000" },
  { photo: "images/buket-14.jpg", name: "Полум'яний мікс", price: 1450, category: "1000-2000" },
  { photo: "images/buket-15.jpg", name: "Святковий червоний", price: 1500, category: "1000-2000" },
  { photo: "images/buket-16.jpg", name: "Крем-брюле", price: 1500, category: "1000-2000" },
  { photo: "images/buket-17.jpg", name: "Рожевий зефір", price: 1600, category: "1000-2000" },
  { photo: "images/buket-18.jpg", name: "Пудровий вечір", price: 1600, category: "1000-2000" },
  { photo: "images/buket-19.jpg", name: "Блакитна мрія", price: 1700, category: "1000-2000" },
  { photo: "images/buket-20.jpg", name: "Білі піоновидні троянди", price: 1700, category: "1000-2000" },
  { photo: "images/buket-21.jpg", name: "Червоно-білі троянди", price: 1800, category: "1000-2000" },
  { photo: "images/buket-22.jpg", name: "Ніжна гортензія", price: 1900, category: "1000-2000" },
  { photo: "images/buket-23.jpg", name: "25 малинових троянд", price: 1900, category: "1000-2000" },
  { photo: "images/buket-24.jpg", name: "Червоні піоновидні троянди", price: 1900, category: "1000-2000" },

  { photo: "images/buket-25.jpg", name: "Серце з троянд", price: 2000, category: "2000-3000" },
  { photo: "images/buket-26.jpg", name: "Яскраве зізнання", price: 2100, category: "2000-3000" },
  { photo: "images/buket-27.jpg", name: "Лілієвий настрій", price: 2200, category: "2000-3000" },
  { photo: "images/buket-28.jpg", name: "Гортензія з персиковими трояндами", price: 2200, category: "2000-3000" },
  { photo: "images/buket-29.jpg", name: "Червоне і персик у коробці", price: 2300, category: "2000-3000" },
  { photo: "images/buket-30.jpg", name: "Кущові троянди мікс", price: 2300, category: "2000-3000" },
  { photo: "images/buket-31.jpg", name: "Хмара гвоздик", price: 2400, category: "2000-3000" },
  { photo: "images/buket-32.jpg", name: "31 червона троянда", price: 2500, category: "2000-3000" },
  { photo: "images/buket-33.jpg", name: "Бордо в капелюшній коробці", price: 2600, category: "2000-3000" },
  { photo: "images/buket-34.jpg", name: "Ягідний мікс", price: 2600, category: "2000-3000" },
  { photo: "images/buket-35.jpg", name: "Сумочка з гортензією", price: 2700, category: "2000-3000" },
  { photo: "images/buket-36.jpg", name: "Червоний оксамит", price: 2700, category: "2000-3000" },
  { photo: "images/buket-37.jpg", name: "Троянди з білою орхідеєю", price: 2800, category: "2000-3000" },
  { photo: "images/buket-38.jpg", name: "Весняний лайм", price: 2900, category: "2000-3000" },

  { photo: "images/buket-39.jpg", name: "Малиновий захват", price: 3000, category: "3000-5000" },
  { photo: "images/buket-40.jpg", name: "Бордо з орхідеєю", price: 3100, category: "3000-5000" },
  { photo: "images/buket-41.jpg", name: "Лавандовий шепіт", price: 3200, category: "3000-5000" },
  { photo: "images/buket-42.jpg", name: "Перлинна коробка", price: 3300, category: "3000-5000" },
  { photo: "images/buket-43.jpg", name: "Коробка «Марципан»", price: 3400, category: "3000-5000" },
  { photo: "images/buket-44.jpg", name: "Кошик ніжності", price: 3500, category: "3000-5000" },
  { photo: "images/buket-45.jpg", name: "Блакитні орхідеї", price: 3600, category: "3000-5000" },
  { photo: "images/buket-46.jpg", name: "Ліловий шик у коробці", price: 3700, category: "3000-5000" },
  { photo: "images/buket-47.jpg", name: "Персиковий захват", price: 3800, category: "3000-5000" },
  { photo: "images/buket-48.jpg", name: "Кущова троянда «Бланш»", price: 3900, category: "3000-5000" },
  { photo: "images/buket-49.jpg", name: "Кошик «Прованс»", price: 4100, category: "3000-5000" },
  { photo: "images/buket-50.jpg", name: "51 біла троянда", price: 4200, category: "3000-5000" },
  { photo: "images/buket-51.jpg", name: "Небесна гортензія", price: 4500, category: "3000-5000" },
  { photo: "images/buket-52.jpg", name: "Великий білий кошик", price: 4800, category: "3000-5000" },

  // Фото кульок ще немає — показується заглушка. Додайте файли з цими назвами в images/.
  { photo: "images/kulky-serdtsia.jpg",   name: "Фонтан із сердець",          price: 950,  category: "kulky" },
  { photo: "images/kulky-den-narodz.jpg", name: "Кульки «З днем народження»", price: 1350, category: "kulky" },
  { photo: "images/kulky-tsyfry.jpg",     name: "Фольговані цифри + гелієві", price: 1700, category: "kulky" }
];

const CATEGORIES = [
  { id: "all",       label: "Всі" },
  { id: "do1000",    label: "До 1000 ₴" },
  { id: "1000-2000", label: "1000–2000 ₴" },
  { id: "2000-3000", label: "2000–3000 ₴" },
  { id: "3000-5000", label: "3000–5000 ₴" },
  { id: "kulky",     label: "Кульки" }
];
