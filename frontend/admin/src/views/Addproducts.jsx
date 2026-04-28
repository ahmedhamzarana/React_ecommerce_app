import React from 'react'

function Addproducts() {
  return (
  <div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>Add Product</h3>
        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
          <li>
            <a href="index-2.html">
              <div className="text-tiny">Dashboard</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <a href="all-product.html">
              <div className="text-tiny">Products</div>
            </a>
          </li>
          <li>
            <i className="icon-chevron-right" />
          </li>
          <li>
            <div className="text-tiny">Add product</div>
          </li>
        </ul>
      </div>
      <form className="tf-section-2 form-add-product" method="POST" encType="multipart/form-data" action="http://localhost:8000/admin/product/store">
        <input type="hidden" name="_token" defaultValue="8LNRTO4LPXHvbK2vgRcXqMeLgqtqNGjzWSNru7Xx" autoComplete="off" />
        <div className="wg-box">
          <fieldset className="name">
            <div className="body-title mb-10">Product name <span className="tf-color-1">*</span>
            </div>
            <input className="mb-10" type="text" placeholder="Enter product name" name="name" tabIndex={0} defaultValue aria-required="true" required />
            <div className="text-tiny">Do not exceed 100 characters when entering the
              product name.</div>
          </fieldset>
          <fieldset className="name">
            <div className="body-title mb-10">Slug <span className="tf-color-1">*</span></div>
            <input className="mb-10" type="text" placeholder="Enter product slug" name="slug" tabIndex={0} defaultValue aria-required="true" required />
            <div className="text-tiny">Do not exceed 100 characters when entering the
              product name.</div>
          </fieldset>
          <div className="gap22 cols">
            <fieldset className="category">
              <div className="body-title mb-10">Category <span className="tf-color-1">*</span>
              </div>
              <div className="select">
                <select className name="category_id">
                  <option>Choose category</option>
                  <option value={1}>Category1</option>
                  <option value={2}>Category2</option>
                  <option value={3}>Category3</option>
                  <option value={4}>Category4</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="brand">
              <div className="body-title mb-10">Brand <span className="tf-color-1">*</span>
              </div>
              <div className="select">
                <select className name="brand_id">
                  <option>Choose Brand</option>
                  <option value={1}>Brand1</option>
                  <option value={2}>Brand2</option>
                  <option value={3}>Brand3</option>
                  <option value={4}>Brand4</option>
                </select>
              </div>
            </fieldset>
          </div>
          <fieldset className="shortdescription">
            <div className="body-title mb-10">Short Description <span className="tf-color-1">*</span></div>
            <textarea className="mb-10 ht-150" name="short_description" placeholder="Short Description" tabIndex={0} aria-required="true" required defaultValue={""} />
            <div className="text-tiny">Do not exceed 100 characters when entering the
              product name.</div>
          </fieldset>
          <fieldset className="description">
            <div className="body-title mb-10">Description <span className="tf-color-1">*</span>
            </div>
            <textarea className="mb-10" name="description" placeholder="Description" tabIndex={0} aria-required="true" required defaultValue={""} />
            <div className="text-tiny">Do not exceed 100 characters when entering the
              product name.</div>
          </fieldset>
        </div>
        <div className="wg-box">
          <fieldset>
            <div className="body-title">Upload images <span className="tf-color-1">*</span>
            </div>
            <div className="upload-image flex-grow">
              <div className="item" id="imgpreview" style={{display: 'none'}}>
                <img src="../../../localhost_8000/images/upload/upload-1.png" className="effect8" alt />
              </div>
              <div id="upload-file" className="item up-load">
                <label className="uploadfile" htmlFor="myFile">
                  <span className="icon">
                    <i className="icon-upload-cloud" />
                  </span>
                  <span className="body-text">Drop your images here or select <span className="tf-color">click to browse</span></span>
                  <input type="file" id="myFile" name="image" accept="image/*" />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="body-title mb-10">Upload Gallery Images</div>
            <div className="upload-image mb-16">
              {/* <div class="item">
                          <img src="images/upload/upload-1.png" alt="">
                      </div>                                                 */}
              <div id="galUpload" className="item up-load">
                <label className="uploadfile" htmlFor="gFile">
                  <span className="icon">
                    <i className="icon-upload-cloud" />
                  </span>
                  <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                  <input type="file" id="gFile" name="images[]" accept="image/*" multiple />
                </label>
              </div>
            </div>
          </fieldset>
          <div className="cols gap22">
            <fieldset className="name">
              <div className="body-title mb-10">Regular Price <span className="tf-color-1">*</span></div>
              <input className="mb-10" type="text" placeholder="Enter regular price" name="regular_price" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
            <fieldset className="name">
              <div className="body-title mb-10">Sale Price <span className="tf-color-1">*</span></div>
              <input className="mb-10" type="text" placeholder="Enter sale price" name="sale_price" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
          </div>
          <div className="cols gap22">
            <fieldset className="name">
              <div className="body-title mb-10">SKU <span className="tf-color-1">*</span>
              </div>
              <input className="mb-10" type="text" placeholder="Enter SKU" name="SKU" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
            <fieldset className="name">
              <div className="body-title mb-10">Quantity <span className="tf-color-1">*</span>
              </div>
              <input className="mb-10" type="text" placeholder="Enter quantity" name="quantity" tabIndex={0} defaultValue aria-required="true" required />
            </fieldset>
          </div>
          <div className="cols gap22">
            <fieldset className="name">
              <div className="body-title mb-10">Stock</div>
              <div className="select mb-10">
                <select className name="stock_status">
                  <option value="instock">InStock</option>
                  <option value="outofstock">Out of Stock</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="name">
              <div className="body-title mb-10">Featured</div>
              <div className="select mb-10">
                <select className name="featured">
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select>
              </div>
            </fieldset>
          </div>
          <div className="cols gap10">
            <button className="tf-button w-full" type="submit">Add product</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div className="bottom-page">
    <div className="body-text">Copyright © 2024 SurfsideMedia</div>
  </div>
</div>
 )
}

export default Addproducts