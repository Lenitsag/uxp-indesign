"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[60505],{88466:function(e,t,n){n.d(t,{o:function(){return K}});var r=n(42982),i=n(15861),s=n(64687),a=n.n(s),o=n(15007),l=n(86029),c=n(4539),u=n(54129),d=n(82026),m=n(158),f=n(3987),p=n(75900),g=n.n(p),h=n(82357),v=n(22222),y=n(18870),b=n(73181);var w="688px",x="All Products",Z="keywords",k=function(e){return e.replace(/[\u00A0-\u9999<>\&]/g,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>")},S=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},z=function(){var e=(0,i.Z)(a().mark((function e(t,n,i,s){var o,l,c,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],e.next=3,t.listIndices();case 3:return l=e.sent,c=Object.values(l.items).map((function(e){return e.name})).filter((function(e){return Object.values(s).includes(e)})),i[0]===x?i=c:(u=i.filter((function(e){return e!==x})),d=(0,f.getIndexesFromProduct)(u[0]),i=[].concat((0,r.Z)(d),(0,r.Z)(c.filter((function(e){return!u.includes(e)})))).filter((function(e){return c.includes(e)}))),i.forEach((function(e){o.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(50/i.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=9,t.multipleQueries(o);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),A=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i,s){var o,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.listIndices();case 2:return o=e.sent,l=Object.values(o.items).map((function(e){return e.name})).filter((function(e){return Object.values(i).includes(e)})),r=r.includes("all")?l:r.filter((function(e){return l.includes(e)})),c=[],r.forEach((function(e){c.push({indexName:e,query:n,params:{facets:[Z],attributesToRetrieve:["objectID","url","product"],hitsPerPage:Math.ceil(100/r.length),filters:s.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=9,t.multipleQueries(c);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),_=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,i=e._highlightResult,s="";s=r.includes("https://developer.adobe.com")?r.replace("https://developer.adobe.com",""):r,(0,m.Bm)(s)||t.find((function(e){return e.url===s}))||t.push({objectID:n,url:s,_highlightResult:i})}))},E=function(e,t){e.keywords&&Object.keys(e.keywords).forEach((function(n){var r,i=t.find((function(e){return Object.keys(e)[0]===n}));i?i[n]+=e.keywords[n]:t.push(((r={})[n]=e.keywords[n],r))}))},q={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},j={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},I={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},H={name:"1jwcxx3",styles:"font-style:italic"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},R={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},P={name:"13udsys",styles:"height:100%"},L={name:"i2ekfq",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-100)"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},B={name:"3tj9xb",styles:"width:100%;height:100%;display:grid;place-items:start center"},O={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},C={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},D={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},F={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},T={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},Q={name:"11qpleq",styles:"min-width:auto;width:100%"},V={name:"1d3w5wq",styles:"width:100%"},K=function(e){var t=e.algolia,n=e.searchIndex,s=e.indexAll,p=e.showSearch,Z=e.setShowSearch,K=e.searchButtonId,U=e.isIFramed,X=(0,o.useState)(!1),J=X[0],G=X[1],W=(0,o.useState)(""),Y=W[0],$=W[1],ee=(0,o.useState)(""),te=ee[0],ne=ee[1],re=(0,o.useState)(["all"]),ie=re[0],se=re[1],ae=(0,o.useState)([]),oe=ae[0],le=ae[1],ce=(0,o.useState)(!1),ue=ce[0],de=ce[1],me=(0,o.useState)(!1),fe=me[0],pe=me[1],ge=(0,o.useState)(!1),he=ge[0],ve=ge[1],ye=(0,o.useRef)(null),be=(0,o.useRef)(null),we=(0,o.useRef)(null),xe=(0,o.useRef)(null),Ze=(0,o.useState)([]),ke=Ze[0],Se=Ze[1],ze=(0,o.useState)([]),Ae=ze[0],_e=ze[1],Ee=(0,o.useState)([]),qe=Ee[0],je=Ee[1],Ie=(0,o.useState)([]),He=Ie[0],Ne=Ie[1],Re=(0,o.useState)(!1),Pe=Re[0],Le=Re[1],Me=(0,o.useState)(!1),Be=Me[0],Oe=Me[1],Ce=function(){var e=(0,i.Z)(a().mark((function e(){var r,i,o,l,c,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y.length){e.next=17;break}return Le(!1),S(m.AQ.query,Y),S(m.AQ.keywords,oe),S(m.AQ.index,ie),U&&(i=JSON.stringify({query:Y,keywords:oe,index:ie}),a=void 0,a=document.referrer,(o=(a.indexOf("localhost")>=0||a.indexOf("developer-stage.adobe")>=0||a.indexOf("hlx.page")>=0||a.indexOf("hlx.live")>=0||a.indexOf("developer.adobe")>=0)&&a)&&parent.postMessage(i,o)),de(!0),Y!==te&&(G(!0),se(["all"])),e.next=10,A(t,Y,ie,s,oe);case 10:l=e.sent,c=[n[1]],u=[],d=[],null!=l&&null!==(r=l.results)&&void 0!==r&&r.length&&l.results.forEach((function(e){var t=e.hits,r=e.facets;if(void 0!==r){if(t.length>0){var i=t[0].product;i&&(c.includes(i)||(i!==n[0]?c.push(i):c.splice(1,0,n[0])))}return Y===te&&(_(t,u),E(r,d)),!0}})),Y!==te?je(c):(_e(u),Ne(d),G(!1)),ne(Y);case 17:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(p){var e=new URL(window.location).searchParams,t=e.get(m.AQ.query),n=e.get(m.AQ.keywords),r=e.get(m.AQ.index);r&&se(r.split(",")),n&&le(n.split(",")),null!=t&&t.length&&($(t),ve(!0),Oe(!0)),null!=we&&we.current&&we.current.focus()}}),[p]),(0,o.useEffect)((function(){Ce()}),[ie,oe]),(0,o.useEffect)((function(){Be&&(Oe(!1),Ce())}),[Be,Oe]),(0,o.useEffect)((function(){null!=xe&&xe.current&&(xe.current.scrollTop=0)}),[Ae]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;Le(!1),ye.current&&!ye.current.contains(t)&&t.id!==K&&Z(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[Le,ue,Z,ye]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&Z(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[Z]),U&&((0,o.useEffect)((function(){be&&ke.length>0&&be.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[ke]),(0,o.useEffect)((function(){xe&&Ae.length>0&&xe.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[Ae])),(0,l.tZ)(o.default.Fragment,null,(0,l.tZ)("div",{ref:ye,css:(0,l.iv)("position:fixed;top:",U?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",ue&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",m.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,l.tZ)("div",{css:(0,l.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",w,";@media screen and (max-width: ",m.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,l.tZ)("form",{css:V,className:"spectrum-Search",onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),le([]),ve(!0),e.next=5,Ce();case 5:Y!==te&&(r=n.filter((function(e){return e!==x})),i=(0,f.getIndexesFromProduct)(r[0]),se(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,l.tZ)("div",{className:g()("spectrum-Textfield",{"is-focused":fe}),css:Q},(0,l.tZ)(v.Magnify,{className:"spectrum-Textfield-icon"}),(0,l.tZ)("input",{ref:we,value:Y,onFocus:function(){pe(!0)},onBlur:function(){pe(!1)},onKeyDown:function(e){var t=e.key;null!=be&&be.current&&("ArrowDown"===t?be.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&be.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:function(){var e=(0,i.Z)(a().mark((function e(r){var i,o,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.target.value,$(i),!i.length||Ae.length){e.next=11;break}return ve(!0),e.next=6,z(t,i,n,s);case 6:null!=(l=e.sent)&&null!==(o=l.results)&&void 0!==o&&o.length?(c=[],l.results.forEach((function(e){var t=e.hits;_(t,c)})),Se(c),Ae.length||de(!1)):Se([]),Le(!0),e.next=13;break;case 11:ve(!1),Le(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),he&&(0,l.tZ)(h.K,{css:(0,l.iv)("position:absolute;margin-right:var(--spectrum-global-dimension-size-100);@media screen and (max-width: ",m.q9,"){margin-right:0;}",""),tabIndex:"-1",isQuiet:!0,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){$(""),_e([]),de(!1),we.current.focus()}},(0,l.tZ)(v.Close,null))),(0,l.tZ)(d.J,{isOpen:Pe,css:(0,l.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",w,";@media screen and (max-width: ",m.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},ke.length>0?(0,l.tZ)(u.v2,{ref:be,onKeyDown:function(e){var t=e.key;if(null!=be&&be.current&&be.current.contains(document.activeElement))if("ArrowDown"===t){var n=document.activeElement.nextElementSibling;n?n.focus():be.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){var r=document.activeElement.previousElementSibling;r?r.focus():be.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},ke.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,l.tZ)(u.ck,{key:e.objectID,href:r},(0,l.tZ)("div",{css:T},(0,l.tZ)("strong",{dangerouslySetInnerHTML:{__html:k(i)}}),(0,l.tZ)("div",{css:F},r),(0,l.tZ)("div",{dangerouslySetInnerHTML:{__html:k(s)}})))}))):(0,l.tZ)("div",{css:D},(0,l.tZ)("div",{css:C},(0,l.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:O},"No Results Found"),(0,l.tZ)("em",null,"Try another search term"))))),J&&(0,l.tZ)("div",{css:B},(0,l.tZ)(b._,{size:"L"})),ue&&!J&&(0,l.tZ)("div",{css:(0,l.iv)("display:flex;max-width:",m.Av,";margin:auto;height:100%;@media screen and (max-width: ",m.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,l.tZ)("div",{css:(0,l.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);min-width:",m.dP,";","")},(0,l.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:M},"Filter by Products"),(0,l.tZ)("div",{css:(0,l.iv)("display:flex;flex-direction:column;overflow:auto;max-height:30%;@media screen and (max-width: ",m.q9,"){margin-bottom:0;}","")},qe.map((function(e,t){return(0,l.tZ)(y.X,{key:t,isSelected:e===x?ie.includes("all"):ie.some((function(t){return(0,f.getIndexesFromProduct)(e).includes(t)})),value:e,onChange:function(t){se(t?"All Products"===e?["all"]:[].concat((0,r.Z)(ie.filter((function(e){return"all"!==e}))),(0,r.Z)((0,f.getIndexesFromProduct)(e))):"All Products"===e?ie.filter((function(e){return"all"!==e})):ie.filter((function(t){return!(0,f.getIndexesFromProduct)(e).includes(t)}))),le([])}},(0,l.tZ)("span",null,e))}))),(0,l.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:L},"Filter by Keywords"),(0,l.tZ)("div",{css:(0,l.iv)("margin-bottom:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column;overflow:auto;max-height:50%;@media screen and (max-width: ",m.q9,"){margin-bottom:0;}","")},He.length>0?He.map((function(e,t){var n=Object.keys(e)[0];return(0,l.tZ)(y.X,{key:t,isSelected:oe.includes(n),value:n,onChange:function(e){le(e?function(e){return[].concat((0,r.Z)(e),[n])}:oe.filter((function(e){return e!==n})))}},(0,l.tZ)("span",null,n),(0,l.tZ)("em",null," (",e[n],")"))})):(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,l.tZ)("div",{css:P},Ae.length>0?(0,l.tZ)("div",{ref:xe,css:(0,l.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",m.q9,"){height:auto;overflow:inherit;}","")},Ae.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,l.tZ)("div",{css:R},(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:N},(0,l.tZ)(c.P,{to:r},(0,l.tZ)("span",{dangerouslySetInnerHTML:{__html:k(i)}}))),(0,l.tZ)("div",{css:H},(0,l.tZ)(c.P,{variant:"secondary",to:r},r)),(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:I,dangerouslySetInnerHTML:{__html:k(s)}}))}))):(0,l.tZ)("div",{css:(0,l.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",m.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:j},(0,l.tZ)("g",null,(0,l.tZ)("g",null,(0,l.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,l.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,l.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,l.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,l.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,l.tZ)("strong",null,Y)),(0,l.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:q},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!ue&&(0,l.tZ)("div",{css:(0,l.iv)("position:fixed;z-index:1;top:",U?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-9d1339d2170383014642.js.map