import React from "react";
import './form.css'

const Form = (props) => {
  return (
    <div className="container">
    <div>{props.error ? error() : null}</div>
      <form onSubmit = {props.loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="Enter city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 ">
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Enter country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-outline-light bg-sm">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error(){
    return(
        <div className = "alert alert-danger mx-5 pb-3" role = "alert">
        Please Enter City and Country!
        </div>
    );
}

export default Form;
