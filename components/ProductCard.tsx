const ProductCard = ({ product, onClick }) => {
    console.log("Rendered:", product.name); // debug
  
    return (
      <div onClick={onClick}>
        {product.name}
      </div>
    );
  };