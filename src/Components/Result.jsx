import React from 'react';
import Loader from './Loader';

export default function Result(props) {
    console.log("The data is: "+ props.weatherdata);
    const {city} = props;

    function kelvinToCelcius(k){
        return k - 273.15;
    }

    function getDate(stamp){
        const data = new Date(stamp * 1000);
        return data.toTimeString();
    }

    let showData;

    if(props.weatherdata == null){
        showData = props.isSearched == false? <div className='h2 text-center mt-5 '>Search a city</div> :(<div className="mt-5"> <Loader/> </div>)
        
    }
    else{
        showData = (<div className="result-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 card p-4 mt-5 mb-5">
                    <h3>{city ? city : "City"}</h3>
                    <p>Country</p>
                </div>
            </div>
        </div>
    </div> )
    }
    

  return showData
  
}
