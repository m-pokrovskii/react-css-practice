import React, { useState, useEffect, useRef } from "react";
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
	
		useEffect(() => {
			let ignore = false;
			const fetchProducts = async (skip) => {
				setLoading(true);
				try {
					console.log('loadin');
					const response = await fetch(
						`https://dummyjson.com/products?limit=5&skip=${skip}`
					);
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					if (!ignore) {
						setProducts((prevProducts) => [...prevProducts, ...data.products]);
					}	
				} catch (error) {
					console.error("Error fetching products:", error);
				} finally {
					setLoading(false);
				}
			};

			fetchProducts(skip);
			return () => {
				ignore = true;
			}
    }, [skip]);

  const loadMoreProducts = () => {
		console.log(skip);
    const newSkip = skip + 5;
    setSkip(newSkip);
  };

  return (
    <div className="LoadMoreWrap">
      <h1 className="text-center">Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
						<div className="product-image">
							<img src={product.thumbnail} alt={product.title} />
						</div>
            <div className="product-content">
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<p>Price: ${product.price}</p>
						</div>
          </div>
        ))}
      </div>
			<div className="product-load-more-btn">
				<button onClick={loadMoreProducts} disabled={loading || products.length >= 20 ? 'disabled' : ''}>
					{products.length >= 20 ? 'Limit is 20 products' : (loading ? 'Loading' : 'Load More')}
				</button>
			</div>
    </div>
  );
};

export default App;