"use client"
import React from "react";

function Frominput({
    label,
    name,
    type,
    error,
    clas,
    register,
    ref,
    ...rest
    // value,
}) {

    console.log("error",error);
  return (
    <div className={`form-group ${clas}`}>
      <label htmlFor={`form-${label}-${name}`}>{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control ${ error && "is-invalid" }`}
        id={`form-${label}-${name}`}
        aria-describedby={`validate-${label}-${name}`}
        aria-invalid={error?.message ? true : false}
        ref={ref}
        {...register}
        {...rest}
      />
      {
        error && 
        <div id={`validate-${label}-${name}`} className="invalid-feedback">
        {error.message}
        </div>
      }

    </div>
  );
}

export default Frominput;
