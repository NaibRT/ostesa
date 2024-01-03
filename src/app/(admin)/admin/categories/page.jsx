// "use client";
import React from "react";
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

async function getCategories() {
  let result = {
    data: [],
    error: null,
    isLoading: true,
  };

  const res = await fetch(`${process.env.DEVOLOPMENT_URL}/api/category`);

  if (!res.ok) {
    result.error = res.status;
    result.isLoading = false;
  } else {
    result.data = await res.json();
    result.isLoading = false;
  }

  return result;
}

async function Category() {
  const { data, error, isLoading } = await getCategories();
  console.log("isloading", isLoading);

  function deleteCategoryHandler(){

  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>Categories</h2>
          <a href="/admin/categories/create" type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faPlusCircle} className="text-white" />
          </a>
      </div>
      <div className="card-body">
        {isLoading ? (
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : error ? (
          <h5 className="text-danger">{error}</h5>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped  table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fotograf</th>
                  <th scope="col">Ismi</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((x, i) => (
                  <tr key={i}>
                    <td scope="row">{i + 1}</td>
                    <td style={{ width: "120px" }}>
                      <img
                        src={`/uploads/${x.image}`}
                        className="rounded float-left w-100"
                        alt="..."
                      />
                    </td>
                    <td>{x.name}</td>
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
                        // onClick={() => {

                        // }}
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

export default Category;
