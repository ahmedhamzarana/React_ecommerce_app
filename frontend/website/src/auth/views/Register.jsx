import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
<main className="pt-90">
  <div className="mb-4 pb-4" />
  <section className="login-register container">
    <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link nav-link_underscore active" id="register-tab" data-bs-toggle="tab" href="#tab-item-register" role="tab" aria-controls="tab-item-register" aria-selected="true">Register</a>
      </li>
    </ul>
    <div className="tab-content pt-2" id="login_register_tab_content">
      <div className="tab-pane fade show active" id="tab-item-register" role="tabpanel" aria-labelledby="register-tab">
        <div className="register-form">
          <form method="POST" action="#" name="register-form" className="needs-validation" noValidate>
            <div className="form-floating mb-3">
              <input className="form-control form-control_gray " name="name"  required autoComplete="name" autofocus />
              <label htmlFor="name">Name</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3">
              <input id="email" type="email" className="form-control form-control_gray " name="email"  required autoComplete="email" />
              <label htmlFor="email">Email address *</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3">
              <input id="mobile" type="text" className="form-control form-control_gray " name="mobile"  required autoComplete="mobile" />
              <label htmlFor="mobile">Mobile *</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3">
              <input id="password" type="password" className="form-control form-control_gray " name="password" required autoComplete="new-password" />
              <label htmlFor="password">Password *</label>
            </div>
            <div className="form-floating mb-3">
              <input id="password-confirm" type="password" className="form-control form-control_gray" name="password_confirmation" required autoComplete="new-password" />
              <label htmlFor="password">Confirm Password *</label>
            </div>
            <div className="d-flex align-items-center mb-3 pb-2">
              <p className="m-0">Your personal data will be used to support your experience throughout this website, to
                manage access to your account, and for other purposes described in our privacy policy.</p>
            </div>
            <button className="btn btn-primary w-100 text-uppercase" type="submit">Register</button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Have an account?</span>
              <Link to="/login" className="btn-text js-show-register">Login to your Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
  )
}

export default Register