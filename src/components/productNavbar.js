import { Link } from "react-router-dom";

const ProductNavbar = ({products}) => {
    
    return ( 
        <nav className="nav-extended">
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        {products.map(({id,name}) => (
                            <li className="tab" key={id} ><Link to={`/products/${name}`} >{name}</Link></li>
                            
                        ))}
                    </ul>
                </div>
        </nav>
     );
}
 
export default ProductNavbar;