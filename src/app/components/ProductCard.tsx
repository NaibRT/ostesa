"use client"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React,{useEffect} from "react";

type Images = {
  name: string
}
type Props = {
  item: {
    id:number,
    images: Images[];
    name: string;
    price: string;
    discount: string;
    stock: number;
  };
};


function ProductCard({ item } : Props) {

  
  return (
    <div className="product-item bg-light mb-4">
      <div style={{height:'300px'}} className="product-img position-relative overflow-hidden">
        <Link className="text-decoration-none" href={`/shop/${item.name.replace(" ","-")}_${item.id}`}>
          <img  className="img-fluid w-100 h-100" src={`/uploads/${item.images[0]?.name}`} alt="" />
        </Link>
        {/* <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
        </div> */}
      </div>
      <div className="text-center py-4">
        <Link className="h6 text-decoration-none text-truncate" href={`/shop/${item.name}`}>
          {item.name}
        </Link>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>{item.price}</h5>
          <h6 className="text-muted ml-2">
            <del>{item.discount}</del>
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
          <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
          <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
          <FontAwesomeIcon icon={faStar} className="text-primary mr-1"/>
          <FontAwesomeIcon icon={faStarHalf} className="text-primary mr-1"/>
          <small>({item.stock})</small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
