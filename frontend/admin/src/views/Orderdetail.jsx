import React from 'react'

function Orderdetail() {
    return (
        <div className="main-content">
            <style dangerouslySetInnerHTML={{ __html: "\n                            .table-transaction>tbody>tr:nth-of-type(odd) {\n                                --bs-table-accent-bg: #fff !important;\n                            }\n                        " }} />
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                        <h3>Order Details</h3>
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
                                <div className="text-tiny">Order Items</div>
                            </li>
                        </ul>
                    </div>
                    <div className="wg-box">
                        <div className="flex items-center justify-between gap10 flex-wrap">
                            <div className="wg-filter flex-grow">
                                <h5>Ordered Items</h5>
                            </div>
                            <a className="tf-button style-1 w208" href="orders.html">Back</a>
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
                                                <img src="1718066538.html" alt className="image" />
                                            </div>
                                            <div className="name">
                                                <a href="#" target="_blank" className="body-title-2">Product1</a>
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
                                            <div className="list-icon-function view-icon">
                                                <div className="item eye">
                                                    <i className="icon-eye" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pname">
                                            <div className="image">
                                                <img src="1718066673.html" alt className="image" />
                                            </div>
                                            <div className="name">
                                                <a href="#" target="_blank" className="body-title-2">Product2</a>
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
                                            <div className="list-icon-function view-icon">
                                                <div className="item eye">
                                                    <i className="icon-eye" />
                                                </div>
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
                        <table className="table table-striped table-bordered table-transaction">
                            <tbody>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>172.00</td>
                                    <th>Tax</th>
                                    <td>36.12</td>
                                    <th>Discount</th>
                                    <td>0.00</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>208.12</td>
                                    <th>Payment Mode</th>
                                    <td>cod</td>
                                    <th>Status</th>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <th>Order Date</th>
                                    <td>2024-07-11 00:54:14</td>
                                    <th>Delivered Date</th>
                                    <td />
                                    <th>Canceled Date</th>
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bottom-page">
                <div className="body-text">Copyright © 2024 SurfsideMedia</div>
            </div>
        </div>

    )
}

export default Orderdetail