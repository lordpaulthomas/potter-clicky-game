(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Voldemort","image":"http://idigitalcitizen.files.wordpress.com/2009/09/lord-voldemort-hp5-green-320x480-iphone.jpg?w=320"},{"id":2,"name":"Dumbledore","image":"https://www.bing.com/th?id=OIP.xahsG_HRh8B3LrBMLvG9GAHaJ4&pid=Api&rs=1"},{"id":3,"name":"Hermoine","image":"http://talkiewood.com/wp-content/uploads/2014/03/hermione-granger-wallpaper2.jpg?w=610"},{"id":4,"name":"Snape","image":"http://2.bp.blogspot.com/-jBKy8iLeSi8/ThstHk1ejxI/AAAAAAAABao/YSof0EL7U1E/s1600/severus-snape.jpg"},{"id":5,"name":"Draco","image":"https://www.bing.com/th?id=OIP.pL2ZO8C3QeH0jPURu7s52gHaLZ&pid=Api&rs=1"},{"id":6,"name":"Ron","image":"https://i.pinimg.com/736x/3e/96/c3/3e96c36fda338aeeada6340d63d7ebc1--movie-characters-fictional-characters.jpg"},{"id":7,"name":"Hagrid","image":"https://i.pinimg.com/originals/e0/c7/d1/e0c7d1a93ce1d42e985b1b578d2ee1d2.jpg"},{"id":8,"name":"Sirius","image":"http://vignette3.wikia.nocookie.net/harrypotter/images/4/4d/SiriusBlackTree.jpg/revision/latest?cb=20080203105304"},{"id":9,"name":"Bellatrix","image":"https://s-media-cache-ak0.pinimg.com/736x/d8/a8/ad/d8a8ad379bc39ac46020e2a0fad5d8e1.jpg"},{"id":10,"name":"Filch","image":"http://3.bp.blogspot.com/-TmW3OeIKujA/UjdtSGm6BBI/AAAAAAAACXQ/fRSA_m-QSws/s1600/Filch-Norris.jpg"},{"id":11,"name":"Harry","image":"https://img.buzzfeed.com/buzzfeed-static/static/2015-11/20/15/enhanced/webdr04/grid-cell-1182-1448053182-2.jpg"},{"id":12,"name":"Dementor","image":"https://cdn.shopify.com/s/files/1/2597/4248/products/hpdcfig15_17_2028x2048@2x.jpg?v=1562020116"}]')},20:function(e,t,a){e.exports=a(41)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(25),{shake:{},navbar:{background:"#563D7C",textAlign:"center",padding:"10px 0px"},navwords:{fontSize:"24px",color:"#ffffff"},start:{fontSize:"24px",color:"white"},answerRight:{fontSize:"24px",color:"green"},answerWrong:{fontSize:"24px",color:"red"}}),o=function(e){return console.log(e.current),console.log(parseInt(e.score)),r.a.createElement("div",{className:"navbar navbar-default fixed-top",style:l.navbar},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("nav",{style:l.navbar},r.a.createElement("span",{style:l.navwords},r.a.createElement("strong",null,"Clicky Game!")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("nav",{style:l.navbar},r.a.createElement("span",{style:"Click any image to start"===e.current?l.start:"You guessed correct"===e.current?l.answerRight:l.answerWrong,id:"current"},e.current))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("nav",{style:l.navbar},r.a.createElement("span",{style:l.navwords},"Score: ",e.score," | Top Score: ",e.topScore)))))},s=a(8),m=a(9),d=a(11),u=a(10),g=a(12),p=(a(26),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={gameStyle:0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("props"+this.props.onClick),r.a.createElement("div",{className:"fluid"},r.a.createElement("div",{className:"bg-dark text-white"},r.a.createElement("img",{src:"https://get.wallhere.com/photo/colorful-illustration-digital-art-simple-background-abstract-3D-minimalism-heart-blue-background-stars-blue-simple-pattern-texture-circle-3d-object-shape-design-line-petal-2560x1440-px-font-719269.jpg",id:"image",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay text-center"},r.a.createElement("h1",{id:"title",className:"card-title text-center"},"Clicky Game"),r.a.createElement("h3",{id:"rules",className:"card-text"},"Click on an image to earn points, but don't click on any more than once!"))))}}]),t}(r.a.Component));a(27);var h=function(e){return r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container",key:e.id,onClick:function(){return e.handleClick(e.name)}},r.a.createElement("img",{alt:e.name,src:e.image}))))};a(28);var f=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},E=a(19),v=(a(29),function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif",id:"gif",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h1",{id:"winner",className:"card-title text-center"},"You Won!!"),r.a.createElement("h3",{id:"quote",className:"card-text"},'"YOU\'RE A WIZARD HARRY!!"')))}),y=(a(30),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"fluid"},r.a.createElement("div",{className:"bg-dark text-white"},r.a.createElement("img",{src:"https://media.giphy.com/media/4Pcf0yfcGUNgY/giphy.gif",id:"gif",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h1",{id:"loser",className:"card-title text-center"},"You Lose!!"),r.a.createElement("h3",{id:"quote2",className:"card-text"},'"The boy who lived, come to die!!"')))))}),b=a(46),A=a(43),w=a(44),S=a(45),k=a(31),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={friends:E,counter:0,topscore:0,idArray:[],modal:!1,modal2:!1,current:"Click any image to start",type:"friends"},a.toggle=function(){a.setState({modal:!a.state.modal})},a.toggle2=function(){a.setState({modal2:!a.state.modal2})},a.styleChange=function(e){e.preventDefault(),a.setState({changeStyle:1})},a.shuffleDeck=function(e){if(a.setState({counter:a.state.counter+1}),11===parseInt(a.state.counter))return a.setState({topScore:12}),a.setState({counter:0,idArray:[],current:"Click any image to start"}),void a.setState({modal:!a.state.modal});a.state.idArray.includes(e)?(a.setState({modal2:!a.state.modal2}),a.setState({counter:0,idArray:[]}),a.state.counter>a.state.topscore&&a.setState({topscore:a.state.counter,current:"You guessed incorrectly"})):(a.setState({counter:a.state.counter+1}),a.setState({idArray:a.state.idArray+=e}),a.setState({friends:k(a.state.friends),current:"You guessed correct"}))},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(A.a,{toggle:this.toggle}),r.a.createElement(w.a,null,r.a.createElement(v,null)),r.a.createElement(S.a,null))),r.a.createElement("div",null,r.a.createElement(b.a,{isOpen:this.state.modal2,toggle:this.toggle2},r.a.createElement(A.a,{toggle:this.toggle2}),r.a.createElement(w.a,null,r.a.createElement(y,null)),r.a.createElement(S.a,null))),r.a.createElement(o,{score:this.state.counter,topScore:this.state.topscore,current:this.state.current,className:"container"}),r.a.createElement(p,null),r.a.createElement(f,null,this.state.friends.map((function(t){return r.a.createElement(h,{key:t.id,id:t.id,name:t.name,image:t.image,handleClick:e.shuffleDeck})}))))}}]),t}(r.a.Component),N=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer font-small blue"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",r.a.createElement("a",{href:"https://mdbootstrap.com/education/bootstrap/"}," Paul Thomas"))))};var j=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(N,null))};i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d5e68ca8.chunk.js.map