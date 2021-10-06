import React from "react";
import "./index.scss";
import img1 from "./image/product04.webp";
import img2 from "./image/product05.webp";
import img3 from "./image/product06.webp";
import img4 from "./image/product07.webp";
function Index() {

  return (
    <div>
      {/*=============================================
  =            single product content         =
  =============================================*/}
      <div className="single-product-content ">
        <div className="container">
          {/*=======  single product content container  =======*/}
          <div className="single-product-content-container mb-35">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 mb-sm-35 mb-xs-35">
                {/*=======  product image gallery  =======*/}
                <div className="product-image-gallery">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={img1} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product04.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={img2} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product05.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={img3} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product06.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={img4} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product07.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                  </div>
                </div>
                {/*=======  End of product image gallery  =======*/}
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* product quick view description */}
                <div className="product-feature-details">
                  <h2 className="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>
                  <p className="product-rating">
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star" />
                    <a href="#">(1 customer review)</a>
                  </p>
                  <h2 className="product-price mb-15">
                    <span className="main-price">$12.90</span>
                    <span className="discounted-price"> $10.00</span>
                  </h2>
                  <p className="product-description mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis
                    vulputate, tristique ut lectus</p>
                  <div className="size mb-20">
                    Size: <br />
                    <select name="chooseSize" id="chooseSize">
                      <option value={0}>XXL</option>
                      <option value={0}>L</option>
                      <option value={0}>M</option>
                      <option value={0}>S</option>
                    </select>
                  </div>
                  <div className="color mb-20">
                    Color: <br />
                    <a href="#"><span className="color-block color-choice-1" /></a>
                    <a href="#"><span className="color-block color-choice-2" /></a>
                    <a href="#"><span className="color-block color-choice-3 active" /></a>
                  </div>
                  <div className="cart-buttons mb-20">
                    <div className="pro-qty mr-20 mb-xs-20">
                      <input type="text" defaultValue={1} />
                      <a href="" className="inc qty-btn">+</a>
                      <a href="" className="dec qty-btn">-</a>
                    </div>
                    <div className="add-to-cart-btn">
                      <a href="#"><i className="fa fa-shopping-cart" /> Add to Cart</a>
                    </div>
                  </div>
                  <div className="single-product-category mb-20">
                    <h3>Categories: <span><a href="shop-left-sidebar.html">Fast Foods</a>, <a href="shop-left-sidebar.html">Vegetables</a></span></h3>
                  </div>
                  <div className="social-share-buttons">
                    <h3>share this product</h3>
                    <ul>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a className="pinterest" href="#"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                  </div>
                </div>
                {/* end of product quick view description */}
              </div>
            </div>
          </div>
          {/*=======  End of single product content container  =======*/}
        </div>
      </div>
      {/*=====  End of single product content  ======*/}
      {/*=============================================
  =            single product tab         =
  =============================================*/}
      <div className="single-product-tab-section mb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-slider-wrapper">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-selected="true">Description</a>
                    <a className="nav-item nav-link" id="features-tab" data-bs-toggle="tab" href="#features" role="tab" aria-selected="false">Features</a>
                    <a className="nav-item nav-link" id="review-tab" data-bs-toggle="tab" href="#review" role="tab" aria-selected="false">Reviews (3)</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                      obcaecati tempore reiciendis neque facere! Eos, necessitatibus? Fugit iure veritatis
                      quidem velit quaerat quos qui pariatur dolore facilis, aliquid quae voluptatibus
                      dicta. Quae harum velit hic molestias, eius ab cum quidem voluptates modi maiores
                      laboriosam iusto excepturi ex, recusandae aut, facere earum ad vero aperiam. Minima
                      dolores dignissimos ab ipsam atque placeat sapiente officia debitis nobis porro at
                      quia veritatis, quidem id repudiandae ex tempore non. Enim soluta explicabo atque
                      adipisci itaque.</p>
                  </div>
                  <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                    <table className="table-data-sheet">
                      <tbody>
                        <tr className="odd">
                          <td>Name</td>
                          <td>Kaoreet lobortis sagittis laoreet</td>
                        </tr>
                        <tr className="even">
                          <td>Color</td>
                          <td>Yellow</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="product-ratting-wrap">
                      <div className="pro-avg-ratting">
                        <h4>4.5 <span>(Overall)</span></h4>
                        <span>Based on 9 Comments</span>
                      </div>
                      <div className="ratting-list">
                        <div className="sin-list float-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <span>(5)</span>
                        </div>
                        <div className="sin-list float-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <span>(3)</span>
                        </div>
                        <div className="sin-list float-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <span>(1)</span>
                        </div>
                        <div className="sin-list float-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <span>(0)</span>
                        </div>
                        <div className="sin-list float-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <span>(0)</span>
                        </div>
                      </div>
                      <div className="rattings-wrapper">
                        <div className="sin-rattings">
                          <div className="ratting-author">
                            <h3>Cristopher Lee</h3>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(5)</span>
                            </div>
                          </div>
                          <p>enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia res eos
                            qui ratione voluptatem sequi Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci veli</p>
                        </div>
                        <div className="sin-rattings">
                          <div className="ratting-author">
                            <h3>Nirob Khan</h3>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(5)</span>
                            </div>
                          </div>
                          <p>enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia res eos
                            qui ratione voluptatem sequi Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci veli</p>
                        </div>
                        <div className="sin-rattings">
                          <div className="ratting-author">
                            <h3>MD.ZENAUL ISLAM</h3>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(5)</span>
                            </div>
                          </div>
                          <p>enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia res eos
                            qui ratione voluptatem sequi Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci veli</p>
                        </div>
                      </div>
                      <div className="ratting-form-wrapper fix">
                        <h3>Add your Comments</h3>
                        <form action="#">
                          <div className="ratting-form row">
                            <div className="col-12 mb-15">
                              <h5>Rating:</h5>
                              <div className="ratting-star fix">
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                              </div>
                            </div>
                            <div className="col-md-6 col-12 mb-15">
                              <label htmlFor="name">Name:</label>
                              <input id="name" placeholder="Name" type="text" />
                            </div>
                            <div className="col-md-6 col-12 mb-15">
                              <label htmlFor="email">Email:</label>
                              <input id="email" placeholder="Email" type="text" />
                            </div>
                            <div className="col-12 mb-15">
                              <label htmlFor="your-review">Your Review:</label>
                              <textarea name="review" id="your-review" placeholder="Write a review" defaultValue={""} />
                            </div>
                            <div className="col-12">
                              <input defaultValue="add review" type="submit" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of single product tab  ======*/}
    </div>
  );
}

export default Index;