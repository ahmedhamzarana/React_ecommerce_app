import React from 'react'

function AccountReview() {
  return (
<div className="page-content my-account__address">
  <div className="row">
    <div className="col-6">
      <h3 className="notice">Review for.</h3>
      <style dangerouslySetInnerHTML={{__html: "\n                  .pname {\n                    display: grid;\n                    padding: 2rem;\n                    grid-template-columns: 130px 1fr;\n                    gap: 1rem;\n                    align-items: center;\n                    max-width: 800px;\n                    margin: 0 auto;\n                    font: 500 100%/1.5 system-ui;\n                  }\n\n                  .pname .name {\n                    max-width: 100%;\n                    height: auto;\n                  }\n                " }} />
      <style dangerouslySetInnerHTML={{__html: "\n                  .star-rating {\n                    display: flex;\n                    justify-content: space-between;\n                    margin: 20px;\n                  }\n\n                  .star-rating input[type=\"radio\"] {\n                    display: none;\n                  }\n\n                  .star-rating label {\n                    font-size: 24px;\n                    color: #ccc;\n                    cursor: pointer;\n                  }\n\n                  .star-rating label:hover {\n                    color: #ffd700;\n                  }\n\n                  .star-rating input[type=\"radio\"].checked-label+label {\n                    color: #ffd700;\n                  }\n\n                  .checked-label {\n                    color: #ffd700;\n                  }\n                " }} />
      <div className="pname">
        <div className="image">
          <img src="http://localhost:8000/uploads/products/thumbnails/1718066538.jpg" alt className="image" />
        </div>
        <div className="name">
          <a href="#" target="_blank" className="body-title-2">Product1</a>
        </div>
      </div>
    </div>
    <div className="col-6 text-right">
      <a href="#" className="btn btn-sm btn-danger">Back</a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-8">
      <div className="col-md-6">
        <div className="star-rating">
          <input type="radio" id="star-1" className="checked-label" name="rating" defaultValue={1} />
          <label htmlFor="star-1"><i className="fa fa-star" /></label>
          <input type="radio" id="star-2" className="checked-label" name="rating" defaultValue={2} />
          <label htmlFor="star-2"><i className="fa fa-star" /></label>
          <input type="radio" id="star-3" className="checked-label" name="rating" defaultValue={3} />
          <label htmlFor="star-3"><i className="fa fa-star" /></label>
          <input type="radio" id="star-4" className="checked-label" name="rating" defaultValue={4} />
          <label htmlFor="star-4"><i className="fa fa-star" /></label>
          <input type="radio" id="star-5" className="checked-label" name="rating" defaultValue={5} />
          <label htmlFor="star-5"><i className="fa fa-star" /></label>
        </div>
      </div>
      <p>New review for product 1. Best Product in this price range.</p>
      <form action="#" method="POST">
        <button type="submit" className="btn btn-danger btn-sm">Remove Review</button>
      </form>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-8">
      <div className="card mb-5">
        <div className="card-header">
          <h5>Add Review</h5>
        </div>
        <div className="card-body">
          <form action="#" method="POST">                    
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <label htmlFor="rating">Rating *</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="star-rating">
                  <input type="radio" id="star-1" name="rating" defaultValue={1} />
                  <label htmlFor="star-1"><i className="fa fa-star" /></label>
                  <input type="radio" id="star-2" name="rating" defaultValue={2} />
                  <label htmlFor="star-2"><i className="fa fa-star" /></label>
                  <input type="radio" id="star-3" name="rating" defaultValue={3} />
                  <label htmlFor="star-3"><i className="fa fa-star" /></label>
                  <input type="radio" id="star-4" name="rating" defaultValue={4} />
                  <label htmlFor="star-4"><i className="fa fa-star" /></label>
                  <input type="radio" id="star-5" name="rating" defaultValue={5} />
                  <label htmlFor="star-5"><i className="fa fa-star" /></label>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <div className="form-floating my-3">
                  <textarea className="form-control" name="comment" style={{height: 165}} defaultValue={""} />
                  <label htmlFor="comments">Comments *</label>
                  <span className="text-danger">
                  </span>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 )
}

export default AccountReview