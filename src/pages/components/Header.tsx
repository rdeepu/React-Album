import  React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

type Props = {
    i:string,
    a:string,
    b:string;  
    }


export default class Header extends Component<Props,any,{}>{

    constructor(props:any){
        super(props);
        this.logOut = this.logOut.bind(this)
    }

    logOut(){
      this.out();
    }

    out=async()=>{
        const response = await fetch ('/signOut')
        return response.status;
    }


    render(){
       let {i,a,b}=this.props;
       
        return(

          <div className = "nav_bar">
              <i className="material-icons icn">{i}</i>
              <p id = 'pos_a'>{a}</p>
              <p id = 'pos_b'>Nandana Lekshmi Pillai</p>
              <p id = 'pos_c'><Link to = {b} style={{textDecoration:'none',color:'gold'}}>{b}</Link></p>
              <p id = 'pos_d' onClick={this.logOut}><Link to = {'/'} style={{textDecoration:'none',color:'gold'}}>Sign Out</Link> </p>
          </div>
        );
        
    }
}
