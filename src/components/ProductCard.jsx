import { Link } from "react-router-dom";

function ProductCard({ product, liked, toggleLike }) {
  return (
    <div className="card shadow hover-shadow h-100">
      <div className="img-wrapper">
        <img src={product.image} className="card-img-top" alt="" />

        <div className="icon-img" onClick={toggleLike}>
          <i
            className={liked ? "fa fa-heart text-danger" : "fa fa-heart-o"}
          ></i>
        </div>
      </div>

      <div className="card-body">
        <h6 className="card-title text-muted">{product.name}</h6>

        <p className="card-text">{product.descr}</p>
      </div>

      <Link to="/" className="stretched-link"></Link>
    </div>
  );
}

export default ProductCard;
