import { ADD } from "./actionTypes"

const init=[
    {id:Math.random() , image:"https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop/en_AU/product/059069724/1/org.png",
    name:"Google Play Gift Card",Price:"10$",rating:5,
    },
]

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD:
            return [...state,payload] 
    
        default:
            return state
    }
}

export default reducer