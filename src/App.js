import { useState } from "react"
import "./App.css";
import { Navbar, Footer } from "./components";
import { Portfolio, Login, SignUp, Contacts, Blogs, SinglePage, Profile } from "./Pages";
import { Main } from "./Dashboard";
import { About } from "./Containers";
import Protected from "./components/Protected/Protected";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
    let LoggedIn = false
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog")) {
      LoggedIn = true
    }
    return (
      <Router>
        <div className="app">
          <Navbar />
          
          <Footer />
        </div>
        <Routes>
          <Route exact path='/' element={<Portfolio />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/contact-me' element={<Contacts />}></Route>
          <Route exact path='/#aboutme' element={< Portfolio />}></Route>
          <Route exact path='/single-blog/:id' element={< SinglePage />}></Route>
          <Route exact path='/blogs' element= { <Protected isLoggedIn={LoggedIn} >< Blogs /></Protected> }></Route>
          <Route exact path='/profile' element= { <Protected isLoggedIn={LoggedIn} >< Profile /></Protected> }></Route>
        </Routes>
      </Router>
  );
}