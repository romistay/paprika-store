const categories = [
  { icon: "🌭", title: "انواع سوسیس", subtitle: "طعم‌های خوشمزه و متنوع" },
  { icon: "🥩", title: "انواع کالباس", subtitle: "تازه و باکیفیت" },
  { icon: "🍔", title: "همبرگر", subtitle: "لذیذ و آماده طبخ" },
  { icon: "🌮", title: "هات‌داگ", subtitle: "انتخابی خوشمزه" },
];

const products = [
  {
    name: "کالباس",
    image: "/paprika-store/kalaas.jpeg",
    tag: "پرفروش",
  },
  {
    name: "سوسیس مخصوص کودکان",
    image: "/paprika-store/kids-sausage.jpeg",
    tag: "ویژه کودکان",
  },
  {
    name: "سوسیس",
    image: "/paprika-store/sausage.jpeg",
    tag: "محبوب",
  },
  {
    name: "همبرگر",
    image: "/paprika-store/hamburger.jpeg",
    tag: "پیشنهاد ویژه",
  },
];

export default function App() {
  return (
    <div className="paprika" dir="rtl">
      <header className="header">
        <a className="logo" href="#">
  <img src="/paprika-store/paprika-logo.jpeg" alt="PAPRIKA" />
</a>
        <nav>
          <a href="#">صفحه اصلی</a>
          <a href="#categories">دسته‌بندی محصولات</a>
          <a href="#products">فروشگاه</a>
          <a href="#about">درباره ما</a>
        </nav>
        <button className="cart">🛒 سبد خرید</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">طعم متفاوت، انتخاب خوشمزه</span>
            <h1>خوشمزه‌تر از همیشه با <span>پاپریکا!</span></h1>
            <p>دنیایی از طعم‌های خوشمزه سوسیس، کالباس، همبرگر و هات‌داگ در فروشگاه پاپریکا.</p>
            <a href="#products" className="hero-button">مشاهده محصولات ←</a>
          </div>
         <div className="hero-art">
  <img
    src="/paprika-store/products.jpeg"
    alt="محصولات پاپریکا"
  />
</div>
        </section>

        <section className="categories" id="categories">
          <div className="section-heading">
            <span>انتخاب خوشمزه تو</span>
            <h2>دسته‌بندی محصولات</h2>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <div className="category-card" key={item.title}>
                <span className="category-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="products" id="products">
          <div className="section-heading">
            <span>پیشنهادهای پاپریکا</span>
            <h2>محصولات محبوب</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <span className="product-tag">{product.tag}</span>
               <div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
                <h3>{product.name}</h3>
                <button>افزودن به سبد خرید</button>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>پاپریکا؛ انتخاب خوشمزه شما</h2>
          <p>تجربه خرید آسان و لذت‌بخش انواع فرآورده‌های گوشتی در یک فروشگاه آنلاین.</p>
        </section>
      </main>

      <footer>
        <h2>🌶️ PAPRIKA</h2>
        <p>طعم خوب، انتخاب خوب!</p>
        <small>تمام حقوق برای فروشگاه پاپریکا محفوظ است.</small>
      </footer>
    </div>
  );
}
