import React from 'react'
import styles from './../Products/Products.module.css';
import s from './../Product/Product.module.css';
import {Link} from 'react-router-dom';


const Product = (props) => {
    const {data, AddToCart, isInCart} = props;
    console.log(props.data.id);
    debugger
    return (
        <div className={styles.product_item}>
                <div className={s.products_title}><strong>{data.title}</strong></div>
                <Link to={`/details/${data.id}`}>
                <div className={styles.products_img}>
                    <img src={data.img} alt={data.title}/>
                </div>
                </Link>
                <div className={s.products_price}>
                    Price: {new Intl.NumberFormat().format(data.price)}
                </div>
                <div className={s.products_btn}>
                    <button onClick={AddToCart} className={`btn btn-success add__btn ${s.addbtn}`} >add to cart</button>
                </div>
                <br/>
                {
                    isInCart ?
                    <div className={s.alreadyIn}>
                        Already in the cart
                    </div>
                    :
                    <div></div>
                }

            </div>
    )
}

export default Product
