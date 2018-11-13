(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},26:function(e,t,a){e.exports=a(53)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(22),i=a.n(n),o=(a(18),a(55)),l=a(57),c=a(56),h=a(5),u=a(6),p=a(8),m=a(7),d=a(9);function f(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function v(){var e;return"".concat((e=["poland","norway","sweden","denmark","srilanka","finland","canada","america","england","australia"])[Math.floor(Math.random()*e.length)])}var b=function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).storeInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.storeInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.storeInput,required:!0,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store"))}}]),t}(r.a.Component),g=a(12),y=(a(32),function(){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Deal",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,"Fresh Daily")))}),O=function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).showOrder=function(e){var t=a.props.fishes[e],s=a.props.order[e],n=t&&"available"===t.status;return t?n?r.a.createElement("li",{key:e},s," lbs ",t.name,f(s*t.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")):r.a.createElement("li",null,"Sorry ",t?t.name:"fish"," is no longer available."):null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var s=e.props.fishes[a],r=e.props.order[a];return s&&"available"===s.status?t+r*s.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h1",null,"Order"),r.a.createElement("ul",null,t.map(this.showOrder)),"Total: ",f(a))}}]),t}(r.a.Component),E=(a(34),function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Fish Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text"}),r.a.createElement("button",{type:"submit"}," + Add Fish"))}}]),t}(s.Component)),j=a(15),w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(g.a)({},a.props.fish,Object(j.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.fishKey,t),console.log(t)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{name:"name",type:"text",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{name:"price",type:"text",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.fishKey)}},"Delete Fish"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inventory"},r.a.createElement("h1",null,"Inventory"),Object.keys(this.props.fishes).map(function(t){return r.a.createElement(w,{key:t,fishKey:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(E,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes"))}}]),t}(r.a.Component),F=(a(36),function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:this.props.details.image,alt:this.props.details.name}),r.a.createElement("h3",{className:"fish-name"},this.props.details.name,r.a.createElement("span",{className:"price"},f(this.props.details.price))),r.a.createElement("p",{className:"desc"},this.props.details.desc),r.a.createElement("button",{disabled:"unavailable"===this.props.details.status,onClick:function(){return e.props.addToOrder(e.props.ordkey)}},"available"===this.props.details.status?"Add To Cart":"Sold Out!"))}}]),t}(r.a.Component)),S={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},C=a(23),N=a.n(C),R=a(24),T=a.n(R).a.initializeApp({apiKey:"AIzaSyCiIlmYgjUVKgryzU2DzXqfpxs9vQCEHgw",authDomain:"fish-shop-31ae8.firebaseapp.com",databaseURL:"https://fish-shop-31ae8.firebaseio.com"}),A=N.a.createClass(T.database()),x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var s=Object(g.a)({},a.state.fishes);s[e]=t,a.setState({fishes:s})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t})},a.loadSampleFishes=function(){a.setState({fishes:S})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.ref=A.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"menu"},r.a.createElement(y,null),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(F,{key:t,details:e.state.fishes[t],ordkey:t,addToOrder:e.addToOrder})}))),r.a.createElement(O,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(k,{addFish:this.addFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,updateFish:this.updateFish,deleteFish:this.deleteFish}))}}]),t}(s.Component),D=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/Shop-Fish",component:b}),r.a.createElement(c.a,{path:"/store/:storeId",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.a8ea829a.chunk.js.map