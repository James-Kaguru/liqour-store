const Footer = () => {
    return ( 
        <footer className="basic-grid" >
            <ul className="list-unstyled">   
                <li>LIQOUR LIBRARY</li>             
                <li><i className="material-icons">facebook</i> </li>
                {/* <li>Tequila </li>
                <li>Vodka </li> */}
            </ul>
            <ul className="list-unstyled">   
                <li>DRINK CATEGORIES</li>             
                <li>Gin <i className="material-icons">navigate_next</i></li>
                <li>Tequila  <i className="material-icons">navigate_next</i></li>
                <li>Vodka  <i className="material-icons">navigate_next</i></li>
                <li>Whiskey  <i className="material-icons">navigate_next</i></li>
                <li>Beer  <i className="material-icons">navigate_next</i></li>
                <li>Wine <i className="material-icons">navigate_next</i></li>
            </ul>
            <ul className="list-unstyled">   
                <li>INFORMTATION</li>             
                <li>About Us <i className="material-icons">navigate_next</i></li>
                <li>Featured-products <i className="material-icons">navigate_next</i></li>
                <li>Terms and onditions <i className="material-icons">navigate_next</i></li>
                <li>Contus us <i className="material-icons">navigate_next</i></li>
                <li>FAQ's <i className="material-icons">navigate_next</i></li>
            </ul>
            <ul className="list-unstyled">   
                <li>HAVE ANY QUESTIONS</li>             
                <li><i className="material-icons">call</i> 0720738989 </li>
                <li><i className="material-icons">email</i> info@lilqourlibrary.com </li>
            </ul>
            
            <div style={{padding:"20px"}}><p>
	  Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved | Powered by Codex Technologies Ltd.</p> </div>
        </footer>
     );
}
 
export default Footer;