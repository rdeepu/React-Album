import React,{Component} from 'react';
import './PageOne.css';


export default class Homepage extends Component<{},any> {
      
    render(){

        return(
          <div className = "disp"> 

            <div className = "none-login">

               <p className = "none-pos_a">
                   Nandana Pillai
                   <br></br>
                   <br></br>
                   ....in Pictures
               </p>

               <form  method = 'POST' action = "/register">

                   <p>Sign in to continue:</p><br></br>

                   <input type='text' name = 'uname' placeholder = 'Username' required></input> <br></br>

                   <br></br>

                   <input type='password' name = 'pword' placeholder = 'Password' required></input><br></br> 

                   <br></br>

                   <input  type = "submit" value = 'Sign in'></input>

               </form>

            </div>

             <img className = "none-img_one"  src = {require('./images/01.jpg')} alt=""/>
             <img className = "none-img_two"  src = {require('./images/02.jpg')} alt=""/>

        </div>

        );
    }
}