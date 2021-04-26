import { useEffect, useState } from "react";

const ProductDetails = ({product}) => {
    const[images,SetImages] = useState([])
    const brandy = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        { id: 2, src: '../assets/img2.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const gin = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const rum = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const tequilla = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const vodka = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const whiskey = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const cream = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const beer = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const wine = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const extras = [
        { id: 1, src: '../assets/img1.jpeg', title: 'foo', description: 'bar' },
        
    ]
    const updateImages = () => {
        const newImages = images 
        // switch (product.id) {

        //     case 1:
        //         newImages.push(brandy)
        //         break;
                
        //     case 2:
        //         newImages.push(gin)
        //         break;
        //     case 3:
        //         newImages.push(rum)
        //         break;
        //     case 4:
        //         newImages.push(tequilla)
        //         break;
        //     case 5:
        //         newImages.push(vodka)
        //         break;
        //     case 6:
        //         newImages.push(whiskey)
        //         break;
        //     case 7:
        //         newImages.push(cream)
        //         break; 
        //     case 8:
        //         newImages.push(beer)
        //         break;
        //     case 9:
        //         newImages.push(wine)
        //         break; 
        //     case 10:
        //         newImages.push(extras)
        //         break; 
                         
        
        //     default:
        //         break;
        
            
        // }
        //SetImages(newImages)    
    }
    
    useEffect(() => {
        console.log(product)
    })
    return ( 
        
        <div className="basic-grid">
            {updateImages()}
            
        </div>
        
     );
}
 
export default ProductDetails;