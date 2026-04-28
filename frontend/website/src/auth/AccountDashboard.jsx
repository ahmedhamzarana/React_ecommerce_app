import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import MyAccount from './views/MyAccount'
import AccountAddress from './views/AccountAddress'
import AccountOrder from './views/AccountOrder'
import AccountWishlist from './views/AccountWishlist'
import AccountDetail from './views/AccountDetail'
import AccountOrderDetail from './views/AccountOrderDetail'


function AccountDashboard() {
  return (
    <main className="pt-90">
      <div className="mb-4 pb-4"></div>

      <section className="my-account container">
        <h2 className="page-title">My Account</h2>

        <div className="row">
          <div className="col-lg-3">
            <ul className="account-nav">
              <li>
                <Link
                  to="/account_dashboard"
                  className="menu-link menu-link_us-s"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/account_dashboard/account_orders"
                  className="menu-link menu-link_us-s"
                >
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  to="/account_dashboard/account_address"
                  className="menu-link menu-link_us-s"
                >
                  Addresses
                </Link>
              </li>

              <li>
                <Link
                  to="/account_dashboard/account_details"
                  className="menu-link menu-link_us-s"
                >
                  Account Details
                </Link>
              </li>

              <li>
                <Link
                  to="/account_dashboard/account_wishlist"
                  className="menu-link menu-link_us-s"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/login" className="menu-link menu-link_us-s">
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
          <Routes>
  <Route index element={<MyAccount />} />

  <Route path="account_orders" element={<AccountOrder />}>
    <Route path="account_orders_details" element={<AccountOrderDetail />} />
  </Route>

  <Route path="account_address" element={<AccountAddress />} />
  <Route path="account_details" element={<AccountDetail />} />
  <Route path="account_wishlist" element={<AccountWishlist />} />
</Routes>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AccountDashboard