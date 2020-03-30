import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import Register from "./components/register.component";




function App() {
    return (
      <Router>
        <Container>
        <Navbar />
       
        <br/>
     <Route path='/' exact component={ExercisesList} />
     <Route path='/edit/:id' exact component={EditExercise} />
     <Route path='/create' exact component={CreateExercise} />
     <Route path='/user' exact component={CreateUser} />
     <Route path="/register" exact component={Register}/>
     <Route path="/login" exact component={Login}/>
  
     </Container>
      </Router>
    );
  
}

export default App;
