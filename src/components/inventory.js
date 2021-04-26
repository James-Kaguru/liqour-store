const Inventory = () => {
    const products = [
        { id: 1, product_id: "R01", quantity: 15, src: '../assets/img1.jpeg', name: 'Bacardi Superioir (1 ltr)', price: 2100 ,description:""},
        { id: 2, product_id: "R02", quantity: 25, src: '../assets/img2.jpeg', name: 'Bacardi Black (1 ltr)', price: 2350 ,description:"Best Seller"},
        { id: 3, product_id: "R03", quantity: 48, src: '../assets/img3.jpeg', name: 'Bacardi Oakheart (750)', price: 2050 ,description:""},
        { id: 4, product_id: "R04", quantity: 65, src: '../assets/img3.jpeg', name: 'Captain Morgan Spiced (750 ml)', price: 1250 ,description:""},
        { id: 5, product_id: "R05", quantity: 40, src: '../assets/img3.jpeg', name: 'Captain Morgan Spiced Gold', price: 2000 ,description:""},
        { id: 6, product_id: "R06", quantity: 46, src: '../assets/img3.jpeg', name: 'Captain Morgan Black(1 ltr)', price: 2650 ,description:""},
        { id: 7, product_id: "R07", quantity: 41, src: '../assets/img3.jpeg', name: 'Old Monok', price: 1000 ,description:""},
        { id: 8, product_id: "R08", quantity: 15, src: '../assets/img3.jpeg', name: 'Ron Zacapa', price: 8500 ,description:""},
        { id: 9, product_id: "R09", quantity: 28, src: '../assets/img3.jpeg', name: 'Bacardi Lemon(750 ml)', price: 2500 ,description:"Best Seller"},
        { id: 10, product_id: "R10", quantity: 43, src: '../assets/img3.jpeg', name: 'Malibu (1 ltr)', price: 2150 ,description:""},
        { id: 11, product_id: "R11", quantity: 43, src: '../assets/img3.jpeg', name: 'Befeater Blood Orange', price: 2800 ,description:""},
        { id: 12, product_id: "G08", quantity: 96, src: '../assets/img3.jpeg', name: 'Best (750ml)', price: 750 ,description:""},
        { id: 13, product_id: "G09", quantity: 87, src: '../assets/img3.jpeg', name: 'Bombay Saphire', price: 2400 ,description:"Best Seller"},
        { id: 14, product_id: "G10", quantity: 39, src: '../assets/img3.jpeg', name: 'Gibsons Pink', price: 1600 ,description:""},
        { id: 15, product_id: "G11", quantity: 77, src: '../assets/img3.jpeg', name: 'Befeater Blood Orange', price: 2800 ,description:""},
        { id: 16, product_id: "G12", quantity: 54, src: '../assets/img3.jpeg', name: 'Gunpoder (700 ml)', price: 3500 ,description:""},
        { id: 17, product_id: "G13", quantity: 48, src: '../assets/img3.jpeg', name: 'Gordons Lemonn', price: 2700 ,description:""},
        { id: 18, product_id: "G14", quantity: 42, src: '../assets/img3.jpeg', name: 'Tanqueray Malacca (i ltr)', price: 3300 ,description:""},
        
        
    ]
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
                            <td>{price * quantity}</td>                    
                            
                        </tr>
                    ))}
                </tbody>
                

            </table>
        </section>
     );
}
 
export default Inventory;