import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

export default function Header() {

  
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <a class="navbar-brand h1" href="#">Weather News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/weather">Weather</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
  )
}
