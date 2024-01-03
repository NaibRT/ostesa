"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from "react";
import Alert from "../../../components/Alert"
// import FormInput from "../../../../components/FromInput";
const FormInput = dynamic(() => import("../../../components/FromInput"), { ssr: false });
import { useForm } from "react-hook-form";
// import SelectBox from "../../../../components/SelectBox";
const SelectBox = dynamic(() => import("../../../components/SelectBox"), { ssr: false })

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
    contacts: yup.string().required(),
    // sosialmedias: yup.array(),
    adress: yup.string().required(),
    about: yup.string().required(),
}).required();


async function getShop() {
    let result = {
    data: {},
    error: null,
    isLoading: true,
  };

    const res = await fetch(`/api/shop`);

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
    const [shop, setShop] = useState(null);
    const [sosial,setSosial] = useState([])
    const [createResult, setCreateResult] = useState({
      status:null,
      text:null
    });



    useEffect(() => {
        getShop().then(res => {
          console.log("res.data",res.data)
          setShop({
            ...res.data,
          });
          setSosial([...JSON.parse(res.data.sosialmedias)])
        });
    },[]);

    function InputHandler(e) {
        let {name,value} = e.target;
        setShop({
            ...shop,
            [name]:value
        })
    };

    const submit =  async (data) => {


      try {

        let creatShopRes = await fetch(`/api/shop`,{
          method: shop == null ? "POST" : "PUT",
          body: shop == null ? 
                JSON.stringify({
                    ...data,
                    sosialmedias:JSON.stringify([])
                })
                : JSON.stringify({
                    ...shop,
                    sosialmedias:JSON.stringify(sosial)
                }),

          headers:{
            'Accept': 'application/json',
            'Content-Type': "application/json"
          }
        });

        let createdShop = await creatShopRes.json();
        console.log("createdShop",createdShop);

        setCreateResult({
          status:"alert-success",
          text:"islem basarli"
        })
      } catch (error) {

        setCreateResult({
          status:"alert-danger",
          text:error.message
        })
      }
    
    };

  return (
   <div className='position-relative '>
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(submit,(er) => console.log(er))} className="container">
          <div className="row">
             <div className="col">
             <FormInput
                label="Phone Number"
                error={errors.contacts}
                type="text"
                name="contacts"
                value={shop?.contacts}
                onChange={InputHandler}
                register={...register("contacts",{ value: shop?.contacts })}
            />
             </div>

             <div className="col">
             <FormInput
                label="adress"
                error={errors.adress}
                type="text"
                name="adress"
                register = {...register("adress",{value:errors.adress})}
                onChange={InputHandler}
                value={shop?.adress}
            />
             </div>
          </div>
          <div className="row">
          {
            sosial.map((x,i) => (
                <div key={i} className="col-6">
             <FormInput
                label={x.name}
                // error={errors.sosialmedias}
                type="text"
                // register = {...register("sosialmedias")}
                onChange={e => {
                    console.log(e.target.value)
                    sosial[i].link = e.target.value;

                    setSosial([...sosial])
                }}
                value={x.link}
            />
             </div>
            ))
          }

          </div>
          <div className="row">
          {/* <div className="col">
              <SelectBox options={categories} register= {...register("categoryID")}/>
          </div> */}

            <div className="form-group col">
              <label htmlFor="validationTextarea">About</label>
              <textarea
                className={`form-control ${errors.about && "is-invalid"}`}
                id="validationTextarea"
                placeholder="Required example textarea"
                value={shop?.about}
                name="about"
                {...register("about",{ value: shop?.about})}
                onChange={InputHandler}
              ></textarea>
              {
                errors.about && 
                <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
              }
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
