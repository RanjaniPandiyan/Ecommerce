function ExploreProducts({ id, images }) {
  return (
    <div className="col" key={id}>
      <img
        src={images}
        className="img-fluid w-100 hover-shadow"
        alt=""
        style={{
          height: "200px",
          borderRadius: "30px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ExploreProducts;
// this is destructuring props
