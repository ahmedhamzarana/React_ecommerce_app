import React, { useState, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCT_IMAGES = [
  "assets/images/products/product_0.jpg",
  "assets/images/products/product_0-1.jpg",
  "assets/images/products/product_0-2.jpg",
  "assets/images/products/product_0-3.jpg",
];

const PRODUCT = {
  name: "Lightweight Puffer Jacket With a Hood",
  price: "$449",
  rating: 5,
  reviewCount: "8k+",
  description:
    "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
  sku: "N/A",
  categories: "Casual & Urban Wear, Jackets, Men",
  tags: "biker, black, bomber, leather",
};

const REVIEWS = [
  {
    id: 1,
    name: "Janice Miller",
    rating: 5,
    date: "April 06, 2023",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    avatar: "assets/images/avatar.jpg",
  },
  {
    id: 2,
    name: "Benjam Porter",
    rating: 5,
    date: "April 06, 2023",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    avatar: "assets/images/avatar.jpg",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Renders N filled/unfilled stars */
const StarRating = ({ count = 5, filled = 5, size = 9 }) => (
  <div className="reviews-group d-flex">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="review-star"
        viewBox="0 0 9 9"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: i < filled ? "#f5a623" : "#ccc" }}
      >
        <use href="#icon_star" />
      </svg>
    ))}
  </div>
);

/** Interactive star picker used in the review form */
const StarPicker = ({ value, onChange }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <span className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const star = i + 1;
        const active = star <= (hovered || value);
        return (
          <svg
            key={i}
            className="star-rating__star-icon"
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill={active ? "#f5a623" : "#ccc"}
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(star)}
          >
            <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
          </svg>
        );
      })}
    </span>
  );
};

/** Single related-product card */
const RelatedProductCard = ({ product, onAddToCart, onWishlist, isWishlisted }) => (
  <div className="swiper-slide product-card">
    <div className="pc__img-wrapper">
      <a href={product.href}>
        <img
          loading="lazy"
          src={product.imgMain}
          width="330"
          height="400"
          alt={product.title}
          className="pc__img"
        />
        <img
          loading="lazy"
          src={product.imgHover}
          width="330"
          height="400"
          alt={product.title}
          className="pc__img pc__img-second"
        />
      </a>
      <button
        className="pc__btn-wl position-absolute top-0 end-0"
        onClick={() => onWishlist(product.id)}
        style={{ background: "none", border: "none", padding: "8px", cursor: "pointer" }}
        aria-label="Add to wishlist"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 20 20"
          fill={isWishlisted ? "red" : "none"}
          stroke={isWishlisted ? "red" : "currentColor"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_heart" />
        </svg>
      </button>
    </div>
    <div className="pc__info position-relative">
      <p className="pc__category">{product.category}</p>
      <h6 className="pc__title">
        <a href={product.href}>{product.title}</a>
      </h6>
      <div className="product-card__price d-flex">
        <span className="money price price-old">{product.priceOld}</span>
        <span className="money price price-sale">{product.priceSale}</span>
      </div>
      <button
        className="btn btn-primary btn-sm mt-2 w-100"
        onClick={() => onAddToCart(product)}
        style={{ fontSize: "0.75rem" }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

function ProductDetails() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistedRelated, setWishlistedRelated] = useState([]);

  const [activeTab, setActiveTab] = useState("description");

  const [cartMessage, setCartMessage] = useState("");

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    review: "",
    name: "",
    email: "",
    saveInfo: false,
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviews, setReviews] = useState(REVIEWS);


  const handleQuantityDecrease = () =>
    setQuantity((prev) => Math.max(1, prev - 1));

  const handleQuantityIncrease = () => setQuantity((prev) => prev + 1);

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1) setQuantity(val);
  };

  const handleAddToCart = (product = null) => {
    const name = product ? product.title : PRODUCT.name;
    setCartMessage(`"${name}" added to cart!`);
    setTimeout(() => setCartMessage(""), 3000);
  };

  const handleWishlistToggle = () => setIsWishlisted((prev) => !prev);

  const handleRelatedWishlist = (id) => {
    setWishlistedRelated((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleReviewFormChange = (field, value) => {
    setReviewForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.email || !reviewForm.review || !reviewForm.rating) {
      alert("Please fill all required fields and select a rating.");
      return;
    }
    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating: reviewForm.rating,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      text: reviewForm.review,
      avatar: "assets/images/avatar.jpg",
    };
    setReviews((prev) => [newReview, ...prev]);
    setReviewForm({ rating: 0, review: "", name: "", email: "", saveInfo: false });
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main className="pt-90">
      {/* Cart Toast Notification */}
      {cartMessage && (
        <div
          className="alert alert-success position-fixed"
          style={{ top: "90px", right: "20px", zIndex: 9999, minWidth: "260px" }}
          role="alert"
        >
          {cartMessage}
        </div>
      )}

      <div className="mb-md-1 pb-md-3"></div>

      {/* ── Product Section ── */}
      <section className="product-single container">
        <div className="row">
          {/* ── Gallery Column ── */}
          <div className="col-lg-7">

            {/* Scoped responsive styles */}
            <style>{`
              .pd-gallery {
                display: flex;
                flex-direction: column;
                gap: 12px;
              }
              /* Mobile: main image first, thumbnails below */
              .pd-gallery__main  { order: 1; position: relative; width: 100%; overflow: hidden; }
              .pd-gallery__thumbs {
                order: 2;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                gap: 8px;
                overflow-x: auto;
                padding-bottom: 4px;
                scrollbar-width: thin;
              }
              .pd-gallery__thumbs::-webkit-scrollbar { height: 4px; }
              .pd-gallery__thumbs::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }

              .pd-thumb-item {
                flex-shrink: 0;
                width: 72px;
                height: 72px;
                overflow: hidden;
                cursor: pointer;
                border: 2px solid transparent;
                transition: border-color 0.2s ease;
              }
              .pd-thumb-item img { display: block; width: 100%; height: 100%; object-fit: cover; }
              .pd-thumb-item.active { border-color: #000; }

              /* Desktop (≥992px): side-by-side — thumbs LEFT, main RIGHT */
              @media (min-width: 992px) {
                .pd-gallery {
                  flex-direction: row;
                  align-items: flex-start;
                }
                .pd-gallery__thumbs {
                  order: 1;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  overflow-x: unset;
                  overflow-y: auto;
                  width: 104px;
                  flex-shrink: 0;
                  padding-bottom: 0;
                  max-height: 560px;
                  scrollbar-width: thin;
                }
                .pd-gallery__thumbs::-webkit-scrollbar { width: 4px; height: unset; }
                .pd-thumb-item { width: 104px; height: 104px; }
                .pd-gallery__main { order: 2; flex: 1; }
              }

              /* Arrow buttons */
              .pd-arrow-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255,255,255,0.9);
                border: none;
                border-radius: 50%;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,.18);
                cursor: pointer;
                z-index: 3;
                transition: background 0.2s;
              }
              .pd-arrow-btn:hover { background: #fff; }
              .pd-arrow-btn--prev { left: 10px; }
              .pd-arrow-btn--next { right: 10px; }

              /* Dot indicators */
              .pd-dots {
                position: absolute;
                bottom: 12px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 6px;
                z-index: 3;
              }
              .pd-dot {
                height: 8px;
                border-radius: 4px;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 0;
                background: rgba(0,0,0,0.3);
                width: 8px;
              }
              .pd-dot.active {
                width: 20px;
                background: #000;
              }

              /* Zoom btn */
              .pd-zoom-btn {
                position: absolute;
                top: 12px;
                right: 12px;
                background: rgba(255,255,255,0.85);
                border-radius: 50%;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 1px 4px rgba(0,0,0,.15);
                z-index: 3;
                text-decoration: none;
                color: inherit;
              }
            `}</style>

            <div className="pd-gallery product-single__media" data-media-type="vertical-thumbnail">

              {/* ── Thumbnail Strip ── always visible; row on mobile, col on desktop */}
              <div className="pd-gallery__thumbs product-single__thumbnail">
                {PRODUCT_IMAGES.map((src, idx) => (
                  <div
                    key={idx}
                    className={`pd-thumb-item product-single__image-item${activeImageIndex === idx ? " active" : ""}`}
                    onClick={() => setActiveImageIndex(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View image ${idx + 1}`}
                    onKeyDown={(e) => e.key === "Enter" && setActiveImageIndex(idx)}
                  >
                    <img
                      loading="lazy"
                      src={src}
                      width={104}
                      height={104}
                      alt={`Product thumbnail ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* ── Main Image ── */}
              <div className="pd-gallery__main product-single__image">

                {/* Image stack with opacity crossfade */}
                <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
                  {PRODUCT_IMAGES.map((src, idx) => (
                    <img
                      key={idx}
                      loading="lazy"
                      src={src}
                      width={674}
                      height={674}
                      alt={`${PRODUCT.name} – view ${idx + 1}`}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: idx === activeImageIndex ? 1 : 0,
                        transition: "opacity 0.35s ease",
                        pointerEvents: idx === activeImageIndex ? "auto" : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Zoom */}
                <a
                  className="pd-zoom-btn"
                  data-fancybox="gallery"
                  href={PRODUCT_IMAGES[activeImageIndex]}
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Zoom"
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </a>

                {/* Prev arrow */}
                {activeImageIndex > 0 && (
                  <button
                    className="pd-arrow-btn pd-arrow-btn--prev"
                    onClick={() => setActiveImageIndex((i) => i - 1)}
                    aria-label="Previous image"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                )}

                {/* Next arrow */}
                {activeImageIndex < PRODUCT_IMAGES.length - 1 && (
                  <button
                    className="pd-arrow-btn pd-arrow-btn--next"
                    onClick={() => setActiveImageIndex((i) => i + 1)}
                    aria-label="Next image"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}

                {/* Dot indicators */}
                <div className="pd-dots">
                  {PRODUCT_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      className={`pd-dot${activeImageIndex === idx ? " active" : ""}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* ── Details Column ── */}
          <div className="col-lg-5">
            {/* Breadcrumb */}
            <div className="d-flex justify-content-between mb-4 pb-md-2">
              <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium"
                >
                  Home
                </a>
                <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                  /
                </span>
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium"
                >
                  The Shop
                </a>
              </div>
            </div>

            {/* Title */}
            <h1 className="product-single__name">{PRODUCT.name}</h1>

            {/* Rating */}
            <div className="product-single__rating">
              <StarRating count={5} filled={PRODUCT.rating} />
              <span className="reviews-note text-lowercase text-secondary ms-1">
                {PRODUCT.reviewCount} reviews
              </span>
            </div>

            {/* Price */}
            <div className="product-single__price">
              <span className="current-price">{PRODUCT.price}</span>
            </div>

            {/* Short Description */}
            <div className="product-single__short-desc">
              <p>{PRODUCT.description}</p>
            </div>

            {/* Add to Cart Form */}
            <div className="product-single__addtocart">
              {/* Quantity Control */}
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                  className="qty-control__number text-center"
                />
                <div
                  className="qty-control__reduce"
                  onClick={handleQuantityDecrease}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  -
                </div>
                <div
                  className="qty-control__increase"
                  onClick={handleQuantityIncrease}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  +
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                className="btn btn-primary btn-addtocart js-open-aside"
                data-aside="cartDrawer"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </button>
            </div>

            {/* Wishlist */}
            <div className="product-single__addtolinks">
              <button
                onClick={handleWishlistToggle}
                className="menu-link menu-link_us-s add-to-wishlist"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                aria-label="Add to Wishlist"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 20 20"
                  fill={isWishlisted ? "red" : "none"}
                  stroke={isWishlisted ? "red" : "currentColor"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
                <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
              </button>
            </div>

            {/* Meta Info */}
            <div className="product-single__meta-info">
              <div className="meta-item">
                <label>SKU:</label>
                <span>{PRODUCT.sku}</span>
              </div>
              <div className="meta-item">
                <label>Categories:</label>
                <span>{PRODUCT.categories}</span>
              </div>
              <div className="meta-item">
                <label>Tags:</label>
                <span>{PRODUCT.tags}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs Section ── */}
        <div className="product-single__details-tab">
          {/* Tab Nav */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {[
              { key: "description", label: "Description" },
              { key: "additional-info", label: "Additional Information" },
              { key: "reviews", label: `Reviews (${reviews.length})` },
            ].map((tab) => (
              <li key={tab.key} className="nav-item" role="presentation">
                <button
                  className={`nav-link nav-link_underscore${activeTab === tab.key ? " active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Description Tab */}
            <div
              className={`tab-pane fade${activeTab === "description" ? " show active" : ""}`}
              id="tab-description"
              role="tabpanel"
            >
              <div className="product-single__description">
                <h3 className="block-title mb-4">
                  Sed do eiusmod tempor incididunt ut labore
                </h3>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="block-title">Why choose product?</h3>
                    <ul className="list text-list">
                      <li>Creat by cotton fibric with soft and smooth</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>
                        Downloadable/Digital Products, Virtual Products
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="block-title">Sample Number List</h3>
                    <ol className="list text-list">
                      <li>Create Store-specific attrittbutes on the fly</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>
                        Downloadable/Digital Products, Virtual Products
                      </li>
                    </ol>
                  </div>
                </div>
                <h3 className="block-title mb-0">Lining</h3>
                <p className="content">100% Polyester, Main: 100% Polyester.</p>
              </div>
            </div>

            {/* Additional Info Tab */}
            <div
              className={`tab-pane fade${activeTab === "additional-info" ? " show active" : ""}`}
              id="tab-additional-info"
              role="tabpanel"
            >
              <div className="product-single__addtional-info">
                {[
                  { label: "Weight", value: "1.25 kg" },
                  { label: "Dimensions", value: "90 x 60 x 90 cm" },
                  { label: "Size", value: "XS, S, M, L, XL" },
                  { label: "Color", value: "Black, Orange, White" },
                  {
                    label: "Storage",
                    value:
                      "Relaxed fit shirt-style dress with a rugged",
                  },
                ].map((item) => (
                  <div key={item.label} className="item">
                    <label className="h6">{item.label}</label>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Tab */}
            <div
              className={`tab-pane fade${activeTab === "reviews" ? " show active" : ""}`}
              id="tab-reviews"
              role="tabpanel"
            >
              <h2 className="product-single__reviews-title">Reviews</h2>

              {/* Reviews List */}
              <div className="product-single__reviews-list">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="product-single__reviews-item"
                  >
                    <div className="customer-avatar">
                      <img
                        loading="lazy"
                        src={review.avatar}
                        alt={review.name}
                      />
                    </div>
                    <div className="customer-review">
                      <div className="customer-name">
                        <h6>{review.name}</h6>
                        <StarRating count={5} filled={review.rating} />
                      </div>
                      <div className="review-date">{review.date}</div>
                      <div className="review-text">
                        <p>{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Review Form */}
              <div className="product-single__review-form">
                <h5>Be the first to review "Message Cotton T-Shirt"</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                {reviewSubmitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you! Your review has been submitted.
                  </div>
                )}

                <div className="select-star-rating">
                  <label>Your rating *</label>
                  <StarPicker
                    value={reviewForm.rating}
                    onChange={(val) => handleReviewFormChange("rating", val)}
                  />
                  <input
                    type="hidden"
                    id="form-input-rating"
                    value={reviewForm.rating}
                    readOnly
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    id="form-input-review"
                    className="form-control form-control_gray"
                    placeholder="Your Review"
                    cols={30}
                    rows={8}
                    value={reviewForm.review}
                    onChange={(e) =>
                      handleReviewFormChange("review", e.target.value)
                    }
                  />
                </div>

                <div className="form-label-fixed mb-4">
                  <label htmlFor="form-input-name" className="form-label">
                    Name *
                  </label>
                  <input
                    id="form-input-name"
                    className="form-control form-control-md form-control_gray"
                    value={reviewForm.name}
                    onChange={(e) =>
                      handleReviewFormChange("name", e.target.value)
                    }
                  />
                </div>

                <div className="form-label-fixed mb-4">
                  <label
                    htmlFor="form-input-email"
                    className="form-label"
                  >
                    Email address *
                  </label>
                  <input
                    id="form-input-email"
                    type="email"
                    className="form-control form-control-md form-control_gray"
                    value={reviewForm.email}
                    onChange={(e) =>
                      handleReviewFormChange("email", e.target.value)
                    }
                  />
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    id="remember_checkbox"
                    checked={reviewForm.saveInfo}
                    onChange={(e) =>
                      handleReviewFormChange("saveInfo", e.target.checked)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="remember_checkbox"
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <div className="form-action">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleReviewSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;