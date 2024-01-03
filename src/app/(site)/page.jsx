import Image from "next/image";
import styles from "../page.module.css";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import {getURL} from "../utils";

// const products = [
//   {
//     img: "/img/hat.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/kaftan.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/men-full.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/men-full2.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/turban2.webp",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/tes.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/hat3.webp",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
//   {
//     img: "/img/kaftan2.jpeg",
//     name: "Product Name Goes Here",
//     price: "$123.00",
//     discountPrice: "$123.00",
//     count: 99,
//   },
// ];

// const categories = [
//   {
//     img: "/img/tes3.jpeg",
//     name: "Tesbihler",
//     count: 100,
//   },
//   {
//     img: "/img/turban.webp",
//     name: "Sariklar",
//     count: 100,
//   },
//   {
//     img: "/img/salvar.jpeg",
//     name: "Salvarlar",
//     count: 100,
//   },
//   {
//     img: "/img/hat3.webp",
//     name: "Takkeler",
//     count: 100,
//   },
//   {
//     img: "/img/kaftan2.jpeg",
//     name: "Kaftanlar",
//     count: 100,
//   },
//   {
//     img: "/img/kitap.jpeg",
//     name: "Kitaplar",
//     count: 100,
//   },
//   {
//     img: "/img/kaftan2.jpeg",
//     name: "Takilar",
//     count: 100,
//   },
//   {
//     img: "/img/esans.jpeg",
//     name: "Esans Kokular",
//     count: 100,
//   },
// ];

async function getProducts() {
  
  let result = {
    data: [],
    error: null,
    isLoading: true,
  };

  const res = await fetch(`${getURL()}/api/product`);

  if (!res.ok) {
    result.error = res.status;
    result.isLoading = false;
  } else {
    result.data = await res.json();
    result.isLoading = false;
  }

  return result;
};
async function getCategories() {
  
  let result = {
    data: [],
    error: null,
    isLoading: true,
  };

  const res = await fetch(`${getURL()}/api/category`);

  if (!res.ok) {
    result.error = res.status;
    result.isLoading = false;
  } else {
    result.data = await res.json();
    result.isLoading = false;
  }

  return result;
};



export default async  function Home() {
  const pResult = await getProducts();
  const cResult = await getCategories();

  return (
    <>
      {/* Carousel Start  */}
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#header-carousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div
                  className="carousel-item position-relative active"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/sf.jpeg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/sf4.webp"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Women Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/sf5.avif"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Kids Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-offer mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/men-full.jpeg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="product-offer mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/esans.jpeg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End  */}

      {/* Featured Start  */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4 border border-primary"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4 border border-primary"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4 border border-primary"
              style={{ padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4 border border-primary"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Featured End  */}

      {/* Categories Start  */}
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Kategoriler</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {cResult.data
            ?.map((x, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <CategoryCard item={x} />
              </div>
            ))}
        </div>
      </div>
      {/* Categories End  */}

      {/* Products Start  */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">ÖZEL ÜRÜNLER</span>
        </h2>
        <div className="row px-xl-5">
          {pResult.data?.map((x, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6 pb-1 px-sm-3 px-1">
              <ProductCard item={x} />
            </div>
          ))}
        </div>
      </div>
      {/* Products End  */}

      {/* Offer Start  */}
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="img/sf.jpeg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="img/sf2.jpeg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End  */}

      {/* Products Start  */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Recent Products</span>
        </h2>
        <div className="row px-xl-5">
          {pResult.data?.map((x, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6 pb-1 px-sm-3 px-1">
              <ProductCard item={x} />
            </div>
          ))}
        </div>
      </div>
      {/* Products End  */}

      {/* Vendor Start  */}
      {/* <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="bg-light p-4">
                <img src="img/vendor-1.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-2.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-3.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-4.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-5.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-6.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-7.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              data-items="1,3,5,6"
              data-slide="1"
            >
              <div className="carousel-inner">
                <div className="carousel-item w-25 active">
                  <div className="bg-light p-4">
                    <img src="img/vendor-1.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-2.jpg" alt="" />
                  </div>
                </div>

                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-3.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-4.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-5.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-6.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-7.jpg" alt="" />
                  </div>
                </div>
                <div className="carousel-item d-block w-25">
                  <div className="bg-light p-4">
                    <img src="img/vendor-8.jpg" alt="" />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Vendor End  */}
    </>
  );
}
