import React from "react";
const categories = [
  { icon: "🌭", title: "انواع سوسیس", subtitle: "طعم‌های خوشمزه و متنوع" },
  { icon: "🥩", title: "انواع کالباس", subtitle: "تازه و باکیفیت" },
  { icon: "🍔", title: "همبرگر", subtitle: "لذیذ و آماده طبخ" },
  { icon: "🌮", title: "هات‌داگ", subtitle: "انتخابی خوشمزه" },
  { icon: "🥪", title: "ساندویچ سرد", subtitle: "ساندویچ‌های تازه و خوشمزه" },
  { icon: "🍢", title: "کباب لقمه", subtitle: "انواع کباب لقمه پاپریکا" },
  { icon: "❄️", title: "محصولات فریزری", subtitle: "محصولات آماده و باکیفیت" },
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
   image: "/paprika-store/paprika-cold-sandwich.jpg.jpg",
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
  {
    id: 7,
    name: "کباب لقمه",
   image: "/paprika-store/Besharat-Burger-06.jpg",
    description: "انواع کباب لقمه باکیفیت پاپریکا",
  },
  {
    id: 8,
    name: "محصولات فریزری",
    image: "/paprika-store/Ax2YdFZYNXVK4U9DnN1Wmx4Iw4wGmRUavR1hNGnhXAiqovr3yt.jpg",
    description: "انواع محصولات فریزری پاپریکا",
  },
];

const kebabProducts = [
  {
    id: 1,
    name: "کباب لقمه مرغ زعفرانی",
    weight: "۵۰۰ گرم",
    price: 740000,
  },
  {
    id: 2,
    name: "کباب لقمه گوشت ۹۰٪",
    weight: "۵۰۰ گرم",
    price: 1450000,
  },
  {
    id: 3,
    name: "کباب لقمه گوشت ۶۰٪",
    weight: "۵۰۰ گرم",
    price: 780000,
  },
  {
    id: 4,
    name: "کباب لقمه میکس",
    weight: "۵۰۰ گرم",
    price: 860000,
  },
  {
    id: 5,
    name: "کباب لقمه فسنجونی",
    weight: "۵۰۰ گرم",
    price: 890000,
  },
];
const coldCutProducts = [
  { id: 1, name: "ژامبون مرغ ۹۰٪", weight: "۵۰۰ گرم", price: 810000 },
  { id: 2, name: "ژامبون گوشت ۹۰٪", weight: "۵۰۰ گرم", price: 1030000 },
  { id: 3, name: "کالباس بره", weight: "۵۰۰ گرم", price: 1100000 },
  { id: 4, name: "فیله استیک", weight: "۵۰۰ گرم", price: 1500000 },
  { id: 5, name: "ژامبون مرغ و قارچ", weight: "۵۰۰ گرم", price: 790000 },
  { id: 6, name: "ژامبون میکس", weight: "۵۰۰ گرم", price: 830000 },
  { id: 7, name: "کالباس پیتزایی", weight: "۵۰۰ گرم", price: 740000 },
  { id: 8, name: "کالباس سبزیجات", weight: "۵۰۰ گرم", price: 740000 },
  { id: 9, name: "ژامبون چیکن رویال", weight: "۵۰۰ گرم", price: 760000 },
  { id: 10, name: "کالباس مارتادلا", weight: "۵۰۰ گرم", price: 650000 },
  { id: 11, name: "ژامبون کرات", weight: "۵۰۰ گرم", price: 950000 },
  { id: 12, name: "پپرونی", weight: "۵۰۰ گرم", price: 920000 },
];
const hotDogProducts = [
  { id: 1, name: "هات‌داگ مرغ", weight: "۵۰۰ گرم", price: 655000 },
  { id: 2, name: "هات‌داگ شکاری", weight: "۵۰۰ گرم", price: 695000 },
  { id: 3, name: "هات‌داگ گوشت", weight: "۵۰۰ گرم", price: 895000 },
  { id: 4, name: "هات‌داگ بره", weight: "۵۰۰ گرم", price: 995000 },
  { id: 5, name: "هات‌داگ سوجوک", weight: "۵۰۰ گرم", price: 1320000 },
  { id: 6, name: "هات‌داگ چیک هات", weight: "۵۰۰ گرم", price: 685000 },
  { id: 7, name: "هات‌داگ کره‌ای", weight: "۵۰۰ گرم", price: 715000 },
  { id: 8, name: "هات‌داگ پنیری", weight: "۵۰۰ گرم", price: 745000 },
  { id: 9, name: "هات‌داگ شترمرغ", weight: "۵۰۰ گرم", price: 865000 },
  { id: 10, name: "هات‌داگ بوقلمون", weight: "۵۰۰ گرم", price: 775000 },
  { id: 11, name: "هات‌داگ اینجوی ویژه", weight: "۵۰۰ گرم", price: 800000 },
  { id: 12, name: "هات‌داگ ویژه پنیری", weight: "۵۰۰ گرم", price: 830000 },
  { id: 13, name: "هات‌داگ چیلی", weight: "۵۰۰ گرم", price: 710000 },
  { id: 14, name: "کوکتل مرغ دودی", weight: "۵۰۰ گرم", price: 690000 },
  { id: 15, name: "کوکتل میکس", weight: "۵۰۰ گرم", price: 770000 },
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


const sandwichFlavorDetails = [
  { value: "مارتادلا", title: "مارتادلا", description: "طعمی اصیل و لطیف برای طرفداران انتخاب‌های کلاسیک." },
  { value: "مارتادلا ویژه", title: "مارتادلا ویژه", description: "انتخابی خاص با طعمی متفاوت و به‌یادماندنی." },
  { value: "مرغ ۹۰٪", title: "مرغ ۹۰٪", description: "طعم دلپذیر مرغ در یک انتخاب خوشمزه." },
  { value: "گوشت ۹۰٪", title: "گوشت ۹۰٪", description: "انتخابی خوش‌طعم برای طرفداران گوشت." },
  { value: "بره", title: "بره", description: "طعمی متفاوت و خاص برای سلیقه‌های خوش‌پسند." },
  { value: "پیتزایی", title: "پیتزایی", description: "حال‌وهوای پیتزا در قالب یک ساندویچ خوشمزه." },
  { value: "چیکن رویال", title: "چیکن رویال", description: "انتخابی خوش‌خوراک برای دوستداران مرغ." },
  { value: "کرات", title: "کرات", description: "سادگی دلچسب با طعمی دوست‌داشتنی." },
  { value: "میکس", title: "میکس", description: "ترکیبی متنوع برای طرفداران طعم‌های متفاوت." },
  { value: "مرغ و قارچ", title: "مرغ و قارچ", description: "ترکیبی دلچسب و دوست‌داشتنی." },
  { value: "سبزیجات", title: "سبزیجات", description: "حس تازگی و طراوت در هر لقمه." },
  { value: "سوئدی", title: "سوئدی", description: "انتخابی متفاوت برای طرفداران طعم‌های خاص." },
  { value: "پپرونی", title: "پپرونی", description: "طعم پرانرژی و جذاب برای عاشقان پپرونی." },
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
  const [showReviewForm, setShowReviewForm] = React.useState(false);

  const [reviewName, setReviewName] = React.useState("");
  const [reviewRating, setReviewRating] = React.useState("");
  const [reviewText, setReviewText] = React.useState("");
const [submittedReviews, setSubmittedReviews] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [selectedFlavor, setSelectedFlavor] = React.useState("");
  const [selectedWeight, setSelectedWeight] = React.useState("");
  const [showSandwichMenu, setShowSandwichMenu] = React.useState(false);
  const [showKebabMenu, setShowKebabMenu] = React.useState(false);
  const [showColdCutMenu, setShowColdCutMenu] = React.useState(false);
  const [showHotDogMenu, setShowHotDogMenu] = React.useState(false);
const [showFrozenMenu, setShowFrozenMenu] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerAddress, setCustomerAddress] = React.useState("");
  const [isInPersonDelivery, setIsInPersonDelivery] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

const addToCart = () => {
  if (!selectedProduct) return;

  if (selectedProduct.id === 5 && (!selectedFlavor || !selectedWeight)) {
    alert("لطفاً طعم و وزن ساندویچ را انتخاب کنید.");
    return;
  }

const productPrice =
  selectedProduct.category === "kebab" ||
  selectedProduct.category === "coldcut" ||
  selectedProduct.category === "hotdog"
    ? selectedProduct.price
    : selectedProduct.id === 6
    ? selectedProduct.price
    : selectedProduct.id === 5
    ? sandwichPrices[selectedFlavor][selectedWeight]
    : 0;
  const newItem = {
  ...selectedProduct,
  flavor: selectedProduct.id === 5 ? selectedFlavor : "",
  weight:
    selectedProduct.category === "kebab" ||
    selectedProduct.category === "coldcut" ||
    selectedProduct.category === "hotdog"
      ? selectedProduct.weight
      : selectedProduct.id === 5
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
  <>
    <div className="cart-items">
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} />

          <div className="cart-item-info">
            <h3>{item.name}</h3>

            {item.flavor && <p>طعم: {item.flavor}</p>}
            {item.weight && <p>وزن: {item.weight}</p>}

            
<div className="cart-quantity">
  <label>تعداد:</label>
  <input
    type="number"
    min="1"
    value={item.quantity}
    onChange={(e) => {
      const newQuantity = Math.max(1, Number(e.target.value) || 1);

      setCart((prev) =>
        prev.map((product, i) =>
          i === index
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
    }}
  />
</div>

<p>
  قیمت واحد: {item.price.toLocaleString("fa-IR")} تومان
</p>

<p>
  جمع این محصول: {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
</p>

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

    <div className="cart-total">
      <h3>
        مبلغ کل سفارش:{" "}
        {cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ).toLocaleString("fa-IR")} تومان
      </h3>
 
    </div>
    
<div className="cart-actions">
 <button
  className="continue-shopping"
  onClick={() => {
    setIsCartOpen(false);
  }}
>
  ✏️ ویرایش سبد خرید
</button>

  <button
    className="checkout-button"
    onClick={() => alert("به‌زودی امکان ثبت سفارش فعال می‌شود.")}
  >
    ثبت سفارش ←
  </button>
</div>


<div className="customer-info">
  <h2>اطلاعات تحویل سفارش</h2>

  <input
    type="text"
    placeholder="نام و نام خانوادگی"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
  />

  <input
    type="tel"
    placeholder="شماره موبایل"
    value={customerPhone}
    onChange={(e) => setCustomerPhone(e.target.value)}
  />

  <div className="address-heading">
    <label>آدرس کامل محل تحویل</label>

    <label className="pickup-option">
      <input
        type="checkbox"
        checked={isInPersonDelivery}
        onChange={(e) => setIsInPersonDelivery(e.target.checked)}
      />
      تحویل حضوری
    </label>
  </div>

  {!isInPersonDelivery && (
    <textarea
      placeholder="آدرس کامل محل تحویل را وارد کنید"
      value={customerAddress}
      onChange={(e) => setCustomerAddress(e.target.value)}
    />
  )}

  <p className="delivery-note">
    🚚 هزینه ارسال سفارش بر عهده مشتری می‌باشد.
  </p>
</div>


  </>
)}
  </main>
)}

      {!isCartOpen && (
  <main>
   {showSandwichMenu && (
  <section className="sandwich-menu-panel">
   
<button
  className="sandwich-back-button"
  onClick={() => setShowSandwichMenu(false)}
>
  <span>←</span>
  بازگشت به محصولات
</button>
    
   <div className="sandwich-menu-banner">
  <img
    src="/paprika-store/paprika-sandwich-banner.png.png"
    alt="بنر تبلیغاتی ساندویچ‌های سرد پاپریکا"
  />
</div>



<div className="sandwich-flavor-grid">
  {sandwichFlavorDetails.map((item) => (
    <button
      key={item.value}
      onClick={() => {
        const sandwich = products.find((product) => product.id === 5);
        setSelectedProduct(sandwich);
        setSelectedFlavor(item.value);
        setSelectedWeight("");
        setQuantity(1);
        setShowSandwichMenu(false);
      }}
    >
      <span className="flavor-title">{item.title}</span>
      <span className="flavor-description">{item.description}</span>
    </button>
  ))}
</div>
</section>
)}
    
{(showKebabMenu || showFrozenMenu || showColdCutMenu || showHotDogMenu) && (
  <section className="sandwich-menu-panel">
    <button
      className="sandwich-back-button"
      onClick={() => {
setShowKebabMenu(false);
setShowFrozenMenu(false);
setShowColdCutMenu(false);
setShowHotDogMenu(false);        
      }}
    >
      <span>←</span>
      بازگشت به محصولات
    </button>

 <div className="sandwich-menu-banner">
{showKebabMenu ? (
  <img
    src="/paprika-store/Persian%20Kebab%20Loghmeh%20Feast.png"
    alt="Persian Kebab Loghmeh Feast"
  />
) : showHotDogMenu ? (
  <>
    <h2>هات‌داگ پاپریکا</h2>
    <p>هات‌داگ‌های خوش‌طعم و باکیفیت پاپریکا</p>
  </>
) : showColdCutMenu ? (
  <img
   src="/paprika-store/paprika-coldcut-banner.png.png"
    alt="پاپریکا؛ طعم تازه و باکیفیت"
  />
) : (
  <>
    <h2>محصولات فریزری پاپریکا</h2>
    <p>محصولات باکیفیت پاپریکا</p>
  </>
)}
    </div>
{showKebabMenu && (
  <div className="sandwich-flavor-grid">
    {kebabProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 100 + item.id,
            category: "kebab",
            image: "/paprika-store/topimage-classic-hamburger-2019m04-800x534-curiosa-min.jpg",
            description: "کباب لقمه باکیفیت پاپریکا",
          });
          setQuantity(1);
          setShowKebabMenu(false);
        }}
      >
        <span className="flavor-title">{item.name}</span>
        <span className="flavor-description">{item.weight}</span>
        <span>{item.price.toLocaleString("fa-IR")} تومان</span>
      </button>
    ))}
  </div>
)}

{showColdCutMenu && (
  <div className="sandwich-flavor-grid">
    {coldCutProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 200 + item.id,
            category: "coldcut",
            image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.08%281%29.jpeg",
            description: "محصول باکیفیت پاپریکا",
          });
          setQuantity(1);
          setShowColdCutMenu(false);
        }}
      >
        <span className="flavor-title">{item.name}</span>
        <span className="flavor-description">{item.weight}</span>
        <span>{item.price.toLocaleString("fa-IR")} تومان</span>
      </button>
    ))}
  </div>
)}
{showHotDogMenu && (
  <div className="sandwich-flavor-grid">
    {hotDogProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 300 + item.id,
            category: "hotdog",
            image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.06%281%29.jpeg",
            description: "هات‌داگ باکیفیت پاپریکا",
          });
          setQuantity(1);
          setShowHotDogMenu(false);
        }}
      >
        <span className="flavor-title">{item.name}</span>
        <span className="flavor-description">{item.weight}</span>
        <span>{item.price.toLocaleString("fa-IR")} تومان</span>
      </button>
    ))}
  </div>
)}
  </section>
)}

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
{(selectedProduct.category === "kebab" ||
  selectedProduct.category === "coldcut" ||
  selectedProduct.category === "hotdog") && (
  <p className="selected-price">
    وزن: {selectedProduct.weight}
    {" "} | قیمت:{" "}
    {selectedProduct.price.toLocaleString("fa-IR")}
    {" "}تومان
  </p>
)}
</section>
)}
 {!selectedProduct && !showSandwichMenu && !showKebabMenu && !showFrozenMenu && !showColdCutMenu && !showHotDogMenu && (
  <>
        <section className="hero">
              <div className="hero-art"></div>
</section>
        <section className="categories" id="categories">
          <div className="section-heading">
            <span>انتخاب خوشمزه تو</span>
            <h2>دسته‌بندی محصولات</h2>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
             <div
  className="category-card"
  key={item.title}

onClick={() => {
  if (item.title === "ساندویچ سرد") {
    setShowSandwichMenu(true);
    setShowKebabMenu(false);
    setShowFrozenMenu(false);
    setSelectedProduct(null);
    setSelectedFlavor("");
    setSelectedWeight("");
    setQuantity(1);
 } else if (item.title === "انواع کالباس") {
  setShowColdCutMenu(true);
  setShowKebabMenu(false);
  setShowSandwichMenu(false);
  setShowFrozenMenu(false);
  setSelectedProduct(null);
  setQuantity(1);
 } else if (item.title === "هات‌داگ") {
  setShowHotDogMenu(true);
  setShowKebabMenu(false);
  setShowColdCutMenu(false);
  setShowSandwichMenu(false);
  setShowFrozenMenu(false);
  setSelectedProduct(null);
  setQuantity(1);
  } else if (item.title === "محصولات فریزری") {
    setShowFrozenMenu(true);
    setShowSandwichMenu(false);
    setShowKebabMenu(false);
    setSelectedProduct(null);
    setQuantity(1);
  }
}}
style={{
  cursor: ["ساندویچ سرد", "کباب لقمه", "محصولات فریزری"].includes(item.title)
    ? "pointer"
    : "default",
}}

  style={{
    cursor: item.title === "ساندویچ سرد" ? "pointer" : "default",
  }}
>
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
  
  </div>
)}

              </div>
            ))}
          </div>
        </section>


<section className="reviews" id="reviews">
  <div className="section-heading">
    <span>صدای مشتریان ما</span>
    <h2>نظرات مشتریان پاپریکا</h2>
    <p>طعم خوب، تجربه‌ای به‌یادماندنی</p>
  </div>

  <div className="reviews-slider">
<div className="reviews-track">
  {[1, 2].map((group) => (
    <div className="reviews-group" key={group}>
      {[
        "کیفیت محصولات عالی بود و طعم سوسیس‌ها واقعاً خوشمزه است.",
        "بسته‌بندی مرتب و کیفیت خوب محصولات باعث رضایت من شد.",
        "طعم محصولات متفاوت و جذاب است. تجربه خوبی از خرید داشتم.",
        "ساندویچ‌های پاپریکا انتخاب خوبی برای یک وعده غذایی هستند.",
        "تنوع محصولات و کیفیت خوب آن‌ها برای من جالب بود.",
        "از آشنایی با محصولات پاپریکا خوشحالم. دوباره هم انتخابش می‌کنم.",
        "طعم کالباس‌ها عالی بود و کیفیت محصول رضایت‌بخش بود.",
        "همبرگرها خوش‌طعم و مناسب یک وعده خوشمزه هستند.",
        "محصولات متنوع و خوشمزه‌ای دارید. ممنون از پاپریکا.",
        "تجربه خرید خوبی داشتم و از کیفیت محصولات راضی بودم."
      ].map((review, index) => (
        <div className="review-card" key={`${group}-${index}`}>
         
<div className="review-stars" title="امتیاز مشتری">
  ★★★★★
</div>

          <p>{review}</p>
          
<h3>
  {[
    "شهاب ایرانی",
    "جلیل شادیشه",
    "عاطفه میرنامی",
    "مهدیه حیدری",
    "معصومه داودنژاد",
    "رضا طیرانی",
    "محمد خاک",
    "فاطمه فیاضی",
    "سجاد حبیب نژاد",
    "نادیا کیمنش"
  ][index]}
</h3>

          <span>خرید محصولات</span>
        </div>
      ))}
    </div>
  ))}
</div>
</div>
</section>


{submittedReviews.length > 0 && (
  <div className="reviews-summary">
    <h3>🌟 رضایت مشتریان پاپریکا</h3>
    <p>
      تعداد نظرها: {submittedReviews.length.toLocaleString("fa-IR")}
    </p>
    <p>
      میانگین امتیاز:
      {" "}
{(
  submittedReviews.reduce(
    (total, review) => total + review.rating,
    0
  ) / submittedReviews.length
).toLocaleString("fa-IR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})}
{" "}از ۵ ⭐
    </p>
  </div>
)}

{submittedReviews.length > 0 && (
  <div className="submitted-reviews">
    {submittedReviews.map((review, index) => (
      <div className="review-card" key={index}>
        <div className="review-stars">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>

        <p>{review.text}</p>

        <h3>{review.name}</h3>

        <span>نظر مشتری پاپریکا</span>
      </div>
    ))}
  </div>
)}

{!showReviewForm && (
  <div className="review-submit-area">
    <h3>نظر شما برای ما ارزشمنده ❤️</h3>
    <p>تجربه خریدتان را با دیگر مشتریان پاپریکا به اشتراک بگذارید.</p>
    <button
      className="review-submit-button"
      onClick={() => setShowReviewForm(true)}
    >
      ✍️ ثبت نظر شما
    </button>
  </div>
)}


{showReviewForm && (
  <div className="review-form">
    <h3>ثبت نظر شما درباره پاپریکا 🌶️</h3>

   <input
  type="text"
  placeholder="نام و نام خانوادگی"
  value={reviewName}
  onChange={(e) => setReviewName(e.target.value)}
/>

   <select
  value={reviewRating}
  onChange={(e) => setReviewRating(e.target.value)}
>
  <option value="">امتیاز خود را انتخاب کنید</option>
  <option value="5">★★★★★ عالی</option>
  <option value="4">★★★★☆ خیلی خوب</option>
  <option value="3">★★★☆☆ خوب</option>
  <option value="2">★★☆☆☆ متوسط</option>
  <option value="1">★☆☆☆☆ ضعیف</option>
</select>

   <textarea
  placeholder="نظر خود را درباره محصولات پاپریکا بنویسید..."
  rows="4"
  value={reviewText}
  onChange={(e) => setReviewText(e.target.value)}
/>




<button
  type="button"
  onClick={() => {
    if (!reviewName.trim() || !reviewRating || !reviewText.trim()) {
      alert("لطفاً نام، امتیاز و متن نظر خود را وارد کنید.");
      return;
    }

    alert("از اینکه تجربه‌تان را با پاپریکا به اشتراک گذاشتید، سپاسگزاریم ❤️");

setSubmittedReviews((prev) => [
  ...prev,
  {
    name: reviewName.trim(),
    rating: Number(reviewRating),
    text: reviewText.trim(),
  },
]);

    setShowReviewForm(false);
    setReviewName("");
    setReviewRating("");
    setReviewText("");
  }}
>
  ثبت نظر
</button>



   
<button
  type="button"
  onClick={() => {
    setShowReviewForm(false);
    setReviewName("");
    setReviewRating("");
    setReviewText("");
  }}
>
  بستن فرم
</button>
</div>
)}

           <section className="about" id="about">
  <h2>پاپریکا؛ انتخاب خوشمزه شما</h2>

  <p>
    پاپریکا با تکیه بر تجربه، تخصص و عشق به طعم‌های باکیفیت،
    تلاش می‌کند تجربه‌ای خوشمزه و لذت‌بخش از خرید فرآورده‌های گوشتی
    برای شما فراهم کند.
  </p>

  <p>
    دارای مدرک بین‌المللی فنی‌وحرفه‌ای و بیش از ۱۱ سال سابقه کار حرفه‌ای.
  </p>
</section>
        </>
        )}
       </main>
)}
     
<footer className="site-footer">
  <h2>🌶️ PAPRIKA</h2>
  <p>طعم خوب، انتخاب خوب!</p>
<p>دارای مدرک بین‌المللی فنی‌وحرفه‌ای و بیش از ۱۱ سال سابقه کار حرفه‌ای</p>
  <div className="footer-contact">
    <h3>ارتباط با ما</h3>

    <p>📍 آدرس: تربت حیدریه، خیابان کاشانی</p>

    <a href="https://wa.me/989044431358" target="_blank" rel="noreferrer">
      💬 واتساپ: 09044431358
    </a>

    <a href="https://t.me/+989044431358" target="_blank" rel="noreferrer">
      ✈️ تلگرام: 09044431358
    </a>

    <a href="https://www.instagram.com/zahra_jomezadeh_2/" target="_blank" rel="noreferrer">
      📸 اینستاگرام: @zahra_jomezadeh_2
    </a>
  </div>

  <small>تمام حقوق برای فروشگاه پاپریکا محفوظ است.</small>
</footer>

    </div>
  );
}
