import React from 'react'

function User() {
  return (
     <div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>Users</h3>
        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
          <li>
            <a href="index.html">
              <div className="text-tiny">Dashboard</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <div className="text-tiny">All User</div>
          </li>
        </ul>
      </div>
      <div className="wg-box">
        <div className="flex items-center justify-between gap10 flex-wrap">
          <div className="wg-filter flex-grow">
            <form className="form-search">
              <fieldset className="name">
                <input type="text" placeholder="Search here..." className name="name" tabIndex={2} defaultValue aria-required="true" required />
              </fieldset>
              <div className="button-submit">
                <button className type="submit"><i className="icon-search" /></button>
              </div>
            </form>
          </div>
        </div>
        <div className="wg-table table-all-user">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th className="text-center">Total Orders</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="pname">
                    <div className="image">
                      <img src="user-1.html" alt className="image" />
                    </div>
                    <div className="name">
                      <a href="#" className="body-title-2">Admin</a>
                      <div className="text-tiny mt-3">ADM</div>
                    </div>
                  </td>
                  <td>1234567890</td>
                  <td>admin@surfsidemedia.in</td>
                  <td className="text-center"><a href="#" target="_blank">0</a></td>
                  <td>
                    <div className="list-icon-function">
                      <a href="#">
                        <div className="item edit">
                          <i className="icon-edit-3" />
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="divider" />
        <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination">
        </div>
      </div>
    </div>
  </div>
  <div className="bottom-page">
    <div className="body-text">Copyright © 2024 SurfsideMedia</div>
  </div>
</div>


  )
}

export default User