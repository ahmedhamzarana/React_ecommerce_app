import React from 'react'

function AccountDetail() {
  return (
<div className="page-content my-account__edit">
  <div className="my-account__edit-form">
    <form name="account_edit_form" action="#" method="POST" className="needs-validation">
      <div className="row">
        <div className="col-md-6">
          <div className="form-floating my-3">
            <input type="text" className="form-control" placeholder="Full Name" name="name"  required />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating my-3">
            <input type="text" className="form-control"  placeholder="Mobile Number" name="mobile"  required />
            <label htmlFor="mobile">Mobile Number</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating my-3">
            <input type="email" className="form-control" placeholder="Email Address" name="email"  required />
            <label htmlFor="account_email">Email Address</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="my-3">
            <h5 className="text-uppercase mb-0">Password Change</h5>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating my-3">
            <input type="password" className="form-control" id="old_password" name="old_password" placeholder="Old password" required />
            <label htmlFor="old_password">Old password</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating my-3">
            <input type="password" className="form-control" id="new_password" name="new_password" placeholder="New password" required />
            <label htmlFor="account_new_password">New password</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating my-3">
            <input type="password" className="form-control" cfpwd data-cf-pwd="#new_password" id="new_password_confirmation" name="new_password_confirmation" placeholder="Confirm new password" required />
            <label htmlFor="new_password_confirmation">Confirm new password</label>
            <div className="invalid-feedback">Passwords did not match!</div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="my-3">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
  )
}

export default AccountDetail