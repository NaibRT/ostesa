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
}).required();


 function Create() {
    const { register, handleSubmit, formState } = useForm({
        resolver:yupResolver(schema)
    });
    const { errors, } = formState;
    const [image, setImage] = useState(null);
    const [createResult, setCreateResult] = useState({
      status:null,
      text:null
    });



    const submit =  async (data) => {

      try {
        const categoryFormData = new FormData();
          categoryFormData.append("name",data.name);
          categoryFormData.append("image",image);

        let createdCategoryRes = await fetch(`/api/category`,{
          method:"POST",
          body:categoryFormData,
          headers:{
            'Accept': 'application/json',
          }
        });

        let createdCategory = await createdCategoryRes.json();
        console.log("createdCategory",createdCategory);

        setCreateResult({
          status:"alert-success",
          text:"Category yerlesdirildi"
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
   <>
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(submit,(er) => console.log(er))} className="container">
          <div className="row">
             <div className="col">
             <FormInput
                label="Category Name"
                error={errors.name}
                type="text"
                register={...register("name")}
            />
             </div>
          </div>
          <div className="row">
            <div className="col-12">
            <FormInput
                label="Category Image"
                error={errors.images}
                type='file'
                name="photo"
                onChange={(e) => {
                  console.log("e.target.value",e.target.files)
                  setImage(e.target.files[0])
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
    </>
  );
}

export default Create;
