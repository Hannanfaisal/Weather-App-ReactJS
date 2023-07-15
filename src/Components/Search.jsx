import React from 'react'

export default function Search(props) {
    //  const [lat, lon, city, weatherData] = props.search;
  return (
    <div className="search-section mt-5">
        <div className="container card p-5 bg-light">
            <div className="row">
            
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="city">Type City Name</label>
                        <input className="form-control" type="text" name="city" id="city" onChange={props.change} value={props.city} />
                    </div>
                </div>
                <div className="col-md-1 d-flex">
                     <h4>OR</h4>  
                    
                </div>
                <div className="col-md-3 ">
                    <div className="form-group d-flex">
                        <div className="bg-dark rounded p-2 text-white">Lat:</div>
                        <input className="form-control" type="number" name="lat"  id="lat"  onChange={props.change} value={props.lat} />
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="form-group d-flex ">
                        <div className="bg-dark rounded p-2 text-white">Lon:</div>
                        <input className="form-control" type="number" name="lon" id="lon" value={props.lon} />
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="form-group ">
                        <button className="btn btn-outline-dark" onClick={props.search} >Search</button>
                   <button className=" btn btn-sm btn-primary rounded mt-4" onClick={props.getLocation}>Get Coordinates</button>


                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
