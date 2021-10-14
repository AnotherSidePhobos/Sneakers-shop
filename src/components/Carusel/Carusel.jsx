import React from 'react';
import s from './../Carusel/Carusel.module.css';
import background from './../../images/background.png';

const Carusel = () => {
    return (
        <>
            <div className='container'>
                <img className={s.main_background} src={background} alt='main-background'/>
            </div>
                {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> */}
        </>
    )
}

export default Carusel
