import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faHeart,
    faShoppingCart,
    faAngleDown,
    faAngleRight,
    faBars
  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function Header() {
  return (
   <>
        {/* Topbar Start  */}
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <a className="text-body mr-3" href="">About</a>
                    <a className="text-body mr-3" href="">Contact</a>
                    <a className="text-body mr-3" href="">Help</a>
                    <a className="text-body mr-3" href="">FAQs</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Sign in</button>
                            <button className="dropdown-item" type="button">Sign up</button>
                        </div>
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </div>
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" className="btn px-0 ml-2">
                        <FontAwesomeIcon icon={faHeart} className='text-dark' />
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                    </a>
                    <a href="" className="btn px-0 ml-2">
                        <FontAwesomeIcon icon={faShoppingCart} className='text-dark' />
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
                <a href="" className="text-decoration-none d-flex align-items-center">
                    {/* <span className="h1 text-uppercase text-primary bg-dark px-2">ostesa</span> */}
                     <img width={100} className='' src='/img/fff.png' alt='fff'/>
                     <div className='d-flex flex-column'>
                     <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1 mb-1">Ostesa</span>
                     <span className="text-uppercase text-light bg-primary px-2 ml-n1">Hayra Teşvik eder...</span>
                     </div>
                    
                </a>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
     {/* Topbar End  */}

     {/* Navbar Start  */}
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", padding: "0 30px"}}>
                    <h6 className="text-light m-0">
                        <FontAwesomeIcon icon={faBars} className='mr-2 text-light' />
                        Kategoriler</h6>
                    <FontAwesomeIcon icon={faAngleDown} className='text-light' />
                    
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: "999"}}>
                    <div className="navbar-nav w-100">
                        {/* <div className="nav-item dropdown dropright">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses 

                            <FontAwesomeIcon icon={faAngleRight} className='float-right mt-1'/>
                            </a>
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <a href="" className="dropdown-item">Men's Dresses</a>
                                <a href="" className="dropdown-item">Women's Dresses</a>
                                <a href="" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div> */}
                        <a href="" className="nav-item nav-link">Tesbihler</a>
                        <a href="" className="nav-item nav-link">Sarik</a>
                        <a href="" className="nav-item nav-link">Salvar</a>
                        <a href="" className="nav-item nav-link">Takke</a>
                        <a href="" className="nav-item nav-link">Hirka</a>
                        <a href="" className="nav-item nav-link">Takilar</a>
                        <a href="" className="nav-item nav-link">Esans Kokular</a>
                        <a href="" className="nav-item nav-link">Kitaplar</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Fashion</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link href={"/"} title='Home' className="nav-item nav-link">Home</Link>
                            <Link href={"/shop"} title='Shop' className="nav-item nav-link">Shop</Link>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages 
                               
                                <FontAwesomeIcon icon={faAngleDown} className='mt-1'/>
                                </a>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div> */}
                            <Link href={"/contact"} title='contact' className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="" className="btn px-0">
                                <FontAwesomeIcon icon={faHeart} className='text-primary mr-1' />
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </a>
                            <a href="" className="btn px-0 ml-3">
                                <FontAwesomeIcon icon={faShoppingCart} className='text-primary mr-1' />
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
     {/* Navbar End  */}
   </>
  )
}

export default Header