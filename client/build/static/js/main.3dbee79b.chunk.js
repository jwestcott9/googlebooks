(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(71)},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(30),r=a.n(l),c=(a(38),a(9)),s=a(6);a(39);var i=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light my-nav-bar"},o.a.createElement("h3",null,"React Books"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav nav-link-host"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(c.b,{to:"/",className:"/"===window.location.pathname?"nav-link active bold-link":"nav-link",id:"my-link"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active bold-link":"nav-link",id:"my-link"},"Saved Books")))))},m=a(11),u=a(12),d=a(14),v=a(13),h=a(15);var k=function(e){return o.a.createElement("div",{className:"container"},e.children)};a(44);var b=function(e){return o.a.createElement("div",{className:"title-host"},e.children)};a(45);var f=function(){return o.a.createElement("h1",{className:"title text-center"},"The World's Home for Books")};a(46);var E=function(e){return o.a.createElement("div",{className:"content-host"},e.children)};a(47);var p=function(e){return o.a.createElement("form",{className:"form-host"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Search Books:"),o.a.createElement("input",Object.assign({type:"text",className:"form-control",id:"exampleFormControlInput1"},e,{placeholder:"Your Search"}))))};a(48);var g=function(e){return o.a.createElement("div",{className:"submit-host"},o.a.createElement("button",Object.assign({type:"submit",className:"btn btn-primary submit-btn"},e),"Submit"))},N=a(10),y=a.n(N),B={getBooks:function(e){return y.a.get("/api/books",{params:{q:e}})},saveBook:function(e){return y.a.post("/api/save",e)},getSavedBooks:function(){return y.a.get("/api/getsaved")},deleteBooks:function(e){return y.a.delete("/api/delete/"+e)}};a(66);var w=function(e){return o.a.createElement("div",{className:"container book-host"},e.children)};a(67);var I=function(e){return o.a.createElement("div",{className:"row book-row"},o.a.createElement("div",{className:"col-md-12 book-col"},o.a.createElement("img",{className:"image",src:e.image,alt:"book-thumbnail"}),o.a.createElement("h1",{className:"title"},e.title),o.a.createElement("h3",{className:"author-head"},"Author:"),o.a.createElement("h3",{className:"author"},e.author),o.a.createElement("br",null),o.a.createElement("h3",{className:"descript-head"},"Description:"),o.a.createElement("p",{className:"description"},e.description),o.a.createElement("br",null),o.a.createElement("h3",{className:"descript-head"},"Learn More:"),o.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:e.link},e.link),o.a.createElement("br",null),o.a.createElement("button",Object.assign({type:"button"},e,{className:"btn btn-outline-primary save-btn"}),"Save")))};a(68);var j=function(e){return o.a.createElement("div",{id:"myModal",className:e.modalclass},o.a.createElement("div",{className:"modal-content"},o.a.createElement("span",Object.assign({className:"close"},e),"\xd7"),o.a.createElement("div",{className:"modal-text"},o.a.createElement("h1",{className:"title text-center"},e.title),o.a.createElement("h3",{className:"message text-center"},"Saved to your books"))))},O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:[],modalClass:"no-modal",title:""},a.checkInput=function(e){var t=e.target.value;a.setState({query:t})},a.checkQuery=function(e){e.preventDefault();var t=a.state.query.toLowerCase().replace(/ +/g,"");B.getBooks(t).then(function(e){return a.setState({books:e.data},a.handleBooks)}).catch(function(e){return console.log(e)})},a.handleBooks=function(){console.log(a.state.books)},a.saveBook=function(e){for(var t=0;t<a.state.books.length;t++){var n=a.state.books[t];e===n.id&&a.postBook(n)}},a.postBook=function(e){B.saveBook({image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors[0],description:e.volumeInfo.description,link:e.volumeInfo.infoLink}).then(function(e){a.setState({modalClass:"modal",title:e.data.title})})},a.closeModal=function(){a.setState({modalClass:"no-modal"})},a.checkImage=function(e){return"undefined"===e?"#":e},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(k,null,o.a.createElement(j,{modalclass:this.state.modalClass,title:this.state.title,onClick:this.closeModal}),o.a.createElement(b,null,o.a.createElement(f,null)),o.a.createElement(E,null,o.a.createElement(p,{value:this.state.query,onChange:this.checkInput}),o.a.createElement(g,{onClick:this.checkQuery}),o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(I,{key:t.id,image:e.checkImage(t.volumeInfo.imageLinks.thumbnail),title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,link:t.volumeInfo.infoLink,onClick:function(){return e.saveBook(t.id)}})}))))}}]),t}(o.a.Component);a(69);var C=function(){return o.a.createElement("h1",{className:"text-center title"},"Saved Books")};a(70);var S=function(e){return o.a.createElement("div",{className:"row book-row"},o.a.createElement("div",{className:"col-md-12 book-col"},o.a.createElement("img",{className:"image",src:e.image,alt:"book-thumbnail"}),o.a.createElement("h1",{className:"title"},e.title),o.a.createElement("h3",{className:"author-head"},"Author:"),o.a.createElement("h3",{className:"author"},e.author),o.a.createElement("br",null),o.a.createElement("h3",{className:"descript-head"},"Description:"),o.a.createElement("p",{className:"description"},e.description),o.a.createElement("br",null),o.a.createElement("h3",{className:"descript-head"},"Learn More:"),o.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:e.link},e.link),o.a.createElement("br",null),o.a.createElement("button",Object.assign({type:"button"},e,{className:"btn btn-outline-primary save-btn"}),"Delete Book")))},x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],modalClass:"no-modal",title:""},a.loadBooks=function(){B.getSavedBooks().then(function(e){a.setState({books:e.data})})},a.deleteBook=function(e){B.deleteBooks(e).then(function(){a.loadBooks()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(k,null,o.a.createElement(b,null,o.a.createElement(f,null)),o.a.createElement(C,null),o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(S,{key:t._id,image:t.image,title:t.title,author:t.author,description:t.description,link:t.link,onClick:function(){return e.deleteBook(t._id)}})})))}}]),t}(o.a.Component);var L=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(s.a,{exact:!0,path:"/",component:O}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3dbee79b.chunk.js.map