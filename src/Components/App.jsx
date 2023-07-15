import { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App  extends Component{

  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/weather" element={ <Weather/> } />
          <Route path="/" element={ <Home/> }/>
          <Route path="*" element={ <div> <h1 className="text-center text-danger mt-5">404 | Page Not Found</h1> </div> }/>
        </Routes>
        
      </Router>
    );
  }
}
