import React, { useEffect, useState } from 'react';
import Product from './../Product/Product';
//import {Data} from './../Data';
import styles from './Products.module.css';
import { connect } from 'react-redux';
import {getItems} from './../../redux/actions/itemActions';
import {addToCart} from './../../redux/actions/itemActions';
import {getTotals} from './../../redux/actions/itemActions';

const Products = (props) => {

    //const [state, setState] = useState(Data)
    useEffect(() => {
        props.getItems();
    }, [])

    const AddToCart = (id) => {
        debugger
        props.addToCart(id);
        props.getTotals();
    }

    const {items} = props.item;
    debugger
    return (
        <div className='container'>
            <div className={styles.products}>
                {
                    items.map((item) => <Product key={item.id + item.title} AddToCart={()=>AddToCart(item.id)} isInCart={item.isInCart} data={item}/>
                    )
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        item: state.item
    }
}


export default connect(mapStateToProps, {getItems, addToCart, getTotals})(Products); 
