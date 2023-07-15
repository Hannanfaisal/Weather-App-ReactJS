import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import axios from "axios";
import Recent from "./Recent";



export default class Weather extends Component{

    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lon: null,
            weatherData: null,
            city: null,
            isSearched: false,
            recent: []
        }
    }


    componentDidMount(){
        const data = window.localStorage.getItem("recent");
        let recent = data == null ? []: JSON.parse(data)  //convert data into object 
        this.setState({recent })  
    }

    researhHandler = (lat,lon) =>{
        this.setState({
            lat,lon
        }, ()=>{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=900964858f96fb3a6e6d1fd33ead3867`).
                    then(
                        (response) => {
                            this.setState({
                                city: response.data.name,
                                weatherData: response.data 
                            },)
                            console.log("The data on weather page is : "+ response.data)
                            
                        }
                    )
                    .catch(
                        (error)=>{
                            console.log("The error with get request is: "+ error)
                        }
                    )
                    })

    }

    addDataToRecent = () =>{
        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city 
        })

        this.setState({
            recent
        },()=>{
            window.localStorage.setItem("recent",JSON.stringify(this.state.recent));
        })
    }


    changeHandler = (event) =>{
        
        const name = event.target.name;
        if(name === "city"){
            this.setState({
                city: event.target.value
            })
        }else if(name === "lat"){
            this.setState({
                lat: event.target.value
            })
        }else if(name === "lon"){
            this.setState({
                lon: event.target.value
            })
        }
    }

    locationHandler = (event) =>{

        event.preventDefault();

        this.setState({
            lat: "",
            lon: "",
            city: "",
            weatherData: ""
        })

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res) => {

                    setTimeout(()=>{
                          this.setState({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude 
                    })
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=900964858f96fb3a6e6d1fd33ead3867`).
                    then(
                        (response) => {
                            this.setState({
                                city: response.data.name,
                                weatherData: response.data 
                            }, ()=>{
                                this.addDataToRecent()
                            })
                            console.log("The data on weather page is : "+ response.data)
                            
                        }
                    )
                    .catch(
                        (error)=>{
                            console.log("The error with get request is: "+ error)
                        }
                    )
                    },1000)
                  
                },
                (err) =>{}
           )
        }
        else{
            console.log("Location is not supported")
        }
    }

    searchHandler = (event) =>{
        // const lat = event.target.lat.value;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=900964858f96fb3a6e6d1fd33ead3867`).
        then(
            (response) => {
                this.setState({
                    city: response.data.name,
                    weatherData: response.data 
                }, ()=>{
                    this.addDataToRecent()
                })
                console.log("The data on weather page is : "+ response.data)
                
            }
        )
        .catch(
            (error)=>{
                console.log("The error with get request is: "+ error)
            }
        )
    }

    render(){
        return(
            <div className="d-flex">
                <Recent recent={this.state.recent} research={this.searchHandler}/>
                <div>
                <Search lat={this.state.lat} lon={this.state.lon} city={this.state.city} weatherData={this.state.weatherData} change={this.changeHandler} getLocation={this.locationHandler} search={this.searchHandler}/>
                <Result weatherdata={this.state.weatherData} city={this.state.city} isSearched={this.state.isSearched}/>
                </div>
            </div>
        )
    }
}