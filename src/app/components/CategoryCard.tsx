import Link from 'next/link';
import React from 'react';

type _count = {
  products:string
}

type Props = {
  item: {
    image: string;
    name: string;
    _count: _count;
  };
};

function CategoryCard({ item } : Props) {
  return (
    <>
            <Link className="text-decoration-none" href="">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid h-100" src={`/uploads/${item.image}`} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>{item.name}</h6>
                  <small className="text-body">{item._count.products} Products</small>
                </div>
              </div>
            </Link>
    </>
  )
}

export default CategoryCard