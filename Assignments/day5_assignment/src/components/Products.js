import { useEffect ,  useState} from "react";
// eslint-disable-next-line
import axios  from "axios";
// import Form from "./Form";
// import CourseList from "./CourseList";
// import {
//     Switch,
//     Route,
   
//     useRouteMatch} from "react-router-dom";

const Products =()=>{

    // let match = useRouteMatch();
    // eslint-disable-next-line
    const [addedProducts, addProducts]  = useState([])
    const [products, setProducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState({});

    const appendProducts =() =>{
        let temp = [...addedProducts, selectedProduct]
        addProducts(temp)
        
        console.log(addedProducts)
    }
    // const getCourseFromChild = (course)=>{
    //     setselectedProduct(course);
        
        
    // }
    

    useEffect(() => {
        
    
    axios.get('http://localhost:6700/products')
  .then((data)=>{
    setProducts(data.data) 
   
    
  })
      }, []);


    return(
        <div>
            <div>
                {products?<div>
                    Products :
                    {products.map(item=>{
                        return(
                            <div>
                            
                              Product Name : {item.name} || 
                           Product Id : {item.productId}   
                           <div>
                            <button
                            onClick = {()=>{
                                setselectedProduct(item)
                                appendProducts()
                            }}
                            >Add Product to my list</button></div>
                            </div>
                        )
                    })}
                </div>:null}
            </div>


        <div><p>Products in my list : </p>
                {addedProducts.length>0?
            <div>{
                addedProducts.map(item=>{
                    return(
                      <div>
                            Product Name : {item.name} || 
                            Product Id : {item.productId}
                            </div>
                    )
                })
                }</div>:null    
            }
        </div>
        </div>
    );
};

export default Products;
