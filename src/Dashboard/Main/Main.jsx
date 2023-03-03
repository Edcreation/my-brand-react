import React from 'react'
import './Main.scss'
import { Dashnav } from '../../components'
import Dashboard from '../Dashboard/Dashboard';
import New from '../New/New';
import Messages from '../Messages/Messages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function Main() {
  return (
    <div className="main">
    <Dashnav />
    <div className="main-body">
      <Routes>
        <Route exact path='/' element={ <Dashboard /> } ></Route>
        <Route exact path='/new-blog' element={ <New /> } ></Route>
        <Route exact path='/messages' element={ <Messages /> } ></Route>
      </Routes>
    </div>
    </div>

  )
}

export default Main