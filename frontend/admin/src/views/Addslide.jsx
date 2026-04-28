import React from 'react'

function Addslide() {
  return (
<div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>Slide</h3>
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
            <a href="slider.html">
              <div className="text-tiny">Slider</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <div className="text-tiny">New Slide</div>
          </li>
        </ul>
      </div>
      <div className="wg-box">
        <form className="form-new-product form-style-1">
          <fieldset className="name">
            <div className="body-title">Title <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Title" name="text" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset className="name">
            <div className="body-title">Line 1 <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Line 1" name="text" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset className="name">
            <div className="body-title">Line 2 <span className="tf-color-1">*</span></div>
            <input className="flex-grow" type="text" placeholder="Line 2" name="text" tabIndex={0} defaultValue aria-required="true" required />
          </fieldset>
          <fieldset>
            <div className="body-title">Upload images <span className="tf-color-1">*</span>
            </div>
            <div className="upload-image flex-grow">
              <div className="item up-load">
                <label className="uploadfile" htmlFor="myFile">
                  <span className="icon">
                    <i className="icon-upload-cloud" />
                  </span>
                  <span className="body-text">Drop your images here or select <span className="tf-color">click to browse</span></span>
                  <input type="file" id="myFile" name="filename" />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset className="category">
            <div className="body-title">Select category icon</div>
            <div className="select flex-grow">
              <select className>
                <option>Select icon</option>
                <option>icon 1</option>
                <option>icon 2</option>
              </select>
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

export default Addslide