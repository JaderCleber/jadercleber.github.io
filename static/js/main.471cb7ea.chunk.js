(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),i=a(22),s=a.n(i),l=a(36),m=a(23),u=a(24),p=a(28),d=a(25),h=a(29),g=a(82),f=a(83),v=a(86),b=a(84),E=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location,t=new google.maps.Map(document.getElementById("map"),{zoom:14,center:e});new google.maps.Marker({position:e,map:t})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.onClose,n=e.street,r=e.neighborhood,c=e.city,i=e.cep;return o.a.createElement(g.a,{className:t.paper},o.a.createElement(f.a,{container:!0,spacing:2,justify:"flex-end"},o.a.createElement(f.a,{item:!0},o.a.createElement(v.a,{id:"btn-close",onClick:a},"X"))),o.a.createElement(b.a,{gutterBottom:!0,variant:"h5",id:"street"},n),o.a.createElement(b.a,{gutterBottom:!0,variant:"body1",id:"neighborhood"},r),o.a.createElement(b.a,{gutterBottom:!0,variant:"body1",id:"city"},c),o.a.createElement(b.a,{gutterBottom:!0,variant:"body1",id:"cep"},i),o.a.createElement(f.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement("div",{id:"map",className:t.map}))))}}]),t}(o.a.PureComponent),y=a(85),w=a(87),k=a(5),j=a(31),x=a.n(j),C=a(44),O=a.n(C),B="AIzaSyCUv7kIrrpLwXW4xz0RrPFEbZZNWROKDwQ";x.a.setApiKey(B);var N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={cep:"",found:{},location:null,mapReady:!1,notFound:""},a.script=void 0,a.handleChange=function(e){return a.setState({cep:e.target.value.replace(/\D/g,""),notFound:""})},a.handleClick=function(e){return function(){a.setState({found:{},location:null,notFound:""},Object(l.a)(s.a.mark(function t(){var n,o,r,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://viacep.com.br/ws/".concat(e,"/json/"));case 3:if(200!==(n=t.sent).status){t.next=13;break}return t.next=7,n.json();case 7:return o=t.sent,t.next=10,x.a.fromAddress("".concat(e,"+").concat(o.logradouro,"+").concat(o.bairro,"+").concat(o.localidade));case 10:r=t.sent,c=r.results[0].geometry.location,a.setState({found:{cep:o.cep,street:o.logradouro,neighborhood:o.bairro,city:"".concat(o.localidade," - ").concat(o.uf),startNumber:o.complemento.substr(3,o.complemento.indexOf("/"))},location:c});case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),a.setState({notFound:"Nenhum Resultado"});case 18:case"end":return t.stop()}},t,null,[[0,15]])})))}},a.handleClose=function(){return a.setState({found:{},cep:""})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.type="text/javascript",t.src="https://maps.google.com/maps/api/js?key=".concat(B);var a=document.getElementsByTagName("script")[0];a.parentNode&&(a.parentNode.insertBefore(t,a),t.addEventListener("load",function(t){e.setState({mapReady:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.cep,a=e.found,n=e.location,r=e.mapReady,c=e.notFound,i=this.props.classes;return o.a.createElement(f.a,{container:!0,className:i.root,spacing:2},o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(g.a,{className:O()(i.paper,i.gray)},o.a.createElement(b.a,{gutterBottom:!0,variant:"h6"},"Consultar"),o.a.createElement(f.a,{container:!0,spacing:2},o.a.createElement(f.a,{item:!0},o.a.createElement(b.a,{gutterBottom:!0,variant:"overline"},"CEP")),o.a.createElement(f.a,{item:!0,xs:2},o.a.createElement(y.a,{className:i.margin},o.a.createElement(w.a,{id:"cep-search",value:t,onChange:this.handleChange}))),o.a.createElement(f.a,{item:!0,xs:2},o.a.createElement(v.a,{id:"btn-search",disabled:8!==t.length,onClick:this.handleClick(t),variant:"contained",color:"primary",className:i.button},"Buscar"))))),a.cep&&r?o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(E,{cep:a.cep,street:a.street,neighborhood:a.neighborhood,city:a.city,onClose:this.handleClose,classes:i,location:n})):o.a.createElement(b.a,{gutterBottom:!0,variant:"h6"},c))}}]),t}(o.a.PureComponent),S=Object(k.a)(function(e){return{root:{flexGrow:1,overflow:"hidden"},paper:{padding:e.spacing(2)},gray:{background:"#efefef"},button:{margin:e.spacing(1)},map:{height:"".concat(.4*window.innerHeight,"px")}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.471cb7ea.chunk.js.map