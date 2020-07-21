import React, {Component} from 'react';
import './PageTwo.css';
import { Redirect} from 'react-router-dom';



var count:number=1,strength:number=3

interface iprops{
  auth:number
  album:number
  album_disp:string
  album_a_photo_a:number
  album_a_photo_b:number
  album_a_photo_c:number
  album_b_photo_a:number
  album_b_photo_b:number
  album_b_photo_c:number
  album_c_photo_a:number
  album_c_photo_b:number
  album_c_photo_c:number
  album_d_photo_a:number
  album_d_photo_b:number
  album_d_photo_c:number
  album_e_photo_a:number
  album_e_photo_b:number
  album_e_photo_c:number
  album_f_photo_a:number
  album_f_photo_b:number
  album_f_photo_c:number
}

export default class Albumpage extends Component<{},any> {
  
 constructor (props:iprops){
   super(props)
  
   this.state={
     auth:200,
     album:0,
     album_disp: 'none',
     album_a_photo_a:0,
     album_a_photo_b:0,
     album_a_photo_c:0,
     album_b_photo_a:0,
     album_b_photo_b:0,
     album_b_photo_c:0,
     album_c_photo_a:0,
     album_c_photo_b:0,
     album_c_photo_c:0,
     album_d_photo_a:0,
     album_d_photo_b:0,
     album_d_photo_c:0,
     album_e_photo_a:0,
     album_e_photo_b:0,
     album_e_photo_c:0,
     album_f_photo_a:0,
     album_f_photo_b:0,
     album_f_photo_c:0,
   }
   
   this.tnailOne = this.tnailOne.bind(this);
   this.tnailTwo = this.tnailTwo.bind(this);
   this.tnailThree = this.tnailThree.bind(this);
   this.tnailFour = this.tnailFour.bind(this);
   this.tnailFive = this.tnailFive.bind(this);
   this.tnailSix = this.tnailSix.bind(this);
   this.forward = this.forward.bind(this);
   this.backward = this.backward.bind(this);
   this.close = this.close.bind(this);
 }

 componentWillMount(){
    this.checkAuth().then(res => this.setState({auth:res}));
 }  
 
 checkAuth = async () => {
    const response =  await fetch('/checkToken');
    return response.status;
   }

  

tnailOne(){ 
  window.scrollTo(0,0)
  this.setState({
    album:1,
    album_disp: 'flex',
    album_a_photo_a:1,
    album_a_photo_b:0,
    album_a_photo_c:0
  });
}
tnailTwo(){
  window.scrollTo(0,0)  
  this.setState({
    album:2,
    album_disp: 'flex',
    album_b_photo_a:1,
    album_b_photo_b:0,
    album_b_photo_c:0
  });
}
tnailThree(){ 
  window.scrollTo(0,0) 
  this.setState({
    album:3,
    album_disp: 'flex',
    album_c_photo_a:1,
    album_c_photo_b:0,
    album_c_photo_c:0
  });
}
tnailFour(){ 
  window.scrollTo(0,0) 
  this.setState({
    album:4,
    album_disp: 'flex',
    album_d_photo_a:1,
    album_d_photo_b:0,
    album_d_photo_c:0
  });
}
tnailFive(){ 
  window.scrollTo(0,0) 
  this.setState({
    album:5,
    album_disp: 'flex',
    album_e_photo_a:1,
    album_e_photo_b:0,
    album_e_photo_c:0
  });
}tnailSix(){ 
  window.scrollTo(0,0) 
  this.setState({
    album:6,
    album_disp: 'flex',
    album_f_photo_a:1,
    album_f_photo_b:0,
    album_f_photo_c:0
  });
}




forward(){
  switch(this.state.album){
     case 1:
       if(this.state.album_a_photo_a===1){
       count++;
       this.setState({album_a_photo_a:0,album_a_photo_b:1,album_a_photo_c:0});
       } else if (this.state.album_a_photo_b===1) {
       count++;
        this.setState({album_a_photo_a:0,album_a_photo_b:0,album_a_photo_c:1});
       } else if (this.state.album_a_photo_c===1){
         alert('On the Last Slide!');
       }
       break;
     case 2:
       if(this.state.album_b_photo_a===1){
       count++;
       this.setState({album_b_photo_a:0,album_b_photo_b:1,album_b_photo_c:0});
       } else if (this.state.album_b_photo_b===1) {
       count++;
        this.setState({album_b_photo_a:0,album_b_photo_b:0,album_b_photo_c:1});
       } else if (this.state.album_b_photo_c===1){
         alert('On the Last Slide!');
       }
       break;
     case 3:
      if(this.state.album_c_photo_a===1){
      count++;
      this.setState({album_c_photo_a:0,album_c_photo_b:1,album_c_photo_c:0});
      } else if (this.state.album_c_photo_b===1) {
      count++;
      this.setState({album_c_photo_a:0,album_c_photo_b:0,album_c_photo_c:1});
      } else if (this.state.album_c_photo_c===1){
      alert('On the Last Slide!');
        }
      break;
     case 4:
        if(this.state.album_d_photo_a===1){
        count++;
        this.setState({album_d_photo_a:0,album_d_photo_b:1,album_d_photo_c:0});
        } else if (this.state.album_d_photo_b===1) {
        count++;
        this.setState({album_d_photo_a:0,album_d_photo_b:0,album_d_photo_c:1});
        } else if (this.state.album_d_photo_c===1){
        alert('On the Last Slide!');
          }
        break;
     case 5:
        if(this.state.album_e_photo_a===1){
        count++;
        this.setState({album_e_photo_a:0,album_e_photo_b:1,album_e_photo_c:0});
        } else if (this.state.album_e_photo_b===1) {
        count++;
        this.setState({album_e_photo_a:0,album_e_photo_b:0,album_e_photo_c:1});
        } else if (this.state.album_e_photo_c===1){
        alert('On the Last Slide!');
          }
        break;
    case 6:
        if(this.state.album_f_photo_a===1){
        count++;
        this.setState({album_f_photo_a:0,album_f_photo_b:1,album_f_photo_c:0});
        } else if (this.state.album_f_photo_b===1) {
        count++;
        this.setState({album_f_photo_a:0,album_f_photo_b:0,album_f_photo_c:1});
        } else if (this.state.album_f_photo_c===1){
        alert('On the Last Slide!');
          }
        break;

      
  }
}
backward(){  
  switch(this.state.album){
     case 1:
       if(this.state.album_a_photo_a===1){
       alert('On the First Slide')
       } else if (this.state.album_a_photo_b===1) {
       count--;
        this.setState({album_a_photo_a:1,album_a_photo_b:0,album_a_photo_c:0});
       } else if (this.state.album_a_photo_c===1){
         count--
        this.setState({album_a_photo_a:0,album_a_photo_b:1,album_a_photo_c:0});
      }
      break;
      case 2:
        if(this.state.album_b_photo_a===1){
        alert('On the First Slide')
        } else if (this.state.album_b_photo_b===1) {
        count--;
         this.setState({album_b_photo_a:1,album_b_photo_b:0,album_b_photo_c:0});
        } else if (this.state.album_b_photo_c===1){
          count--
         this.setState({album_b_photo_a:0,album_b_photo_b:1,album_b_photo_c:0});
       }
       break;
       case 3:
        if(this.state.album_c_photo_a===1){
        alert('On the First Slide')
        } else if (this.state.album_c_photo_b===1) {
        count--;
         this.setState({album_c_photo_a:1,album_c_photo_b:0,album_c_photo_c:0});
        } else if (this.state.album_c_photo_c===1){
          count--
         this.setState({album_c_photo_a:0,album_c_photo_b:1,album_c_photo_c:0});
       }
       break;
       case 4:
        if(this.state.album_d_photo_a===1){
        alert('On the First Slide')
        } else if (this.state.album_d_photo_b===1) {
        count--;
         this.setState({album_d_photo_a:1,album_d_photo_b:0,album_d_photo_c:0});
        } else if (this.state.album_d_photo_c===1){
          count--
         this.setState({album_d_photo_a:0,album_d_photo_b:1,album_d_photo_c:0});
       }
       break;
       case 5:
        if(this.state.album_e_photo_a===1){
        alert('On the First Slide')
        } else if (this.state.album_e_photo_b===1) {
        count--;
         this.setState({album_e_photo_a:1,album_e_photo_b:0,album_e_photo_c:0});
        } else if (this.state.album_e_photo_c===1){
          count--
         this.setState({album_e_photo_a:0,album_e_photo_b:1,album_e_photo_c:0});
       }
       break;
       case 6:
        if(this.state.album_f_photo_a===1){
        alert('On the First Slide')
        } else if (this.state.album_f_photo_b===1) {
        count--;
         this.setState({album_f_photo_a:1,album_f_photo_b:0,album_f_photo_c:0});
        } else if (this.state.album_f_photo_c===1){
          count--
         this.setState({album_f_photo_a:0,album_f_photo_b:1,album_f_photo_c:0});
       }
       break;


  }
}



close(){
switch(this.state.album){
  case 1:
    count=1;
    this.setState({
      album_a_photo_a:0,album_a_photo_b:0,album_a_photo_c:0,album:0,album_disp:'none'
    });
    break;
  case 2:
    count=1;
    this.setState({
      album_b_photo_a:0,album_b_photo_b:0,album_b_photo_c:0,album:0,album_disp:'none'
    });
    break;
  case 3:
    count=1;
    this.setState({
      album_c_photo_a:0,album_c_photo_b:0,album_c_photo_c:0,album:0,album_disp:'none'
    });
    break;
  case 4:
    count=1;
    this.setState({
      album_d_photo_a:0,album_d_photo_b:0,album_d_photo_c:0,album:0,album_disp:'none'
      });
    break;
  case 5:
    count=1;
    this.setState({
    album_e_photo_a:0,album_e_photo_b:0,album_e_photo_c:0,album:0,album_disp:'none'
    });
    break;
  case 6:
    count=1;
    this.setState({
    album_f_photo_a:0,album_f_photo_b:0,album_f_photo_c:0,album:0,album_disp:'none'
    });
    break;
}

}


 
  
render(){

  if (this.state.auth!==200){

    return <Redirect to = '/'/>
    
  }
  
   return(       

    <div className = 'disp'>
    
        <img className = 'hdr' src = {require('./images/hdr.jpg')} alt = "Nandana in Maize Field"/>

        <p className='pgraph'>My Photo Albums</p>

        <div className = 'lne_a'></div>

        <div className = 'cont_a'>
        <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailOne}  src = {require('./images/Album-1/01.jpg')} alt = "Nandana's first day at school" />
          <figcaption className = "cption">My first school day...</figcaption>
        </figure>
         
        </div>

        <div className = 'cont_b'>
          <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailTwo}  src = {require('./images/Album-2/01.jpg')} alt = "Nandana's first day at school" />
          <figcaption className = "cption">My first school day...</figcaption>
          </figure>
        </div>

        <div className = 'cont_c'>
          <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailThree}  src = {require('./images/Album-3/01.jpg')} alt = "Castle cochem,Germany" />
          <figcaption className = "cption">Castle Cochem,Germany...</figcaption>
          </figure>
        </div>

        <div className = 'cont_d'>
          <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailFour}  src = {require('./images/Album-4/01.jpg')} alt = "Castle cochem,Germany" />
          <figcaption className = "cption">Eifel National Park, Germany...</figcaption>
          </figure>
        </div>
        
        <div className = 'cont_e'>
          <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailFive}  src = {require('./images/Album-5/01.jpg')} alt = "Kronberg castle,Germany" />
          <figcaption className = "cption">Kronberg castle, Denmark...</figcaption>
          </figure>
        </div>

        <div className = 'cont_f'>
          <figure>
          <img className = 'img_hvr thnail' onClick = {this.tnailSix}  src = {require('./images/Album-6/01.jpg')} alt = "Kronberg castle,Germany" />
          <figcaption className = "cption">Duisburg Zoo, Germany...</figcaption>
          </figure>
        </div>

        <div className = 'lne_b'></div>


        <div className = 'albm'  style = {{display:this.state.album_disp}} >
          
         <i className = 'material-icons left_icn' onClick = {this.backward}>chevron_left</i>

         <img className = 'photo' style={{opacity:this.state.album_a_photo_a}}   src = {require('./images/Album-1/01.jpg') } alt ="baby Nandana sleepsuit"/>
         <img className = 'photo' style={{opacity:this.state.album_a_photo_b}}   src = {require('./images/Album-1/02.jpg') } alt ="baby Nandana Photoshoot"/>
         <img className = 'photo' style={{opacity:this.state.album_a_photo_c}}   src = {require('./images/Album-1/03.jpg') } alt ="baby Nandana Garden"/>

         <img className = 'photo' style={{opacity:this.state.album_b_photo_a}}   src = {require('./images/Album-2/01.jpg') } alt ="Nandana first school day"/>
         <img className = 'photo' style={{opacity:this.state.album_b_photo_b}}   src = {require('./images/Album-2/02.jpg') } alt ="Nandana getting ready for first school day"/>
         <img className = 'photo' style={{opacity:this.state.album_b_photo_c}}   src = {require('./images/Album-2/03.jpg') } alt ="Nandana in Garden after first school day"/>

         <img className = 'photo' style={{opacity:this.state.album_c_photo_a}}   src = {require('./images/Album-3/01.jpg') } alt ="Castle Cochem,Germany"/>
         <img className = 'photo' style={{opacity:this.state.album_c_photo_b}}   src = {require('./images/Album-3/02.jpg') } alt ="With my mom at the castle"/>
         <img className = 'photo' style={{opacity:this.state.album_c_photo_c}}   src = {require('./images/Album-3/03.jpg') } alt ="One more with my mom"/>

         <img className = 'photo' style={{opacity:this.state.album_d_photo_a}}   src = {require('./images/Album-4/01.jpg') } alt ="National Park,Eifel"/>
         <img className = 'photo' style={{opacity:this.state.album_d_photo_b}}   src = {require('./images/Album-4/02.jpg') } alt ="On the roller skates"/>
         <img className = 'photo' style={{opacity:this.state.album_d_photo_c}}   src = {require('./images/Album-4/03.jpg') } alt ="A stroll at the park"/>

         <img className = 'photo' style={{opacity:this.state.album_e_photo_a}}   src = {require('./images/Album-5/01.jpg') } alt ="Kronberg Castle,Denmark"/>
         <img className = 'photo' style={{opacity:this.state.album_e_photo_b}}   src = {require('./images/Album-5/02.jpg') } alt ="Views from the Castle tower"/>
         <img className = 'photo' style={{opacity:this.state.album_e_photo_c}}   src = {require('./images/Album-5/03.jpg') } alt ="Thats swedish skyline"/>

         <img className = 'photo' style={{opacity:this.state.album_f_photo_a}}   src = {require('./images/Album-6/01.jpg') } alt ="Kronberg Castle,Denmark"/>
         <img className = 'photo' style={{opacity:this.state.album_f_photo_b}}   src = {require('./images/Album-6/02.jpg') } alt ="Views from the Castle tower"/>
         <img className = 'photo' style={{opacity:this.state.album_f_photo_c}}   src = {require('./images/Album-6/03.jpg') } alt ="Thats swedish skyline"/>
         
         <i className = 'material-icons right_icn' onClick={this.forward}>chevron_right</i>
         <i className = 'material-icons close_icn' onClick = {this.close}>close</i>
         <p className = 'albm_footer'>{count} / {strength}</p>
        </div>
       
        
    </div>
  )
}

}