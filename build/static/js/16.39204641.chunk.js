(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[16],{1216:function(t,e,a){"use strict";a.r(e);a(0);var n=a(19),r=a(7),i=a(6),o=a(889),c=a(145),s=Object(i.a)(o.a)((function(t){var e,a=t.theme;return e={width:"30%",borderRadius:25,background:"#eee",color:"#000",height:320,margin:"10px 0px"},Object(r.a)(e,a.breakpoints.down("sm"),{width:"100%"}),Object(r.a)(e,"& img",{height:"100%",width:"100%"}),Object(r.a)(e,"overflow","visible"),Object(r.a)(e,"cursor","pointer"),e})),u=Object(i.a)(c.a)((function(t){var e,a=t.theme;return e={fontSize:25,color:"#FFF",position:"relative",marginLeft:20,bottom:70,height:30,fontFamily:"Ivypresto Display"},Object(r.a)(e,a.breakpoints.down("sm"),{fontSize:20}),Object(r.a)(e,"zIndex",3),e})),d=Object(i.a)("div")((function(t){var e,a=t.theme;return e={},Object(r.a)(e,a.breakpoints.down("sm"),{zIndex:11,top:192,borderRadius:"0px 0px 18px 18px "}),Object(r.a)(e,"width","100%"),Object(r.a)(e,"height",100),Object(r.a)(e,"position","absolute"),Object(r.a)(e,"top",225),Object(r.a)(e,"zIndex",2),Object(r.a)(e,"background","linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(46,46,128,0.5) 50%, rgba(46,46,128,1) 100%)"),Object(r.a)(e,"borderRadius","0px 0px 25px 25px "),e})),b=a(1);var l=function(t){var e=t.title,a=t.image,r=t.id,i=Object(n.f)();return Object(b.jsxs)(s,{onClick:function(){return function(t){i("/gallery/".concat(t))}(r)},children:[Object(b.jsx)("img",{src:a,alt:""}),Object(b.jsx)(u,{children:e}),Object(b.jsx)(d,{})]})},j=a(961),p=a(877),m=Object(i.a)("div")((function(t){var e=t.theme;return Object(r.a)({marginTop:130,padding:10,width:"100%",height:"70%",display:"flex",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column",marginBottom:100,height:"100%"})}));e.default=function(){var t=Object(j.a)().gallery;return console.log("item",t),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{children:t.map((function(t,e){return Object(b.jsx)(l,{title:t.section,image:"".concat("http://52.172.227.233").concat(t.bannerImage.url),id:t.id},e)}))}),Object(b.jsx)(p.a,{})]})}},877:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(7),r=a(6),i=a(885),o=a(145),c=a(832),s=a(1),u=Object(r.a)("div")((function(t){return{position:"relative",backgroundColor:t.theme.palette.background.default}})),d=Object(r.a)(i.a)({padding:"50px 0px"}),b=Object(r.a)(o.a)((function(t){var e=t.theme;return Object(n.a)({fontFamily:"Poppins",fontSize:"13px",lineHeight:"20px",color:"#A2A2A2",width:"fit-content",margin:"auto"},e.breakpoints.down("md"),{fontSize:"9px"})})),l=Object(r.a)("div")((function(t){var e=t.theme;return Object(n.a)({width:"50px",border:"1px solid #2E2E80",backgroundColor:"#2E2E80",margin:"auto",marginTop:"10px"},e.breakpoints.down("md"),{})}));function j(){return Object(s.jsxs)(u,{children:[Object(s.jsx)(c.a,{}),Object(s.jsxs)(d,{maxWidth:"lg",children:[Object(s.jsx)(b,{variant:"body2",children:"Copyright 2021 RMZ Corp. All rights reserved."}),Object(s.jsx)(l,{})]})]})}},878:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(18),r=a(20);function i(t){return Object(n.a)("MuiContainer",t)}var o=Object(r.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);e.a=o},880:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(18),r=a(20);function i(t){return Object(n.a)("MuiCard",t)}var o=Object(r.a)("MuiCard",["root"]);e.a=o},885:function(t,e,a){"use strict";var n=a(7),r=a(5),i=a(2),o=a(0),c=a(9),s=a(23),u=a(11),d=a(6),b=a(878),l=a(14),j=a(1),p=["className","component","disableGutters","fixed","maxWidth"],m=Object(d.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e["maxWidth".concat(Object(l.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,a=t.ownerState;return Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(n).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,a=t.ownerState;return Object(i.a)({},"xs"===a.maxWidth&&Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(n.a)({},e.breakpoints.up(a.maxWidth),{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}))})),f=o.forwardRef((function(t,e){var a=Object(u.a)({props:t,name:"MuiContainer"}),n=a.className,o=a.component,d=void 0===o?"div":o,f=a.disableGutters,x=void 0!==f&&f,O=a.fixed,h=void 0!==O&&O,g=a.maxWidth,v=void 0===g?"lg":g,k=Object(r.a)(a,p),w=Object(i.a)({},a,{component:d,disableGutters:x,fixed:h,maxWidth:v}),W=function(t){var e=t.classes,a=t.fixed,n=t.disableGutters,r=t.maxWidth,i={root:["root",r&&"maxWidth".concat(Object(l.a)(String(r))),a&&"fixed",n&&"disableGutters"]};return Object(s.a)(i,b.b,e)}(w);return Object(j.jsx)(m,Object(i.a)({as:d,ownerState:w,className:Object(c.a)(W.root,n),ref:e},k))}));e.a=f},889:function(t,e,a){"use strict";var n=a(2),r=a(5),i=a(0),o=a(9),c=a(23),s=a(6),u=a(11),d=a(143),b=a(880),l=a(1),j=["className","raised"],p=Object(s.a)(d.a,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),m=i.forwardRef((function(t,e){var a=Object(u.a)({props:t,name:"MuiCard"}),i=a.className,s=a.raised,d=void 0!==s&&s,m=Object(r.a)(a,j),f=Object(n.a)({},a,{raised:d}),x=function(t){var e=t.classes;return Object(c.a)({root:["root"]},b.b,e)}(f);return Object(l.jsx)(p,Object(n.a)({className:Object(o.a)(x.root,i),elevation:d?8:void 0,ref:e,ownerState:f},m))}));e.a=m},961:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(121),r=a(68),i=a.n(r),o=a(75),c=a(0),s=a(296),u=a(49);function d(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.gallery})),a=e.gallery,r=e.pulled;Object(c.useEffect)((function(){d()}),[]);var d=Object(c.useCallback)(Object(n.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o.a.get("/galleries");case 4:(a=e.sent)&&t(Object(s.b)(a));case 6:case"end":return e.stop()}}),e)}))),[]);return{gallery:a}}}}]);
//# sourceMappingURL=16.39204641.chunk.js.map