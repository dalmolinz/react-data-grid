import{g as V,a as q,c as J}from"./index-pPCSoKCc.js";import{j as tt}from"./jspdf.es.min-YQs4zIIm.js";function et(Y,K){for(var N=0;N<K.length;N++){const L=K[N];if(typeof L!="string"&&!Array.isArray(L)){for(const E in L)if(E!=="default"&&!(E in Y)){const B=Object.getOwnPropertyDescriptor(L,E);B&&Object.defineProperty(Y,E,B.get?B:{enumerable:!0,get:()=>L[E]})}}}return Object.freeze(Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}))}var Z={exports:{}};const nt=V(tt);/*!
 * 
 *               jsPDF AutoTable plugin v3.8.1
 *
 *               Copyright (c) 2023 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */(function(Y,K){(function(L,E){Y.exports=E(function(){try{return nt}catch{}}())})(typeof globalThis<"u"?globalThis:typeof J<"u"?J:typeof window<"u"?window:typeof self<"u"?self:J,function(N){return function(){var L={662:function(z,m){var D=this&&this.__extends||function(){var c=function(P,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,p){w.__proto__=p}||function(w,p){for(var h in p)Object.prototype.hasOwnProperty.call(p,h)&&(w[h]=p[h])},c(P,a)};return function(P,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");c(P,a);function w(){this.constructor=P}P.prototype=a===null?Object.create(a):(w.prototype=a.prototype,new w)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.CellHookData=m.HookData=void 0;var x=function(){function c(P,a,w){this.table=a,this.pageNumber=a.pageNumber,this.pageCount=this.pageNumber,this.settings=a.settings,this.cursor=w,this.doc=P.getDocument()}return c}();m.HookData=x;var b=function(c){D(P,c);function P(a,w,p,h,r,t){var e=c.call(this,a,w,t)||this;return e.cell=p,e.row=h,e.column=r,e.section=h.section,e}return P}(x);m.CellHookData=b},790:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0});var x=D(148),b=D(938),c=D(323),P=D(587),a=D(49),w=D(858);function p(h){h.API.autoTable=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e;r.length===1?e=r[0]:(console.error("Use of deprecated autoTable initiation"),e=r[2]||{},e.columns=r[0],e.body=r[1]);var l=(0,P.parseInput)(this,e),f=(0,w.createTable)(this,l);return(0,a.drawTable)(this,f),this},h.API.lastAutoTable=!1,h.API.previousAutoTable=!1,h.API.autoTable.previous=!1,h.API.autoTableText=function(r,t,e,l){(0,b.default)(r,t,e,l,this)},h.API.autoTableSetDefaults=function(r){return c.DocHandler.setDefaults(r,this),this},h.autoTableSetDefaults=function(r,t){c.DocHandler.setDefaults(r,t)},h.API.autoTableHtmlToJson=function(r,t){if(t===void 0&&(t=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var e=new c.DocHandler(this),l=(0,x.parseHtml)(e,r,window,t,!1),f=l.head,n=l.body,s=f[0].map(function(v){return v.content});return{columns:s,rows:n,data:n}},h.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var r=this.lastAutoTable;return r&&r.finalY?r.finalY:0},h.API.autoTableAddPageContent=function(r){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),h.API.autoTable.globalDefaults||(h.API.autoTable.globalDefaults={}),h.API.autoTable.globalDefaults.addPageContent=r,this},h.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}m.default=p},938:function(z,m){Object.defineProperty(m,"__esModule",{value:!0});function D(x,b,c,P,a){P=P||{};var w=1.15,p=a.internal.scaleFactor,h=a.internal.getFontSize()/p,r=a.getLineHeightFactor?a.getLineHeightFactor():w,t=h*r,e=/\r\n|\r|\n/g,l="",f=1;if((P.valign==="middle"||P.valign==="bottom"||P.halign==="center"||P.halign==="right")&&(l=typeof x=="string"?x.split(e):x,f=l.length||1),c+=h*(2-w),P.valign==="middle"?c-=f/2*t:P.valign==="bottom"&&(c-=f*t),P.halign==="center"||P.halign==="right"){var n=h;if(P.halign==="center"&&(n*=.5),l&&f>=1){for(var s=0;s<l.length;s++)a.text(l[s],b-a.getStringUnitWidth(l[s])*n,c),c+=t;return a}b-=a.getStringUnitWidth(x)*n}return P.halign==="justify"?a.text(x,b,c,{maxWidth:P.maxWidth||100,align:"justify"}):a.text(x,b,c),a}m.default=D},200:function(z,m){Object.defineProperty(m,"__esModule",{value:!0}),m.getPageAvailableWidth=m.parseSpacing=m.getFillStyle=m.addTableBorder=m.getStringWidth=void 0;function D(a,w,p){p.applyStyles(w,!0);var h=Array.isArray(a)?a:[a],r=h.map(function(t){return p.getTextWidth(t)}).reduce(function(t,e){return Math.max(t,e)},0);return r}m.getStringWidth=D;function x(a,w,p,h){var r=w.settings.tableLineWidth,t=w.settings.tableLineColor;a.applyStyles({lineWidth:r,lineColor:t});var e=b(r,!1);e&&a.rect(p.x,p.y,w.getWidth(a.pageSize().width),h.y-p.y,e)}m.addTableBorder=x;function b(a,w){var p=a>0,h=w||w===0;return p&&h?"DF":p?"S":h?"F":null}m.getFillStyle=b;function c(a,w){var p,h,r,t;if(a=a||w,Array.isArray(a)){if(a.length>=4)return{top:a[0],right:a[1],bottom:a[2],left:a[3]};if(a.length===3)return{top:a[0],right:a[1],bottom:a[2],left:a[1]};if(a.length===2)return{top:a[0],right:a[1],bottom:a[0],left:a[1]};a.length===1?a=a[0]:a=w}return typeof a=="object"?(typeof a.vertical=="number"&&(a.top=a.vertical,a.bottom=a.vertical),typeof a.horizontal=="number"&&(a.right=a.horizontal,a.left=a.horizontal),{left:(p=a.left)!==null&&p!==void 0?p:w,top:(h=a.top)!==null&&h!==void 0?h:w,right:(r=a.right)!==null&&r!==void 0?r:w,bottom:(t=a.bottom)!==null&&t!==void 0?t:w}):(typeof a!="number"&&(a=w),{top:a,right:a,bottom:a,left:a})}m.parseSpacing=c;function P(a,w){var p=c(w.settings.margin,0);return a.pageSize().width-(p.left+p.right)}m.getPageAvailableWidth=P},913:function(z,m){var D=this&&this.__extends||function(){var P=function(a,w){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,h){p.__proto__=h}||function(p,h){for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(p[r]=h[r])},P(a,w)};return function(a,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");P(a,w);function p(){this.constructor=a}a.prototype=w===null?Object.create(w):(p.prototype=w.prototype,new p)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.getTheme=m.defaultStyles=m.HtmlRowInput=void 0;var x=function(P){D(a,P);function a(w){var p=P.call(this)||this;return p._element=w,p}return a}(Array);m.HtmlRowInput=x;function b(P){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/P,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}m.defaultStyles=b;function c(P){var a={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return a[P]}m.getTheme=c},259:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseCss=void 0;var x=D(200);function b(p,h,r,t,e){var l={},f=1.3333333333333333,n=P(h,function(d){return e.getComputedStyle(d).backgroundColor});n!=null&&(l.fillColor=n);var s=P(h,function(d){return e.getComputedStyle(d).color});s!=null&&(l.textColor=s);var v=w(t,r);v&&(l.cellPadding=v);var y="borderTopColor",g=f*r,o=t.borderTopWidth;if(t.borderBottomWidth===o&&t.borderRightWidth===o&&t.borderLeftWidth===o){var C=(parseFloat(o)||0)/g;C&&(l.lineWidth=C)}else l.lineWidth={top:(parseFloat(t.borderTopWidth)||0)/g,right:(parseFloat(t.borderRightWidth)||0)/g,bottom:(parseFloat(t.borderBottomWidth)||0)/g,left:(parseFloat(t.borderLeftWidth)||0)/g},l.lineWidth.top||(l.lineWidth.right?y="borderRightColor":l.lineWidth.bottom?y="borderBottomColor":l.lineWidth.left&&(y="borderLeftColor"));console.log(l.lineWidth);var _=P(h,function(d){return e.getComputedStyle(d)[y]});_!=null&&(l.lineColor=_);var j=["left","right","center","justify"];j.indexOf(t.textAlign)!==-1&&(l.halign=t.textAlign),j=["middle","bottom","top"],j.indexOf(t.verticalAlign)!==-1&&(l.valign=t.verticalAlign);var u=parseInt(t.fontSize||"");isNaN(u)||(l.fontSize=u/f);var i=c(t);i&&(l.fontStyle=i);var S=(t.fontFamily||"").toLowerCase();return p.indexOf(S)!==-1&&(l.font=S),l}m.parseCss=b;function c(p){var h="";return(p.fontWeight==="bold"||p.fontWeight==="bolder"||parseInt(p.fontWeight)>=700)&&(h="bold"),(p.fontStyle==="italic"||p.fontStyle==="oblique")&&(h+="italic"),h}function P(p,h){var r=a(p,h);if(!r)return null;var t=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!t||!Array.isArray(t))return null;var e=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],l=parseInt(t[4]);return l===0||isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function a(p,h){var r=h(p);return r==="rgba(0, 0, 0, 0)"||r==="transparent"||r==="initial"||r==="inherit"?p.parentElement==null?null:a(p.parentElement,h):r}function w(p,h){var r=[p.paddingTop,p.paddingRight,p.paddingBottom,p.paddingLeft],t=96/(72/h),e=(parseInt(p.lineHeight)-parseInt(p.fontSize))/h/2,l=r.map(function(n){return parseInt(n||"0")/t}),f=(0,x.parseSpacing)(l,0);return e>f.top&&(f.top=e),e>f.bottom&&(f.bottom=e),f}},323:function(z,m){Object.defineProperty(m,"__esModule",{value:!0}),m.DocHandler=void 0;var D={},x=function(){function b(c){this.jsPDFDocument=c,this.userStyles={textColor:c.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:c.internal.getFontSize(),fontStyle:c.internal.getFont().fontStyle,font:c.internal.getFont().fontName,lineWidth:c.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:c.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return b.setDefaults=function(c,P){P===void 0&&(P=null),P?P.__autoTableDocumentDefaults=c:D=c},b.unifyColor=function(c){return Array.isArray(c)?c:typeof c=="number"?[c,c,c]:typeof c=="string"?[c]:null},b.prototype.applyStyles=function(c,P){var a,w,p;P===void 0&&(P=!1),c.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(c.fontStyle);var h=this.jsPDFDocument.internal.getFont(),r=h.fontStyle,t=h.fontName;if(c.font&&(t=c.font),c.fontStyle){r=c.fontStyle;var e=this.getFontList()[t];e&&e.indexOf(r)===-1&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e[0]),r=e[0])}if(this.jsPDFDocument.setFont(t,r),c.fontSize&&this.jsPDFDocument.setFontSize(c.fontSize),!P){var l=b.unifyColor(c.fillColor);l&&(a=this.jsPDFDocument).setFillColor.apply(a,l),l=b.unifyColor(c.textColor),l&&(w=this.jsPDFDocument).setTextColor.apply(w,l),l=b.unifyColor(c.lineColor),l&&(p=this.jsPDFDocument).setDrawColor.apply(p,l),typeof c.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(c.lineWidth)}},b.prototype.splitTextToSize=function(c,P,a){return this.jsPDFDocument.splitTextToSize(c,P,a)},b.prototype.rect=function(c,P,a,w,p){return this.jsPDFDocument.rect(c,P,a,w,p)},b.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},b.prototype.getTextWidth=function(c){return this.jsPDFDocument.getTextWidth(c)},b.prototype.getDocument=function(){return this.jsPDFDocument},b.prototype.setPage=function(c){this.jsPDFDocument.setPage(c)},b.prototype.addPage=function(){return this.jsPDFDocument.addPage()},b.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},b.prototype.getGlobalOptions=function(){return D||{}},b.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},b.prototype.pageSize=function(){var c=this.jsPDFDocument.internal.pageSize;return c.width==null&&(c={width:c.getWidth(),height:c.getHeight()}),c},b.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},b.prototype.getLineHeightFactor=function(){var c=this.jsPDFDocument;return c.getLineHeightFactor?c.getLineHeightFactor():1.15},b.prototype.getLineHeight=function(c){return c/this.scaleFactor()*this.getLineHeightFactor()},b.prototype.pageNumber=function(){var c=this.jsPDFDocument.internal.getCurrentPageInfo();return c?c.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},b}();m.DocHandler=x},148:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseHtml=void 0;var x=D(259),b=D(913);function c(w,p,h,r,t){var e,l;r===void 0&&(r=!1),t===void 0&&(t=!1);var f;typeof p=="string"?f=h.document.querySelector(p):f=p;var n=Object.keys(w.getFontList()),s=w.scaleFactor(),v=[],y=[],g=[];if(!f)return console.error("Html table could not be found with input: ",p),{head:v,body:y,foot:g};for(var o=0;o<f.rows.length;o++){var C=f.rows[o],_=(l=(e=C==null?void 0:C.parentElement)===null||e===void 0?void 0:e.tagName)===null||l===void 0?void 0:l.toLowerCase(),j=P(n,s,h,C,r,t);j&&(_==="thead"?v.push(j):_==="tfoot"?g.push(j):y.push(j))}return{head:v,body:y,foot:g}}m.parseHtml=c;function P(w,p,h,r,t,e){for(var l=new b.HtmlRowInput(r),f=0;f<r.cells.length;f++){var n=r.cells[f],s=h.getComputedStyle(n);if(t||s.display!=="none"){var v=void 0;e&&(v=(0,x.parseCss)(w,n,p,s,h)),l.push({rowSpan:n.rowSpan,colSpan:n.colSpan,styles:v,_element:n,content:a(n)})}}var y=h.getComputedStyle(r);if(l.length>0&&(t||y.display!=="none"))return l}function a(w){var p=w.cloneNode(!0);return p.innerHTML=p.innerHTML.replace(/\n/g,"").replace(/ +/g," "),p.innerHTML=p.innerHTML.split(/<br.*?>/).map(function(h){return h.trim()}).join(`
`),p.innerText||p.textContent||""}},587:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseInput=void 0;var x=D(148),b=D(360),c=D(200),P=D(323),a=D(291);function w(f,n){var s=new P.DocHandler(f),v=s.getDocumentOptions(),y=s.getGlobalOptions();(0,a.default)(s,y,v,n);var g=(0,b.assign)({},y,v,n),o;typeof window<"u"&&(o=window);var C=p(y,v,n),_=h(y,v,n),j=r(s,g),u=e(s,g,o);return{id:n.tableId,content:u,hooks:_,styles:C,settings:j}}m.parseInput=w;function p(f,n,s){for(var v={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},y=function(_){if(_==="columnStyles"){var j=f[_],u=n[_],i=s[_];v.columnStyles=(0,b.assign)({},j,u,i)}else{var S=[f,n,s],d=S.map(function(W){return W[_]||{}});v[_]=(0,b.assign)({},d[0],d[1],d[2])}},g=0,o=Object.keys(v);g<o.length;g++){var C=o[g];y(C)}return v}function h(f,n,s){for(var v=[f,n,s],y={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},g=0,o=v;g<o.length;g++){var C=o[g];C.didParseCell&&y.didParseCell.push(C.didParseCell),C.willDrawCell&&y.willDrawCell.push(C.willDrawCell),C.didDrawCell&&y.didDrawCell.push(C.didDrawCell),C.willDrawPage&&y.willDrawPage.push(C.willDrawPage),C.didDrawPage&&y.didDrawPage.push(C.didDrawPage)}return y}function r(f,n){var s,v,y,g,o,C,_,j,u,i,S,d,W=(0,c.parseSpacing)(n.margin,40/f.scaleFactor()),H=(s=t(f,n.startY))!==null&&s!==void 0?s:W.top,T;n.showFoot===!0?T="everyPage":n.showFoot===!1?T="never":T=(v=n.showFoot)!==null&&v!==void 0?v:"everyPage";var k;n.showHead===!0?k="everyPage":n.showHead===!1?k="never":k=(y=n.showHead)!==null&&y!==void 0?y:"everyPage";var R=(g=n.useCss)!==null&&g!==void 0?g:!1,A=n.theme||(R?"plain":"striped"),F=!!n.horizontalPageBreak,M=(o=n.horizontalPageBreakRepeat)!==null&&o!==void 0?o:null;return{includeHiddenHtml:(C=n.includeHiddenHtml)!==null&&C!==void 0?C:!1,useCss:R,theme:A,startY:H,margin:W,pageBreak:(_=n.pageBreak)!==null&&_!==void 0?_:"auto",rowPageBreak:(j=n.rowPageBreak)!==null&&j!==void 0?j:"auto",tableWidth:(u=n.tableWidth)!==null&&u!==void 0?u:"auto",showHead:k,showFoot:T,tableLineWidth:(i=n.tableLineWidth)!==null&&i!==void 0?i:0,tableLineColor:(S=n.tableLineColor)!==null&&S!==void 0?S:200,horizontalPageBreak:F,horizontalPageBreakRepeat:M,horizontalPageBreakBehaviour:(d=n.horizontalPageBreakBehaviour)!==null&&d!==void 0?d:"afterAllRows"}}function t(f,n){var s=f.getLastAutoTable(),v=f.scaleFactor(),y=f.pageNumber(),g=!1;if(s&&s.startPageNumber){var o=s.startPageNumber+s.pageNumber-1;g=o===y}return typeof n=="number"?n:(n==null||n===!1)&&g&&(s==null?void 0:s.finalY)!=null?s.finalY+20/v:null}function e(f,n,s){var v=n.head||[],y=n.body||[],g=n.foot||[];if(n.html){var o=n.includeHiddenHtml;if(s){var C=(0,x.parseHtml)(f,n.html,s,o,n.useCss)||{};v=C.head||v,y=C.body||v,g=C.foot||v}else console.error("Cannot parse html in non browser environment")}var _=n.columns||l(v,y,g);return{columns:_,head:v,body:y,foot:g}}function l(f,n,s){var v=f[0]||n[0]||s[0]||[],y=[];return Object.keys(v).filter(function(g){return g!=="_element"}).forEach(function(g){var o=1,C;Array.isArray(v)?C=v[parseInt(g)]:C=v[g],typeof C=="object"&&!Array.isArray(C)&&(o=(C==null?void 0:C.colSpan)||1);for(var _=0;_<o;_++){var j=void 0;Array.isArray(v)?j=y.length:j=g+(_>0?"_".concat(_):"");var u={dataKey:j};y.push(u)}}),y}},291:function(z,m){Object.defineProperty(m,"__esModule",{value:!0});function D(b,c,P,a){for(var w=function(t){t&&typeof t!="object"&&console.error("The options parameter should be of type object, is: "+typeof t),typeof t.extendWidth<"u"&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof t.margins<"u"&&(typeof t.margin>"u"&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&typeof t.startY!="number"&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(g){b.applyStyles(b.userStyles),t.beforePageContent&&t.beforePageContent(g),b.applyStyles(b.userStyles),t.afterPageContent&&t.afterPageContent(g),b.applyStyles(b.userStyles),t.afterPageAdd&&g.pageNumber>1&&g.afterPageAdd(g),b.applyStyles(b.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(g){t[g]&&console.error('The "'.concat(g,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(g){var o=g[0],C=g[1];t[C]&&(console.error("Use of deprecated option ".concat(C,". Use ").concat(o," instead")),t[o]=t[C])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(g){var o=typeof g=="string"?g:g[0],C=typeof g=="string"?g:g[1];typeof t[o]<"u"&&(typeof t.styles[C]>"u"&&(t.styles[C]=t[o]),console.error("Use of deprecated option: "+o+", use the style "+C+" instead."))});for(var e=0,l=["styles","bodyStyles","headStyles","footStyles"];e<l.length;e++){var f=l[e];x(t[f]||{})}for(var n=t.columnStyles||{},s=0,v=Object.keys(n);s<v.length;s++){var y=v[s];x(n[y]||{})}},p=0,h=[c,P,a];p<h.length;p++){var r=h[p];w(r)}}m.default=D;function x(b){b.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),b.minCellHeight||(b.minCellHeight=b.rowHeight)):b.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),b.cellWidth||(b.cellWidth=b.columnWidth))}},287:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.Column=m.Cell=m.Row=m.Table=void 0;var x=D(913),b=D(662),c=D(200),P=function(){function h(r,t){this.pageNumber=1,this.pageCount=1,this.id=r.id,this.settings=r.settings,this.styles=r.styles,this.hooks=r.hooks,this.columns=t.columns,this.head=t.head,this.body=t.body,this.foot=t.foot}return h.prototype.getHeadHeight=function(r){return this.head.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.getFootHeight=function(r){return this.foot.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},h.prototype.callCellHooks=function(r,t,e,l,f,n){for(var s=0,v=t;s<v.length;s++){var y=v[s],g=new b.CellHookData(r,this,e,l,f,n),o=y(g)===!1;if(e.text=Array.isArray(e.text)?e.text:[e.text],o)return!1}return!0},h.prototype.callEndPageHooks=function(r,t){r.applyStyles(r.userStyles);for(var e=0,l=this.hooks.didDrawPage;e<l.length;e++){var f=l[e];f(new b.HookData(r,this,t))}},h.prototype.callWillDrawPageHooks=function(r,t){for(var e=0,l=this.hooks.willDrawPage;e<l.length;e++){var f=l[e];f(new b.HookData(r,this,t))}},h.prototype.getWidth=function(r){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var t=this.columns.reduce(function(l,f){return l+f.wrappedWidth},0);return t}else{var e=this.settings.margin;return r-e.left-e.right}},h}();m.Table=P;var a=function(){function h(r,t,e,l,f){f===void 0&&(f=!1),this.height=0,this.raw=r,r instanceof x.HtmlRowInput&&(this.raw=r._element,this.element=r._element),this.index=t,this.section=e,this.cells=l,this.spansMultiplePages=f}return h.prototype.getMaxCellHeight=function(r){var t=this;return r.reduce(function(e,l){var f;return Math.max(e,((f=t.cells[l.index])===null||f===void 0?void 0:f.height)||0)},0)},h.prototype.hasRowSpan=function(r){var t=this;return r.filter(function(e){var l=t.cells[e.index];return l?l.rowSpan>1:!1}).length>0},h.prototype.canEntireRowFit=function(r,t){return this.getMaxCellHeight(t)<=r},h.prototype.getMinimumRowHeight=function(r,t){var e=this;return r.reduce(function(l,f){var n=e.cells[f.index];if(!n)return 0;var s=t.getLineHeight(n.styles.fontSize),v=n.padding("vertical"),y=v+s;return y>l?y:l},0)},h}();m.Row=a;var w=function(){function h(r,t,e){var l,f;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=t,this.section=e,this.raw=r;var n=r;r!=null&&typeof r=="object"&&!Array.isArray(r)?(this.rowSpan=r.rowSpan||1,this.colSpan=r.colSpan||1,n=(f=(l=r.content)!==null&&l!==void 0?l:r.title)!==null&&f!==void 0?f:r,r._element&&(this.raw=r._element)):(this.rowSpan=1,this.colSpan=1);var s=n!=null?""+n:"",v=/\r\n|\r|\n/g;this.text=s.split(v)}return h.prototype.getTextPos=function(){var r;if(this.styles.valign==="top")r=this.y+this.padding("top");else if(this.styles.valign==="bottom")r=this.y+this.height-this.padding("bottom");else{var t=this.height-this.padding("vertical");r=this.y+t/2+this.padding("top")}var e;if(this.styles.halign==="right")e=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var l=this.width-this.padding("horizontal");e=this.x+l/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:r}},h.prototype.getContentHeight=function(r,t){t===void 0&&(t=1.15);var e=Array.isArray(this.text)?this.text.length:1,l=this.styles.fontSize/r*t,f=e*l+this.padding("vertical");return Math.max(f,this.styles.minCellHeight)},h.prototype.padding=function(r){var t=(0,c.parseSpacing)(this.styles.cellPadding,0);return r==="vertical"?t.top+t.bottom:r==="horizontal"?t.left+t.right:t[r]},h}();m.Cell=w;var p=function(){function h(r,t,e){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=r,this.raw=t,this.index=e}return h.prototype.getMaxCustomCellWidth=function(r){for(var t=0,e=0,l=r.allRows();e<l.length;e++){var f=l[e],n=f.cells[this.index];n&&typeof n.styles.cellWidth=="number"&&(t=Math.max(t,n.styles.cellWidth))}return t},h}();m.Column=p},360:function(z,m){Object.defineProperty(m,"__esModule",{value:!0}),m.assign=void 0;function D(x,b,c,P,a){if(x==null)throw new TypeError("Cannot convert undefined or null to object");for(var w=Object(x),p=1;p<arguments.length;p++){var h=arguments[p];if(h!=null)for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(w[r]=h[r])}return w}m.assign=D},858:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.createTable=void 0;var x=D(323),b=D(287),c=D(189),P=D(913),a=D(360);function w(f,n){var s=new x.DocHandler(f),v=p(n,s.scaleFactor()),y=new b.Table(n,v);return(0,c.calculateWidths)(s,y),s.applyStyles(s.userStyles),y}m.createTable=w;function p(f,n){var s=f.content,v=e(s.columns);if(s.head.length===0){var y=r(v,"head");y&&s.head.push(y)}if(s.foot.length===0){var y=r(v,"foot");y&&s.foot.push(y)}var g=f.settings.theme,o=f.styles;return{columns:v,head:h("head",s.head,v,o,g,n),body:h("body",s.body,v,o,g,n),foot:h("foot",s.foot,v,o,g,n)}}function h(f,n,s,v,y,g){var o={},C=n.map(function(_,j){for(var u=0,i={},S=0,d=0,W=0,H=s;W<H.length;W++){var T=H[W];if(o[T.index]==null||o[T.index].left===0)if(d===0){var k=void 0;Array.isArray(_)?k=_[T.index-S-u]:k=_[T.dataKey];var R={};typeof k=="object"&&!Array.isArray(k)&&(R=(k==null?void 0:k.styles)||{});var A=l(f,T,j,y,v,g,R),F=new b.Cell(k,A,f);i[T.dataKey]=F,i[T.index]=F,d=F.colSpan-1,o[T.index]={left:F.rowSpan-1,times:d}}else d--,S++;else o[T.index].left--,d=o[T.index].times,u++}return new b.Row(_,j,f,i)});return C}function r(f,n){var s={};return f.forEach(function(v){if(v.raw!=null){var y=t(n,v.raw);y!=null&&(s[v.dataKey]=y)}}),Object.keys(s).length>0?s:null}function t(f,n){if(f==="head"){if(typeof n=="object")return n.header||n.title||null;if(typeof n=="string"||typeof n=="number")return n}else if(f==="foot"&&typeof n=="object")return n.footer;return null}function e(f){return f.map(function(n,s){var v,y,g;return typeof n=="object"?g=(y=(v=n.dataKey)!==null&&v!==void 0?v:n.key)!==null&&y!==void 0?y:s:g=s,new b.Column(g,n,s)})}function l(f,n,s,v,y,g,o){var C=(0,P.getTheme)(v),_;f==="head"?_=y.headStyles:f==="body"?_=y.bodyStyles:f==="foot"&&(_=y.footStyles);var j=(0,a.assign)({},C.table,C[f],y.styles,_),u=y.columnStyles[n.dataKey]||y.columnStyles[n.index]||{},i=f==="body"?u:{},S=f==="body"&&s%2===0?(0,a.assign)({},C.alternateRow,y.alternateRowStyles):{},d=(0,P.defaultStyles)(g),W=(0,a.assign)({},d,j,S,i);return(0,a.assign)(W,o)}},49:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.addPage=m.drawTable=void 0;var x=D(200),b=D(287),c=D(323),P=D(360),a=D(938),w=D(435);function p(u,i){var S=i.settings,d=S.startY,W=S.margin,H={x:W.left,y:d},T=i.getHeadHeight(i.columns)+i.getFootHeight(i.columns),k=d+W.bottom+T;if(S.pageBreak==="avoid"){var R=i.body,A=R.reduce(function(O,I){return O+I.height},0);k+=A}var F=new c.DocHandler(u);(S.pageBreak==="always"||S.startY!=null&&k>F.pageSize().height)&&(j(F),H.y=W.top),i.callWillDrawPageHooks(F,H);var M=(0,P.assign)({},H);i.startPageNumber=F.pageNumber(),S.horizontalPageBreak?h(F,i,M,H):(F.applyStyles(F.userStyles),(S.showHead==="firstPage"||S.showHead==="everyPage")&&i.head.forEach(function(O){return y(F,i,O,H,i.columns)}),F.applyStyles(F.userStyles),i.body.forEach(function(O,I){var U=I===i.body.length-1;v(F,i,O,U,M,H,i.columns)}),F.applyStyles(F.userStyles),(S.showFoot==="lastPage"||S.showFoot==="everyPage")&&i.foot.forEach(function(O){return y(F,i,O,H,i.columns)})),(0,x.addTableBorder)(F,i,M,H),i.callEndPageHooks(F,H),i.finalY=H.y,u.lastAutoTable=i,u.previousAutoTable=i,u.autoTable&&(u.autoTable.previous=i),F.applyStyles(F.userStyles)}m.drawTable=p;function h(u,i,S,d){var W=(0,w.calculateAllColumnsCanFitInPage)(u,i),H=i.settings;if(H.horizontalPageBreakBehaviour==="afterAllRows")W.forEach(function(A,F){u.applyStyles(u.userStyles),F>0?_(u,i,S,d,A.columns,!0):r(u,i,d,A.columns),t(u,i,S,d,A.columns),l(u,i,d,A.columns)});else for(var T=-1,k=W[0],R=function(){var A=T;if(k){u.applyStyles(u.userStyles);var F=k.columns;T>=0?_(u,i,S,d,F,!0):r(u,i,d,F),A=e(u,i,T+1,d,F),l(u,i,d,F)}var M=A-T;W.slice(1).forEach(function(O){u.applyStyles(u.userStyles),_(u,i,S,d,O.columns,!0),e(u,i,T+1,d,O.columns,M),l(u,i,d,O.columns)}),T=A};T<i.body.length-1;)R()}function r(u,i,S,d){var W=i.settings;u.applyStyles(u.userStyles),(W.showHead==="firstPage"||W.showHead==="everyPage")&&i.head.forEach(function(H){return y(u,i,H,S,d)})}function t(u,i,S,d,W){u.applyStyles(u.userStyles),i.body.forEach(function(H,T){var k=T===i.body.length-1;v(u,i,H,k,S,d,W)})}function e(u,i,S,d,W,H){u.applyStyles(u.userStyles),H=H??i.body.length;var T=Math.min(S+H,i.body.length),k=-1;return i.body.slice(S,T).forEach(function(R,A){var F=S+A===i.body.length-1,M=C(u,i,F,d);R.canEntireRowFit(M,W)&&(y(u,i,R,d,W),k=S+A)}),k}function l(u,i,S,d){var W=i.settings;u.applyStyles(u.userStyles),(W.showFoot==="lastPage"||W.showFoot==="everyPage")&&i.foot.forEach(function(H){return y(u,i,H,S,d)})}function f(u,i,S){var d=S.getLineHeight(u.styles.fontSize),W=u.padding("vertical"),H=Math.floor((i-W)/d);return Math.max(0,H)}function n(u,i,S,d){var W={};u.spansMultiplePages=!0,u.height=0;for(var H=0,T=0,k=S.columns;T<k.length;T++){var R=k[T],A=u.cells[R.index];if(A){Array.isArray(A.text)||(A.text=[A.text]);var F=new b.Cell(A.raw,A.styles,A.section);F=(0,P.assign)(F,A),F.text=[];var M=f(A,i,d);A.text.length>M&&(F.text=A.text.splice(M,A.text.length));var O=d.scaleFactor(),I=d.getLineHeightFactor();A.contentHeight=A.getContentHeight(O,I),A.contentHeight>=i&&(A.contentHeight=i,F.styles.minCellHeight-=i),A.contentHeight>u.height&&(u.height=A.contentHeight),F.contentHeight=F.getContentHeight(O,I),F.contentHeight>H&&(H=F.contentHeight),W[R.index]=F}}var U=new b.Row(u.raw,-1,u.section,W,!0);U.height=H;for(var G=0,Q=S.columns;G<Q.length;G++){var R=Q[G],F=U.cells[R.index];F&&(F.height=U.height);var A=u.cells[R.index];A&&(A.height=u.height)}return U}function s(u,i,S,d){var W=u.pageSize().height,H=d.settings.margin,T=H.top+H.bottom,k=W-T;i.section==="body"&&(k-=d.getHeadHeight(d.columns)+d.getFootHeight(d.columns));var R=i.getMinimumRowHeight(d.columns,u),A=R<S;if(R>k)return console.error("Will not be able to print row ".concat(i.index," correctly since it's minimum height is larger than page height")),!0;if(!A)return!1;var F=i.hasRowSpan(d.columns),M=i.getMaxCellHeight(d.columns)>k;return M?(F&&console.error("The content of row ".concat(i.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(F||d.settings.rowPageBreak==="avoid")}function v(u,i,S,d,W,H,T){var k=C(u,i,d,H);if(S.canEntireRowFit(k,T))y(u,i,S,H,T);else if(s(u,S,k,i)){var R=n(S,k,i,u);y(u,i,S,H,T),_(u,i,W,H,T),v(u,i,R,d,W,H,T)}else _(u,i,W,H,T),v(u,i,S,d,W,H,T)}function y(u,i,S,d,W){d.x=i.settings.margin.left;for(var H=0,T=W;H<T.length;H++){var k=T[H],R=S.cells[k.index];if(!R){d.x+=k.width;continue}u.applyStyles(R.styles),R.x=d.x,R.y=d.y;var A=i.callCellHooks(u,i.hooks.willDrawCell,R,S,k,d);if(A===!1){d.x+=k.width;continue}g(u,R,d);var F=R.getTextPos();(0,a.default)(R.text,F.x,F.y,{halign:R.styles.halign,valign:R.styles.valign,maxWidth:Math.ceil(R.width-R.padding("left")-R.padding("right"))},u.getDocument()),i.callCellHooks(u,i.hooks.didDrawCell,R,S,k,d),d.x+=k.width}d.y+=S.height}function g(u,i,S){var d=i.styles;if(u.getDocument().setFillColor(u.getDocument().getFillColor()),typeof d.lineWidth=="number"){var W=(0,x.getFillStyle)(d.lineWidth,d.fillColor);W&&u.rect(i.x,S.y,i.width,i.height,W)}else typeof d.lineWidth=="object"&&(d.fillColor&&u.rect(i.x,S.y,i.width,i.height,"F"),o(u,i,S,d.lineWidth))}function o(u,i,S,d){var W,H,T,k;d.top&&(W=S.x,H=S.y,T=S.x+i.width,k=S.y,d.right&&(T+=.5*d.right),d.left&&(W-=.5*d.left),R(d.top,W,H,T,k)),d.bottom&&(W=S.x,H=S.y+i.height,T=S.x+i.width,k=S.y+i.height,d.right&&(T+=.5*d.right),d.left&&(W-=.5*d.left),R(d.bottom,W,H,T,k)),d.left&&(W=S.x,H=S.y,T=S.x,k=S.y+i.height,d.top&&(H-=.5*d.top),d.bottom&&(k+=.5*d.bottom),R(d.left,W,H,T,k)),d.right&&(W=S.x+i.width,H=S.y,T=S.x+i.width,k=S.y+i.height,d.top&&(H-=.5*d.top),d.bottom&&(k+=.5*d.bottom),R(d.right,W,H,T,k));function R(A,F,M,O,I){u.getDocument().setLineWidth(A),u.getDocument().line(F,M,O,I,"S")}}function C(u,i,S,d){var W=i.settings.margin.bottom,H=i.settings.showFoot;return(H==="everyPage"||H==="lastPage"&&S)&&(W+=i.getFootHeight(i.columns)),u.pageSize().height-d.y-W}function _(u,i,S,d,W,H){W===void 0&&(W=[]),H===void 0&&(H=!1),u.applyStyles(u.userStyles),i.settings.showFoot==="everyPage"&&!H&&i.foot.forEach(function(k){return y(u,i,k,d,W)}),i.callEndPageHooks(u,d);var T=i.settings.margin;(0,x.addTableBorder)(u,i,S,d),j(u),i.pageNumber++,i.pageCount++,d.x=T.left,d.y=T.top,S.y=T.top,i.callWillDrawPageHooks(u,d),i.settings.showHead==="everyPage"&&(i.head.forEach(function(k){return y(u,i,k,d,W)}),u.applyStyles(u.userStyles))}m.addPage=_;function j(u){var i=u.pageNumber();u.setPage(i+1);var S=u.pageNumber();return S===i?(u.addPage(),!0):!1}},435:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.calculateAllColumnsCanFitInPage=void 0;var x=D(200);function b(P,a,w){var p;w===void 0&&(w={});var h=(0,x.getPageAvailableWidth)(P,a),r=new Map,t=[],e=[],l=[];a.settings.horizontalPageBreakRepeat,Array.isArray(a.settings.horizontalPageBreakRepeat)?l=a.settings.horizontalPageBreakRepeat:(typeof a.settings.horizontalPageBreakRepeat=="string"||typeof a.settings.horizontalPageBreakRepeat=="number")&&(l=[a.settings.horizontalPageBreakRepeat]),l.forEach(function(v){var y=a.columns.find(function(g){return g.dataKey===v||g.index===v});y&&!r.has(y.index)&&(r.set(y.index,!0),t.push(y.index),e.push(a.columns[y.index]),h-=y.wrappedWidth)});for(var f=!0,n=(p=w==null?void 0:w.start)!==null&&p!==void 0?p:0;n<a.columns.length;){if(r.has(n)){n++;continue}var s=a.columns[n].wrappedWidth;if(f||h>=s)f=!1,t.push(n),e.push(a.columns[n]),h-=s;else break;n++}return{colIndexes:t,columns:e,lastIndex:n-1}}function c(P,a){for(var w=[],p=0;p<a.columns.length;p++){var h=b(P,a,{start:p});h.columns.length&&(w.push(h),p=h.lastIndex)}return w}m.calculateAllColumnsCanFitInPage=c},189:function(z,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.ellipsize=m.resizeColumns=m.calculateWidths=void 0;var x=D(200);function b(t,e){c(t,e);var l=[],f=0;e.columns.forEach(function(s){var v=s.getMaxCustomCellWidth(e);v?s.width=v:(s.width=s.wrappedWidth,l.push(s)),f+=s.width});var n=e.getWidth(t.pageSize().width)-f;n&&(n=P(l,n,function(s){return Math.max(s.minReadableWidth,s.minWidth)})),n&&(n=P(l,n,function(s){return s.minWidth})),n=Math.abs(n),!e.settings.horizontalPageBreak&&n>.1/t.scaleFactor()&&(n=n<1?n:Math.round(n),console.warn("Of the table content, ".concat(n," units width could not fit page"))),w(e),p(e,t),a(e)}m.calculateWidths=b;function c(t,e){var l=t.scaleFactor(),f=e.settings.horizontalPageBreak,n=(0,x.getPageAvailableWidth)(t,e);e.allRows().forEach(function(s){for(var v=0,y=e.columns;v<y.length;v++){var g=y[v],o=s.cells[g.index];if(o){var C=e.hooks.didParseCell;e.callCellHooks(t,C,o,s,g,null);var _=o.padding("horizontal");o.contentWidth=(0,x.getStringWidth)(o.text,o.styles,t)+_;var j=(0,x.getStringWidth)(o.text.join(" ").split(/\s+/),o.styles,t);if(o.minReadableWidth=j+o.padding("horizontal"),typeof o.styles.cellWidth=="number")o.minWidth=o.styles.cellWidth,o.wrappedWidth=o.styles.cellWidth;else if(o.styles.cellWidth==="wrap"||f===!0)o.contentWidth>n?(o.minWidth=n,o.wrappedWidth=n):(o.minWidth=o.contentWidth,o.wrappedWidth=o.contentWidth);else{var u=10/l;o.minWidth=o.styles.minCellWidth||u,o.wrappedWidth=o.contentWidth,o.minWidth>o.wrappedWidth&&(o.wrappedWidth=o.minWidth)}}}}),e.allRows().forEach(function(s){for(var v=0,y=e.columns;v<y.length;v++){var g=y[v],o=s.cells[g.index];if(o&&o.colSpan===1)g.wrappedWidth=Math.max(g.wrappedWidth,o.wrappedWidth),g.minWidth=Math.max(g.minWidth,o.minWidth),g.minReadableWidth=Math.max(g.minReadableWidth,o.minReadableWidth);else{var C=e.styles.columnStyles[g.dataKey]||e.styles.columnStyles[g.index]||{},_=C.cellWidth||C.minCellWidth;_&&typeof _=="number"&&(g.minWidth=_,g.wrappedWidth=_)}o&&(o.colSpan>1&&!g.minWidth&&(g.minWidth=o.minWidth),o.colSpan>1&&!g.wrappedWidth&&(g.wrappedWidth=o.minWidth))}})}function P(t,e,l){for(var f=e,n=t.reduce(function(u,i){return u+i.wrappedWidth},0),s=0;s<t.length;s++){var v=t[s],y=v.wrappedWidth/n,g=f*y,o=v.width+g,C=l(v),_=o<C?C:o;e-=_-v.width,v.width=_}if(e=Math.round(e*1e10)/1e10,e){var j=t.filter(function(u){return e<0?u.width>l(u):!0});j.length&&(e=P(j,e,l))}return e}m.resizeColumns=P;function a(t){for(var e={},l=1,f=t.allRows(),n=0;n<f.length;n++)for(var s=f[n],v=0,y=t.columns;v<y.length;v++){var g=y[v],o=e[g.index];if(l>1)l--,delete s.cells[g.index];else if(o)o.cell.height+=s.height,l=o.cell.colSpan,delete s.cells[g.index],o.left--,o.left<=1&&delete e[g.index];else{var C=s.cells[g.index];if(!C)continue;if(C.height=s.height,C.rowSpan>1){var _=f.length-n,j=C.rowSpan>_?_:C.rowSpan;e[g.index]={cell:C,left:j,row:s}}}}}function w(t){for(var e=t.allRows(),l=0;l<e.length;l++)for(var f=e[l],n=null,s=0,v=0,y=0;y<t.columns.length;y++){var g=t.columns[y];if(v-=1,v>1&&t.columns[y+1])s+=g.width,delete f.cells[g.index];else if(n){var o=n;delete f.cells[g.index],n=null,o.width=g.width+s}else{var o=f.cells[g.index];if(!o)continue;if(v=o.colSpan,s=0,o.colSpan>1){n=o,s+=g.width;continue}o.width=g.width+s}}}function p(t,e){for(var l={count:0,height:0},f=0,n=t.allRows();f<n.length;f++){for(var s=n[f],v=0,y=t.columns;v<y.length;v++){var g=y[v],o=s.cells[g.index];if(o){e.applyStyles(o.styles,!0);var C=o.width-o.padding("horizontal");if(o.styles.overflow==="linebreak")o.text=e.splitTextToSize(o.text,C+1/e.scaleFactor(),{fontSize:o.styles.fontSize});else if(o.styles.overflow==="ellipsize")o.text=h(o.text,C,o.styles,e,"...");else if(o.styles.overflow==="hidden")o.text=h(o.text,C,o.styles,e,"");else if(typeof o.styles.overflow=="function"){var _=o.styles.overflow(o.text,C);typeof _=="string"?o.text=[_]:o.text=_}o.contentHeight=o.getContentHeight(e.scaleFactor(),e.getLineHeightFactor());var j=o.contentHeight/o.rowSpan;o.rowSpan>1&&l.count*l.height<j*o.rowSpan?l={height:j,count:o.rowSpan}:l&&l.count>0&&l.height>j&&(j=l.height),j>s.height&&(s.height=j)}}l.count--}}function h(t,e,l,f,n){return t.map(function(s){return r(s,e,l,f,n)})}m.ellipsize=h;function r(t,e,l,f,n){var s=1e4*f.scaleFactor();if(e=Math.ceil(e*s)/s,e>=(0,x.getStringWidth)(t,l,f))return t;for(;e<(0,x.getStringWidth)(t+n,l,f)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+n}},84:function(z){if(typeof N>"u"){var m=new Error("Cannot find module 'undefined'");throw m.code="MODULE_NOT_FOUND",m}z.exports=N}},E={};function B(z){var m=E[z];if(m!==void 0)return m.exports;var D=E[z]={exports:{}};return L[z].call(D.exports,D,D.exports,B),D.exports}var $={};return function(){var z=$;Object.defineProperty(z,"__esModule",{value:!0}),z.Cell=z.Column=z.Row=z.Table=z.CellHookData=z.__drawTable=z.__createTable=z.applyPlugin=void 0;var m=B(790),D=B(587),x=B(49),b=B(858),c=B(287);Object.defineProperty(z,"Table",{enumerable:!0,get:function(){return c.Table}});var P=B(662);Object.defineProperty(z,"CellHookData",{enumerable:!0,get:function(){return P.CellHookData}});var a=B(287);Object.defineProperty(z,"Cell",{enumerable:!0,get:function(){return a.Cell}}),Object.defineProperty(z,"Column",{enumerable:!0,get:function(){return a.Column}}),Object.defineProperty(z,"Row",{enumerable:!0,get:function(){return a.Row}});function w(e){(0,m.default)(e)}z.applyPlugin=w;function p(e,l){var f=(0,D.parseInput)(e,l),n=(0,b.createTable)(e,f);(0,x.drawTable)(e,n)}function h(e,l){var f=(0,D.parseInput)(e,l);return(0,b.createTable)(e,f)}z.__createTable=h;function r(e,l){(0,x.drawTable)(e,l)}z.__drawTable=r;try{var t=B(84);t.jsPDF&&(t=t.jsPDF),w(t)}catch{}z.default=p}(),$}()})})(Z);var X=Z.exports;const rt=q(X),ot=et({__proto__:null,default:rt},[X]);export{ot as j};
//# sourceMappingURL=jspdf.plugin.autotable-twcnUjdL.js.map