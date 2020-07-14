import React,{Component} from 'react';
import './cont.css';
import Header from './components/Header';
import Homepage from './components/PageOne';
import Albumpage from './components/PageTwo';
import Aboutpage from './components/PageThree';


class Home extends Component{

    render(){
        return(
           <div className="cont"> 
             <Homepage/>
            </div>
        )
    }
}

class Albums extends Component {
    render(){
        let 
        i:string = 'collections',
        a:string = 'Albums',
        b:string = 'About'

      return(
        <div className = "cont"> 
             <Header i={i} a={a} b={b}/>
             <Albumpage/>
        </div>
      );
    }
}

class About extends Component{

render(){        
    let
    i:string='message',
    a:string='About',
    b:string='Albums';
   
return(

<div className = "cont">

    <Header i={i} a = {a}  b={b}/>
    <Aboutpage/>
       
</div>

        )
    }
}


export {Home,Albums,About}