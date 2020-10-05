import React from "react";

const Weather = (props) => {
  return (
    <div className=" container d-flex justify-content-center text-light">
      <div className="cards pt-4">
        <h2>{props.city}</h2>
        <div className="ml-5">
          <h5 className="py-4 ml-3">
            <i className={`wi ${props.weatherIcon} display-4`}></i>
          </h5>
          {props.celc ? <h2 className="py-2 ml-4">{props.celc}&deg;</h2> : null}
          {minmaxTemp(props.temp_min, props.temp_max)}
          <h5 className="py-3">{props.description}</h5>
        </div>
      </div>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  if (min && max) {
    return (
      <h4>
        <span className="px-1">{min}&deg;</span>
        <span className="px-1">{max}&deg;</span>
      </h4>
    );
  }
};

export default Weather;
