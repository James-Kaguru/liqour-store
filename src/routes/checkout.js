import { useEffect,useState } from "react";

const Checkout = ({cartItems, total}) => {
    const [name,SetName] = useState("")
    const [message,SetMessage] = useState("")
    useEffect(() => {
        const M = window.M
        M.AutoInit();
        
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const cartBody = {cartItems,customerDetails:{total,name,message}}
        //console.log(cartBody)
        // fetch("/api/cart", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(cartBody)
        // }).then((response) =>  response.json())
        // .then((data) => console.log(data))
    }
    return ( 
        <section>
            
            <form className="container text-center" style={{marginTop:"30px"}} onSubmit={handleSubmit}>
                <label >Name:</label><br/>
                <input 
                className ="input-text" 
                type="text" 
                required
                placeholder ="Name"
                value={name}
                onChange = {(e) => SetName(e.target.value)}
                /><br/>
                <label >County:</label><br/>
                <input 
                className ="input-text" 
                type="text"
                required 
                placeholder ="County"
                // value={message}
                // onChange = {(e) => SetMessage(e.target.value)}
                />
                <label >Town or City:</label><br/>
                <input 
                className ="input-text" 
                type="text"
                required 
                placeholder ="Town or City"
                // value={message}
                // onChange = {(e) => SetMessage(e.target.value)}
                />
                <label >House Number & Street Name:</label><br/>
                <input 
                className ="input-text" 
                type="text"
                required 
                placeholder ="House Number & Street Name"
                // value={message}
                // onChange = {(e) => SetMessage(e.target.value)}
                />
                <label >Phone number:</label><br/>
                <input 
                className ="input-text" 
                type="text"
                required 
                placeholder ="Phone number"
                // value={message}
                // onChange = {(e) => SetMessage(e.target.value)}
                />
                <label >Email address:</label><br/>
                <input 
                className ="input-text" 
                type="text"
                required 
                placeholder ="Email address"
                // value={message}
                // onChange = {(e) => SetMessage(e.target.value)}
                />
                
                
                <button className="btn waves-effect waves-light" type="submit">Submit</button>

            </form>
        </section>
     );
}
 
export default Checkout;