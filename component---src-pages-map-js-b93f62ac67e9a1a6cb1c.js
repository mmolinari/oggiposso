(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/TIM":function(e,t,n){"use strict";n.r(t),n.d(t,"create",(function(){return a})),n.d(t,"creator",(function(){return r.a})),n.d(t,"local",(function(){return s})),n.d(t,"matcher",(function(){return u.b})),n.d(t,"namespace",(function(){return l.a})),n.d(t,"namespaces",(function(){return f.a})),n.d(t,"pointer",(function(){return d.a})),n.d(t,"pointers",(function(){return m})),n.d(t,"select",(function(){return o.a})),n.d(t,"selectAll",(function(){return v})),n.d(t,"selection",(function(){return h.b})),n.d(t,"selector",(function(){return y.a})),n.d(t,"selectorAll",(function(){return b.a})),n.d(t,"style",(function(){return E.b})),n.d(t,"window",(function(){return j.a}));var r=n("V/Wt"),o=n("AKWm"),a=function(e){return Object(o.a)(Object(r.a)(e).call(document.documentElement))},i=0;function s(){return new c}function c(){this._="@"+(++i).toString(36)}c.prototype=s.prototype={constructor:c,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};var u=n("Cnj1"),l=n("bNSl"),f=n("4xGt"),d=n("XoFe"),p=n("T9TN"),m=function(e,t){return e.target&&(e=Object(p.a)(e),void 0===t&&(t=e.currentTarget),e=e.touches||[e]),Array.from(e,(function(e){return Object(d.a)(e,t)}))},g=n("wibz"),h=n("5Iso"),v=function(e){return"string"==typeof e?new h.a([document.querySelectorAll(e)],[document.documentElement]):new h.a([null==e?[]:Object(g.a)(e)],h.c)},y=n("b9Oj"),b=n("QjDJ"),E=n("Nkvg"),j=n("oxeV")},SFCT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("6xiS"),i=n("SZ+x"),s=n("voE/"),c=n("Bl7J"),u=n("Sfbj"),l=n("6aAV"),f=function(e){var t=e.state,n=e.dispatch;return o.a.createElement(u.ComposableMap,{projection:"geoMercator",projectionConfig:{scale:1800,center:[10,43]}},o.a.createElement(u.Geographies,{geography:l},(function(e){return e.geographies.map((function(e){return o.a.createElement(u.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){console.log(e.properties.reg_name),n({type:"region",region:e.properties.reg_name})},onClick:function(){console.log(e.properties.reg_name)},style:{default:{fill:e.properties.reg_name===t.region?"#D6D6DA":"#AAAAAA",outline:"none"},hover:{fill:"#D6D6DA",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})))},d=n("VphZ"),p=n("0hfp");function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){var t,n=e.data,u=e.location,g={};n.allRegionsZonesCsv.edges.forEach((function(e,t){g[e.node.Date]=e.node}));var h={};n.allMarkdownRemark.nodes.forEach((function(e,t){h[e.frontmatter.id]=e.html}));var v={};n.allMarkdownRemark.nodes.forEach((function(e,t){v[e.frontmatter.id]=e.frontmatter.label}));var y=new Date,b=y.getDate()+"/"+(y.getMonth()+1)+"/"+y.getFullYear(),E={region:null!==(t=localStorage.getItem("region"))&&void 0!==t?t:0,date:b};var j=Object(r.useReducer)((function(e,t){switch(t.type){case"region":return{region:t.region,date:e.date};case"date":return{region:e.region,date:t.date};default:throw new Error}}),E),M=j[0],k=j[1];function w(e,t){return 0!==t&&0!==e?g[e][t]:""}function x(){var e=w(M.date,M.region);return O(M.date)&&""===e&&(e=w(M.date,"Lombardia")),e}function N(){var e=x();if(e)return v[e]}function S(){return 0!==M.date?M.date:""}function O(e){return 2===Object.values(g[e]).filter((function(e,t,n){return n.indexOf(e)===t})).length}o.a.useEffect((function(){0!==M.region&&localStorage.setItem("region",M.region)}),[M]),o.a.useEffect((function(){navigator.geolocation?0===E.region&&(console.log("Locating..."),navigator.geolocation.getCurrentPosition((function(e){for(var t,n=e.coords.latitude,r=e.coords.longitude,o=m(p.feature(l,l.objects.regions).features);!(t=o()).done;){var a=t.value;if(d.a(a,[r,n])){k({type:"region",region:a.properties.reg_name});break}}}),(function(){console.log("Unable to retrieve your location")}))):console.log("Geolocation is not supported by your browser")}),[]);var C;return o.a.createElement(c.a,{location:u},o.a.createElement("form",null,o.a.createElement(i.a,{regions:a.a,state:M,dispatch:k}),o.a.createElement(s.a,{dates:Object.keys(g),state:M,dispatch:k}),o.a.createElement(f,{state:M,dispatch:k}),o.a.createElement("h2",{className:x()},function(){if(x())return O(M.date)?"Tutte le regioni, "+S()+": "+N():(0!==M.region?a.a[M.region]:"")+", "+S()+": "+N()}()),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:(C=x(),C?h[C]:O(M.date)?h[w(M.date,"Lombardia")]:"Per favore scegli una regione e una data.")}})))}},Sfbj:function(e,t,n){!function(e,t,n,r,o,a,i){"use strict";var s="default"in t?t.default:t;n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=r.geoPath,d=u(r,["geoPath"]),p=t.createContext(),m=function(e){var n=e.width,r=e.height,o=e.projection,a=e.projectionConfig,i=u(e,["width","height","projection","projectionConfig"]),m=a.center||[],g=l(m,2),h=g[0],v=g[1],y=a.rotate||[],b=l(y,3),E=b[0],j=b[1],M=b[2],k=a.parallels||[],w=l(k,2),x=w[0],N=w[1],S=a.scale||null,O=t.useMemo((function(){return function(e){var t=e.projectionConfig,n=void 0===t?{}:t,r=e.projection,o=void 0===r?"geoEqualEarth":r,a=e.width,i=void 0===a?800:a,s=e.height,c=void 0===s?600:s;if("function"==typeof o)return o;var u=d[o]().translate([i/2,c/2]);return[u.center?"center":null,u.rotate?"rotate":null,u.scale?"scale":null,u.parallels?"parallels":null].forEach((function(e){e&&(u=u[e](n[e]||u[e]()))})),u}({projectionConfig:{center:h||0===h||v||0===v?[h,v]:null,rotate:E||0===E||j||0===j?[E,j,M]:null,parallels:x||0===x||N||0===N?[x,N]:null,scale:S},projection:o,width:n,height:r})}),[n,r,o,h,v,E,j,M,x,N,S]),C=t.useCallback(O,[O]),T=t.useMemo((function(){return{width:n,height:r,projection:C,path:f().projection(C)}}),[n,r,C]);return s.createElement(p.Provider,c({value:T},i))};m.propTypes={width:n.number,height:n.number,projection:n.oneOfType([n.string,n.func]),projectionConfig:n.object};var g=function(e){var t=e.width,n=void 0===t?800:t,r=e.height,o=void 0===r?600:r,a=e.projection,i=void 0===a?"geoEqualEarth":a,l=e.projectionConfig,f=void 0===l?{}:l,d=e.className,p=void 0===d?"":d,g=u(e,["width","height","projection","projectionConfig","className"]);return s.createElement(m,{width:n,height:o,projection:i,projectionConfig:f},s.createElement("svg",c({viewBox:"0 0 "+n+" "+o,className:"rsm-svg "+p},g)))};function h(e,t,n){var r=(e*n.k-e)/2,o=(t*n.k-t)/2;return[e/2-(r+n.x)/n.k,t/2-(o+n.y)/n.k]}function v(e,t){if("Topology"!==e.type)return t?t(e.features||e):e.features||e;var n=o.feature(e,e.objects[Object.keys(e.objects)[0]]).features;return t?t(n):n}function y(e){return"Topology"===e.type?{outline:o.mesh(e,e.objects[Object.keys(e.objects)[0]],(function(e,t){return e===t})),borders:o.mesh(e,e.objects[Object.keys(e.objects)[0]],(function(e,t){return e!==t}))}:null}function b(e,t){return e?e.map((function(e,n){return c({},e,{rsmKey:"geo-"+n,svgPath:t(e)})})):[]}function E(e){var n=e.geography,r=e.parseGeographies,o=t.useContext(p).path,a=t.useState({}),i=l(a,2),s=i[0],u=i[1];t.useEffect((function(){var e;"undefined"!=typeof window&&n&&("string"==typeof n?(e=n,fetch(e).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).catch((function(e){console.log("There was a problem when fetching the data: ",e)}))).then((function(e){e&&u({geographies:v(e,r),mesh:y(e)})})):u({geographies:v(n,r),mesh:y(n)}))}),[n,r]);var f=t.useMemo((function(){var e=s.mesh||{},t=function(e,t,n){return e&&t?{outline:c({},e,{rsmKey:"outline",svgPath:n(e)}),borders:c({},t,{rsmKey:"borders",svgPath:n(t)})}:{}}(e.outline,e.borders,o);return{geographies:b(s.geographies,o),outline:t.outline,borders:t.borders}}),[s,o]);return{geographies:f.geographies,outline:f.outline,borders:f.borders}}g.propTypes={width:n.number,height:n.number,projection:n.oneOfType([n.string,n.func]),projectionConfig:n.object,className:n.string};var j=function(e){var n=e.geography,r=e.children,o=e.parseGeographies,a=e.className,i=void 0===a?"":a,l=u(e,["geography","children","parseGeographies","className"]),f=t.useContext(p),d=f.path,m=f.projection,g=E({geography:n,parseGeographies:o}),h=g.geographies,v=g.outline,y=g.borders;return s.createElement("g",c({className:"rsm-geographies "+i},l),h&&h.length>0&&r({geographies:h,outline:v,borders:y,path:d,projection:m}))};j.propTypes={geography:n.oneOfType([n.string,n.object,n.array]),children:n.func,parseGeographies:n.func,className:n.string};var M=function(e){var n=e.geography,r=e.onMouseEnter,o=e.onMouseLeave,a=e.onMouseDown,i=e.onMouseUp,f=e.onFocus,d=e.onBlur,p=e.style,m=void 0===p?{}:p,g=e.className,h=void 0===g?"":g,v=u(e,["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),y=t.useState(!1),b=l(y,2),E=b[0],j=b[1],M=t.useState(!1),k=l(M,2),w=k[0],x=k[1];return s.createElement("path",c({tabIndex:"0",className:"rsm-geography "+h,d:n.svgPath,onMouseEnter:function(e){x(!0),r&&r(e)},onMouseLeave:function(e){x(!1),E&&j(!1),o&&o(e)},onFocus:function(e){x(!0),f&&f(e)},onBlur:function(e){x(!1),E&&j(!1),d&&d(e)},onMouseDown:function(e){j(!0),a&&a(e)},onMouseUp:function(e){j(!1),i&&i(e)},style:m[E||w?E?"pressed":"hover":"default"]},v))};M.propTypes={geography:n.object,onMouseEnter:n.func,onMouseLeave:n.func,onMouseDown:n.func,onMouseUp:n.func,onFocus:n.func,onBlur:n.func,style:n.object,className:n.string};var k=t.memo(M),w=function(e){var n=e.fill,o=void 0===n?"transparent":n,a=e.stroke,i=void 0===a?"currentcolor":a,l=e.step,f=void 0===l?[10,10]:l,d=e.className,m=void 0===d?"":d,g=u(e,["fill","stroke","step","className"]),h=t.useContext(p).path;return s.createElement("path",c({d:h(r.geoGraticule().step(f)()),fill:o,stroke:i,className:"rsm-graticule "+m},g))};w.propTypes={fill:n.string,stroke:n.string,step:n.array,className:n.string};var x=t.memo(w);function N(e){var n=e.center,r=e.filterZoomEvent,o=e.onMoveStart,s=e.onMoveEnd,c=e.onMove,u=e.translateExtent,f=void 0===u?[[-1/0,-1/0],[1/0,1/0]]:u,d=e.scaleExtent,m=void 0===d?[1,8]:d,g=e.zoom,v=void 0===g?1:g,y=t.useContext(p),b=y.width,E=y.height,j=y.projection,M=l(n,2),k=M[0],w=M[1],x=t.useState({x:0,y:0,k:1}),N=l(x,2),S=N[0],O=N[1],C=t.useRef({x:0,y:0,k:1}),T=t.useRef(),A=t.useRef(),P=t.useRef(!1),D=l(f,2),Z=D[0],G=D[1],_=l(Z,2),I=_[0],L=_[1],z=l(G,2),F=z[0],R=z[1],B=l(m,2),U=B[0],W=B[1];return t.useEffect((function(){var e=i.select(T.current),t=a.zoom().filter((function(e){return r?r(e):!!e&&!e.ctrlKey&&!e.button})).scaleExtent([U,W]).translateExtent([[I,L],[F,R]]).on("start",(function(e){o&&!P.current&&o({coordinates:j.invert(h(b,E,e.transform)),zoom:e.transform.k},e)})).on("zoom",(function(e){if(!P.current){var t=e.transform,n=e.sourceEvent;O({x:t.x,y:t.y,k:t.k,dragging:n}),c&&c({x:t.x,y:t.y,k:t.k,dragging:n},e)}})).on("end",(function(e){if(P.current)P.current=!1;else{var t=j.invert(h(b,E,e.transform)),n=l(t,2),r=n[0],o=n[1];C.current={x:r,y:o,k:e.transform.k},s&&s({coordinates:[r,o],zoom:e.transform.k},e)}}));A.current=t,e.call(t)}),[b,E,I,L,F,R,U,W,j,o,c,s,r]),t.useEffect((function(){if(k!==C.current.x||w!==C.current.y||v!==C.current.k){var e=j([k,w]),t=e[0]*v,n=e[1]*v,r=i.select(T.current);P.current=!0,r.call(A.current.transform,a.zoomIdentity.translate(b/2-t,E/2-n).scale(v)),O({x:b/2-t,y:E/2-n,k:v}),C.current={x:k,y:w,k:v}}}),[k,w,v,b,E,j]),{mapRef:T,position:S,transformString:"translate("+S.x+" "+S.y+") scale("+S.k+")"}}var S=function(e){var n=e.center,r=void 0===n?[0,0]:n,o=e.zoom,a=void 0===o?1:o,i=e.minZoom,l=void 0===i?1:i,f=e.maxZoom,d=void 0===f?8:f,m=e.translateExtent,g=e.filterZoomEvent,h=e.onMoveStart,v=e.onMove,y=e.onMoveEnd,b=e.className,E=u(e,["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"]),j=t.useContext(p),M=j.width,k=j.height,w=N({center:r,filterZoomEvent:g,onMoveStart:h,onMove:v,onMoveEnd:y,scaleExtent:[l,d],translateExtent:m,zoom:a}),x=w.mapRef,S=w.transformString;return s.createElement("g",{ref:x},s.createElement("rect",{width:M,height:k,fill:"transparent"}),s.createElement("g",c({transform:S,className:"rsm-zoomable-group "+b},E)))};S.propTypes={center:n.array,zoom:n.number,minZoom:n.number,maxZoom:n.number,translateExtent:n.arrayOf(n.array),onMoveStart:n.func,onMove:n.func,onMoveEnd:n.func,className:n.string};var O=function(e){var n=e.id,r=void 0===n?"rsm-sphere":n,o=e.fill,a=void 0===o?"transparent":o,i=e.stroke,l=void 0===i?"currentcolor":i,f=e.strokeWidth,d=void 0===f?.5:f,m=e.className,g=void 0===m?"":m,h=u(e,["id","fill","stroke","strokeWidth","className"]),v=t.useContext(p).path,y=t.useMemo((function(){return v({type:"Sphere"})}),[v]);return s.createElement(t.Fragment,null,s.createElement("defs",null,s.createElement("clipPath",{id:r},s.createElement("path",{d:y}))),s.createElement("path",c({d:y,fill:a,stroke:l,strokeWidth:d,style:{pointerEvents:"none"},className:"rsm-sphere "+g},h)))};O.propTypes={id:n.string,fill:n.string,stroke:n.string,strokeWidth:n.number,className:n.string};var C=t.memo(O),T=function(e){var n=e.coordinates,r=e.children,o=e.onMouseEnter,a=e.onMouseLeave,i=e.onMouseDown,f=e.onMouseUp,d=e.onFocus,m=e.onBlur,g=e.style,h=void 0===g?{}:g,v=e.className,y=void 0===v?"":v,b=u(e,["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),E=t.useContext(p).projection,j=t.useState(!1),M=l(j,2),k=M[0],w=M[1],x=t.useState(!1),N=l(x,2),S=N[0],O=N[1],C=E(n),T=l(C,2),A=T[0],P=T[1];return s.createElement("g",c({transform:"translate("+A+", "+P+")",className:"rsm-marker "+y,onMouseEnter:function(e){O(!0),o&&o(e)},onMouseLeave:function(e){O(!1),k&&w(!1),a&&a(e)},onFocus:function(e){O(!0),d&&d(e)},onBlur:function(e){O(!1),k&&w(!1),m&&m(e)},onMouseDown:function(e){w(!0),i&&i(e)},onMouseUp:function(e){w(!1),f&&f(e)},style:h[k||S?k?"pressed":"hover":"default"]},b),r)};T.propTypes={coordinates:n.array,children:n.oneOfType([n.node,n.arrayOf(n.node)]),onMouseEnter:n.func,onMouseLeave:n.func,onMouseDown:n.func,onMouseUp:n.func,onFocus:n.func,onBlur:n.func,style:n.object,className:n.string};var A=function(e){var n=e.from,r=void 0===n?[0,0]:n,o=e.to,a=void 0===o?[0,0]:o,i=e.coordinates,l=e.stroke,f=void 0===l?"currentcolor":l,d=e.strokeWidth,m=void 0===d?3:d,g=e.fill,h=void 0===g?"transparent":g,v=e.className,y=void 0===v?"":v,b=u(e,["from","to","coordinates","stroke","strokeWidth","fill","className"]),E=t.useContext(p).path,j={type:"LineString",coordinates:i||[r,a]};return s.createElement("path",c({d:E(j),className:"rsm-line "+y,stroke:f,strokeWidth:m,fill:h},b))};A.propTypes={from:n.array,to:n.array,coordinates:n.array,stroke:n.string,strokeWidth:n.number,fill:n.string,className:n.string};var P=function(e){var n=e.subject,r=e.children,o=e.connectorProps,a=e.dx,i=void 0===a?30:a,f=e.dy,d=void 0===f?30:f,m=e.curve,g=void 0===m?0:m,h=e.className,v=void 0===h?"":h,y=u(e,["subject","children","connectorProps","dx","dy","curve","className"]),b=(0,t.useContext(p).projection)(n),E=l(b,2),j=E[0],M=E[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=Array.isArray(n)?n:[n,n],o=e/2*r[0],a=t/2*r[1];return"M0,0 Q"+(-e/2-o)+","+(-t/2+a)+" "+-e+","+-t}(i,d,g);return s.createElement("g",c({transform:"translate("+(j+i)+", "+(M+d)+")",className:"rsm-annotation "+v},y),s.createElement("path",c({d:k,fill:"transparent",stroke:"#000"},o)),r)};P.propTypes={subject:n.array,children:n.oneOfType([n.node,n.arrayOf(n.node)]),dx:n.number,dy:n.number,curve:n.number,connectorProps:n.object,className:n.string},e.Annotation=P,e.ComposableMap=g,e.Geographies=j,e.Geography=k,e.Graticule=x,e.Line=A,e.MapContext=p,e.MapProvider=m,e.Marker=T,e.Sphere=C,e.ZoomableGroup=S,e.useGeographies=E,e.useZoomPan=N,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"),n("17x9"),n("n8A4"),n("0hfp"),n("2TRZ"),n("/TIM"))}}]);
//# sourceMappingURL=component---src-pages-map-js-b93f62ac67e9a1a6cb1c.js.map