import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({links, brandName,cartItemsCount}) => {
    useEffect(() => {
        const M = window.M
        const elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems, {});
    },[])
    const OutputLists = () => {
        return (
            links.map(link => (
                <li key={link.id}><Link to={link.href}>{link.name}</Link></li>
            ))
        )
    }
    return ( 
        <section>
            <nav className="nav-wrapper deep-orange accent-4">
                <div className="container">
                    <Link to='/' className="brand-logo">{brandName}</Link>
                    
                    <Link to='#'data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <span className="right"style={{position:"relative",marginRight:"1px"}}> <i className="left material-icons" style={{height: "56px",lineHeight: "56px"}}>shopping_cart</i><span id="cart-number">{cartItemsCount}</span></span>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {OutputLists()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="slide-out">
            <li>
                <Link className="sidenav-close" to='#'>
                <i className="material-icons">close</i>
                </Link></li>
            {OutputLists()}
            </ul>
        </section>
     );
}
 
export default Navbar;