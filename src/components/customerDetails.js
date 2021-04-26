import {Link} from 'react-router-dom'

const CustomerDetails = () => {
    const customer = [
        {id:1,name:"John",county:"Kiambu",town:"kiambu",houseDetails:"Kiambu street house number 3",number:"076578915",email:"John@gmail.com"},
        {id:2,name:"Mary",county:"Nairobi",town:"CBD",houseDetails:"waiyaki street house number 7",number:"0712658985",email:"Mary@gmail.com"},
        {id:3,name:"Hosea",county:"Nairobi",town:"Pangani",houseDetails:"moi avenue street house number 10",number:"0725698412",email:"Hosea@gmail.com"},
        {id:4,name:"Ian",county:"Nairobi",town:"CBD",houseDetails:"moi avenue street house number 1",number:"0798456325",email:"Ian@gmail.com"},
        {id:5,name:"Ken",county:"Nairobi",town:"Ngara",houseDetails:"ngara  street house number 2",number:"078565214",email:"Ken@gmail.com"},
        {id:6,name:"David",county:"Kiambu",town:"kiambu",houseDetails:"jomo street house number 5",number:"0745874956",email:"David@gmail.com"},
        {id:7,name:"Linda",county:"Kiambu",town:"kiambu",houseDetails:"landi  street house number 18",number:"0796852321",email:"Linda@gmail.com"},
    ]
    return ( 
        <section className="container text-center" style={{overflow:"scroll"}}>
            <p style={{fontSize:"2rem"}}>Product details</p>
            <hr style={{width:"25%",height:"2px",backgroundColor:"black"}}/>
            <table className="striped highlight" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>County</th>
                        <th>Town or City</th>
                        <th>House Number & Street name</th>
                        <th>Phone number</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map(({id,name,county,town,houseDetails,number,email}) => (
                        
                        <tr  key={id}>
                            <td>{name}</td>
                            <td>{county}</td>                    
                            <td>{town}</td>                    
                            <td>{houseDetails}</td>                    
                            <td>{number}</td>                    
                            <td>{email}</td>
                            <td><Link className="btn deep-orange accent-4" to={`/admin/customer-details/${id}`}>View order details</Link></td>                    
                            
                        </tr>
                    ))}
                </tbody>
                

            </table>
        </section>
     );
}
 
export default CustomerDetails;