(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),i=c(4),l=c(5),a=c(8),o=c(7),r=c(1),d=c.n(r),u=(c(13),c(6)),b=c.n(u),p=(c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(a.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"",visibleTitle:!0},e.clickHandler=function(t){e.setState({selectedGood:t,visibleTitle:!0})},e.clear=function(){e.setState({selectedGood:"",visibleTitle:!1})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,s=t.visibleTitle;return Object(p.jsxs)("div",{className:"app content",children:[s&&Object(p.jsx)("h1",{className:"title is-1",children:c?"".concat(c," is/are selected"):"No goods selected"}),s&&Object(p.jsx)("button",{type:"button",onClick:this.clear,className:"delete is-medium",children:"X"}),Object(p.jsx)("ul",{children:j.map((function(t){return Object(p.jsxs)("li",{className:b()("app__good",{app__selected:c===t}),children:[t,c!==t&&Object(p.jsx)("button",{className:"button is-success is-outlined",type:"button",onClick:function(){return e.clickHandler(t)},children:"Select"})]},t)}))})]})}}]),c}(d.a.Component),m=h;n.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8399236a.chunk.js.map