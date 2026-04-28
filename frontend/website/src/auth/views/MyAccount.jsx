import React from 'react'

function MyAccount() {
    return (
        <div className="page-content my-account__dashboard">
            <p>Hello <strong>User</strong></p>
            <p>From your account dashboard you can view your <a className="unerline-link" href="account_orders.html">recent
                orders</a>, manage your <a className="unerline-link" href="account_edit_address.html">shipping
                    addresses</a>, and <a className="unerline-link" href="account_edit.html">edit your password and account
                        details.</a></p>
        </div>
    )
}

export default MyAccount