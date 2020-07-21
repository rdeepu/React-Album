import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import './PageThree.css';
import { response } from 'express';

interface iprops{
    auth:number
}

export default class Aboutpage extends Component<{},any> {
   
    constructor(props:iprops){
        super(props)
        this.state={
            auth:200
        }
    }

    componentWillMount(){
     this.checkAuth().then(res=>this.setState({auth:res}));
    }
  
    checkAuth = async () => {
        const response =  await fetch('/checkToken');
        return response.status;
    } 

   render(){

    if (this.state.auth!==200){
        return < Redirect to = '/' />
    }
    

    return( 
    <div className="disp"> 

        <img className = "pageThree_img" src = {require('./images/03.jpg')} alt="Nandana Painted face"/>

        <div className = "vline_one"></div> 

        <div className = "vline_two"></div>

        <div className = "vline_three"></div>

        <p className = "txt">
         Hello,<br></br>
         
         I am Nandana, a class-II student at the PRIMUS school, Titz, Germany. <br></br>
         
            I thank you for taking time out to visit my website (a gift from my parents on 
            my fifth birthday).<br></br>
           
            Hope you enjoyed it!!!!<br></br>
            
            Many thanks,<br></br>
           
            Nandana.
        </p>

        <div className = "hline_one"></div> 

        <div className = "hline_two"></div> 

        <div className = "hline_three"></div>
        
        <div className="ftr"> 
        <p>
            Copyright © Deepu R. Pillai<br></br>
            2017-2020<br></br>
            Contact: dpillai@protonmail.com<br></br>
            All Rights Reserved<br></br>
        </p>
        </div>

    </div>

    )
       
   }

}