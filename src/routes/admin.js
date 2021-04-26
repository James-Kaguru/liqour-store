import {Link, useParams} from 'react-router-dom'
import Inventory from "../components/inventory"
import CustomerDetails from "../components/customerDetails"
import OrderDetails from "../components/orderDetails"
const Admin = () => {
    const {tab} = useParams()
    const {id} = useParams()
    const panels = [
        {id:"1", route:"inventory",name:"Inventory" ,src: '../assets/img1.jpeg'},
        {id:"2", route:"customer-details",name:"Customers details", src: '../assets/img1.jpeg'},
        // {id:"3", route: "order-details",name:"Customer Orders", src: '../assets/img1.jpeg'},
    ]
    const chooseBody = () => {
        
        if(tab === 'inventory'){
            return( <Inventory />)
            
        }
        if (tab === 'customer-details') {
            return (<CustomerDetails />)
        }
        if(id !== null){
            //
            return <OrderDetails id={id}/>
        }
        
    }
    return ( 
        <section>
        <nav className="nav-extended">
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        {panels.map(({id,name, route}) => (
                            <li className="tab" key={id} ><Link to={`/admin/${route}`} >{name}</Link></li>
                            
                        ))}
                    </ul>
                </div>
        </nav>
        {chooseBody()}
        
        </section>
     );
}
 
export default Admin;