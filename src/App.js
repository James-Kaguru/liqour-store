import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UseAppVariables from './useAppVariables';
import Home from './routes/home';
import Products from './routes/products';
import Cart from './routes/cart';
import Admin from './routes/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Checkout from './routes/checkout';


function App() {

  const {brandName, products,links, cartItems,cartItemsTotal,addToCart,deleteCartItem,cartItemsCount} = UseAppVariables();
  
  return (
    <Router>
      <Navbar links={links} brandName={brandName} cartItemsCount={cartItemsCount}/>
      <Switch>
        <Route exact path="/"><Home addToCart={addToCart} products={products}/></Route>
        <Route exact path="/products/:name"><Products products={products}addToCart={addToCart}/></Route>
        <Route exact path="/cart"><Cart cartItems={cartItems} cartItemsTotal={cartItemsTotal} deleteCartItem={deleteCartItem}/></Route>
        <Route exact path="/checkout"><Checkout cartItems={cartItems} total={cartItemsTotal}/></Route>        
        <Route exact path="/admin/:tab"><Admin /></Route>        
        <Route exact path="/admin/customer-details/:id"><Admin /></Route>        
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
