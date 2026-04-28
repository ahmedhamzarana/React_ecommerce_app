import React from 'react'

function Setting() {
    return (
        <div className="main-content">
            <style dangerouslySetInnerHTML={{ __html: "\n                            .text-danger {\n                                font-size: initial;\n                                line-height: 36px;\n                            }\n\n                            .alert {\n                                font-size: initial;\n                            }\n                        " }} />
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                        <h3>Settings</h3>
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
                                <div className="text-tiny">Settings</div>
                            </li>
                        </ul>
                    </div>
                    <div className="wg-box">
                        <div className="col-lg-12">
                            <div className="page-content my-account__edit">
                                <div className="my-account__edit-form">
                                    <form name="account_edit_form" action="#" method="POST" className="form-new-product form-style-1 needs-validation" noValidate>
                                        <fieldset className="name">
                                            <div className="body-title">Name <span className="tf-color-1">*</span>
                                            </div>
                                            <input className="flex-grow" type="text" placeholder="Full Name" name="name" tabIndex={0} defaultValue aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="name">
                                            <div className="body-title">Mobile Number <span className="tf-color-1">*</span></div>
                                            <input className="flex-grow" type="text" placeholder="Mobile Number" name="mobile" tabIndex={0} defaultValue aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="name">
                                            <div className="body-title">Email Address <span className="tf-color-1">*</span></div>
                                            <input className="flex-grow" type="text" placeholder="Email Address" name="email" tabIndex={0} defaultValue aria-required="true" required />
                                        </fieldset>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="my-3">
                                                    <h5 className="text-uppercase mb-0">Password Change</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset className="name">
                                                    <div className="body-title pb-3">Old password <span className="tf-color-1">*</span>
                                                    </div>
                                                    <input className="flex-grow" type="password" placeholder="Old password" id="old_password" name="old_password" aria-required="true" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset className="name">
                                                    <div className="body-title pb-3">New password <span className="tf-color-1">*</span>
                                                    </div>
                                                    <input className="flex-grow" type="password" placeholder="New password" id="new_password" name="new_password" aria-required="true" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset className="name">
                                                    <div className="body-title pb-3">Confirm new password <span className="tf-color-1">*</span></div>
                                                    <input className="flex-grow" type="password" placeholder="Confirm new password" cfpwd data-cf-pwd="#new_password" id="new_password_confirmation" name="new_password_confirmation" aria-required="true" required />
                                                    <div className="invalid-feedback">Passwords did not match!
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="my-3">
                                                    <button type="submit" className="btn btn-primary tf-button w208">Save
                                                        Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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

export default Setting