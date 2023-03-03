import React from 'react'

function Input({label, state, setState, type="text"}) {
    

  return (
    <div className="form-floating">
    <input
      type={type}
      className="form-control"
      placeholder={label}
      value={state}
      onChange = {(e)=>setState(e.target.value)}
    />
    <label htmlFor="floatingInput">{label}</label>
  </div>
  )
}

export default Input