import React from 'react'

function Addcoupon() {
  return (
<div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>Coupon infomation</h3>
        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
          <li>
            <a href="#">
              <div className="text-tiny">Dashboard</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <a href="#">
              <div className="text-tiny">Coupons</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <div className="text-tiny">New Coupon</div>
          </li>
        </ul>
      </div>
      <div className="wg-box">
        <form className="form-new-product form-style-1" method="POST" action="#">
          <fieldset className="name">
            <div className="body-title">Coupon Code <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Coupon Code" name="code" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset className="category">
            <div className="body-title">Coupon Type</div>
            <div className="select flex-grow">
              <select className name="type">
                <option value>Select</option>
                <option value="fixed">Fixed</option>
                <option value="percent">Percent</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="name">
            <div className="body-title">Value <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Coupon Value" name="value" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset className="name">
            <div className="body-title">Cart Value <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Cart Value" name="cart_value" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset className="name">
            <div className="body-title">Expiry Date <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="date" placeholder="Expiry Date" name="expiry_date" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <div className="bot">
            <div />
            <button className="tf-button w208" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="bottom-page">
    <div className="body-text">Copyright © 2024 SurfsideMedia</div>
  </div>
</div>
 )
}

export default Addcoupon