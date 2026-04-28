import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AccountOrder() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .table> :not(caption)>tr>th {
              padding: 0.625rem 1.5rem .625rem !important;
              background-color: #6a6e51 !important;
            }

            .table>tr>td {
              padding: 0.625rem 1.5rem .625rem !important;
            }

            .table-bordered> :not(caption)>tr>th,
            .table-bordered> :not(caption)>tr>td {
              border-width: 1px 1px;
              border-color: #6a6e51;
            }

            .table> :not(caption)>tr>td {
              padding: .8rem 1rem !important;
            }

            .bg-success {
              background-color: #40c710 !important;
            }

            .bg-danger {
              background-color: #f44032 !important;
            }

            .bg-warning {
              background-color: #f5d700 !important;
              color: #000;
            }
          `
        }}
      />

      <div>
        <div className="wg-table table-all-user">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th style={{ width: 80 }}>OrderNo</th>
                  <th>Name</th>
                  <th className="text-center">Phone</th>
                  <th className="text-center">Subtotal</th>
                  <th className="text-center">Tax</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Order Date</th>
                  <th className="text-center">Items</th>
                  <th className="text-center">Delivered On</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-center">10001</td>
                  <td className="text-center">Sudhir Kumar</td>
                  <td className="text-center">1234567891</td>
                  <td className="text-center">$172.00</td>
                  <td className="text-center">$36.12</td>
                  <td className="text-center">$208.12</td>
                  <td className="text-center">
                    <span className="badge bg-danger">Canceled</span>
                  </td>
                  <td className="text-center">2024-07-11 00:54:14</td>
                  <td className="text-center">2</td>
                  <td>2024-07-07</td>
                  <td className="text-center">
                    <Link to="account_orders_details">
                      <div className="list-icon-function view-icon">
                        <div className="item eye">
                          <i className="fa fa-eye" />
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="text-center">10003</td>
                  <td className="text-center">Sudhir Kumar</td>
                  <td className="text-center">1234567891</td>
                  <td className="text-center">$154.80</td>
                  <td className="text-center">$32.51</td>
                  <td className="text-center">$187.31</td>
                  <td className="text-center">
                    <span className="badge bg-warning">Ordered</span>
                  </td>
                  <td className="text-center">2024-06-17 10:41:09</td>
                  <td className="text-center">2</td>
                  <td />
                  <td className="text-center">
                    <Link to="account_orders_details">
                      <div className="list-icon-function view-icon">
                        <div className="item eye">
                          <i className="fa fa-eye" />
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="text-center">10002</td>
                  <td className="text-center">Sudhir Kumar</td>
                  <td className="text-center">1234567891</td>
                  <td className="text-center">$71.00</td>
                  <td className="text-center">$14.91</td>
                  <td className="text-center">$85.91</td>
                  <td className="text-center">
                    <span className="badge bg-warning">Ordered</span>
                  </td>
                  <td className="text-center">2024-06-11 01:02:55</td>
                  <td className="text-center">1</td>
                  <td />
                  <td className="text-center">
                    <Link to="account_orders_details">
                      <div className="list-icon-function view-icon">
                        <div className="item eye">
                          <i className="fa fa-eye" />
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="divider" />

        <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination"></div>

        <Outlet />
      </div>
    </>
  )
}

export default AccountOrder