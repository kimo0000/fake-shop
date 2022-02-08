import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


 function Products() {
   
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState(data);
   const [loading, setLoading] = useState(false);
   let componentMounted = true
   
   useEffect(() => {
     const getProducts = async () => {
       setLoading(true);
       const response = await fetch("https://fakestoreapi.com/products");
       if (componentMounted) {
         setData(await response.clone().json());
         setFilter(await response.json());
         setLoading(false);
        }
        console.log(data);
       return () => {
         componentMounted = false
       }
     };
     getProducts();
   }, []);

  const Loading = () => {
      return (<div>
                loading....
              </div>)
  };


  const filterProduct = (cat) => {
      const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
  }

  const ShowProducts = () => {
      return(<>
              <div className="buttons text-center mt-4">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
              </div>
              {
                  filter.map((product) => {
                     return (
                            <div key={product.id} className="col-md-3 mt-5" >
                               <div className="card text-center" >
                                 <img src={product.image} className="card-img-top" alt={product.title} height='350px' />
                                 <div className="card-body">
                                   <h5 className="card-title fw-bolder mb-0">{product.title.substring(0, 10)}...</h5>
                                   <p className="card-text fw-bold">$ {product.price}</p>
                                   <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">By Now</NavLink>
                                 </div>
                               </div>
                           </div>)
                  })
              }
           </>
      )
  };


  return (
        <div className="container mt-5">
            <div className="row">
                <div className='col-md-12'>
                    <h1 className='text-center display-5 fw-bolder'>
                        Latest Products
                    </h1>
                    <hr />
                </div>
                <div className=" row d-flex justify-content-center">
                     {loading ? <Loading /> : <ShowProducts/>}
                </div>
            </div>
        </div>
  )
}

export default Products;
