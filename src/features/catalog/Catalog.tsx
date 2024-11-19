import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
//import { Product } from "../../app/models/product";
//import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";






export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] =useState(true);
    // useEffect(() => {
    //     fetch('https://localhost:7224/api/products')
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    // }, [])
  
    useEffect(() => {
      agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])
  
    if (loading) return <LoadingComponent message='Loading products...' />
  
    // function addProduct() {
    //     setProducts(prevState => [...prevState,
    //        { 
    //           id: prevState.length + 101,
    //           name: 'product' + (prevState.length + 1),
    //           price:  (prevState.length * 100) + 100,
    //           brand:  'some brand',
    //           description:  '',
    //           pictureUrl: '',
    //           quantityInStock: 0,
    //           type:''
    //        }])
    // }
  
  
    return (
      <>
      
      <CssBaseline></CssBaseline>
  
          <ProductList products={products} />       
  
          {/* <Button variant='contained' onClick={addProduct}> Add more</Button> */}
      </>
    )
  }