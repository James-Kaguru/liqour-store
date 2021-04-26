import {Link} from 'react-router-dom'
const productCategories = ({products}) => {
    
    return ( 
        <div className="basic-grid">
            { products.map(({id, name, src}) => 
            <Link className="text-center" style={{color:"black"}} key={id} to={`/products/${name}`}>
                
                <img className="rounded-image " src={src} alt={name} />
                <p style={{fontSize:"1.5rem"}}>{name}</p>
            </Link>
            
            )}
            
        </div>
     );
}
 
export default productCategories;