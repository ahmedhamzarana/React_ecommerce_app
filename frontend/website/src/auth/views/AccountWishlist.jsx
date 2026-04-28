import React from 'react'

function AccountWishlist() {
  return (
<div className="page-content my-account__wishlist">
  <div className="products-grid row row-cols-2 row-cols-lg-3" id="products-grid">
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div className="swiper-container background-img js-swiper-slider" data-settings="{&quot;resizeObserver&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_5.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_5-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Colorful Jacket</h6>
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
                <img loading="lazy" src="assets/images/products/product_6.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_6-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Shirt In Botanical Cheetah Print</h6>
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
                <img loading="lazy" src="assets/images/products/product_7.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_7-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Cotton Jersey T-Shirt</h6>
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
                <img loading="lazy" src="assets/images/products/product_8.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_8-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Zessi Dresses</h6>
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
                <img loading="lazy" src="assets/images/products/product_9.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_9-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Cropped Faux Leather Jacket</h6>
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
                <img loading="lazy" src="assets/images/products/product_10.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
              <div className="swiper-slide">
                <img loading="lazy" src="assets/images/products/product_10-1.jpg" width={330} height={400} alt="Cropped Faux leather Jacket" className="pc__img" />
              </div>
            </div>
            <span className="pc__img-prev"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_prev_sm" />
              </svg></span>
            <span className="pc__img-next"><svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_next_sm" />
              </svg></span>
          </div>
          <button className="btn-remove-from-wishlist">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_close" />
            </svg>
          </button>
        </div>
        <div className="pc__info position-relative">
          <p className="pc__category">Dresses</p>
          <h6 className="pc__title">Calvin Shorts</h6>
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
  </div>
</div>
  )
}

export default AccountWishlist