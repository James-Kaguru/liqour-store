const FeaturedProducts = ({addToCart}) => {
    const products = [
        { id: 5, product_id: "G05", quantity: 48, src: '../assets/gin/Tanquery.jpg', name: 'Tanquery', price: 2000 ,description:""},
        { id: 6, product_id: "G06", quantity: 11, src: '../assets/gin/Hendricks.png', name: 'Hendricks Gin', price: 4300 ,description:""},
        { id: 7, product_id: "G07", quantity: 63, src: '../assets/gin/chrome.jpg', name: 'Chrome Gin (750 ml)', price: 700 ,description:""},
        { id: 8, product_id: "G08", quantity: 96, src: '../assets/gin/Best.jpg', name: 'Best (750ml)', price: 750 ,description:""},
        { id: 1, product_id: "R01", quantity: 15, src: '../assets/rum/kind-3.jpg', name: 'Bacardi Superioir (1 ltr)', price: 2100 ,description:""},
        { id: 2, product_id: "R02", quantity: 25, src: '../assets/rum/kind-2.jpg', name: 'Bacardi Black (1 ltr)', price: 2350 ,description:"Best Seller"},
        { id: 3, product_id: "R03", quantity: 48, src: '../assets/rum/kind-1.jpg', name: 'Bacardi Oakheart (750)', price: 2050 ,description:""},
        
    ]
    return ( 
        <div className="basic-grid">
            { products.map((product) => 
            <div className="shoping-item" key={product.id}>
                <img src={product.src} title={product.title} alt={product.description} />
                
                <p >{product.name}</p>
                <p >Ksh {product.price}</p>
                {product.description && <p className="green accent-4">{product.description}</p>}
                <button className="btn pink accent-3 waves-effect waves-light" onClick={() => addToCart(product)}>Add to cart</button>
            </div>
            
            )}            
        </div>
     );
}
 
export default FeaturedProducts;