import React from "react";

function TextArea({ label, state, setState, height = "100px"}) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        value={state}
        placeholder={label}
        id="floatingTextarea2"
        onChange={(e) => setState(e.target.value)}
        style={{ height: height }}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
}

export default TextArea;
