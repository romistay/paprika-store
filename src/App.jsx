import React from "react";
const categories = [
  { icon: "🌭", title: "انواع سوسیس", subtitle: "طعم‌های خوشمزه و متنوع" },
  { icon: "🥩", title: "انواع کالباس", subtitle: "تازه و باکیفیت" },
  { icon: "🍔", title: "همبرگر", subtitle: "لذیذ و آماده طبخ" },
  { icon: "🌮", title: "هات‌داگ", subtitle: "انتخابی خوشمزه" },
  { icon: "🥪", title: "ساندویچ سرد", subtitle: "ساندویچ‌های تازه و خوشمزه" },
];





const products = [
  {
    id: 1,
    name: "سوسیس",
    image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.06%281%29.jpeg",
    description: "سوسیس خوش‌طعم و باکیفیت پاپریکا",
  },
  {
    id: 2,
    name: "سوسیس مخصوص کودکان",
    image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.07%281%29.jpeg",
    description: "محصولی خوش‌طعم برای سلیقه کودکان",
  },
  {
    id: 3,
    name: "کالباس",
    image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.08%281%29.jpeg",
    description: "کالباس خوش‌طعم پاپریکا",
  },
  {
    id: 4,
    name: "همبرگر",
    image: "/paprika-store/topimage-classic-hamburger-2019m04-800x534-curiosa-min.jpg",
    description: "همبرگر خوش‌طعم پاپریکا",
  },
    {
    id: 5,
    name: "ساندویچ سرد",
    image: "/paprika-store/images.jpg",
    description: "ساندویچ سرد خوشمزه و تازه پاپریکا",
  },
];


const sandwichFlavors = [
  "مارتادلا",
  "مارتادلا ویژه",
  "مرغ ۹۰٪",
  "گوشت ۹۰٪",
  "بره",
  "پیتزایی",
  "چیکن رویال",
  "کرات",
  "میکس",
  "مرغ و قارچ",
  "سبزیجات",
  "سوئدی",
  "پپرونی",
];

const sandwichWeights = [
  "۱۲۰ گرم",
  "۱۵۰ گرم",
  "۲۰۰ گرم",
  "۳۰۰ گرم",
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [selectedFlavor, setSelectedFlavor] = React.useState("");
const [selectedWeight, setSelectedWeight] = React.useState("");
  const [cart, setCart] = React.useState([]);
const [isCartOpen, setIsCartOpen] = React.useState(false);
const [quantity, setQuantity] = React.useState(1);
const addToCart = () => {
  if (selectedProduct.id === 5 && (!selectedFlavor || !selectedWeight)) {
    alert("لطفاً طعم و وزن ساندویچ را انتخاب کنید.");
    return;
  }

  const newItem = {
    ...selectedProduct,
    flavor: selectedProduct.id === 5 ? selectedFlavor : "",
    weight: selectedProduct.id === 5 ? selectedWeight : "",
    quantity: quantity,
  };

  setCart((prevCart) => [...prevCart, newItem]);
  setIsCartOpen(true);
  setSelectedProduct(null);
  setSelectedFlavor("");
  setSelectedWeight("");
  setQuantity(1);
};
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
        {selectedProduct && (
  <section className="product-detail">
    <button onClick={() => setSelectedProduct(null)}>
      ← بازگشت به محصولات
    </button>

    <div className="product-detail-content">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
      />

     
<div>
  <h2>{selectedProduct.name}</h2>
  <p>{selectedProduct.description}</p>

  {selectedProduct.id === 5 && (
    <div className="sandwich-options">
      <h3>انتخاب طعم ساندویچ</h3>
      <select
        value={selectedFlavor}
        onChange={(e) => setSelectedFlavor(e.target.value)}
      >
        <option value="">طعم موردنظر را انتخاب کنید</option>
        {sandwichFlavors.map((flavor) => (
          <option key={flavor} value={flavor}>
            {flavor}
          </option>
        ))}
      </select>

      <h3>انتخاب وزن</h3>
      <select
        value={selectedWeight}
        onChange={(e) => setSelectedWeight(e.target.value)}
      >
        <option value="">وزن موردنظر را انتخاب کنید</option>
        {sandwichWeights.map((weight) => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>
    </div>
  )}
</div>
  </div>
</section>
)}
        {!selectedProduct && (
  <>
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
             <div
  className="product-card"
  key={product.id}
  onClick={() => setSelectedProduct(product)}
  style={{ cursor: "pointer" }}
>
               
               <div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
        </section>

               <section className="about" id="about">
          <h2>پاپریکا؛ انتخاب خوشمزه شما</h2>
          <p>تجربه خرید آسان و لذت‌بخش انواع فرآورده‌های گوشتی در یک فروشگاه آنلاین.</p>
        </section>
        </>
        )}
      </main>

      <footer>
        <h2>🌶️ PAPRIKA</h2>
        <p>طعم خوب، انتخاب خوب!</p>
        <small>تمام حقوق برای فروشگاه پاپریکا محفوظ است.</small>
      </footer>
    </div>
  );
}
