import "./App.css";
import { Navbar, Footer } from "./components";
import { Portfolio, Login, SignUp, Contacts, Blogs, SinglePage, Profile } from "./Pages";
import Protected from "./components/Protected/Protected";
import AdminProtected from "./components/Protected/AdminProtected";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from "./Dashboard/Main/Main";

export default function App() {
    let LoggedIn = false
    let LoggedInAsAdmin = false
    if (localStorage.getItem("cooltoken") && JSON.parse(localStorage.getItem("tempLog")).admin === true) {
      LoggedInAsAdmin = true
    }
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog")) {
      LoggedIn = true
    }
    return (
      <Router>
        <div className="app">
        <Navbar />  
        <Routes>
          <Route exact path='/' element={<Portfolio />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/contact-me' element={<Contacts />}></Route>
          <Route exact path='/#aboutme' element={< Portfolio />}></Route>
          <Route exact path='/single-blog/:id' element={< SinglePage />}></Route>
          <Route exact path='/blogs' element={< Blogs />}></Route>
          <Route exact path='/profile' element= { <Protected isLoggedIn={LoggedIn} >< Profile /></Protected> }></Route>
          <Route exact path='/dashboard/*' element= { <AdminProtected isLoggedInAsAdmin={LoggedInAsAdmin} >< Main /></AdminProtected> }></Route>
        </Routes>
        <Footer />
        </div>
        
      </Router>
  );
}