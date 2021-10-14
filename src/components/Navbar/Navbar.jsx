import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {

    const cartLength = props.item.cart.length;
debugger
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/" exact>Sneakers</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" exact >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">{<i className="fas fa-shopping-cart"><span className={s.countInCart}>{props.item.cart.length}</span></i>}</Link>
                </li>


            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
}
const mapDispatchToProps = (state) =>{
    return{
        item: state.item
    }
}
export default connect(mapDispatchToProps, {})(Navbar) 


//<i className="fas fa-shopping-cart"></i>