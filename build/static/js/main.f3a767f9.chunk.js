(this["webpackJsonpnandu-app"]=this["webpackJsonpnandu-app"]||[]).push([[0],Array(21).concat([function(t,a,e){t.exports=e.p+"static/media/01.3a372733.jpg"},function(t,a,e){t.exports=e.p+"static/media/01.40d94ce9.jpg"},function(t,a,e){t.exports=e.p+"static/media/01.fb16024f.jpg"},function(t,a,e){t.exports=e.p+"static/media/01.17b6b0b5.jpg"},function(t,a,e){t.exports=e.p+"static/media/01.8094da96.jpg"},function(t,a,e){t.exports=e.p+"static/media/01.989fac91.jpg"},,,function(t,a,e){t.exports=e(61)},,,,,function(t,a,e){},,function(t,a,e){},,,,,,function(t,a,e){},function(t,a,e){t.exports=e.p+"static/media/01.27caf97f.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.98f44d15.jpg"},function(t,a,e){},function(t,a,e){t.exports=e.p+"static/media/hdr.557097aa.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.fb267056.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.8ae5dc51.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.240447b3.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.4958ac7c.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.a5e948be.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.5ea0ea1f.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.ad2bedef.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.3834ce84.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.992e462e.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.ddc76c26.jpg"},function(t,a,e){t.exports=e.p+"static/media/02.c4325d46.jpg"},function(t,a,e){t.exports=e.p+"static/media/03.1e735d9c.jpg"},function(t,a,e){},function(t,a,e){t.exports=e.p+"static/media/03.2c277c3d.jpg"},function(t,a,e){"use strict";e.r(a);var o=e(0),l=e.n(o),n=e(27),s=e.n(n),c=e(3),_=e(4),i=e(6),m=e(5),r=e(12),h=e(1),u=(e(34),e(11)),b=e.n(u),p=e(14),d=e(7),f=(e(36),function(t){Object(i.a)(e,t);var a=Object(m.a)(e);function e(t){var o;return Object(c.a)(this,e),(o=a.call(this,t)).out=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/signOut");case 2:return a=t.sent,t.abrupt("return",a.status);case 4:case"end":return t.stop()}}),t)}))),o.logOut=o.logOut.bind(Object(d.a)(o)),o}return Object(_.a)(e,[{key:"logOut",value:function(){this.out()}},{key:"render",value:function(){var t=this.props,a=t.i,e=t.a,o=t.b;return l.a.createElement("div",{className:"nav_bar"},l.a.createElement("i",{className:"material-icons icn"},a),l.a.createElement("p",{id:"pos_a"},e),l.a.createElement("p",{id:"pos_b"},"Nandana Lekshmi Pillai"),l.a.createElement("p",{id:"pos_c"},l.a.createElement(r.b,{to:o,style:{textDecoration:"none",color:"gold"}},o)),l.a.createElement("p",{id:"pos_d",onClick:this.logOut},l.a.createElement(r.b,{to:"/",style:{textDecoration:"none",color:"gold"}},"Sign Out")," "))}}]),e}(o.Component)),E=(e(42),function(t){Object(i.a)(o,t);var a=Object(m.a)(o);function o(){return Object(c.a)(this,o),a.apply(this,arguments)}return Object(_.a)(o,[{key:"render",value:function(){return l.a.createElement("div",{className:"disp"},l.a.createElement("div",{className:"none-login"},l.a.createElement("p",{className:"none-pos_a"},"Nandana Pillai",l.a.createElement("br",null),l.a.createElement("br",null),"....in Pictures"),l.a.createElement("form",{method:"POST",action:"/register"},l.a.createElement("p",null,"Sign in to continue:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"uname",placeholder:"Username",required:!0})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"password",name:"pword",placeholder:"Password",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Sign in"}))),l.a.createElement("img",{className:"none-img_one",src:e(43),alt:""}),l.a.createElement("img",{className:"none-img_two",src:e(44),alt:""}))}}]),o}(o.Component)),y=(e(45),1),g=function(t){Object(i.a)(o,t);var a=Object(m.a)(o);function o(t){var e;return Object(c.a)(this,o),(e=a.call(this,t)).checkAuth=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/checkToken");case 2:return a=t.sent,t.abrupt("return",a.status);case 4:case"end":return t.stop()}}),t)}))),e.state={auth:200,album:0,album_disp:"none",album_a_photo_a:0,album_a_photo_b:0,album_a_photo_c:0,album_b_photo_a:0,album_b_photo_b:0,album_b_photo_c:0,album_c_photo_a:0,album_c_photo_b:0,album_c_photo_c:0,album_d_photo_a:0,album_d_photo_b:0,album_d_photo_c:0,album_e_photo_a:0,album_e_photo_b:0,album_e_photo_c:0,album_f_photo_a:0,album_f_photo_b:0,album_f_photo_c:0},e.tnailOne=e.tnailOne.bind(Object(d.a)(e)),e.tnailTwo=e.tnailTwo.bind(Object(d.a)(e)),e.tnailThree=e.tnailThree.bind(Object(d.a)(e)),e.tnailFour=e.tnailFour.bind(Object(d.a)(e)),e.tnailFive=e.tnailFive.bind(Object(d.a)(e)),e.tnailSix=e.tnailSix.bind(Object(d.a)(e)),e.forward=e.forward.bind(Object(d.a)(e)),e.backward=e.backward.bind(Object(d.a)(e)),e.close=e.close.bind(Object(d.a)(e)),e}return Object(_.a)(o,[{key:"componentWillMount",value:function(){var t=this;this.checkAuth().then((function(a){return t.setState({auth:a})}))}},{key:"tnailOne",value:function(){window.scrollTo(0,0),this.setState({album:1,album_disp:"flex",album_a_photo_a:1,album_a_photo_b:0,album_a_photo_c:0})}},{key:"tnailTwo",value:function(){window.scrollTo(0,0),this.setState({album:2,album_disp:"flex",album_b_photo_a:1,album_b_photo_b:0,album_b_photo_c:0})}},{key:"tnailThree",value:function(){window.scrollTo(0,0),this.setState({album:3,album_disp:"flex",album_c_photo_a:1,album_c_photo_b:0,album_c_photo_c:0})}},{key:"tnailFour",value:function(){window.scrollTo(0,0),this.setState({album:4,album_disp:"flex",album_d_photo_a:1,album_d_photo_b:0,album_d_photo_c:0})}},{key:"tnailFive",value:function(){window.scrollTo(0,0),this.setState({album:5,album_disp:"flex",album_e_photo_a:1,album_e_photo_b:0,album_e_photo_c:0})}},{key:"tnailSix",value:function(){window.scrollTo(0,0),this.setState({album:6,album_disp:"flex",album_f_photo_a:1,album_f_photo_b:0,album_f_photo_c:0})}},{key:"forward",value:function(){switch(this.state.album){case 1:1===this.state.album_a_photo_a?(y++,this.setState({album_a_photo_a:0,album_a_photo_b:1,album_a_photo_c:0})):1===this.state.album_a_photo_b?(y++,this.setState({album_a_photo_a:0,album_a_photo_b:0,album_a_photo_c:1})):1===this.state.album_a_photo_c&&alert("On the Last Slide!");break;case 2:1===this.state.album_b_photo_a?(y++,this.setState({album_b_photo_a:0,album_b_photo_b:1,album_b_photo_c:0})):1===this.state.album_b_photo_b?(y++,this.setState({album_b_photo_a:0,album_b_photo_b:0,album_b_photo_c:1})):1===this.state.album_b_photo_c&&alert("On the Last Slide!");break;case 3:1===this.state.album_c_photo_a?(y++,this.setState({album_c_photo_a:0,album_c_photo_b:1,album_c_photo_c:0})):1===this.state.album_c_photo_b?(y++,this.setState({album_c_photo_a:0,album_c_photo_b:0,album_c_photo_c:1})):1===this.state.album_c_photo_c&&alert("On the Last Slide!");break;case 4:1===this.state.album_d_photo_a?(y++,this.setState({album_d_photo_a:0,album_d_photo_b:1,album_d_photo_c:0})):1===this.state.album_d_photo_b?(y++,this.setState({album_d_photo_a:0,album_d_photo_b:0,album_d_photo_c:1})):1===this.state.album_d_photo_c&&alert("On the Last Slide!");break;case 5:1===this.state.album_e_photo_a?(y++,this.setState({album_e_photo_a:0,album_e_photo_b:1,album_e_photo_c:0})):1===this.state.album_e_photo_b?(y++,this.setState({album_e_photo_a:0,album_e_photo_b:0,album_e_photo_c:1})):1===this.state.album_e_photo_c&&alert("On the Last Slide!");break;case 6:1===this.state.album_f_photo_a?(y++,this.setState({album_f_photo_a:0,album_f_photo_b:1,album_f_photo_c:0})):1===this.state.album_f_photo_b?(y++,this.setState({album_f_photo_a:0,album_f_photo_b:0,album_f_photo_c:1})):1===this.state.album_f_photo_c&&alert("On the Last Slide!")}}},{key:"backward",value:function(){switch(this.state.album){case 1:1===this.state.album_a_photo_a?alert("On the First Slide"):1===this.state.album_a_photo_b?(y--,this.setState({album_a_photo_a:1,album_a_photo_b:0,album_a_photo_c:0})):1===this.state.album_a_photo_c&&(y--,this.setState({album_a_photo_a:0,album_a_photo_b:1,album_a_photo_c:0}));break;case 2:1===this.state.album_b_photo_a?alert("On the First Slide"):1===this.state.album_b_photo_b?(y--,this.setState({album_b_photo_a:1,album_b_photo_b:0,album_b_photo_c:0})):1===this.state.album_b_photo_c&&(y--,this.setState({album_b_photo_a:0,album_b_photo_b:1,album_b_photo_c:0}));break;case 3:1===this.state.album_c_photo_a?alert("On the First Slide"):1===this.state.album_c_photo_b?(y--,this.setState({album_c_photo_a:1,album_c_photo_b:0,album_c_photo_c:0})):1===this.state.album_c_photo_c&&(y--,this.setState({album_c_photo_a:0,album_c_photo_b:1,album_c_photo_c:0}));break;case 4:1===this.state.album_d_photo_a?alert("On the First Slide"):1===this.state.album_d_photo_b?(y--,this.setState({album_d_photo_a:1,album_d_photo_b:0,album_d_photo_c:0})):1===this.state.album_d_photo_c&&(y--,this.setState({album_d_photo_a:0,album_d_photo_b:1,album_d_photo_c:0}));break;case 5:1===this.state.album_e_photo_a?alert("On the First Slide"):1===this.state.album_e_photo_b?(y--,this.setState({album_e_photo_a:1,album_e_photo_b:0,album_e_photo_c:0})):1===this.state.album_e_photo_c&&(y--,this.setState({album_e_photo_a:0,album_e_photo_b:1,album_e_photo_c:0}));break;case 6:1===this.state.album_f_photo_a?alert("On the First Slide"):1===this.state.album_f_photo_b?(y--,this.setState({album_f_photo_a:1,album_f_photo_b:0,album_f_photo_c:0})):1===this.state.album_f_photo_c&&(y--,this.setState({album_f_photo_a:0,album_f_photo_b:1,album_f_photo_c:0}))}}},{key:"close",value:function(){switch(this.state.album){case 1:y=1,this.setState({album_a_photo_a:0,album_a_photo_b:0,album_a_photo_c:0,album:0,album_disp:"none"});break;case 2:y=1,this.setState({album_b_photo_a:0,album_b_photo_b:0,album_b_photo_c:0,album:0,album_disp:"none"});break;case 3:y=1,this.setState({album_c_photo_a:0,album_c_photo_b:0,album_c_photo_c:0,album:0,album_disp:"none"});break;case 4:y=1,this.setState({album_d_photo_a:0,album_d_photo_b:0,album_d_photo_c:0,album:0,album_disp:"none"});break;case 5:y=1,this.setState({album_e_photo_a:0,album_e_photo_b:0,album_e_photo_c:0,album:0,album_disp:"none"});break;case 6:y=1,this.setState({album_f_photo_a:0,album_f_photo_b:0,album_f_photo_c:0,album:0,album_disp:"none"})}}},{key:"render",value:function(){return 200!==this.state.auth?l.a.createElement(h.a,{to:"/"}):l.a.createElement("div",{className:"disp"},l.a.createElement("img",{className:"hdr",src:e(46),alt:"Nandana in Maize Field"}),l.a.createElement("p",{className:"pgraph"},"My Photo Albums"),l.a.createElement("div",{className:"lne_a"}),l.a.createElement("div",{className:"cont_a"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailOne,src:e(21),alt:"Nandana's first day at school"}),l.a.createElement("figcaption",{className:"cption"},"My first school day..."))),l.a.createElement("div",{className:"cont_b"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailTwo,src:e(22),alt:"Nandana's first day at school"}),l.a.createElement("figcaption",{className:"cption"},"My first school day..."))),l.a.createElement("div",{className:"cont_c"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailThree,src:e(23),alt:"Castle cochem,Germany"}),l.a.createElement("figcaption",{className:"cption"},"Castle Cochem,Germany..."))),l.a.createElement("div",{className:"cont_d"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailFour,src:e(24),alt:"Castle cochem,Germany"}),l.a.createElement("figcaption",{className:"cption"},"Eifel National Park, Germany..."))),l.a.createElement("div",{className:"cont_e"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailFive,src:e(25),alt:"Kronberg castle,Germany"}),l.a.createElement("figcaption",{className:"cption"},"Kronberg castle, Denmark..."))),l.a.createElement("div",{className:"cont_f"},l.a.createElement("figure",null,l.a.createElement("img",{className:"img_hvr thnail",onClick:this.tnailSix,src:e(26),alt:"Kronberg castle,Germany"}),l.a.createElement("figcaption",{className:"cption"},"Duisburg Zoo, Germany..."))),l.a.createElement("div",{className:"lne_b"}),l.a.createElement("div",{className:"albm",style:{display:this.state.album_disp}},l.a.createElement("i",{className:"material-icons left_icn",onClick:this.backward},"chevron_left"),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_a_photo_a},src:e(21),alt:"baby Nandana sleepsuit"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_a_photo_b},src:e(47),alt:"baby Nandana Photoshoot"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_a_photo_c},src:e(48),alt:"baby Nandana Garden"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_b_photo_a},src:e(22),alt:"Nandana first school day"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_b_photo_b},src:e(49),alt:"Nandana getting ready for first school day"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_b_photo_c},src:e(50),alt:"Nandana in Garden after first school day"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_c_photo_a},src:e(23),alt:"Castle Cochem,Germany"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_c_photo_b},src:e(51),alt:"With my mom at the castle"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_c_photo_c},src:e(52),alt:"One more with my mom"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_d_photo_a},src:e(24),alt:"National Park,Eifel"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_d_photo_b},src:e(53),alt:"On the roller skates"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_d_photo_c},src:e(54),alt:"A stroll at the park"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_e_photo_a},src:e(25),alt:"Kronberg Castle,Denmark"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_e_photo_b},src:e(55),alt:"Views from the Castle tower"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_e_photo_c},src:e(56),alt:"Thats swedish skyline"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_f_photo_a},src:e(26),alt:"Kronberg Castle,Denmark"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_f_photo_b},src:e(57),alt:"Views from the Castle tower"}),l.a.createElement("img",{className:"photo",style:{opacity:this.state.album_f_photo_c},src:e(58),alt:"Thats swedish skyline"}),l.a.createElement("i",{className:"material-icons right_icn",onClick:this.forward},"chevron_right"),l.a.createElement("i",{className:"material-icons close_icn",onClick:this.close},"close"),l.a.createElement("p",{className:"albm_footer"},y," / ",3)))}}]),o}(o.Component),v=(e(59),function(t){Object(i.a)(o,t);var a=Object(m.a)(o);function o(t){var e;return Object(c.a)(this,o),(e=a.call(this,t)).checkAuth=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/checkToken");case 2:return a=t.sent,t.abrupt("return",a.status);case 4:case"end":return t.stop()}}),t)}))),e.state={auth:200},e}return Object(_.a)(o,[{key:"componentWillMount",value:function(){var t=this;this.checkAuth().then((function(a){return t.setState({auth:a})}))}},{key:"render",value:function(){return 200!==this.state.auth?l.a.createElement(h.a,{to:"/"}):l.a.createElement("div",{className:"disp"},l.a.createElement("img",{className:"pageThree_img",src:e(60),alt:"Nandana Painted face"}),l.a.createElement("div",{className:"vline_one"}),l.a.createElement("div",{className:"vline_two"}),l.a.createElement("div",{className:"vline_three"}),l.a.createElement("p",{className:"txt"},"Hello,",l.a.createElement("br",null),"I am Nandana, a class-II student at the PRIMUS school, Titz, Germany. ",l.a.createElement("br",null),"I thank you for taking time out to visit my website (a gift from my parents on my fifth birthday).",l.a.createElement("br",null),"Hope you enjoyed it!!!!",l.a.createElement("br",null),"Many thanks,",l.a.createElement("br",null),"Nandana."),l.a.createElement("div",{className:"hline_one"}),l.a.createElement("div",{className:"hline_two"}),l.a.createElement("div",{className:"hline_three"}),l.a.createElement("div",{className:"ftr"},l.a.createElement("p",null,"Copyright \xa9 Deepu R. Pillai",l.a.createElement("br",null),"2017-2020",l.a.createElement("br",null),"Contact: dpillai@protonmail.com",l.a.createElement("br",null),"All Rights Reserved",l.a.createElement("br",null))))}}]),o}(o.Component)),N=function(t){Object(i.a)(e,t);var a=Object(m.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(_.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"cont"},l.a.createElement(E,null))}}]),e}(o.Component),k=function(t){Object(i.a)(e,t);var a=Object(m.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(_.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"cont"},l.a.createElement(f,{i:"collections",a:"Albums",b:"About"}),l.a.createElement(g,null))}}]),e}(o.Component),O=function(t){Object(i.a)(e,t);var a=Object(m.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(_.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"cont"},l.a.createElement(f,{i:"message",a:"About",b:"Albums"}),l.a.createElement(v,null))}}]),e}(o.Component),j=function(t){Object(i.a)(e,t);var a=Object(m.a)(e);function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(_.a)(e,[{key:"render",value:function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h.b,{exact:!0,path:"/",component:N}),l.a.createElement(h.b,{exact:!0,path:"/albums",component:k}),l.a.createElement(h.b,{exact:!0,path:"/about",component:O})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}]),[[29,1,2]]]);
//# sourceMappingURL=main.f3a767f9.chunk.js.map