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
  {
    id: 6,
    name: "ساندویچ مخصوص پاپریکا (غول‌ویچ)",
    image: "/paprika-store/images.jpg",
    description: "ساندویچ ویژه دو نفره با ترکیب بره، مارتادلا، کرات و مرغ ۹۰٪",
    price: 1100000,
    weight: "۵۰۰ گرم",
    tag: "ویژه پاپریکا",
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

const sandwichPrices = {
  "مارتادلا": {
    "۱۲۰ گرم": 331000,
    "۱۵۰ گرم": 370000,
    "۲۰۰ گرم": 435000,
    "۳۰۰ گرم": 565000,
  },
  "مارتادلا ویژه": {
    "۱۲۰ گرم": 360000,
    "۱۵۰ گرم": 406000,
    "۲۰۰ گرم": 483000,
    "۳۰۰ گرم": 637000,
  },
  "مرغ ۹۰٪": {
    "۱۲۰ گرم": 369000,
    "۱۵۰ گرم": 418000,
    "۲۰۰ گرم": 499000,
    "۳۰۰ گرم": 661000,
  },
  "گوشت ۹۰٪": {
    "۱۲۰ گرم": 422000,
    "۱۵۰ گرم": 484000,
    "۲۰۰ گرم": 587000,
    "۳۰۰ گرم": 793000,
  },
  "بره": {
    "۱۲۰ گرم": 439000,
    "۱۵۰ گرم": 505000,
    "۲۰۰ گرم": 615000,
    "۳۰۰ گرم": 835000,
  },
  "پیتزایی": {
    "۱۲۰ گرم": 353000,
    "۱۵۰ گرم": 397000,
    "۲۰۰ گرم": 471000,
    "۳۰۰ گرم": 619000,
  },
  "چیکن رویال": {
    "۱۲۰ گرم": 357000,
    "۱۵۰ گرم": 403000,
    "۲۰۰ گرم": 479000,
    "۳۰۰ گرم": 631000,
  },
  "کرات": {
    "۱۲۰ گرم": 403000,
    "۱۵۰ گرم": 460000,
    "۲۰۰ گرم": 555000,
    "۳۰۰ گرم": 745000,
  },
  "میکس": {
    "۱۲۰ گرم": 374000,
    "۱۵۰ گرم": 424000,
    "۲۰۰ گرم": 507000,
    "۳۰۰ گرم": 673000,
  },
  "مرغ و قارچ": {
    "۱۲۰ گرم": 364000,
    "۱۵۰ گرم": 412000,
    "۲۰۰ گرم": 491000,
    "۳۰۰ گرم": 649000,
  },
  "سبزیجات": {
    "۱۲۰ گرم": 353000,
    "۱۵۰ گرم": 397000,
    "۲۰۰ گرم": 471000,
    "۳۰۰ گرم": 619000,
  },
  "سوئدی": {
    "۱۲۰ گرم": 353000,
    "۱۵۰ گرم": 397000,
    "۲۰۰ گرم": 471000,
    "۳۰۰ گرم": 619000,
  },
  "پپرونی": {
    "۱۲۰ گرم": 396000,
    "۱۵۰ گرم": 451000,
    "۲۰۰ گرم": 543000,
    "۳۰۰ گرم": 727000,
  },
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [selectedFlavor, setSelectedFlavor] = React.useState("");
const [selectedWeight, setSelectedWeight] = React.useState("");
  const [cart, setCart] = React.useState([]);
const [isCartOpen, setIsCartOpen] = React.useState(false);
const [quantity, setQuantity] = React.useState(1);

const addToCart = () => {
  if (!selectedProduct) return;

  if (selectedProduct.id === 5 && (!selectedFlavor || !selectedWeight)) {
    alert("لطفاً طعم و وزن ساندویچ را انتخاب کنید.");
    return;
  }

  const productPrice =
    selectedProduct.id === 6
      ? selectedProduct.price
      : selectedProduct.id === 5
      ? sandwichPrices[selectedFlavor][selectedWeight]
      : 0;

  const newItem = {
    ...selectedProduct,
    flavor: selectedProduct.id === 5 ? selectedFlavor : "",
    weight:
      selectedProduct.id === 5
        ? selectedWeight
        : selectedProduct.id === 6
        ? selectedProduct.weight
        : "",
    price: productPrice,
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
       <button
  className="cart"
  onClick={() => {
    setSelectedProduct(null);
    setIsCartOpen(true);
  }}
>
  🛒 سبد خرید
  <span className="cart-count">
    {cart.reduce((total, item) => total + item.quantity, 0)}
  </span>
</button>
      </header>
{isCartOpen && (
  <main className="cart-page">
    <div className="cart-page-heading">
      <h1>سبد خرید پاپریکا</h1>
      <p>انتخاب‌های خوشمزه شما</p>
    </div>

    <button
      className="back-to-store"
      onClick={() => setIsCartOpen(false)}
    >
      ← بازگشت به فروشگاه
    </button>

    {cart.length === 0 ? (
      <div className="empty-cart">
        <span>🛍️</span>
        <h3>سبد خرید شما خالی است</h3>
        <p>محصولات خوشمزه پاپریکا منتظر شما هستند!</p>
      </div>
    ) : (
      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              {item.flavor && <p>طعم: {item.flavor}</p>}
              {item.weight && <p>وزن: {item.weight}</p>}
              <p>تعداد: {item.quantity}</p>
            </div>

            <button
              className="remove-cart-item"
              onClick={() =>
                setCart((prev) => prev.filter((_, i) => i !== index))
              }
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    )}
  </main>
)}
      {!isCartOpen && (
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
<div className="purchase-options">
  <label>تعداد:</label>
  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
  />

  <button onClick={addToCart}>
    🛒 افزودن به سبد خرید
  </button>
</div>
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
  {selectedFlavor && selectedWeight && (
  <p className="selected-price">
    قیمت:{" "}
    {sandwichPrices[selectedFlavor][selectedWeight].toLocaleString("fa-IR")}
    {" "}تومان
  </p>
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
  className={`product-card ${product.id === 6 ? "gholwich-card" : ""}`}
  key={product.id}
 
onClick={() => {
  setSelectedProduct(product);
  setSelectedFlavor("");
  setSelectedWeight("");
  setQuantity(1);
}}

  style={{ cursor: "pointer" }}
>
               
               <div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
                <h3>{product.name}</h3>
               
{product.id === 6 && (
  <div className="gholwich-details">
    <span>🥪 ویژه دو نفره</span>
    <p>وزن: ۵۰۰ گرم</p>
    <strong>
      ۱٬۱۰۰٬۰۰۰ تومان
    </strong>
  </div>
)}

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
)}

      <footer>
        <h2>🌶️ PAPRIKA</h2>
        <p>طعم خوب، انتخاب خوب!</p>
        <small>تمام حقوق برای فروشگاه پاپریکا محفوظ است.</small>
      </footer>
    </div>
  );
}
