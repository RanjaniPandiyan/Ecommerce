import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExploreProducts from "../components/ExploreProducts";
function Home() {
  const banners = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];
  const [data, setData] = useState([]);
  //axios
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("/data.json");
        setData(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  // filter products
  const menpro = data?.filter((items) => items.category === "Mens");
  const womenpro = data?.filter((items) => items.category === "Womens");
  const kidspro = data?.filter((items) => items.category === "Kids");
  return (
    <div id="home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100"
                style={{ height: 500 }}
                alt="..."
                key={index}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5" style={{ fontFamily: "cursive" }}>
        <div className="text-black text-center mb-5" id="men">
          <h2>Mens Collection</h2>
        </div>
        <div
          className="container shadow"
          style={{ backgroundColor: "#ccffff", borderRadius: 30 }}
        >
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 p-2 pb-4">
            {menpro.slice(0, 4).map((items) => (
              <ExploreProducts id={items.id} images={items.image} />
            ))}
          </div>
          <div className="d-flex justify-content-center pb-4">
            <Link to="/products/Mens">
              <button className="btn btn-warning hover-shadow">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5" style={{ fontFamily: "cursive" }}>
        <div className="text-black text-center mb-5" id="women">
          <h2>Womens Collection</h2>
        </div>
        <div
          className="container shadow"
          style={{ backgroundColor: "#ccffff", borderRadius: 30 }}
        >
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 p-2 pb-4">
            {womenpro.slice(0, 4).map((items) => (
              <ExploreProducts id={items.id} images={items.image} />
            ))}
          </div>
          <div className="d-flex justify-content-center pb-4">
            <Link to="/products/Womens">
              <button className="btn btn-warning hover-shadow">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5" style={{ fontFamily: "cursive" }}>
        <div className="text-black text-center mb-5" id="kids">
          <h2>Kids Collection</h2>
        </div>
        <div
          className="container shadow"
          style={{ backgroundColor: "#ccffff", borderRadius: 30 }}
        >
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 p-2 pb-4">
            {kidspro.slice(0, 4).map((items) => (
              <ExploreProducts id={items.id} images={items.image} />
            ))}
          </div>
          <div className="d-flex justify-content-center pb-4">
            <Link to="/products/Kids">
              <button className="btn btn-warning hover-shadow">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
