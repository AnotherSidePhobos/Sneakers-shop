import * as types from './../actions/typesActions';

const initialState = {
    items: [
        {
            id: 1,
            img: "https://static.street-beat.ru/upload/resize_cache/iblock/a00/500_500_1/a005875a32e02c9a0f1de79ad5c31249.jpg",
            title: "Nike",
            price: "7560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 2,
            img: "https://static.street-beat.ru/upload/resize_cache/iblock/5d8/500_500_1/5d8cf7f14523cacd204de6a04ab68b96.JPG",
            title: "Adidas",
            price: "12560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 3,
            img: "https://cdn1.ozone.ru/s3/multimedia-m/c500/6049025758.jpg",
            title: "Puma",
            price: "11560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 4,
            img: "https://images.ru.prom.st/796044409_w640_h640_krossovki-uniseks-nike.jpg",
            title: "Jordan",
            price: "22560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 5,
            img: "https://novosibirsk.step-man.com/wp-content/uploads/2020/06/05-07-2019_asics_gelkayano5360_p-1-500x500.jpg",
            title: "Asics",
            price: "7560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 6,
            img: "https://step-man.com/wp-content/uploads/2019/10/z247_1-500x500-500x500.jpg",
            title: "New balance",
            price: "7560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        },
        {
            id: 7,
            img: "https://босяк.рус/image/cache/catalog/kedy/vysokie/bordovye/bordovyye-vysokiye-kedy-converse-all-star-burgundy%282%29-500x500.jpg",
            title: "Converse",
            price: "7560",
            details: "Lorem ipsum in nec pharetra lorem, enim quam et proin fusce eros at donec magna donec vulputate bibendum sed. Eu pellentesque rutrum malesuada ut a, urna pharetra duis orci sit duis odio eu in sagittis. Nam, vulputate mattis amet eget mauris arcu congue justo metus enim diam gravida justo gravida proin metus non sodales justo. Vivamus morbi lectus commodo amet, ornare nulla sagittis integer nam ornare pellentesque maecenas odio porta integer tellus, risus fusce non tempus, congue donec adipiscing. Morbi tempus sodales nulla sagittis tempus ipsum — lectus sodales mauris maecenas tempus lorem quisque. Non, arcu tellus porta — risus nulla in, sit rutrum enim sagittis magna enim nam porta ultricies.",
            count: 1,
            isInCart: false
        }
    ],
    cart: [],
    total: 0,
}
export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ITEMS:
            return{ 
                ...state
            }
        case types.ADD_ITEMS:
debugger
            let check =state.cart.find(item=>item.id===action.payload);
            
            if(!check){
                let items = state.items.filter(item=>item.id===action.payload);
                let itemsCart = [...state.cart, ...items]
        
                return{
                    ...state,
                    cart:itemsCart
                }
            }
        
            else{
                let items = state.items.filter(item=>item.id===action.payload);
        
                items.forEach(item=>{
                    item.isInCart=true
                })
        
                return{
                    ...state
                }
            }
        case types.DELETE_ITEMS:
    
            const filteredCart = state.cart.filter(item => item.id !== action.payload);
            
            return{
                ...state,
                cart:filteredCart
            } 


        case types.INCREASE_ITEMS :
    
            let incResults = state.cart.map(item=>{
                if(item.id===action.payload){
                    item={...item, count:item.count +1}
                }
                return item
            })
    
            return{
                ...state,
                cart:incResults
    
            }
    
        case types.DECREASE_ITEMS:
            
        let decResults = state.cart.map(item=>{
            if(item.id===action.payload){
                item={...item, count:item.count===1 ?item.count=1:item.count - 1}
            }
            return item;
        })

        return{
            ...state,
            cart:decResults

            }

        case types.TOTAL_ITEMS:

            const totals = state.cart.reduce((prev, item)=>{
                return prev + (item.price * item.count)
            },0)
    
            return{
                ...state,
                total:totals
            }

        case types.DETAILS:
            
            return{
                ...state
            }
    
        default:
            return state
    }
}