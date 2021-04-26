import { useEffect, useState } from "react";

const OrderDetails = ({id}) => {
    const[products,SetProducts] = useState([])
   
    useEffect(() => {
        console.log("jim")
        
        switch (id) {
            case "1":   
                 
                SetProducts( [
                        { id: 7, product_id: "R07", quantity: 41, src: '../assets/img3.jpeg', name: 'Old Monok', price: 1000 ,description:""},
                        { id: 8, product_id: "R08", quantity: 15, src: '../assets/img3.jpeg', name: 'Ron Zacapa', price: 8500 ,description:""},
                        { id: 9, product_id: "R09", quantity: 28, src: '../assets/img3.jpeg', name: 'Bacardi Lemon(750 ml)', price: 2500 ,description:"Best Seller"},
                        
                    ])        
                break;
            case "2":  
                SetProducts( [
                    { id: 1, product_id: "B01", quantity: 45,src: '../assets/img1.jpeg', name: 'Hennessy', price: 3800 ,description:""},
                    { id: 2, product_id: "B02", quantity: 53,src: '../assets/img2.jpeg', name: 'Richot (750 ml)', price: 1450 ,description:""},
                    { id: 3, product_id: "B03", quantity: 10,src: '../assets/img3.jpeg', name: 'Martel XO', price: 21000 ,description:""},
                    { id: 4, product_id: "B04", quantity: 45,src: '../assets/img4.jpeg', name: 'Viceroy (750 ml)', price: 1400 ,description:"New Arrival"},
                    
                ])     
                break;
            case "3":    
                SetProducts( [
                    { id: 7, product_id: "R07", quantity: 41, src: '../assets/img3.jpeg', name: 'Old Monok', price: 1000 ,description:""},
                    { id: 8, product_id: "R08", quantity: 15, src: '../assets/img3.jpeg', name: 'Ron Zacapa', price: 8500 ,description:""},
                    { id: 9, product_id: "R09", quantity: 28, src: '../assets/img3.jpeg', name: 'Bacardi Lemon(750 ml)', price: 2500 ,description:"Best Seller"},
                    
                ])     
                break;
            case "4":   
                SetProducts( [
                    { id: 3, product_id: "G03", quantity: 45, src: '../assets/gin/gilbeys.jpeg', name: 'Gibleys Gin (750 ml)', price: 1200 ,description:"Best Seller"},
                    { id: 4, product_id: "G04", quantity: 36, src: '../assets/gin/Gordons.png', name: 'Gordons', price: 1600 ,description:""},
                    { id: 5, product_id: "G05", quantity: 48, src: '../assets/gin/Tanquery.jpg', name: 'Tanquery', price: 2000 ,description:""},
                    { id: 6, product_id: "G06", quantity: 11, src: '../assets/gin/Hendricks.png', name: 'Hendricks Gin', price: 4300 ,description:""},
                    { id: 7, product_id: "G07", quantity: 63, src: '../assets/gin/chrome.jpg', name: 'Chrome Gin (750 ml)', price: 700 ,description:""},
            
                ])     
                break;
            case "5":   
                SetProducts( [
                    { id: 3, product_id: "G03", quantity: 45, src: '../assets/gin/gilbeys.jpeg', name: 'Gibleys Gin (750 ml)', price: 1200 ,description:"Best Seller"},
                    { id: 4, product_id: "G04", quantity: 36, src: '../assets/gin/Gordons.png', name: 'Gordons', price: 1600 ,description:""},
                    { id: 5, product_id: "G05", quantity: 48, src: '../assets/gin/Tanquery.jpg', name: 'Tanquery', price: 2000 ,description:""},
                    { id: 6, product_id: "G06", quantity: 11, src: '../assets/gin/Hendricks.png', name: 'Hendricks Gin', price: 4300 ,description:""},
                    { id: 7, product_id: "G07", quantity: 63, src: '../assets/gin/chrome.jpg', name: 'Chrome Gin (750 ml)', price: 700 ,description:""},
            
                ])
                break;
            case "6":
                SetProducts( [
                    { id: 5, product_id: "G05", quantity: 48, src: '../assets/gin/Tanquery.jpg', name: 'Tanquery', price: 2000 ,description:""},
                    { id: 6, product_id: "G06", quantity: 11, src: '../assets/gin/Hendricks.png', name: 'Hendricks Gin', price: 4300 ,description:""},
                    { id: 7, product_id: "G07", quantity: 63, src: '../assets/gin/chrome.jpg', name: 'Chrome Gin (750 ml)', price: 700 ,description:""},
            
                ])       
                break;
            case "7":
                SetProducts( [
                    { id: 10, product_id: "G10", quantity: 39, src: '../assets/gin/gordons2.jpeg', name: 'Gibsons Pink', price: 1600 ,description:""},
                    { id: 11, product_id: "G11", quantity: 77, src: '../assets/gin/beefeater_orange.jpg', name: 'Befeater Blood Orange', price: 2800 ,description:""},
                    { id: 12, product_id: "G12", quantity: 54, src: '../assets/gin/gunpowder.jpg', name: 'Gunpowder (700 ml)', price: 3500 ,description:""},
                    
                ])       
                break;
            default:
                break;
        }
    },[id])
    return ( 
        <section className="container text-center">
            <p style={{fontSize:"2rem"}}>Product details</p>
            <hr style={{width:"25%",height:"2px",backgroundColor:"black"}}/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({id,name,quantity,price}) => (
                        
                        <tr key={id} className="">
                            <td>{name}</td>
                            <td>{quantity}</td>                    
                            <td>{price}</td>                    
                            
                        </tr>
                    ))}
                </tbody>
                

            </table>
        </section>
     );
}
 
export default OrderDetails;