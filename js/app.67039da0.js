(function(){"use strict";var r={2101:function(r,e,t){var n=t(9242),u=t(3396);const o={class:"keys"},s=(0,u._)("span",null,null,-1);function i(r,e,t,i,a,c){return(0,u.wg)(),(0,u.iD)("main",null,[(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>a.currentNumber=r)},null,512),[[n.nr,a.currentNumber]]),(0,u._)("div",o,[(0,u._)("button",{class:"op__key",onClick:e[1]||(e[1]=(...r)=>c.clear&&c.clear(...r))},"C"),(0,u._)("button",{class:"op__key",onClick:e[2]||(e[2]=(...r)=>c.plusMinusNumber&&c.plusMinusNumber(...r))},"+/-"),(0,u._)("button",{class:"op__key",onClick:e[3]||(e[3]=r=>c.handleOperation("%"))},"%"),(0,u._)("button",{class:"op__key",onClick:e[4]||(e[4]=r=>c.handleOperation("/"))},"/"),(0,u._)("button",{class:"num__key",onClick:e[5]||(e[5]=r=>c.addNumber("7"))},"7"),(0,u._)("button",{class:"num__key",onClick:e[6]||(e[6]=r=>c.addNumber("8"))},"8"),(0,u._)("button",{class:"num__key",onClick:e[7]||(e[7]=r=>c.addNumber("9"))},"9"),(0,u._)("button",{class:"op__key",onClick:e[8]||(e[8]=r=>c.handleOperation("*"))},"x"),(0,u._)("button",{class:"num__key",onClick:e[9]||(e[9]=r=>c.addNumber("4"))},"4"),(0,u._)("button",{class:"num__key",onClick:e[10]||(e[10]=r=>c.addNumber("5"))},"5"),(0,u._)("button",{class:"num__key",onClick:e[11]||(e[11]=r=>c.addNumber("6"))},"6"),(0,u._)("button",{class:"op__key",onClick:e[12]||(e[12]=r=>c.handleOperation("-"))},"-"),(0,u._)("button",{class:"num__key",onClick:e[13]||(e[13]=r=>c.addNumber("1"))},"1"),(0,u._)("button",{class:"num__key",onClick:e[14]||(e[14]=r=>c.addNumber("2"))},"2"),(0,u._)("button",{class:"num__key",onClick:e[15]||(e[15]=r=>c.addNumber("3"))},"3"),(0,u._)("button",{class:"op__key",onClick:e[16]||(e[16]=r=>c.handleOperation("+"))},"+"),s,(0,u._)("button",{class:"num__key",onClick:e[17]||(e[17]=r=>c.addNumber("0"))},"0"),(0,u._)("button",{class:"num__key",onClick:e[18]||(e[18]=(...r)=>c.addDot&&c.addDot(...r))},"."),(0,u._)("button",{class:"eq__key",onClick:e[19]||(e[19]=(...r)=>c.equal&&c.equal(...r))},"=")])])}var a={data(){return{currentNumber:"",prevNumber:"",oprasion:""}},methods:{addNumber(r){0==this.currentNumber&&0==r||(this.currentNumber+=r)},addDot(){this.currentNumber.includes(".")||(this.currentNumber+=".")},clear(){this.currentNumber=""},plusMinusNumber(){parseFloat(this.currentNumber)>0?this.currentNumber="-"+this.currentNumber:this.currentNumber=this.currentNumber.substring(1)},handleOperation(r){this.prevNumber=this.currentNumber,this.currentNumber="",this.oprasion=r},equal(){switch(this.oprasion){case"+":this.currentNumber=parseFloat(this.prevNumber)+parseFloat(this.currentNumber);break;case"-":this.currentNumber=parseFloat(this.prevNumber)-parseFloat(this.currentNumber);break;case"%":this.currentNumber=parseFloat(this.prevNumber)%parseFloat(this.currentNumber);break;case"/":this.currentNumber=parseFloat(this.prevNumber)/parseFloat(this.currentNumber);break;case"*":this.currentNumber=parseFloat(this.prevNumber)*parseFloat(this.currentNumber)}this.currentNumber=this.currentNumber.toString()}}},c=t(89);const l=(0,c.Z)(a,[["render",i]]);var b=l;(0,n.ri)(b).mount("#app")}},e={};function t(n){var u=e[n];if(void 0!==u)return u.exports;var o=e[n]={exports:{}};return r[n].call(o.exports,o,o.exports,t),o.exports}t.m=r,function(){var r=[];t.O=function(e,n,u,o){if(!n){var s=1/0;for(l=0;l<r.length;l++){n=r[l][0],u=r[l][1],o=r[l][2];for(var i=!0,a=0;a<n.length;a++)(!1&o||s>=o)&&Object.keys(t.O).every((function(r){return t.O[r](n[a])}))?n.splice(a--,1):(i=!1,o<s&&(s=o));if(i){r.splice(l--,1);var c=u();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=r.length;l>0&&r[l-1][2]>o;l--)r[l]=r[l-1];r[l]=[n,u,o]}}(),function(){t.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(e,{a:e}),e}}(),function(){t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var u,o,s=n[0],i=n[1],a=n[2],c=0;if(s.some((function(e){return 0!==r[e]}))){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(a)var l=a(t)}for(e&&e(n);c<s.length;c++)o=s[c],t.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return t.O(l)},n=self["webpackChunkmini_proge"]=self["webpackChunkmini_proge"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2101)}));n=t.O(n)})();
//# sourceMappingURL=app.67039da0.js.map