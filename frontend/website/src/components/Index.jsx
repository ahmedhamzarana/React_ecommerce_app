import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

function Index() {
  return (
    <main>
      {/* ========== HERO SLIDESHOW ========== */}
      <section className="swiper-container js-swiper-slider swiper-number-pagination slideshow">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, }}
          loop={true}
          slidesPerView={1}
          className="swiper-container js-swiper-slider slideshow"
        >
          <SwiperSlide>
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-character position-absolute bottom-0 pos_right-center">
                <img
                  loading="lazy"
                  src="assets/images/home/demo3/slideshow-character1.png"
                  width="542"
                  height="733"
                  alt="Woman Fashion 1"
                  className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
                />
                <div className="character_markup type2">
                  <p className="text-uppercase font-sofia mark-grey-color animate animate_fade animate_btt animate_delay-10 mb-0">
                    Dresses
                  </p>
                </div>
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                  New Arrivals
                </h6>
                <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                  Night Spring
                </h2>
                <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                  Dresses
                </h2>
                <a
                  href="#"
                  className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-character position-absolute bottom-0 pos_right-center">
                <img
                  loading="lazy"
                  src="assets/images/slideshow-character1.png"
                  width="400"
                  height="733"
                  alt="Woman Fashion 1"
                  className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
                />
                <div className="character_markup">
                  <p className="text-uppercase font-sofia fw-bold animate animate_fade animate_rtl animate_delay-10">
                    Summer
                  </p>
                </div>
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                  New Arrivals
                </h6>
                <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                  Night Spring
                </h2>
                <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                  Dresses
                </h2>
                <a
                  href="#"
                  className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-character position-absolute bottom-0 pos_right-center">
                <img
                  loading="lazy"
                  src="assets/images/slideshow-character2.png"
                  width="400"
                  height="690"
                  alt="Woman Fashion 2"
                  className="slideshow-character__img animate animate_fade animate_rtl animate_delay-10 w-auto h-auto"
                />
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                  New Arrivals
                </h6>
                <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                  Night Spring
                </h2>
                <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                  Dresses
                </h2>
                <a
                  href="#"
                  className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="container">
          <div className="slideshow-pagination slideshow-number-pagination d-flex align-items-center position-absolute bottom-0 mb-5" />
        </div>
      </section>

      <div className="container mw-1620 bg-white border-radius-10">
        <div className="mb-3 mb-xl-5 pt-1 pb-4" />

        {/* ========== YOU MIGHT LIKE (CATEGORY CAROUSEL) ========== */}
        <section className="category-carousel container">
          <h2 className="section-title text-center mb-3 pb-xl-2 mb-xl-4">
            You Might Like
          </h2>

          <div className="position-relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={8}
              slidesPerGroup={1}
              loop={true}
              navigation={{
                nextEl: ".products-carousel__next-1",
                prevEl: ".products-carousel__prev-1",
              }}
              breakpoints={{
                320: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 15 },
                768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 },
                992: {
                  slidesPerView: 6,
                  slidesPerGroup: 1,
                  spaceBetween: 45,
                  pagination: false,
                },
                1200: {
                  slidesPerView: 8,
                  slidesPerGroup: 1,
                  spaceBetween: 60,
                  pagination: false,
                },
              }}
              className="swiper-container js-swiper-slider"
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_1.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Women<br />Tops
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_2.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Women<br />Pants
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_3.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Women<br />Clothes
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_4.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Men<br />Jeans
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_5.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Men<br />Shirts
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_6.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Men<br />Shoes
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_7.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Women<br />Dresses
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src="assets/images/home/demo3/category_8.png"
                  width="124"
                  height="124"
                  alt=""
                />
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium">
                    Kids<br />Tops
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="products-carousel__prev products-carousel__prev-1 position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_prev_md" />
              </svg>
            </div>
            <div className="products-carousel__next products-carousel__next-1 position-absolute top-50 d-flex align-items-center justify-content-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_next_md" />
              </svg>
            </div>
          </div>
        </section>

        <div className="mb-3 mb-xl-5 pt-1 pb-4" />

        {/* ========== HOT DEALS ========== */}
        <section className="hot-deals container">
          <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
            Hot Deals
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-20per d-flex align-items-center flex-column justify-content-center py-4 align-items-md-start">
              <h2>Summer Sale</h2>
              <h2 className="fw-bold">Up to 60% Off</h2>

              <div
                className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown mb-3"
                data-date="18-3-2024"
                data-time="06:50"
              >
                <div className="day countdown-unit">
                  <span className="countdown-num d-block"></span>
                  <span className="countdown-word text-uppercase text-secondary">Days</span>
                </div>
                <div className="hour countdown-unit">
                  <span className="countdown-num d-block"></span>
                  <span className="countdown-word text-uppercase text-secondary">Hours</span>
                </div>
                <div className="min countdown-unit">
                  <span className="countdown-num d-block"></span>
                  <span className="countdown-word text-uppercase text-secondary">Mins</span>
                </div>
                <div className="sec countdown-unit">
                  <span className="countdown-num d-block"></span>
                  <span className="countdown-word text-uppercase text-secondary">Sec</span>
                </div>
              </div>

              <a
                href="#"
                className="btn-link default-underline text-uppercase fw-medium mt-3"
              >
                View All
              </a>
            </div>
            <div className="col-md-6 col-lg-8 col-xl-80per">
              <div className="position-relative">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  loop={false}
                  breakpoints={{
                    320: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 14 },
                    768: { slidesPerView: 2, slidesPerGroup: 3, spaceBetween: 24 },
                    992: {
                      slidesPerView: 3,
                      slidesPerGroup: 1,
                      spaceBetween: 30,
                      pagination: false,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 1,
                      spaceBetween: 30,
                      pagination: false,
                    },
                  }}
                  className="swiper-container js-swiper-slider"
                >
                  {/* Hot Deal Product 1 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-0-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-0-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Cropped Faux Leather Jacket</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$29</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 2 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-1-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-1-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Calvin Shorts</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$62</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 3 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-2-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-2-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Kirby T-Shirt</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$62</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 4 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-3-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-3-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Cableknit Shawl</a>
                        </h6>
                        <div className="product-card__price d-flex align-items-center">
                          <span className="money price-old">$129</span>
                          <span className="money price text-secondary">$99</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 5 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-0-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-0-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Cropped Faux Leather Jacket</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$29</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 6 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-1-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-1-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Calvin Shorts</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$62</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 7 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-2-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-2-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Kirby T-Shirt</a>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price text-secondary">$62</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Hot Deal Product 8 */}
                  <SwiperSlide>
                    <div className="product-card product-card_style3">
                      <div className="pc__img-wrapper">
                        <a href="details.html">
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-3-1.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src="assets/images/home/demo3/product-3-2.jpg"
                            width="258"
                            height="313"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img pc__img-second"
                          />
                        </a>
                      </div>
                      <div className="pc__info position-relative">
                        <h6 className="pc__title">
                          <a href="details.html">Cableknit Shawl</a>
                        </h6>
                        <div className="product-card__price d-flex align-items-center">
                          <span className="money price-old">$129</span>
                          <span className="money price text-secondary">$99</span>
                        </div>
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            <span className="d-none d-xxl-block">Quick View</span>
                            <span className="d-block d-xxl-none">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <use href="#icon_view" />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                            title="Add To Wishlist"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_heart" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-3 mb-xl-5 pt-1 pb-4" />

        {/* ========== CATEGORY BANNER ========== */}
        <section className="category-banner container">
          <div className="row">
            <div className="col-md-6">
              <div className="category-banner__item border-radius-10 mb-5">
                <img
                  loading="lazy"
                  className="h-auto"
                  src="assets/images/home/demo3/category_9.jpg"
                  width="690"
                  height="665"
                  alt=""
                />
                <div className="category-banner__item-mark">Starting at $19</div>
                <div className="category-banner__item-content">
                  <h3 className="mb-0">Blazers</h3>
                  <a
                    href="#"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-banner__item border-radius-10 mb-5">
                <img
                  loading="lazy"
                  className="h-auto"
                  src="assets/images/home/demo3/category_10.jpg"
                  width="690"
                  height="665"
                  alt=""
                />
                <div className="category-banner__item-mark">Starting at $19</div>
                <div className="category-banner__item-content">
                  <h3 className="mb-0">Sportswear</h3>
                  <a
                    href="#"
                    className="btn-link default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-3 mb-xl-5 pt-1 pb-4" />

        {/* ========== FEATURED PRODUCTS GRID ========== */}
        <section className="products-grid container">
          <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
            Featured Products
          </h2>

          <div className="row">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-4.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Cropped Faux Leather Jacket</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$29</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-5.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Calvin Shorts</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$62</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-6.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                  <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2">
                    New
                  </div>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Kirby T-Shirt</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$17</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-7.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                  <div className="product-label bg-red text-white right-0 top-0 left-auto mt-2 mx-2">
                    -67%
                  </div>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">Cableknit Shawl</h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price-old">$129</span>
                    <span className="money price text-secondary">$99</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-8.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Cropped Faux Leather Jacket</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$29</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-9.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Calvin Shorts</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$62</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-10.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">
                    <a href="details.html">Kirby T-Shirt</a>
                  </h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price text-secondary">$17</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <a href="details.html">
                    <img
                      loading="lazy"
                      src="assets/images/home/demo3/product-11.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </a>
                </div>
                <div className="pc__info position-relative">
                  <h6 className="pc__title">Cableknit Shawl</h6>
                  <div className="product-card__price d-flex align-items-center">
                    <span className="money price-old">$129</span>
                    <span className="money price text-secondary">$99</span>
                  </div>
                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                      data-aside="cartDrawer"
                      title="Add To Cart"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2">
            <a
              className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
              href="#"
            >
              Load More
            </a>
          </div>
        </section>
      </div>

      <div className="mb-3 mb-xl-5 pt-1 pb-4" />
    </main>
  );
}

export default Index;