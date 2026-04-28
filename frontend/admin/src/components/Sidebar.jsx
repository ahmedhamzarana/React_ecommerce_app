import React from "react";
import { Link } from "react-router-dom";
import User from "../views/User";

function Sidebar() {
  return (
    <div className="section-menu-left">
      <div className="box-logo">
        <a href="#" id="site-logo-inner">
          <img
            id="logo_header"
            alt="logo"
            src="/images/logo/logo.png"
            data-light="/images/logo/logo.png"
            data-dark="/images/logo/logo.png"
          />
        </a>
        <div className="button-show-hide">
          <i className="icon-menu-left" />
        </div>
      </div>
      <div className="center">
        <div className="center-item">
          <div className="center-heading">Main Home</div>

          <ul className="menu-list">
            <li className="menu-item">
              <a href="#">
                <div className="icon">
                  <i className="icon-grid" />
                </div>
                <div className="text">Dashboard</div>
              </a>
            </li>
          </ul>
        </div>

        <div className="center-item">
          <ul className="menu-list">
            <li className="menu-item has-children">
              <a href="#" className="menu-item-button">
                <div className="icon">
                  <i className="icon-shopping-cart" />
                </div>
                <div className="text">Products</div>
              </a>

              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="addproducts">
                    <div className="text">Add Product</div>
                  </Link>
                </li>

                <li className="sub-menu-item">
                  <Link to='products'>
                    <div className="text">Products</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-children">
              <a href="#" className="menu-item-button">
                <div className="icon">
                  <i className="icon-layers" />
                </div>
                <div className="text">Brands</div>
              </a>

              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="addbrands">
                    <div className="text">New Brands</div>
                  </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="brands">
                    <div className="text">Brands</div>
                  </Link>
                </li>
              </ul>
            </li>


            <li className="menu-item has-children">
              <a href="javascript:void(0);" className="menu-item-button">
                <div className="icon"><i className="icon-layers" /></div>
                <div className="text">Category</div>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="addcategory" >
                    <div className="text">New Category</div>
                  </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="categories">
                    <div className="text">Categories</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-children">
              <a href="#" className="menu-item-button">
                <div class="icon"><i class="icon-file-plus"></i></div>
                <div className="text">Orders</div>
              </a>

              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="orders">
                    <div className="text">Orders</div>
                  </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="ordertracking">
                    <div className="text">Order tracking</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="sliders">
                <div className="icon"><i className="icon-image" /></div>
                <div className="text">Slider</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="coupons" className>
                <div className="icon"><i className="icon-grid" /></div>
                <div className="text">Coupns</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to='users'>
                <div className="icon"><i className="icon-user" /></div>
                <div className="text">User</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="settings">
                <div className="icon"><i className="icon-settings" /></div>
                <div className="text">Settings</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>


  );
}

export default Sidebar;