"use client"
import React from "react";

function SelectBox({
    options = [],
    register
}) {
  return (
    <div className="form-group col">
      <label htmlFor="inputState">State</label>
      <select {...register} id="inputState" className="form-control">
        {
            options.map((x,i) => (
                <option key={i} value={x?.id}>{x?.name}</option>
            ))
        }       
      </select>
    </div>
  );
}

export default SelectBox;
