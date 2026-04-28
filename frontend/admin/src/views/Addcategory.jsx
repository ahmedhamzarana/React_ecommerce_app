import React from 'react'

function Addcategory() {
    return (
        <div className="main-content">
            <div className="main-content-inner">
                {/* main-content-wrap */}
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                        <h3>Category infomation</h3>
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
                                <a href="#">
                                    <div className="text-tiny">Categories</div>
                                </a>
                            </li>
                            <li>
                                <i className="icon-chevron-right" />
                            </li>
                            <li>
                                <div className="text-tiny">New Category</div>
                            </li>
                        </ul>
                    </div>
                    {/* new-category */}
                    <div className="wg-box">
                        <form className="form-new-product form-style-1" action="#" method="POST" encType="multipart/form-data">
                            <fieldset className="name">
                                <div className="body-title">Category Name <span className="tf-color-1">*</span>
                                </div>
                                <input className="flex-grow" type="text" placeholder="Category name" name="name" tabIndex={0} defaultValue aria-required="true" required />
                            </fieldset>
                            <fieldset className="name">
                                <div className="body-title">Category Slug <span className="tf-color-1">*</span>
                                </div>
                                <input className="flex-grow" type="text" placeholder="Category Slug" name="slug" tabIndex={0} defaultValue aria-required="true" required />
                            </fieldset>
                            <fieldset>
                                <div className="body-title">Upload images <span className="tf-color-1">*</span>
                                </div>
                                <div className="upload-image flex-grow">
                                    <div className="item" id="imgpreview" style={{ display: 'none' }}>
                                        <img src="upload-1.html" className="effect8" alt />
                                    </div>
                                    <div id="upload-file" className="item up-load">
                                        <label className="uploadfile" htmlFor="myFile">
                                            <span className="icon">
                                                <i className="icon-upload-cloud" />
                                            </span>
                                            <span className="body-text">Drop your images here or select <span className="tf-color">click
                                                to browse</span></span>
                                            <input type="file" id="myFile" name="image" accept="image/*" />
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="bot">
                                <div />
                                <button className="tf-button w208" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom-page">
                <div className="body-text">Copyright © 2024 SurfsideMedia</div>
            </div>
        </div>

    )
}

export default Addcategory