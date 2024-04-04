import React, { useDebugValue } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
  const [{}, dispatch] = useStateValue(); 

  useEffect(() => {

    auth.onAuthStateChanged(authUser => { 
      console.log("THE USER IS >>>", authUser);
      
      if(authUser) {
        //
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
        //
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route exact path="/login" element={
            <div>
              <Login />            
            </div> 
          }/>
          
          <Route exact path="/checkout" element={
            <div>
              <Header />
              <Checkout />
            </div>
          }/>
          
          <Route exact path="/" element={
            <div>  
              <Header />
              <Home />
            </div>
          }/>
    
        </Routes>
      
      </div>
    </Router>

)}

export default App;
