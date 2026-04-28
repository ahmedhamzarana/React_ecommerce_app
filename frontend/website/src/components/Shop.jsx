import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Shop() {
  return (
<main className="pt-90">
  <section className="shop-main container d-flex pt-4 pt-xl-5">
    <div className="shop-sidebar side-sticky bg-body" id="shopFilter">
      <div className="aside-header d-flex d-lg-none align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
      </div>
      <div className="pt-4 pt-lg-0" />
      <div className="accordion" id="categories-list">
        <div className="accordion-item mb-4 pb-3">
          <h5 className="accordion-header" id="accordion-heading-1">
            <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-1" aria-expanded="true" aria-controls="accordion-filter-1">
              Product Categories
              <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div id="accordion-filter-1" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-1" data-bs-parent="#categories-list">
            <div className="accordion-body px-0 pb-0 pt-3">
              <ul className="list list-inline mb-0">
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Dresses</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Shorts</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Sweatshirts</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Swimwear</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Jackets</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">T-Shirts &amp; Tops</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Jeans</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Trousers</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Men</a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">Jumpers &amp; Cardigans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="color-filters">
        <div className="accordion-item mb-4 pb-3">
          <h5 className="accordion-header" id="accordion-heading-1">
            <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-2" aria-expanded="true" aria-controls="accordion-filter-2">
              Color
              <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div id="accordion-filter-2" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-1" data-bs-parent="#color-filters">
            <div className="accordion-body px-0 pb-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="swatch-color js-filter" style={{color: '#0a2472'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#d7bb4f'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#282828'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#b1d6e8'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#9c7539'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#d29b48'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#e6ae95'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#d76b67'}} />
                <a href="#" className="swatch-color swatch_active js-filter" style={{color: '#bababa'}} />
                <a href="#" className="swatch-color js-filter" style={{color: '#bfdcc4'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="size-filters">
        <div className="accordion-item mb-4 pb-3">
          <h5 className="accordion-header" id="accordion-heading-size">
            <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-size" aria-expanded="true" aria-controls="accordion-filter-size">
              Sizes
              <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div id="accordion-filter-size" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-size" data-bs-parent="#size-filters">
            <div className="accordion-body px-0 pb-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">XS</a>
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">S</a>
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">M</a>
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">L</a>
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">XL</a>
                <a href="#" className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter">XXL</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="brand-filters">
        <div className="accordion-item mb-4 pb-3">
          <h5 className="accordion-header" id="accordion-heading-brand">
            <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-brand" aria-expanded="true" aria-controls="accordion-filter-brand">
              Brands
              <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div id="accordion-filter-brand" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand" data-bs-parent="#brand-filters">
            <div className="search-field multi-select accordion-body px-0 pb-0">
              <select className="d-none" multiple name="total-numbers-list">
                <option value={1}>Adidas</option>
                <option value={2}>Balmain</option>
                <option value={3}>Balenciaga</option>
                <option value={4}>Burberry</option>
                <option value={5}>Kenzo</option>
                <option value={5}>Givenchy</option>
                <option value={5}>Zara</option>
              </select>
              <div className="search-field__input-wrapper mb-3">
                <input type="text" name="search_text" className="search-field__input form-control form-control-sm border-light border-2" placeholder="Search" />
              </div>
              <ul className="multi-select__list list-unstyled">
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Adidas</span>
                  <span className="text-secondary">2</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balmain</span>
                  <span className="text-secondary">7</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balenciaga</span>
                  <span className="text-secondary">10</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Burberry</span>
                  <span className="text-secondary">39</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Kenzo</span>
                  <span className="text-secondary">95</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Givenchy</span>
                  <span className="text-secondary">1092</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Zara</span>
                  <span className="text-secondary">48</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="price-filters">
        <div className="accordion-item mb-4">
          <h5 className="accordion-header mb-2" id="accordion-heading-price">
            <button className="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-price" aria-expanded="true" aria-controls="accordion-filter-price">
              Price
              <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div id="accordion-filter-price" className="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-price" data-bs-parent="#price-filters">
            <input className="price-range-slider" type="text" name="price_range" defaultValue data-slider-min={10} data-slider-max={1000} data-slider-step={5} data-slider-value="[250,450]" data-currency="$" />
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary">Min Price: </span>
                <span className="price-range__min">$250</span>
              </div>
              <div>
                <span className="text-secondary">Max Price: </span>
                <span className="price-range__max">$450</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div className="shop-list flex-grow-1">

      {/* MAIN SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="slideshow slideshow_small slideshow_split js-swiper-slider"
      >
        <SwiperSlide>
          <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
            <div className="slide-split_text position-relative d-flex align-items-center" style={{ backgroundColor: '#f5e6e0' }}>
              <div className="slideshow-text container p-3 p-xl-5">
                <h2 className="text-uppercase section-title fw-normal mb-3">
                  Women's <br /><strong>ACCESSORIES</strong>
                </h2>
                <p className="mb-0">
                  Accessories are the best way to update your look.
                </p>
              </div>
            </div>

            <div className="slide-split_media position-relative">
              <div className="slideshow-bg" style={{ backgroundColor: '#f5e6e0' }}>
                <img
                  src="assets/images/shop/shop_banner3.jpg"
                  alt="Women's accessories"
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
            <div className="slide-split_text position-relative d-flex align-items-center" style={{ backgroundColor: '#f5e6e0' }}>
              <div className="slideshow-text container p-3 p-xl-5">
                <h2 className="text-uppercase section-title fw-normal mb-3">
                  Women's <br /><strong>NEW COLLECTION</strong>
                </h2>
                <p className="mb-0">
                  Discover timeless pieces and elegant fashion.
                </p>
              </div>
            </div>

            <div className="slide-split_media position-relative">
              <div className="slideshow-bg" style={{ backgroundColor: '#f5e6e0' }}>
                <img
                  src="assets/images/shop/shop_banner3.jpg"
                  alt="Collection"
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

     <div class="mb-3 pb-2 pb-xl-3"></div>

        <div>
  <div className="d-flex justify-content-between mb-4 pb-md-2">
    <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
      <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">Home</a>
      <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
      <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">The Shop</a>
    </div>
    <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
      <select className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0" aria-label="Sort Items" name="total-number">
        <option selected>Default Sorting</option>
        <option value={1}>Featured</option>
        <option value={2}>Best selling</option>
        <option value={3}>Alphabetically, A-Z</option>
        <option value={3}>Alphabetically, Z-A</option>
        <option value={3}>Price, low to high</option>
        <option value={3}>Price, high to low</option>
        <option value={3}>Date, old to new</option>
        <option value={3}>Date, new to old</option>
      </select>
      <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0" />
      <div className="col-size align-items-center order-1 d-none d-lg-flex">
        <span className="text-uppercase fw-medium me-2">View</span>
        <button className="btn-link fw-medium me-2 js-cols-size" data-target="products-grid" data-cols={2}>2</button>
        <button className="btn-link fw-medium me-2 js-cols-size" data-target="products-grid" data-cols={3}>3</button>
        <button className="btn-link fw-medium js-cols-size" data-target="products-grid" data-cols={4}>4</button>
      </div>
      <div className="shop-filter d-flex align-items-center order-0 order-md-3 d-lg-none">
        <button className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside" data-aside="shopFilter">
          <svg className="d-inline-block align-middle me-2" width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon_filter" />
          </svg>
          <span className="text-uppercase fw-medium d-inline-block align-middle">Filter</span>
        </button>
      </div>
    </div>
  </div>
  <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid">
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_1-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Cropped Faux Leather Jacket</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$29</span>
          </div>
          <div className="product-card__review d-flex align-items-center">
            <div className="reviews-group d-flex">
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
            </div>
            <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_2.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_2-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Calvin Shorts</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$62</span>
          </div>
          <div className="d-flex align-items-center mt-1">
            <a href="#" className="swatch-color pc__swatch-color" style={{color: '#222222'}} />
            <a href="#" className="swatch-color swatch_active pc__swatch-color" style={{color: '#b9a16b'}} />
            <a href="#" className="swatch-color pc__swatch-color" style={{color: '#f5e6e0'}} />
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
          <div className="pc-labels__right ms-auto">
            <span className="pc-label pc-label_sale d-block text-white">-67%</span>
          </div>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_3.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_3-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Kirby T-Shirt</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$17</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_4.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_4-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Cableknit Shawl</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price price-old">$129</span>
            <span className="money price price-sale">$99</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
        <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
          <div className="pc-labels__left">
            <span className="pc-label pc-label_new d-block bg-white">NEW</span>
          </div>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_5.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_5-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Colorful Jacket</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$29</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_6.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_6-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Shirt In Botanical Cheetah Print</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$62</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_7.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_7-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Cotton Jersey T-Shirt</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$17</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_8.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_8-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Zessi Dresses</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price price-old">$129</span>
            <span className="money price price-sale">$99</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_9.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
              <div className="swiper-slide">
                <a href="details.html"><img loading="lazy" src="assets/images/products/product_9-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" /></a>
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title"><a href="details.html">Cropped Faux Leather Jacket</a></h6>
          <div className="product-card__price d-flex">
            <span className="money price">$29</span>
          </div>
          <div className="product-card__review d-flex align-items-center">
            <div className="reviews-group d-flex">
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
              <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_star" />
              </svg>
            </div>
            <span className="reviews-note text-lowercase text-secondary ms-1">8k+ reviews</span>
          </div>
          <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
            <svg width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_heart" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
    <a href="#" className="btn-link d-inline-flex align-items-center">
      <svg className="me-1" width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
        <use href="#icon_prev_sm" />
      </svg>
      <span className="fw-medium">PREV</span>
    </a>
    <ul className="pagination mb-0">
      <li className="page-item"><a className="btn-link px-1 mx-2 btn-link_active" href="#">1</a></li>
      <li className="page-item"><a className="btn-link px-1 mx-2" href="#">2</a></li>
      <li className="page-item"><a className="btn-link px-1 mx-2" href="#">3</a></li>
      <li className="page-item"><a className="btn-link px-1 mx-2" href="#">4</a></li>
    </ul>
    <a href="#" className="btn-link d-inline-flex align-items-center">
      <span className="fw-medium me-1">NEXT</span>
      <svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
        <use href="#icon_next_sm" />
      </svg>
    </a>
  </nav>
</div>

    </div>
  </section>
</main>
  )
}

export default Shop