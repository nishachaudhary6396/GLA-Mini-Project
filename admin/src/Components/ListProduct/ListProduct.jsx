import React, { useState, useEffect } from 'react'; // Import React hooks
import './ListProduct.css';
import cross_icon from '../../assets/hand_icon.png'; // Fix the import path

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]); // Initialize state

    // Function to fetch product data
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    // Function to remove a product
    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        await fetchInfo(); // Refresh the product list
    };

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product, index) => (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img
                            onClick={() => remove_product(product.id)}
                            className="listproduct-remove-icon"
                            src={cross_icon}
                            alt=""
                        />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
