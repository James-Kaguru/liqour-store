import ProductNavbar from "../components/productNavbar"
import FeaturedProducts from '../components/featuredProducts'
import { useParams } from "react-router-dom";
import ProductDetails from "../components/productsDetails";
const Products = ({addToCart,products}) => {
    const {name} = useParams()
    
    const chooseBody = () => {
        if(name === 'featured-products'){
            return( <FeaturedProducts addToCart={addToCart}/>)
            
        }
        else {
            return (<ProductDetails addToCart={addToCart} product={products.filter((product) => product.name === name)}/>)
        }
    }
    return ( 
        <section>
            <ProductNavbar products={products}/>
            <main style={{marginTop:"10px"}}>
                {chooseBody()}
                
            </main>
            
        </section>
     );
}

 
export default Products;