import { useState } from "react";

const UseAppVariables = () => {
    const brandName ="Liqour Library"
    const products = [
        {id:"1",name:"Brandy" ,src: '../assets/img1.jpeg'},
        {id:"2",name:"Gin", src: '../assets/gin/Hendricks.png'},
        {id:"3",name:"Rum", src: '../assets/rum/kind-3.jpg'},
        // {id:"4",name:"Tequilla", src: '../assets/img1.jpeg'},
        // {id:"5",name:"Vodka", src: '../assets/img1.jpeg'},
        // {id:"6",name:"Whiskey", src: '../assets/img1.jpeg'},
        // {id:"7",name:"Cream", src: '../assets/img1.jpeg'},
        // {id:"8",name:"Beer", src: '../assets/img1.jpeg'},
        // {id:"9",name:"Wine", src: '../assets/img1.jpeg'},
        // {id:"10",name:"Extras", src: '../assets/img1.jpeg'}
    ]
    const links = [
        {href: "/",name: "Home", id: "1"},
        // {href: "/about",name: "About", id: "2"},
        {href: "/products/featured-products",name: "Products",id: "3"},
        {href: "/cart",name: "Cart", id: "4"},
        // {href: "/contact-us",name: "Contact us", id: "5"},
        {href: "/admin/inventory",name: "Admin Panel", id: "6"},
    ]
    const [cartItems,SetCartItems] = useState([])
    const [cartItemsId,SetCartItemsId] = useState(0)
    const [cartItemsCount,SetCartItemsCount] = useState(0)
    const [cartItemsTotal,SetCartItemsTotal] = useState(0)
    const addToCart = ({product_id,name,price}) => {
        //console.log(id,title)
        SetCartItemsTotal(cartItemsTotal+price)
        SetCartItemsId(cartItemsId + 1)
        SetCartItemsCount(cartItemsCount + 1)
        let newCartItem = cartItems
        let newcartItemId= cartItemsId
        newCartItem.push({cartItemId:newcartItemId,product_id,name,price})
        SetCartItems(newCartItem)
        //console.log(cartItems)
      }
      const deleteCartItem = (product) => {
        SetCartItemsCount(cartItemsCount - 1)
        SetCartItemsTotal(cartItemsTotal-product.price)
        let newCartItem = cartItems.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
        SetCartItems(newCartItem)
      }
    
    return ( {brandName, products,links, cartItems,cartItemsId,cartItemsTotal,addToCart,deleteCartItem,cartItemsCount}  );
}
 
export default UseAppVariables;