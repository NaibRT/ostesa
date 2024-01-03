"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from "react";
import Alert from "../../../../components/Alert"
// import FormInput from "../../../../components/FromInput";
const FormInput = dynamic(() => import("../../../../components/FromInput"), { ssr: false });
import { useForm } from "react-hook-form";
// import SelectBox from "../../../../components/SelectBox";
const SelectBox = dynamic(() => import("../../../../components/SelectBox"), { ssr: false })

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    discount: yup.number().positive().required(),
    stock: yup.number().positive().integer().required(),
    categoryID: yup.string().required(),
    description: yup.string().required(),
}).required();


async function getCategories() {
    let result = {
    data: [],
    error: null,
    isLoading: true,
  };

    const res = await fetch(`/api/category`);

    if (!res.ok) {
    result.error = res.status;
    result.isLoading = false;
  } else {
    result.data = await res.json();
    result.isLoading = false;
  }

  return result;
}

 function Create() {
    const { register, handleSubmit, formState } = useForm({
        resolver:yupResolver(schema)
    });
    const { errors, } = formState;
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState([]);
    const [createResult, setCreateResult] = useState({
      status:null,
      text:null
    });


    const fileRef = React.createRef();

    useEffect(() => {
        getCategories().then(res => {
          console.log("res.data",res.data)
          setCategories(res.data)
        });
    },[]);


    const submit =  async (data) => {

      try {

        let creatProductRes = await fetch(`/api/product`,{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            'Accept': 'application/json',
            'Content-Type': "application/json"
          }
        });
        let createdProduct = await creatProductRes.json();
        console.log("createdProduct",createdProduct);

        const photoFormData = new FormData();
        photoFormData.append("productID",createdProduct.id)
        image.forEach(x => photoFormData.append("photo",x));

        console.log("photoFormData",photoFormData);

        let createImagesRes = await fetch('/api/image',{
          method:"POST",
          body:photoFormData,
          headers:{
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data'
          }
        });

        let createdImages = await createImagesRes.json()

        setCreateResult({
          status:"alert-success",
          text:"Ururn yerlesdirildi"
        })
      } catch (error) {

        setCreateResult({
          status:"alert-danger",
          text:error.message
        })
      }
    
    };
    console.log("image",image);
  return (
   <div className='position-relative '>
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(submit,(er) => console.log(er))} className="container">
          <div className="row">
             <div className="col">
             <FormInput
                label="Ürün İsmi"
                error={errors.name}
                type="text"
                register={...register("name")}
            />
             </div>

             <div className="col">
             <FormInput
                label="Ürün Fiyat"
                error={errors.price}
                type="text"
                register = {...register("price")}
            />
             </div>
          </div>
          <div className="row">
          <div className="col">
             <FormInput
                label="Ürün indirim %"
                error={errors.discount}
                type="text"
                register = {...register("discount")}
            />
             </div>
             <div className="col">
             <FormInput
                label="Stok"
                error={errors.stock}
                name="number"
                register = {...register("stock")}
            />
             </div>
          </div>
          <div className="row">
          <div className="col">
              <SelectBox options={categories} register= {...register("categoryID")}/>
          </div>

            <div className="form-group col">
              <label htmlFor="validationTextarea">Textarea</label>
              <textarea
                className={`form-control ${errors.description && "is-invalid"}`}
                id="validationTextarea"
                placeholder="Required example textarea"
                {...register("description")}
              ></textarea>
              {
                errors.description && 
                <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
              }
            </div>
            <div className="col-12">
            <FormInput
                label="Images"
                error={errors.images}
                type='file'
                multiple
                name="photo"
                onChange={(e) => {
                  console.log("e.target.value",e.target.files)
                  setImage([...e.target.files])
                }}
                
                // register = {...register("images")}
            />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Alert result={createResult} setResult={setCreateResult}/>
    </div>
  );
}

export default Create;
