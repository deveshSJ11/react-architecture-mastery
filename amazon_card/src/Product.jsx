import "./Product.css";
import Price from "./Price";

function Product({title,idx}) {
    let oldPrices = ["11,286", "10,440", "1390","750"];
    let newPrices = ["9,850", "8,905", "1050", "580"];
    
    let description = [
["8,000 DPI","5 Programmable buttons"],
["Intuitive surface", "Designed for iPad Pro"],
["Designed for iPad Pro","Intuitive Surface"],
["Wireless","Optical Orientation"]
];

let images = [
        "/images/logitech-mouse.jpg",
        "/images/apple-pencil.jpg", 
        "/images/zebronics-headphone.jpg",
        "/images/petronics-toad.jpg"
    ];

    return (
        <div className="Product">
            <img src={images[idx]} alt={title} className="product-image" />
            <h4>{title}</h4>
            <p >{description[idx][0]}</p>
            <p >{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;