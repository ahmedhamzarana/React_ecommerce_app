import React from 'react'

function Products() {
  return (
<div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>All Products</h3>
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
            <div className="text-tiny">All Products</div>
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
          <a className="tf-button style-1 w208" href="add-product.html"><i className="icon-plus" />Add new</a>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>SalePrice</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Featured</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6</td>
                <td className="pname">
                  <div className="image">
                    <img src="1718623519.html" alt className="image" />
                  </div>
                  <div className="name">
                    <a href="#" className="body-title-2">Product6</a>
                    <div className="text-tiny mt-3">product6</div>
                  </div>
                </td>
                <td>$128.00</td>
                <td>$110.00</td>
                <td>SKU7868</td>
                <td>Category3</td>
                <td>Brand2</td>
                <td>Yes</td>
                <td>instock</td>
                <td>11</td>
                <td>
                  <div className="list-icon-function">
                    <a href="#" target="_blank">
                      <div className="item eye">
                        <i className="icon-eye" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="item edit">
                        <i className="icon-edit-3" />
                      </div>
                    </a>
                    <form action="#" method="POST">
                      <div className="item text-danger delete">
                        <i className="icon-trash-2" />
                      </div>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

export default Products