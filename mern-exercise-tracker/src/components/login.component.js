import React, {Component} from "react";
import axios from "axios";


export default class Login extends Component{
    constructor(props){
        super(props);

        this.state={
            email: "",
            password: "",
            errors:{}
        };
    }

    componentDidMount(){
        
    }
render(){
    return<div>LoginPage</div>
}
}