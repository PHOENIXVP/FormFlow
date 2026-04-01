function ProductList({ products }) {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Click {count}</button>
  
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => console.log(product.id)} // ❌ new function each time
          />
        ))}
      </>
    );
  }