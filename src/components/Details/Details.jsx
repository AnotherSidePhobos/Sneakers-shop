import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {Data} from './../Data';
import s from './Details.module.css';
import {addToCart, getTotals} from './../../redux/actions/itemActions';


const Details = (props) => {

    console.log(props);
    debugger

    const params = useParams()
    let detailsProduct = Data.find((item) => item.id === Number(params.id));


    const AddToCart = (id) => {
        props.addToCart(id);
        props.getTotals();
    }
    return (
        <div className='container'>
            <div className={s.detail}>
                <div className={s.detail_title}>
                    <h2>{detailsProduct.title}</h2>
                </div>
                <div className={s.picAndDisc}>
                    <div className={s.pic}>
                        <img className={s.detail_img} src={detailsProduct.img} alt={detailsProduct.title}/>
                    </div>
                    <div className={s.detail_price}>
                        {new Intl.NumberFormat().format(detailsProduct.price)} RUB
                    </div>
                    <div className={s.desc}>
                        <span>{detailsProduct.details}</span>
                    </div>
                    <div className={s.btns}>
                        <div>
                            <button onClick={() => AddToCart(detailsProduct.id)} className='btn btn-success'>add to cart</button>
                        </div>
                        <div>
                            <button onClick={() => props.history.goBack()} className='btn btn-danger'>back</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

const mapDispatchToProps = (state) => {
    return{

    }
}

export default connect(mapDispatchToProps, {addToCart, getTotals})(Details);
