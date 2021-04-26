import { useEffect, useState } from "react";

const ProductDetails = ({addToCart, product}) => {
    const[products,SetProducts] = useState([])
    const brandy = [
        { id: 1, product_id: "B01", quantity: 45,src: '../assets/brandy/prod-1.jpg', name: 'Hennessy', price: 3800 ,description:""},
        { id: 2, product_id: "B02", quantity: 53,src: '../assets/brandy/prod-2.jpg', name: 'Richot (750 ml)', price: 1450 ,description:""},
        { id: 3, product_id: "B03", quantity: 10,src: '../assets/brandy/prod-3.jpg', name: 'Martel XO', price: 21000 ,description:""},
        { id: 4, product_id: "B04", quantity: 45,src: '../assets/brandy/prod-4.jpg', name: 'Viceroy (750 ml)', price: 1400 ,description:"New Arrival"},
        { id: 5, product_id: "B05", quantity: 10,src: '../assets/brandy/prod-5.jpg', name: 'Remy Martin (1 ltr)', price: 6200 ,description:""},
        { id: 6, product_id: "B06", quantity: 32, src: '../assets/brandy/prod_9.jpg', name: 'Martel VS (1 ltr)', price: 4500 ,description:""},
        { id: 7, product_id: "B07", quantity: 42,src: '../assets/brandy/prod_8.jpg', name: 'Jameson (1 ltr)', price: 2000 ,description:""},
        
    ]
    const gin = [
        { id: 1, product_id: "G01", quantity: 45, src: '../assets/gin/befeater_pink.jpg', name: 'Befeater Pink (750 ml)', price: 1900 ,description:""},
        { id: 2, product_id: "G02", quantity: 25, src: '../assets/gin/gordons.jpeg', name: 'Gordons Pink (750 ml)', price: 1600 ,description:""},
        { id: 3, product_id: "G03", quantity: 45, src: '../assets/gin/gilbeys.jpeg', name: 'Gibleys Gin (750 ml)', price: 1200 ,description:"Best Seller"},
        { id: 4, product_id: "G04", quantity: 36, src: '../assets/gin/Gordons.png', name: 'Gordons', price: 1600 ,description:""},
        { id: 5, product_id: "G05", quantity: 48, src: '../assets/gin/Tanquery.jpg', name: 'Tanquery', price: 2000 ,description:""},
        { id: 6, product_id: "G06", quantity: 11, src: '../assets/gin/Hendricks.png', name: 'Hendricks Gin', price: 4300 ,description:""},
        { id: 7, product_id: "G07", quantity: 63, src: '../assets/gin/chrome.jpg', name: 'Chrome Gin (750 ml)', price: 700 ,description:""},
        { id: 8, product_id: "G08", quantity: 96, src: '../assets/gin/Best.jpg', name: 'Best (750ml)', price: 750 ,description:""},
        { id: 9, product_id: "G09", quantity: 87, src: '../assets/gin/bmbay.jpg', name: 'Bombay Saphire', price: 2400 ,description:"Best Seller"},
        { id: 10, product_id: "G10", quantity: 39, src: '../assets/gin/gordons2.jpeg', name: 'Gibsons Pink', price: 1600 ,description:""},
        { id: 11, product_id: "G11", quantity: 77, src: '../assets/gin/beefeater_orange.jpg', name: 'Befeater Blood Orange', price: 2800 ,description:""},
        { id: 12, product_id: "G12", quantity: 54, src: '../assets/gin/gunpowder.jpg', name: 'Gunpowder (700 ml)', price: 3500 ,description:""},
        { id: 13, product_id: "G13", quantity: 48, src: '../assets/gin/gordonlemon.jpg', name: 'Gordons Lemonn', price: 2700 ,description:""},
        { id: 14, product_id: "G14", quantity: 42, src: '../assets/gin/tanquerym.jpg', name: 'Tanqueray Malacca (i ltr)', price: 3300 ,description:""},
        
    ]
    const rum = [
        { id: 1, product_id: "R01", quantity: 15, src: '../assets/rum/kind-3.jpg', name: 'Bacardi Superioir (1 ltr)', price: 2100 ,description:""},
        { id: 2, product_id: "R02", quantity: 25, src: '../assets/rum/kind-2.jpg', name: 'Bacardi Black (1 ltr)', price: 2350 ,description:"Best Seller"},
        { id: 3, product_id: "R03", quantity: 48, src: '../assets/rum/kind-1.jpg', name: 'Bacardi Oakheart (750)', price: 2050 ,description:""},
        { id: 4, product_id: "R04", quantity: 65, src: '../assets/rum/kind-4.jpg', name: 'Captain Morgan Spiced (750 ml)', price: 1250 ,description:""},
        // { id: 5, product_id: "R05", quantity: 40, src: '../assets/rum/img3.jpeg', name: 'Captain Morgan Spiced Gold', price: 2000 ,description:""},
        // { id: 6, product_id: "R06", quantity: 46, src: '../assets/rum/img3.jpeg', name: 'Captain Morgan Black(1 ltr)', price: 2650 ,description:""},
        { id: 7, product_id: "R07", quantity: 41, src: '../assets/rum/Old_Monk.jpeg', name: 'Old Monk', price: 1000 ,description:""},
        { id: 8, product_id: "R08", quantity: 15, src: '../assets/rum/ron.jpg', name: 'Ron Zacapa', price: 8500 ,description:""},
        { id: 11, product_id: "R11", quantity: 43, src: '../assets/rum/Macallan.jpg', name: 'Befeater Blood Orange', price: 2800 ,description:""},
        
    ]
    const tequilla = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const vodka = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const whiskey = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const cream = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const beer = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const wine = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const extras = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    
    
    useEffect(() => {
        switch (product[0].id) {
            case "1":
                SetProducts(brandy)
                break;
                
            case "2":
                SetProducts(gin)
                break;
            case "3":
                SetProducts(rum)
                break;
            case "4":
                SetProducts(tequilla)
                break;
            case "5":
                SetProducts(vodka)
                break;
            case "6":
                SetProducts(whiskey)
                break;
            case "7":
                SetProducts(cream)
                break; 
            case "8":
                SetProducts(beer)
                break;
            case "9":
                SetProducts(wine)
                break; 
            case "10":
                SetProducts(extras)
                break; 
                         
        
            default:
                break;
                        
        }
            
        //console.log(images)
    },[product])
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
 
export default ProductDetails;