import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
<main className="pt-90">
  <div className="mb-4 pb-4" />
  <section className="login-register container">
    <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link nav-link_underscore active" id="login-tab" data-bs-toggle="tab" href="#tab-item-login" role="tab" aria-controls="tab-item-login" aria-selected="true">Login</a>
      </li>
    </ul>
    <div className="tab-content pt-2" id="login_register_tab_content">
      <div className="tab-pane fade show active" id="tab-item-login" role="tabpanel" aria-labelledby="login-tab">
        <div className="login-form">
          <form method="POST" action="#" name="login-form" className="needs-validation" noValidate>
            <div className="form-floating mb-3">
              <input className="form-control form-control_gray " name="email" required autoComplete="email" autofocus />
              <label htmlFor="email">Email address *</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3">
              <input id="password" type="password" className="form-control form-control_gray " name="password" required autoComplete="current-password" />
              <label htmlFor="customerPasswodInput">Password *</label>
            </div>
            <button className="btn btn-primary w-100 text-uppercase" type="submit">Log In</button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">No account yet?</span>
              <Link to="/register" className="btn-text js-show-register">Create Account</Link> | <Link to="/account_dashboard" className="btn-text js-show-register">My Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

    )
}

export default Login