import {Link} from 'react-router-dom'
import ProductCategories from '../components/productCategories'
import FeaturedProducts from '../components/featuredProducts'

const Home = ({addToCart,products}) => {
    
    return ( 
        <section>
            <div id="intro" style={{backgroundImage: `url(./assets/home-wallpaper.jpg)`}}>
                <div>
                    <p>Good Drinks <br/>For <br/>Good Memories</p>                    
                    <Link to='/products/featured-products'className="deep-orange accent-4 waves-effect waves-light btn-large">Order Now</Link>
                </div>                
            </div>
            <div id="content-2" className="row deep-orange accent-4">
                <div className="col m4 ">
                    <p style={{color:"white",fontSize:"1.5rem"}} className="text-white">ONLINE SUPPORT 24/7</p>
                    <p className="opacity-true">Whenever you have any inquiries or questions or a complain our customer care service is available 24/7 to listen to you.</p>
                </div>
                <div className="col m4">
                    <p style={{color:"white",fontSize:"1.5rem"}} className="text-white">SECURE CHECKOUT</p>
                    <p className="opacity-true">We've made sure your data is safe and secure from any third parties access with our end-end encryption.</p>
                </div>
                <div className="col m4 ">
                    <p style={{color:"white",fontSize:"1.5rem"}} className="text-white">FREE DELIVERY IN CBD</p>
                    <p className="opacity-true">Any order made within Nairobi the delivery will done free of charge.</p>
                </div>
            </div>
            <div className="text-center">
                <p style={{fontSize:"2.3rem"}}>Drink Categories</p>
                <ProductCategories products={products}/>
            </div>
            <hr style={{width:"50%", height:"2px",backgroundColor:"black"}}/>
            <div className="content-4 text-center">
                <p style={{fontSize:"1.5rem", fontStyle:"italic",color:"red"}}>Our delighful offerings</p>
                <b style={{fontStyle:"italic"}}>Tastefully Yours</b>
                
                <FeaturedProducts addToCart={addToCart}/>
                {/* <Link to='/products/featured-products'className="deep-orange accent-4 waves-effect waves-light btn-large">View a</Link> */}

            </div>
        </section>
     );
}
 
export default Home;