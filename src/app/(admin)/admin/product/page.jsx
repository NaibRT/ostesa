"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faAngleDown,
  faAngleRight,
  faBars,
  faTrash,
  faFileEdit,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { env } from "process";

async function getProducts() {
  let result = {
    data: [],
    error: null,
    isLoading: true,
  };

  const res = await fetch(`/api/product`);

  if (!res.ok) {
    result.error = res.status;
    result.isLoading = false;
  } else {
    result.data = await res.json();
    result.isLoading = false;
  }

  return result;
}

  function Product() {
  //const products = await getProducts();
  const [products,setProducts] = useState();

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res)
    })
  },[])

   function  deleteProductHandler(id){
     fetch(`/api/product?id=${id}`,{
      method:"DELETE"
    }).then(async res => {
       setProducts({
        ...products,
        data:products.data.filter(x => x.id!==id)
       })
    });

  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>Ürünler</h2>
          <a href="/admin/product/create" type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faPlusCircle} className="text-white" />
          </a>
      </div>
      <div className="card-body">
        {products?.isLoading ? (
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : products?.error ? (
          <h5 className="text-danger">{products?.error}</h5>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped  table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ismi</th>
                  <th scope="col">Tanim</th>
                  <th scope="col">fiyat</th>
                  <th scope="col">indirim</th>
                  <th scope="col">stok</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products?.data?.map((x, i) => (
                  <tr key={i}>
                    <td scope="row">{i + 1}</td>
                    <td style={{ width: "120px" }}>
                      <img
                        src={`/uploads/${x.images[0]?.name}`}
                        className="rounded float-left w-100"
                        alt="..."
                      />
                    </td>
                    <td>{x.name}</td>
                    <td>{x.description}</td>
                    <td>{x.price}</td>
                    <td>{x.discount}</td>
                    <td>{x.stock}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary">
                          <FontAwesomeIcon
                            icon={faFileEdit}
                            className="text-white"
                            data-toggle="tooltip" 
                        data-placement="top"
                        title="editle"
                          />
                        </button>
                        <button 
                        onClick={() => deleteProductHandler(x.id)}
                        type="button" 
                        className="btn btn-danger"
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="Sil"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="text-white"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
