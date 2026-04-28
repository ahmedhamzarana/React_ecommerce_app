import React from 'react'

function AccountOrderDetail() {
  return (
<div>
  <style dangerouslySetInnerHTML={{__html: "\n    .pt-90 {\n      padding-top: 90px !important;\n    }\n\n    .pr-6px {\n      padding-right: 6px;\n      text-transform: uppercase;\n    }\n\n    .my-account .page-title {\n      font-size: 1.5rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      margin-bottom: 40px;\n      border-bottom: 1px solid;\n      padding-bottom: 13px;\n    }\n\n    .my-account .wg-box {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      padding: 24px;\n      flex-direction: column;\n      gap: 24px;\n      border-radius: 12px;\n      background: var(--White);\n      box-shadow: 0px 4px 24px 2px rgba(20, 25, 38, 0.05);\n    }\n\n    .bg-success {\n      background-color: #40c710 !important;\n    }\n\n    .bg-danger {\n      background-color: #f44032 !important;\n    }\n\n    .bg-warning {\n      background-color: #f5d700 !important;\n      color: #000;\n    }\n\n    .table-transaction>tbody>tr:nth-of-type(odd) {\n      --bs-table-accent-bg: #fff !important;\n\n    }\n\n    .table-transaction th,\n    .table-transaction td {\n      padding: 0.625rem 1.5rem .25rem !important;\n      color: #000 !important;\n    }\n\n    .table> :not(caption)>tr>th {\n      padding: 0.625rem 1.5rem .25rem !important;\n      background-color: #6a6e51 !important;\n    }\n\n    .table-bordered>:not(caption)>*>* {\n      border-width: inherit;\n      line-height: 32px;\n      font-size: 14px;\n      border: 1px solid #e1e1e1;\n      vertical-align: middle;\n    }\n\n    .table-striped .image {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 50px;\n      height: 50px;\n      flex-shrink: 0;\n      border-radius: 10px;\n      overflow: hidden;\n    }\n\n    .table-striped td:nth-child(1) {\n      min-width: 250px;\n      padding-bottom: 7px;\n    }\n\n    .pname {\n      display: flex;\n      gap: 13px;\n    }\n\n    .table-bordered> :not(caption)>tr>th,\n    .table-bordered> :not(caption)>tr>td {\n      border-width: 1px 1px;\n      border-color: #6a6e51;\n    }\n  " }} /> 
  <div className="wg-box mt-5 mb-5">
    <div className="row">
      <div className="col-6">
        <h5>Ordered Details</h5>
      </div>
      <div className="col-6 text-right">
        <a className="btn btn-sm btn-danger" href="http://localhost:8000/account-orders">Back</a>
      </div>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-transaction">
        <tbody>
          <tr>
            <th>Order No</th>
            <td>10001</td>
            <th>Mobile</th>
            <td>1234567891</td>
            <th>Pin/Zip Code</th>
            <td>804401</td>
          </tr>
          <tr>
            <th>Order Date</th>
            <td>2024-07-11 00:54:14</td>
            <th>Delivered Date</th>
            <td>2024-07-07</td>
            <th>Canceled Date</th>
            <td>2024-07-07</td>
          </tr>
          <tr>
            <th>Order Status</th>
            <td colSpan={5}>
              <span className="badge bg-danger">Canceled</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="wg-box wg-table table-all-user">
    <div className="row">
      <div className="col-6">
        <h5>Ordered Items</h5>
      </div>
      <div className="col-6 text-right">
      </div>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">SKU</th>
            <th className="text-center">Category</th>
            <th className="text-center">Brand</th>
            <th className="text-center">Options</th>
            <th className="text-center">Return Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pname">
              <div className="image">
                <img src="http://localhost:8000/uploads/products/thumbnails/1718066538.jpg" alt className="image" />
              </div>
              <div className="name">
                <a href="http://localhost:8000/shop/product1" target="_blank" className="body-title-2">Product1</a>
              </div>
            </td>
            <td className="text-center">$71.00</td>
            <td className="text-center">1</td>
            <td className="text-center">SHT01245</td>
            <td className="text-center">Category1</td>
            <td className="text-center">Brand1</td>
            <td className="text-center" />
            <td className="text-center">No</td>
            <td className="text-center">
              <a href="http://localhost:8000/shop/product1" target="_blank">
                <div className="list-icon-function view-icon">
                  <div className="item eye">
                    <i className="fa fa-eye" />
                  </div>
                </div>
              </a>
            </td>
          </tr>
          <tr>
            <td className="pname">
              <div className="image">
                <img src="http://localhost:8000/uploads/products/thumbnails/1718066673.jpg" alt className="image" />
              </div>
              <div className="name">
                <a href="http://localhost:8000/shop/product2" target="_blank" className="body-title-2">Product2</a>
              </div>
            </td>
            <td className="text-center">$101.00</td>
            <td className="text-center">1</td>
            <td className="text-center">SHT99890</td>
            <td className="text-center">Category2</td>
            <td className="text-center">Brand1</td>
            <td className="text-center" />
            <td className="text-center">No</td>
            <td className="text-center">
              <a href="http://localhost:8000/shop/product2" target="_blank">
                <div className="list-icon-function view-icon">
                  <div className="item eye">
                    <i className="fa fa-eye" />
                  </div>
                </div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="divider" />
  <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination">
  </div>
  <div className="wg-box mt-5">
    <h5>Shipping Address</h5>
    <div className="my-account__address-item col-md-6">
      <div className="my-account__address-item__detail">
        <p>Divyansh Kumar</p>
        <p>Flat No - 13, R. K. Wing - B</p>
        <p>ABC, DEF</p>
        <p>GHT, </p>
        <p>AAA</p>
        <p>000000</p>
        <br />
        <p>Mobile : 1234567891</p>
      </div>
    </div>
  </div>
  <div className="wg-box mt-5">
    <h5>Transactions</h5>
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-transaction">
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>$172.00</td>
            <th>Tax</th>
            <td>$36.12</td>
            <th>Discount</th>
            <td>$0.00</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>$208.12</td>
            <th>Payment Mode</th>
            <td>cod</td>
            <th>Status</th>
            <td>
              <span className="badge bg-success">Approved</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="wg-box mt-5 text-right">
    <form action="http://localhost:8000/account-order/cancel-order" method="POST">
      <input type="hidden" name="_token" defaultValue="3v611ELheIo6fqsgspMOk0eiSZjncEeubOwUa6YT" autoComplete="off" />
      <input type="hidden" name="_method" defaultValue="PUT" /> <input type="hidden" name="order_id" defaultValue={1} />
      <button type="submit" className="btn btn-danger">Cancel Order</button>
    </form>
  </div>
</div>

)
}

export default AccountOrderDetail