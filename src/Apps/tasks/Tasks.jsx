// import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Link } from 'react-router-dom'
// import { DataGrid } from '@mui/x-data-grid';

const Tasks = () => {


  return (
    <div>
      <Link to={"/tasks"}>
        <section className="section-products">
          <div className="containers">
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  {/* <h3>Featured Product</h3> */}
                  <h2>Popular Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
										<div className="part-1">
                <img src="./assets/th (8).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

              </div>
              <div className="part-2">
                <h3 className="product-title">Here Product Title</h3>
                <h4 className="product-old-price">$79.99</h4>
                <h4 className="product-price">$49.99</h4>
              </div>
              </div>
						</div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" className="single-product">
                  <div className="part-1">
                    <span className="discount">15% off</span>
                    <img src="./assets/th (5).jpeg" style={{height:"100%", width:"100%", display:"inline"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-3" className="single-product">
                  <div className="part-1">
                  <img src="./assets/th.jpeg" style={{height:"100%", width:"100%" ,backgroundImage:"cover"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-old-price">$79.99</h4>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" className="single-product">
                  <div className="part-1">
                    <span className="new">new</span>
                    <img src="./assets/th (8).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

                  </div>
                  <div className="part-2" >
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
                  <div className="part-1">
                  <img src="./assets/th (7).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-old-price">$79.99</h4>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" className="single-product">
                  <div className="part-1">
                    <span className="discount">15% off</span>
                    <img src="./assets/th (6).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-3" className="single-product">
                  <div className="part-1">
                  <img src="./assets/th (7).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-old-price">$79.99</h4>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" className="single-product">
                  <div className="part-1">
                    <span className="new">new</span>
                    <img src="./assets/th (7).jpeg" style={{height:"100%", width:"100%"}}   alt="dp" />

                  </div>
                  <div className="part-2">
                    <h3 className="product-title">Here Product Title</h3>
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>

      </Link>

    </div>
  )
}

export default Tasks