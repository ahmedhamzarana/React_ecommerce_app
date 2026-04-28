import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
  return (
<div className="main-content">
  <div className="main-content-inner">
    <div className="main-content-wrap">
      <div className="flex items-center flex-wrap justify-between gap20 mb-27">
        <h3>Slider</h3>
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
            <div className="text-tiny">Slider</div>
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
          <Link className="tf-button style-1 w208" to="addslide"><i className="icon-plus" />Add new</Link>
        </div>
        <div className="wg-table table-all-user">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Tagline</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td className="pname">
                  <div className="image">
                    <img src="1718066840.html" alt className="image" />
                  </div>
                </td>
                <td>New Arrivals</td>
                <td>Night Spring</td>
                <td>Dresses</td>
                <td>https://www.google.com</td>
                <td>
                  <div className="list-icon-function">
                    <a href="http://localhost:8000/admin/slider/3/edit">
                      <div className="item edit">
                        <i className="icon-edit-3" />
                      </div>
                    </a>
                    <form action="http://localhost:8000/admin/slider/3/delete" method="POST">
                      <input type="hidden" name="_token" defaultValue="8LNRTO4LPXHvbK2vgRcXqMeLgqtqNGjzWSNru7Xx" autoComplete="off" /> <input type="hidden" name="_method" defaultValue="DELETE" />
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

export default Slider