import {Link} from 'react-router-dom'

const Cart = ({cartItemsTotal, cartItems, deleteCartItem}) => {
    
    return (
        <div className="container" style={{marginTop:"30px"}}>
            
            {cartItemsTotal !== 0 && 
            <div className="text-center">
                <b>Delivery fee: Ksh 300</b>
                <hr style={{width:"50%", height:"1px",backgroundColor:"black",borderColor:"black"}}/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(cartItem => (
                        
                        <tr key={cartItem.cartItemId} className="">
                            <td>{cartItem.cartItemId}</td>
                            <td>{cartItem.name}</td>                    
                            <td>{cartItem.price}</td>                    
                            <td><button className="btn red darken-1" onClick={()=> deleteCartItem(cartItem)}>Delete</button></td>
                            
                        </tr>
                    ))}
                    
                        <tr>
                            <td></td>
                            <th>Subtotal</th>
                            <th>{cartItemsTotal}</th>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <th>Total</th>
                            <th>{cartItemsTotal +300}</th>
                            <td></td>
                        </tr>
                </tbody>
                

            </table>
            <Link className="btn red darken-1" style={{marginTop:"50px"}}to="/checkout">Proceed to Checkout</Link>
            </div>
            }
            {cartItemsTotal ===0 &&
                <div className="text-center card-panel red darken-1" style={{color:"white"}}>
                    nothing in cart
                </div>
            }
        </div>
      );
}
 
export default Cart;