import React from "react";
const categories = [
  { icon: "🌭", title: "انواع سوسیس", subtitle: "طعم‌های خوشمزه و متنوع" },
  { icon: "🥩", title: "انواع کالباس", subtitle: "تازه و باکیفیت" },
  { icon: "🍔", title: "همبرگر", subtitle: "لذیذ و آماده طبخ" },
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
const sausageProducts = [
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
  { id: 16, name: "کودکان سویق‌دار مرغی", weight: "۵۰۰ گرم", price: 740000 },
  { id: 17, name: "کودکان سویق‌دار میکس پنیری", weight: "۵۰۰ گرم", price: 830000 },
];
const frozenProducts = [
  {
    id: 1,
    name: "ناگت مرغ",
    weight: "۵۰۰ گرم",
    price: 710000,
  },
  {
    id: 2,
    name: "فلافل",
    weight: "۵۰۰ گرم",
    price: 375000,
  },
];
const hamburgerProducts = [
  { id: 1, name: "برگر مرغ ۹۰٪", weight: "۵۰۰ گرم", price: 645000 },
  { id: 2, name: "برگر مرغ دودی", weight: "۵۰۰ گرم", price: 690000 },
  { id: 3, name: "برگر قفقازی", weight: "۵۰۰ گرم", price: 1100000 },
  { id: 4, name: "برگر گوشت ۹۰٪", weight: "۵۰۰ گرم", price: 1350000 },
  { id: 5, name: "برگر گوشت ۶۰٪", weight: "۵۰۰ گرم", price: 780000 },
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
const [selectedGalleryImage, setSelectedGalleryImage] = React.useState(null);
  const [reviewName, setReviewName] = React.useState("");
  const [reviewRating, setReviewRating] = React.useState("");
  const [reviewText, setReviewText] = React.useState("");
const [submittedReviews, setSubmittedReviews] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [selectedFlavor, setSelectedFlavor] = React.useState("");
  const [selectedWeight, setSelectedWeight] = React.useState("");
  const [showSandwichMenu, setShowSandwichMenu] = React.useState(false);
  const [showKebabMenu, setShowKebabMenu] = React.useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false);
  const [showColdCutMenu, setShowColdCutMenu] = React.useState(false);
  const [showHotDogMenu, setShowHotDogMenu] = React.useState(false);
const [showFrozenMenu, setShowFrozenMenu] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerAddress, setCustomerAddress] = React.useState("");
  const [isWhatsAppOpened, setIsWhatsAppOpened] = React.useState(false);
  const [isInPersonDelivery, setIsInPersonDelivery] = React.useState(false);
 const [wheelRotation, setWheelRotation] = React.useState(0);
const [wheelResult, setWheelResult] = React.useState("");
const [isWheelSpinning, setIsWheelSpinning] = React.useState(false);
const wheelPrizes = [
  "۵٪ تخفیف خرید",
  "۱۰٪ تخفیف خرید",
  "۱۵٪ تخفیف خرید",
  "ارسال رایگان",
  "یک هدیه خوشمزه",
  "یک شانس دوباره",
];

const galleryImages = [
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.55.17.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.55.27.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.55.37.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.55.48.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.03.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.15.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.23.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.34.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.45.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.56.58.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.57.11.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.57.20.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.57.33.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.57.43.jpeg",
  "/paprika-store/images/gallery/WhatsApp Image 2026-11-21 at 19.57.51.jpeg",
];

const spinWheel = () => {
  if (isWheelSpinning) return;

  setIsWheelSpinning(true);
  setWheelResult("");

  const prizeIndex = Math.floor(Math.random() * wheelPrizes.length);
  const selectedPrize = wheelPrizes[prizeIndex];

  const segmentAngle = 360 / wheelPrizes.length;
  const targetAngle = 360 - (prizeIndex * segmentAngle + segmentAngle / 2);
  const extraSpins = 360 * 5;

  setWheelRotation((previous) => {
    const currentRotation = previous % 360;
    return previous + extraSpins + targetAngle - currentRotation;
  });

  setTimeout(() => {
    setWheelResult(selectedPrize);
    setIsWheelSpinning(false);
  }, 4500);
};
const [quantity, setQuantity] = React.useState(1);

const [demoAnnualSpend, setDemoAnnualSpend] = React.useState(0);

const loyaltyLevel =
  demoAnnualSpend >= 200000000
    ? "طلایی"
    : demoAnnualSpend >= 150000000
    ? "نقره‌ای"
    : demoAnnualSpend >= 100000000
    ? "فیروزه‌ای"
    : "هنوز عضو نشده";

const loyaltyDiscount =
  demoAnnualSpend >= 200000000
    ? 20
    : demoAnnualSpend >= 150000000
    ? 15
    : demoAnnualSpend >= 100000000
    ? 10
    : 0;

const nextLoyaltyTarget =
  demoAnnualSpend >= 200000000
    ? 200000000
    : demoAnnualSpend >= 150000000
    ? 200000000
    : demoAnnualSpend >= 100000000
    ? 150000000
    : 100000000;

const remainingToNextLevel = Math.max(
  0,
  nextLoyaltyTarget - demoAnnualSpend
);
const formatToman = (amount) => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toLocaleString("fa-IR", {
      maximumFractionDigits: 2,
    })} میلیارد تومان`;
  }

  if (amount >= 1000000) {
    return `${(amount / 1000000).toLocaleString("fa-IR", {
      maximumFractionDigits: 2,
    })} میلیون تومان`;
  }

  return `${amount.toLocaleString("fa-IR")} تومان`;
};
const addToCart = () => {
  if (!selectedProduct) return;

  if (selectedProduct.id === 5 && (!selectedFlavor || !selectedWeight)) {
    alert("لطفاً طعم و وزن ساندویچ را انتخاب کنید.");
    return;
  }


const productPrice =
  selectedProduct.category === "kebab" ||
  selectedProduct.category === "coldcut" ||
  selectedProduct.category === "sausage" ||
  selectedProduct.category === "hamburger"
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
    selectedProduct.category === "sausage" ||
    selectedProduct.category === "hamburger"
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
          <a href="#loyalty">باشگاه مشتریان</a>
<a href="#loyalty-faq">سؤالات متداول</a>
<a href="#paprika-gallery">گالری تصاویر</a>
<a href="#paprika-contests">🏆 مسابقات پاپریکا</a>
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
  onClick={() => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("لطفاً نام و شماره موبایل خود را وارد کنید.");
      return;
    }

    if (!isInPersonDelivery && !customerAddress.trim()) {
      alert("لطفاً آدرس محل تحویل را وارد کنید.");
      return;
    }

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const productsText = cart.map((item, index) =>
      `${index + 1}. ${item.name}
تعداد: ${item.quantity}
${item.flavor ? `طعم: ${item.flavor}\n` : ""}${item.weight ? `وزن: ${item.weight}\n` : ""}قیمت: ${(item.price * item.quantity).toLocaleString("fa-IR")} تومان`
    ).join("\n\n");

    const message = `سلام، سفارش جدید از فروشگاه پاپریکا 🌭

نام مشتری: ${customerName}
شماره موبایل: ${customerPhone}

محصولات سفارش:
${productsText}

مبلغ کل: ${totalPrice.toLocaleString("fa-IR")} تومان

نحوه تحویل: ${isInPersonDelivery ? "تحویل حضوری" : "ارسال به آدرس"}
${isInPersonDelivery ? "" : `آدرس: ${customerAddress}`}`;

    const whatsappUrl =
      "https://wa.me/989044431358?text=" +
      encodeURIComponent(message);

   const whatsappWindow = window.open(whatsappUrl, "_blank");

if (whatsappWindow) {
  setIsWhatsAppOpened(true);
}
  }}
>
  ثبت سفارش ←
</button>

{isWhatsAppOpened && (
  <button
    className="checkout-button"
    onClick={() => {
      if (window.confirm("آیا پیام سفارش را در واتساپ ارسال کرده‌اید؟")) {
        setCart([]);
        setCustomerName("");
        setCustomerPhone("");
        setCustomerAddress("");
        setIsInPersonDelivery(false);
        setIsWhatsAppOpened(false);
        alert("سفارش شما ثبت شد. از خرید شما سپاسگزاریم ❤️");
      }
    }}
  >
    تأیید ارسال سفارش ✓
  </button>
)}

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
    
<div className="sandwich-menu-banner sandwich-text-banner">
  <div className="sandwich-banner-content">
    <span className="sandwich-banner-label">PAPRIKA SPECIAL</span>
    <h2>ساندویچ‌های سرد پاپریکا</h2>
    <p>ترکیبی از طعم، تازگی و کیفیت؛ لذت یک ساندویچ خوشمزه در هر لقمه</p>
    <span className="sandwich-banner-decoration">🥪</span>
  </div>
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
    
{(showKebabMenu || showFrozenMenu || showColdCutMenu || showHotDogMenu || showHamburgerMenu) && (
  <section className="sandwich-menu-panel">
    <button
      className="sandwich-back-button"
      onClick={() => {
setShowKebabMenu(false);
setShowFrozenMenu(false);
setShowColdCutMenu(false);
setShowHotDogMenu(false);
setShowHamburgerMenu(false);        
      }}
    >
      <span>←</span>
      بازگشت به محصولات
    </button>


<div className="sandwich-menu-banner">
  <h2>محصولات فریزری پاپریکا</h2>
  <p>محصولات باکیفیت پاپریکا</p>
</div>

{showHamburgerMenu && (
  <div className="sandwich-flavor-grid">
    {hamburgerProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 200 + item.id,
            category: "hamburger",
            image: "/paprika-store/topimage-classic-hamburger-2019m04-800x534-curiosa-min.jpg",
            description: "همبرگر باکیفیت پاپریکا",
          });
          setQuantity(1);
          setShowHamburgerMenu(false);
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
   {showFrozenMenu && (
  <div className="sandwich-flavor-grid">
    {frozenProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 400 + item.id,
            category: "frozen",
            image: "/paprika-store/topimage-classic-hamburger-2019m04-800x534-curiosa-min.jpg",
            description: "محصول فریزری باکیفیت پاپریکا",
          });
          setQuantity(1);
          setShowFrozenMenu(false);
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
    {sausageProducts.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setSelectedProduct({
            ...item,
            id: 300 + item.id,
            category: "sausage",
            image: "/paprika-store/WhatsApp%20Image%202026-11-19%20at%2022.40.06%281%29.jpeg",
           description: "انواع سوسیس باکیفیت پاپریکا",
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
    <button
      className="product-back-button"
      onClick={() => setSelectedProduct(null)}
    >
      ← بازگشت به محصولات
    </button>

    <div className="product-detail-content">
      <div className="product-info-card">
        <div className="product-brand-label">PAPRIKA STORE</div>

        <h2>{selectedProduct.name}</h2>

        <p className="product-description">
          {selectedProduct.description}
        </p>

        <div className="product-features">
          <div className="product-feature">
            <span>📦</span>
            <strong>بسته‌بندی محصول</strong>
          </div>
          <div className="product-feature">
            <span>🛒</span>
            <strong>خرید آسان</strong>
          </div>
          <div className="product-feature">
            <span>🌶️</span>
            <strong>انتخاب پاپریکا</strong>
          </div>
        </div>

        {(selectedProduct.category === "kebab" ||
          selectedProduct.category === "coldcut" ||
          selectedProduct.category === "sausage" ||
          selectedProduct.category === "hamburger" ||
          selectedProduct.category === "frozen") && (
          <div className="product-price-card">
            <div>
              <span>وزن محصول</span>
              <strong>{selectedProduct.weight}</strong>
            </div>
            <div>
              <span>قیمت محصول</span>
              <strong>
                {selectedProduct.price.toLocaleString("fa-IR")} تومان
              </strong>
            </div>
          </div>
        )}

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

        <div className="purchase-options">
          <label>تعداد موردنظر:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value)))
            }
          />

          <button onClick={addToCart}>
            🛒 افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  </section>
)}


{!selectedProduct &&
 !showSandwichMenu &&
 !showKebabMenu &&
 !showFrozenMenu &&
 !showColdCutMenu &&
 !showHotDogMenu &&
 !showHamburgerMenu && (
  <>
    

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
                setShowColdCutMenu(false);
                setShowHotDogMenu(false);
                setShowHamburgerMenu(false);
                setSelectedProduct(null);
                setSelectedFlavor("");
                setSelectedWeight("");
                setQuantity(1);
              } else if (item.title === "همبرگر") {
                setShowHamburgerMenu(true);
                setShowSandwichMenu(false);
                setShowKebabMenu(false);
                setShowFrozenMenu(false);
                setShowColdCutMenu(false);
                setShowHotDogMenu(false);
                setSelectedProduct(null);
                setQuantity(1);
              } else if (item.title === "انواع کالباس") {
                setShowColdCutMenu(true);
                setShowHamburgerMenu(false);
                setShowSandwichMenu(false);
                setShowKebabMenu(false);
                setShowFrozenMenu(false);
                setShowHotDogMenu(false);
                setSelectedProduct(null);
                setQuantity(1);
              } else if (item.title === "انواع سوسیس") {
                setShowHotDogMenu(true);
                setShowHamburgerMenu(false);
                setShowKebabMenu(false);
                setShowColdCutMenu(false);
                setShowSandwichMenu(false);
                setShowFrozenMenu(false);
                setSelectedProduct(null);
                setQuantity(1);
              } else if (item.title === "محصولات فریزری") {
                setShowFrozenMenu(true);
                setShowHamburgerMenu(false);
                setShowSandwichMenu(false);
                setShowKebabMenu(false);
                setShowColdCutMenu(false);
                setShowHotDogMenu(false);
                setSelectedProduct(null);
                setQuantity(1);
              } else if (item.title === "کباب لقمه") {
                setShowKebabMenu(true);
                setShowHamburgerMenu(false);
                setShowSandwichMenu(false);
                setShowFrozenMenu(false);
                setShowColdCutMenu(false);
                setShowHotDogMenu(false);
                setSelectedProduct(null);
                setQuantity(1);
              }
            }}
            style={{
              cursor: ["ساندویچ سرد", "کباب لقمه", "محصولات فریزری", "همبرگر"].includes(item.title)
                ? "pointer"
                : "default",
            }}
          >
          <span className="category-icon">{item.icon}</span>
  <h3>{item.title}</h3>
  <p>{item.subtitle}</p>
</div>
        ))}
      </div>
    </section>
</>
)}


<section className="loyalty-section" id="loyalty">
  <div className="section-heading">
    <span>باشگاه مشتریان پاپریکا</span>
    <h2>وفاداری شما، هدیه ما</h2>
    <p>با خرید بیشتر، تخفیف ویژه‌تری دریافت کنید.</p>
  </div>

  <div className="loyalty-cards">
    <div className="loyalty-card turquoise">
      <h3>عضویت فیروزه‌ای</h3>
      <strong>۱۰٪ تخفیف</strong>
      <p>با خرید ۱۰۰ میلیون تومان</p>
    </div>

    <div className="loyalty-card silver">
      <h3>عضویت نقره‌ای</h3>
      <strong>۱۵٪ تخفیف</strong>
      <p>با خرید ۱۵۰ میلیون تومان</p>
    </div>

  
<div className="loyalty-card gold">
  <h3>عضویت طلایی</h3>
  <strong>۲۰٪ تخفیف</strong>
  <p>با خرید ۲۰۰ میلیون تومان</p>
</div>
</div>

<div className="loyalty-benefits">
  <div className="loyalty-benefits-heading">
    <span>هدیه‌ای از طرف خانواده پاپریکا</span>
    <h3>مزایای ویژه اعضای باشگاه</h3>
    <p>ما در لحظه‌های شیرین زندگی شما همراهتان هستیم.</p>
  </div>

  <div className="loyalty-benefits-grid">
    <div className="loyalty-benefit-card">
      <div className="loyalty-benefit-icon">🎂</div>
      <h4>هدیه روز تولد</h4>
      <p>جشن تولد شما با هدیه‌ای ویژه از طرف پاپریکا شیرین‌تر می‌شود.</p>
    </div>

    <div className="loyalty-benefit-card">
      <div className="loyalty-benefit-icon">💍</div>
      <h4>هدیه سالگرد ازدواج</h4>
      <p>در سالگرد عشق و همراهی‌تان، پاپریکا را کنار خود داشته باشید.</p>
    </div>

    <div className="loyalty-benefit-card">
      <div className="loyalty-benefit-icon">🎁</div>
      <h4>سورپرایزهای مناسبتی</h4>
      <p>هدایا و پیشنهادهای ویژه در مناسبت‌های خاص برای اعضای باشگاه.</p>
    </div>

    <div className="loyalty-benefit-card gold-benefit">
      <div className="loyalty-benefit-icon">✨</div>
      <h4>امتیاز ویژه اعضای طلایی</h4>
      <p>یک سورپرایز اختصاصی و ویژه، فقط برای اعضای طلایی پاپریکا.</p>
    </div>
  </div>
</div>

<div className="loyalty-period-info">
  <div className="loyalty-period-icon">📅</div>
  <div className="loyalty-period-content">
    <h3>دوره محاسبه خرید و ارتقای عضویت</h3>
    <p>
      دوره محاسبه مجموع خرید هر عضو، از تاریخ اولین ثبت‌نام او در
      باشگاه مشتریان پاپریکا آغاز می‌شود و به مدت یک سال کامل ادامه دارد.
    </p>
    <p>
      با رسیدن به حدنصاب خرید هر سطح، عضویت شما بلافاصله ارتقا پیدا
      می‌کند و تخفیف همان سطح در سفارش بعدی برای شما اعمال می‌شود.
    </p>
    <span>محاسبه خرید بر اساس سال عضویت شماست، نه سال شمسی.</span>
  </div>
</div>

</section>


<section className="referral-section" id="referral">

  <div className="referral-heading">
    <span>🎁 PAPRIKA FRIENDS CLUB</span>
    <h2>دوستت رو دعوت کن، هدیه بگیر!</h2>
    <p>
      دوستانت را به خانواده پاپریکا دعوت کن.
      با خرید موفق آن‌ها، هدیه و امتیاز باشگاه مشتریان دریافت کن.
    </p>
  </div>

  <div className="referral-content">

    <div className="referral-card">
      <div className="referral-icon">📱</div>
      <h3>دعوت با شماره موبایل</h3>
      <p>شماره دوستت را وارد کن و لینک فروشگاه پاپریکا را برایش بفرست.</p>

      <input
        id="referral-phone"
        type="tel"
        placeholder="شماره موبایل دوستت"
        className="referral-phone"
        dir="ltr"
        maxLength="15"
      />

      <button
        type="button"
        className="referral-whatsapp"
        onClick={() => {
          const input = document.getElementById("referral-phone");
          let phone = input.value.replace(/\D/g, "");

          if (phone.startsWith("0")) phone = "98" + phone.slice(1);
          else if (phone.startsWith("9")) phone = "98" + phone;

          if (!/^989\d{9}$/.test(phone)) {
            alert("لطفاً شماره موبایل معتبر وارد کن.");
            return;
          }

          const link = window.location.origin + window.location.pathname;
          const message = `سلام! 🌹 دوست دارم تو هم با خانواده پاپریکا آشنا بشی. از این لینک وارد فروشگاه شو:\n${link}`;

          window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }}
      >
        دعوت از طریق واتساپ
      </button>

      <button
        type="button"
        className="referral-sms"
        onClick={() => {
          const input = document.getElementById("referral-phone");
          let phone = input.value.replace(/\D/g, "");

          if (!/^09\d{9}$/.test(phone)) {
            alert("لطفاً شماره موبایل معتبر وارد کن.");
            return;
          }

          const link = window.location.origin + window.location.pathname;
          const message = `سلام! 🌹 به خانواده پاپریکا دعوتی. از این لینک وارد فروشگاه شو: ${link}`;

          window.location.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
        }}
      >
        دعوت از طریق پیامک
      </button>
    </div>

    <div className="referral-card referral-code-card">
      <div className="referral-icon">🎟️</div>
      <h3>کد معرف اختصاصی تو</h3>
      <p>کد معرفت را برای دوستانت بفرست تا هنگام خرید از آن استفاده کنند.</p>

      <div className="referral-code" id="referral-code">
        PAPRIKA-XXXX
      </div>

      <button
        type="button"
        className="referral-copy"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText("PAPRIKA-XXXX");
            alert("کد معرف کپی شد! 🎁");
          } catch (error) {
            alert("کپی خودکار امکان‌پذیر نبود.");
          }
        }}
      >
        کپی کد معرف
      </button>
    </div>

  </div>

  <div className="referral-reward">
    <span>🏆</span>
    <strong>هر خرید موفق با کد معرف تو، یک هدیه و امتیاز بیشتر برای تو!</strong>
  </div>

</section>


<section className="paprika-wheel-section" id="paprika-wheel">

  <div className="wheel-heading">
    <span>🎁 PAPRIKA GOLDEN CHANCE</span>
    <h2>گردونه شانس پاپریکا</h2>
    <p>
      بچرخون، هیجان رو تجربه کن و ببین چه هدیه‌ای در انتظارت هست!
    </p>
  </div>

  <div className="wheel-game">

    <div className="wheel-pointer">▼</div>

    <div
      className="wheel-outer"
      style={{
        transform: `rotate(${wheelRotation}deg)`,
        transition: isWheelSpinning
          ? "transform 4.5s cubic-bezier(0.15, 0.65, 0.12, 1)"
          : "none",
      }}
    >
      <div className="wheel-face">
        {wheelPrizes.map((prize, index) => (
          <div
            className="wheel-prize-label"
            key={index}
            style={{
              transform: `translate(-50%, -50%) rotate(${index * 60 + 30}deg) translateY(-105px)`,
            }}
          >
            {prize}
          </div>
        ))}
      </div>
    </div>

    <div className="wheel-center">P</div>

  </div>

  <button
    type="button"
    className="wheel-spin-button"
    onClick={spinWheel}
    disabled={isWheelSpinning}
  >
    {isWheelSpinning ? "در حال چرخش..." : "🎡 شانس خودت رو امتحان کن"}
  </button>

  {wheelResult && (
    <div className="wheel-result">
      <span>🎉</span>
      <h3>تبریک! نتیجه گردونه تو:</h3>
      <strong>{wheelResult}</strong>
      <p>از همراهی تو با خانواده پاپریکا سپاسگزاریم ❤️</p>
    </div>
  )}

  <p className="wheel-note">
    هر چرخش یک تجربه هیجان‌انگیز است!
  </p>

</section>

<section className="loyalty-faq" id="loyalty-faq">
  <div className="loyalty-faq-heading">
    <span>پاسخ به پرسش‌های شما</span>
    <h2>سؤالات متداول باشگاه مشتریان</h2>
    <p>هر آنچه لازم است درباره عضویت و مزایای پاپریکا بدانید.</p>
  </div>

  <div className="loyalty-faq-grid">
    <div className="loyalty-faq-card">
      <h3>📅 دوره محاسبه خرید چگونه است؟</h3>
      <p>
        محاسبه مجموع خرید شما از تاریخ اولین ثبت‌نام در باشگاه
        آغاز می‌شود و یک سال کامل ادامه دارد؛ این دوره بر اساس
        سال شمسی محاسبه نمی‌شود.
      </p>
    </div>

    <div className="loyalty-faq-card">
      <h3>🏅 شرایط دریافت سطوح عضویت چیست؟</h3>
      <p>
        با مجموع خرید ۱۰۰ میلیون تومان عضو فیروزه‌ای،
        با ۱۵۰ میلیون تومان عضو نقره‌ای و با ۲۰۰ میلیون تومان
        عضو طلایی خواهید شد.
      </p>
    </div>

    <div className="loyalty-faq-card">
      <h3>🎯 تخفیف عضویت از چه زمانی اعمال می‌شود؟</h3>
      <p>
        پس از رسیدن به حدنصاب خرید هر سطح، عضویت شما ارتقا
        پیدا می‌کند و تخفیف همان سطح برای سفارش بعدی اعمال می‌شود.
      </p>
    </div>

    <div className="loyalty-faq-card">
      <h3>🎂 آیا همه اعضا هدیه تولد دارند؟</h3>
      <p>
        بله؛ هدیه روز تولد و هدیه سالگرد ازدواج برای تمام
        اعضای فیروزه‌ای، نقره‌ای و طلایی در نظر گرفته شده است.
      </p>
    </div>

    <div className="loyalty-faq-card">
      <h3>💍 هدیه سالگرد ازدواج شامل چه کسانی می‌شود؟</h3>
      <p>
        تمام اعضای باشگاه مشتریان، در هر سه سطح عضویت،
        از هدیه سالگرد ازدواج بهره‌مند می‌شوند.
      </p>
    </div>

    <div className="loyalty-faq-card gold-faq">
      <h3>✨ اعضای طلایی چه مزیت ویژه‌ای دارند؟</h3>
      <p>
        اعضای طلایی علاوه بر سایر مزایای باشگاه،
        از یک سورپرایز اختصاصی و ویژه پاپریکا برخوردار می‌شوند.
      </p>
    </div>
  </div>
</section>

<section className="paprika-contests" id="paprika-contests">

  <div className="contest-main-heading">
    <div className="contest-decoration">🏆</div>

    <span className="contest-label">
      دنیایی از هیجان و جایزه در پاپریکا
    </span>

    <h2>مسابقات پاپریکا</h2>

    <div className="contest-coming-soon">
      به‌زودی آغاز می‌شود...
    </div>

    <p>
      آماده رقابت باشید! مسابقات جذاب، چالش‌های سرگرم‌کننده
      و تجربه‌هایی متفاوت در انتظار شماست.
    </p>
  </div>

  <div className="contest-cards">

    <div className="contest-card">
      <div className="contest-card-icon">🧠</div>
      <span className="contest-card-number">مسابقه اول</span>
      <h3>مسابقات سرگرمی و اطلاعات عمومی</h3>
      <p>
        دانسته‌های خودتان را به چالش بکشید و در رقابت‌های
        جذاب و سرگرم‌کننده پاپریکا شرکت کنید.
      </p>
      <div className="contest-status">به‌زودی</div>
    </div>

    <div className="contest-card contest-customer">
      <div className="contest-card-icon">🌶️</div>
      <span className="contest-card-number">مسابقه دوم</span>
      <h3>مسابقات ویژه مشتریان پاپریکا</h3>
      <p>
        مخصوص خانواده پاپریکا؛ رقابت‌هایی اختصاصی
        برای مشتریان و دوستداران محصولات ما.
      </p>
      <div className="contest-status">به‌زودی</div>
    </div>

    <div className="contest-card">
      <div className="contest-card-icon">🎯</div>
      <span className="contest-card-number">مسابقه سوم</span>
      <h3>چالش‌ها و رقابت‌های دوره‌ای</h3>
      <p>
        حدس طعم، شناخت محصولات و چالش‌های تازه؛
        هر دوره با یک هیجان جدید همراه شوید.
      </p>
      <div className="contest-status">به‌زودی</div>
    </div>

  </div>

  <div className="grand-contest-poster">

    <div className="grand-poster-top">
      <span>PAPRIKA GRAND FESTIVAL</span>
      <span>🌶️</span>
    </div>

    <div className="grand-trophy">🏆</div>

    <span className="grand-poster-label">
      بزرگ‌ترین رقابت خانواده پاپریکا
    </span>

    <h2>جشنواره بزرگ پاپریکا</h2>

    <h3>مسابقه بزرگ؛ هیجان، رقابت، جایزه!</h3>

    <p>
      آماده باشید تا در یک تجربه متفاوت شرکت کنید،
      توانایی خودتان را به چالش بکشید و برای جوایز ویژه رقابت کنید.
    </p>

    <div className="grand-poster-prizes">
      <span>🎁 جوایز ویژه</span>
      <span>⭐ رقابت هیجان‌انگیز</span>
      <span>❤️ تجربه‌ای متفاوت</span>
    </div>

    <div className="grand-poster-countdown">
      <strong>به‌زودی آغاز می‌شود...</strong>
      <span>تاریخ شروع مسابقه متعاقباً اعلام خواهد شد.</span>
    </div>


  <div className="grand-poster-bottom">
    PAPRIKA • TASTE THE EXCITEMENT
  </div>

</div>

<div className="contest-prizes-section">

  <div className="contest-prizes-heading">
    <span>✨ جوایز هیجان‌انگیز</span>
    <h2>شگفتانه‌هایی در انتظار شماست</h2>
    <p>
      برندگان مسابقات پاپریکا، منتظر سورپرایزهای ویژه باشند!
    </p>
  </div>

  <div className="contest-prizes-grid">

    <div className="contest-prize-card">
      <div className="contest-prize-icon">👑</div>
      <span>جایزه اول</span>
      <h3>جایزه ویژه</h3>
      <p>یک سورپرایز خاص برای برنده خوش‌شانس</p>
      <div className="prize-ribbon">SPECIAL GIFT</div>
    </div>

    <div className="contest-prize-card featured-prize">
      <div className="contest-prize-icon">🏆</div>
      <span>جایزه دوم</span>
      <h3>جایزه ارزشمند</h3>
      <p>هدیه‌ای جذاب برای یکی از برگزیدگان</p>
      <div className="prize-ribbon">GOLDEN PRIZE</div>
    </div>

    <div className="contest-prize-card">
      <div className="contest-prize-icon">🎁</div>
      <span>جایزه سوم</span>
      <h3>سورپرایز پاپریکا</h3>
      <p>یک هدیه دوست‌داشتنی از خانواده پاپریکا</p>
      <div className="prize-ribbon">PAPRIKA GIFT</div>
    </div>

  </div>

</div>


  <div className="contest-challenges">

    <div className="contest-challenges-heading">
      <span>🎯 دنیای چالش‌های پاپریکا</span>
      <h2>آماده‌ای خودت را به چالش بکشی؟</h2>
      <p>
        هر دوره یک رقابت تازه، یک تجربه متفاوت و کلی هیجان!
      </p>
    </div>

    <div className="contest-challenges-grid">

      <div className="contest-challenge-card">
        <div className="challenge-icon">👅</div>
        <span>CHALLENGE 01</span>
        <h3>چالش حدس طعم</h3>
        <p>
          سرنخ‌ها را دنبال کن، طعم را حدس بزن
          و شانس خودت را برای برنده‌شدن امتحان کن!
        </p>
        <div className="challenge-status">به‌زودی</div>
      </div>

      <div className="contest-challenge-card">
        <div className="challenge-icon">🧠</div>
        <span>CHALLENGE 02</span>
        <h3>چالش شناخت محصولات</h3>
        <p>
          چقدر محصولات پاپریکا را می‌شناسی؟
          دانسته‌هایت را در یک رقابت جذاب محک بزن.
        </p>
        <div className="challenge-status">به‌زودی</div>
      </div>

      <div className="contest-challenge-card">
        <div className="challenge-icon">🎯</div>
        <span>CHALLENGE 03</span>
        <h3>چالش ویژه مشتریان</h3>
        <p>
          رقابت‌های اختصاصی برای اعضای خانواده پاپریکا
          با سورپرایزهای دوست‌داشتنی.
        </p>
        <div className="challenge-status">به‌زودی</div>
      </div>

    </div>

  </div>

  <div className="contest-footer">
    <span>🎁</span>
    <strong>هیجان، رقابت و سورپرایزهای ویژه در راه است!</strong>
    <span>❤️</span>
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
<section className="paprika-gallery" id="paprika-gallery">

  <div className="gallery-heading">
    <span>PAPRIKA PHOTO GALLERY</span>
    <h2>گالری هنری پاپریکا</h2>
    <p>
      گوشه‌ای از هنر، کیفیت و عشق ما به طعم‌های خوشمزه
    </p>
  </div>

  <div className="gallery-grid">
    {galleryImages.map((image, index) => (
      <div
        className="gallery-item"
        key={index}
        onClick={() => setSelectedGalleryImage(image)}
      >
        <img
          src={image}
          alt={`نمونه کار پاپریکا ${index + 1}`}
          loading="lazy"
        />
        <div className="gallery-overlay">
          <span>مشاهده تصویر</span>
          <strong>+</strong>
        </div>
      </div>
    ))}
  </div>

  {selectedGalleryImage && (
    <div
      className="gallery-lightbox"
      onClick={() => setSelectedGalleryImage(null)}
    >
      <button
        type="button"
        className="gallery-close"
        onClick={() => setSelectedGalleryImage(null)}
      >
        ×
      </button>

      <img
        src={selectedGalleryImage}
        alt="تصویر بزرگ نمونه کار پاپریکا"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )}

</section>
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

<div className="footer-developer">
  <span>طراحی و توسعه وب‌سایت</span>
  <strong>جواد جمعه‌زاده</strong>
  <p>با عشق و خلاقیت برای خانواده پاپریکا ❤️</p>
</div>

  <small>تمام حقوق برای فروشگاه پاپریکا محفوظ است.</small>
</footer>

    </div>
  );
}
