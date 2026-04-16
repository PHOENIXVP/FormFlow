const ProductCard = ({ product }) => {
    console.log("Rendered:", product?.title); // debug
  
    return (
      <div>
        {product?.title}
      </div>
    );
  };

  export default ProductCard;