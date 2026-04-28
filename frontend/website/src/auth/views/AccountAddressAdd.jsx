import React from 'react'

function AccountAddressAdd() {
  return (
<div className="page-content my-account__address">
  <div className="row">
    <div className="col-6">
      <p className="notice">The following addresses will be used on the checkout page by default.</p>
    </div>
    <div className="col-6 text-right">
      <a href="#" className="btn btn-sm btn-danger">Back</a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-8">
      <div className="card mb-5">
        <div className="card-header">
          <h5>Add New Address</h5>
        </div>
        <div className="card-body">
          <form action="#" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="name" defaultValue />
                  <label htmlFor="name">Full Name *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="phone" defaultValue />
                  <label htmlFor="phone">Phone Number *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="zip" defaultValue />
                  <label htmlFor="zip">Pincode *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating mt-3 mb-3">
                  <input type="text" className="form-control" name="state" defaultValue />
                  <label htmlFor="state">State *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="city" defaultValue />
                  <label htmlFor="city">Town / City *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="address" defaultValue />
                  <label htmlFor="address">House no, Building Name *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="locality" defaultValue />
                  <label htmlFor="locality">Road Name, Area, Colony *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input type="text" className="form-control" name="landmark" defaultValue />
                  <label htmlFor="landmark">Landmark *</label>
                  <span className="text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue={1} id="isdefault" name="isdefault" />
                  <label className="form-check-label" htmlFor="isdefault">
                    Make as Default address
                  </label>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <hr />
</div>
)
}

export default AccountAddressAdd