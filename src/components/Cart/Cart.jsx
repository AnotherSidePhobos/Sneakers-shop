import React, { useEffect, useState } from 'react'
//import {Data} from './../Data';
import s from './../Cart/Cart.module.css';
import { connect } from 'react-redux';
import {deleteItem, increaseItem, decreaseItem, getTotals} from './../../redux/actions/itemActions';

const Cart = (props) => {


    //const [cart, setCart] = useState(Data)
debugger
    const {cart} = props.item


    useEffect(() => {

        //props.getTotals();


    }, [])
    
    
    return (
        <div className='cart-items'>

        {cart.length === 0 ?

         <h3> There is not items in the cart</h3> 
            :
            <table className={s.table} cellPadding={10}>
            <thead>
                <tr>
                    <td>name</td>
                    <td>image</td>
                    <td>price</td>
                    <td>amount</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            {
                cart.map((item) => (
            <tbody>
                <tr className={s.tr}>
                    <td>{item.title}</td>
                    <td><img className={s.image__min} src={item.img}/></td>
                    <td>{new Intl.NumberFormat().format(item.price * item.count)}</td>
                    <td>{item.count && <span>{item.count}</span>}</td>
                    <td><button onClick={() => 
                        {
                            props.decreaseItem(item.id);
                            props.getTotals();
                        }
                        } className='btn btn-info'>-</button></td>
                    <td><button onClick={() => 
                        {
                            props.increaseItem(item.id)
                            props.getTotals();
                        }
                        } className='btn btn-info'>+</button></td>
                    <td><button onClick={() => 
                        {
                            props.deleteItem(item.id)
                            props.getTotals();    
                        }} className='btn btn-danger delete__btn'>&times;</button></td>
                </tr>
            </tbody>
                ))
            }
        </table>
        }
        <div>
            Total price: {props.item.total} rub
        </div>

    </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        item: state.item
    }
}
export default connect(mapStateToProps, {deleteItem, increaseItem, decreaseItem, getTotals})(Cart); 
