import React from 'react';
import { useState,  useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/productActions'

function Product() {

    const {id} = useParams();

   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);
   
   const dispatch = useDispatch();
   
   const addProduct = (product) => {
       dispatch(addCart(product));
   }



   useEffect(() => {
       const getProduct = async () => {
           setLoading(true);
           const response = await fetch(`https://fakestoreapi.com/products/${id}`);
           setProduct(await response.json());
           setLoading(false);
           console.log(product)
       }
       getProduct();
   }, []);

  const Loading = () => {
      return (
          <>loading ....</>
      )
  }


   const ShowProduct = () => {
       return (<>
                 <div className="col-md-6 mt-5" key={product.id}>
                   <img src={product.image} alt={product.title} height='400px' width='400px' />
                   </div>
                   <div className="col-md-6 mt-5">
                      <h4 className="">{product.category}</h4>
                      <h1>{product.title}</h1>
                      <p>
                          Rating {product.rating && product.rating.rate}
                          <i className="fa fa-star"></i>
                      </p>
                      <h3> $ {product.price}</h3>
                      <p>{product.description}</p>
                      <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>add to Cart</button>
                      <NavLink to='/cart' className="btn btn-outline-dark ms-2">Go to Cart</NavLink>
                   </div>
             </>)
   }


  return (
     <div>
         <div className="container">
             <div className="row">
               {loading ? <Loading /> : <ShowProduct />}
             </div>

         </div>
     </div>
  )
}

export default Product;
