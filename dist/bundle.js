!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Undo=e():t.Undo=e()}(self,(()=>(()=>{var t={553:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",y={};function v(){}function g(){}function k(){}var b={};c(b,i,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(B([])));x&&x!==n&&r.call(x,i)&&(b=x);var w=k.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function B(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=k,c(w,"constructor",k),c(k,"constructor",g),g.displayName=c(k,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=B,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:B(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},757:(t,e,n)=>{t.exports=n(553)},571:function(t,e){var n,r;n=function(t){"use strict";var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),n=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.target=e,this.isContentEditable=e&&e.contentEditable}return e(t,[{key:"getPos",value:function(){if(document.activeElement!==this.target)return-1;if(this.isContentEditable){this.target.focus();var t=document.getSelection().getRangeAt(0),e=t.cloneRange();return e.selectNodeContents(this.target),e.setEnd(t.endContainer,t.endOffset),e.toString().length}return this.target.selectionStart}},{key:"setPos",value:function(t){if(this.isContentEditable){if(t>=0){var e=window.getSelection(),n=this.createRange(this.target,{count:t});n&&(n.collapse(!1),e.removeAllRanges(),e.addRange(n))}}else this.target.setSelectionRange(t,t)}},{key:"createRange",value:function(t,e,n){if(n||((n=document.createRange()).selectNode(t),n.setStart(t,0)),0===e.count)n.setEnd(t,e.count);else if(t&&e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(n.setEnd(t,e.count),e.count=0);else for(var r=0;r<t.childNodes.length&&(n=this.createRange(t.childNodes[r],e,n),0!==e.count);r++);return n}}]),t}();t.exports=n},void 0===(r=n.apply(e,[t]))||(t.exports=r)},334:(t,e,n)=>{t.exports=n(571)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};return(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(r,{default:()=>y});var c=n(757),u=n.n(c),l=n(334),h=n.n(l),f=function(){function t(e,n,r){i(this,t),this.holder=n,this.observer=null,this.debounceTimer=r,this.mutationDebouncer=this.debounce((function(){e()}),this.debounceTimer)}return s(t,[{key:"setMutationObserver",value:function(){var t=this,e=this.holder.querySelector(".codex-editor__redactor");this.observer=new MutationObserver((function(e){t.mutationHandler(e)})),this.observer.observe(e,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t){var e=this,n=!1;t.forEach((function(t){switch(t.type){case"childList":t.target===e.holder?e.onDestroy():n=!0;break;case"characterData":n=!0;break;case"attributes":t.target.classList.contains("ce-block")||t.target.classList.contains("tc-toolbox")||(n=!0)}})),n&&this.mutationDebouncer()}},{key:"debounce",value:function(t,e){var n,r=this;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=r;clearTimeout(n),n=setTimeout((function(){return t.apply(s,i)}),e)}}},{key:"onDestroy",value:function(){var t=new CustomEvent("destroy");document.dispatchEvent(t),this.observer.disconnect()}}]),t}();function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(){function t(e){var n=this,r=e.editor,o=e.config,a=void 0===o?{}:o,s=e.onUpdate,c=e.maxLength;i(this,t);var u={maxLength:30,onUpdate:function(){},config:{debounceTimer:200,shortcuts:{undo:["CMD+Z"],redo:["CMD+Y","CMD+SHIFT+Z"]}}},l=r.blocks,h=r.caret,d=r.configuration,y=d.holder,v=d.defaultBlock,g=u.config.shortcuts,k=a.shortcuts,b=p(p({},g),k),m=Array.isArray(b.undo)?b.undo:[b.undo],x=Array.isArray(b.redo)?b.redo:[b.redo],w=u.config.debounceTimer,O=a.debounceTimer,E=void 0===O?w:O;this.holder="string"==typeof y?document.getElementById(y):y,this.editor=r,this.defaultBlock=v,this.blocks=l,this.caret=h,this.shouldSaveHistory=!0,this.readOnly=d.readOnly,this.maxLength=c||u.maxLength,this.onUpdate=s||u.onUpdate,this.config={debounceTimer:E,shortcuts:{undo:m,redo:x}},new f((function(){return n.registerChange()}),this.holder,this.config.debounceTimer).setMutationObserver(),this.setEventListeners(),this.initialItem=null,this.clear()}var n,r,o;return s(t,[{key:"truncate",value:function(t,e){for(;t.length>e;)t.shift()}},{key:"initialize",value:function(t){var e="blocks"in t?t.blocks:t,n={index:e.length-1,state:e};this.stack[0]=n,this.initialItem=n}},{key:"clear",value:function(){this.stack=this.initialItem?[this.initialItem]:[{index:0,state:[{type:this.defaultBlock,data:{}}]}],this.position=0,this.onUpdate()}},{key:"setReadOnly",value:function(){var t=this.holder.querySelector(".ce-toolbox");this.readOnly=!t}},{key:"registerChange",value:function(){var t=this;this.setReadOnly(),this.readOnly||(this.editor&&this.editor.save&&this.shouldSaveHistory&&this.editor.save().then((function(e){t.editorDidUpdate(e.blocks)&&t.save(e.blocks)})),this.shouldSaveHistory=!0)}},{key:"editorDidUpdate",value:function(t){var e=this.stack[this.position].state;return!!t.length&&(t.length!==e.length||JSON.stringify(e)!==JSON.stringify(t))}},{key:"save",value:function(t){this.position>=this.maxLength&&this.truncate(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1);var e=this.blocks.getCurrentBlockIndex(),n=this.blocks.getBlocksCount(),r=e;t[e]||(r-=n-t.length);var o=!t[r]||"paragraph"!==t[r].type&&"header"!==t[r].type?null:this.getCaretIndex(e);this.stack.push({index:r,state:t,caretIndex:o}),this.position+=1,this.onUpdate()}},{key:"getCaretIndex",value:function(t){var e=this.holder.getElementsByClassName("ce-block__content");return new(h())(e[t].firstChild).getPos()}},{key:"insertDeletedBlock",value:function(t,e,n){for(var r=0;r<t.length;r+=1)if(!e[r]||t[r].id!==e[r].id){this.blocks.insert(t[r].type,t[r].data,{},r,!0),this.caret.setToBlock(n,"end");break}}},{key:"blockWasDropped",value:function(t,e){return t.length===e.length&&t.some((function(t,n){return t.id!==e[n].id}))}},{key:"blockWasSkipped",value:function(t,e,n,r){return t<e&&n.length!==r.length}},{key:"contentChangedInNoFocusBlock",value:function(t,e){return t!==e}},{key:"blockWasDeleted",value:function(t,e){return t.length>e.length}},{key:"undo",value:(o=e(u().mark((function t(){var e,n,r,o,i,a,s,c,l,h,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.canUndo()){t.next=43;break}if(e=this.stack[this.position],n=e.index,r=e.state,this.position-=1,this.shouldSaveHistory=!1,o=this.stack[this.position].index,i=this.stack[this.position],a=i.state,s=i.caretIndex,this.onUpdate(),c=this.blocks.getBlocksCount(),a[o]||(o-=1,this.stack[this.position].index=o),!this.blockWasDeleted(a,r)){t.next=13;break}this.insertDeletedBlock(a,r,o),t.next=38;break;case 13:if(!this.blockWasSkipped(o,n,a,r)){t.next=19;break}return t.next=16,this.blocks.delete(n);case 16:this.caret.setToBlock(o,"end"),t.next=38;break;case 19:if(!(c>a.length)){t.next=27;break}return t.next=22,this.blocks.render({blocks:a});case 22:return t.next=24,this.editor.blocks.insert(this.defaultBlock,{});case 24:this.setCaretIndex(o,s),t.next=38;break;case 27:if(!this.blockWasDropped(a,r)){t.next=33;break}return t.next=30,this.blocks.render({blocks:a});case 30:this.caret.setToBlock(o,"end"),t.next=38;break;case 33:if(!this.contentChangedInNoFocusBlock(o,n)){t.next=38;break}return l=this.blocks.getBlockByIndex(n),h=l.id,t.next=37,this.blocks.update(h,a[n].data);case 37:this.setCaretIndex(o,s);case 38:if(!(f=this.blocks.getBlockByIndex(o))){t.next=43;break}return t.next=42,this.blocks.update(f.id,a[o].data);case 42:this.setCaretIndex(o,s);case 43:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"setCaretIndex",value:function(t,e){if(e&&-1!==e){var n=this.holder.getElementsByClassName("ce-block__content"),r=new(h())(n[t].firstChild);setTimeout((function(){return r.setPos(e)}),50)}else this.caret.setToBlock(t,"end")}},{key:"insertBlock",value:(r=e(u().mark((function t(e,n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.blocks.insert(e[n].type,e[n].data,{},n,!0);case 2:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"insertSkippedBlocks",value:function(t,e){for(var n=t;n<e.length;n+=1)this.insertBlock(e,n)}},{key:"redo",value:(n=e(u().mark((function t(){var e,n,r,o,i,a,s,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.canRedo()){t.next=26;break}if(this.position+=1,this.shouldSaveHistory=!1,e=this.stack[this.position],n=e.index,r=e.state,o=e.caretIndex,i=this.stack[this.position-1],a=i.index,s=i.state,!this.blockWasDeleted(s,r)){t.next=11;break}return t.next=8,this.blocks.delete();case 8:this.caret.setToBlock(n,"end"),t.next=20;break;case 11:if(!this.blockWasSkipped(a,n,r,s)){t.next=16;break}this.insertSkippedBlocks(s.length,r),this.caret.setToBlock(n,"end"),t.next=20;break;case 16:if(!this.blockWasDropped(r,s)||1===this.position){t.next=20;break}return t.next=19,this.blocks.render({blocks:r});case 19:this.caret.setToBlock(n,"end");case 20:if(this.onUpdate(),!(c=this.blocks.getBlockByIndex(n))){t.next=26;break}return t.next=25,this.blocks.update(c.id,r[n].data);case 25:this.setCaretIndex(n,o);case 26:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"canUndo",value:function(){return!this.readOnly&&this.position>0}},{key:"canRedo",value:function(){return!this.readOnly&&this.position<this.count()}},{key:"count",value:function(){return this.stack.length-1}},{key:"parseKeys",value:function(t){var e={CMD:/(Mac)/i.test(navigator.platform)?"metaKey":"ctrlKey",ALT:"altKey",SHIFT:"shiftKey"},n=t.slice(0,-1).map((function(t){return e[t]})),r=n.includes("shiftKey")&&2===t.length?t[t.length-1].toUpperCase():t[t.length-1].toLowerCase();return n.push(r),n}},{key:"setEventListeners",value:function(){var t=this,e=this.holder,n=this.config.shortcuts,r=n.undo,o=n.redo,i=r.map((function(t){return t.replace(/ /g,"").split("+")})),a=o.map((function(t){return t.replace(/ /g,"").split("+")})),s=i.map((function(e){return t.parseKeys(e)})),c=a.map((function(e){return t.parseKeys(e)})),u=function(t,e){return e.reduce((function(e,n){return e||function(t,e){return 3===e.length&&t[e[0]]&&t[e[1]]&&t.key.toLowerCase()===e[2]}(t,n)}),!1)},l=function(t,e,n){return!(!function(t,e){return e.reduce((function(e,n){return e||function(t,e){return 2===e.length&&t[e[0]]&&t.key.toLowerCase()===e[1]}(t,n)}),!1)}(t,e)||u(t,n))||!!u(t,e)},h=function(e){l(e,s,c)&&(e.preventDefault(),t.undo())},f=function(e){l(e,c,s)&&(e.preventDefault(),t.redo())};e.addEventListener("keydown",h),e.addEventListener("keydown",f),e.addEventListener("destroy",(function(){e.removeEventListener("keydown",h),e.removeEventListener("keydown",f)}))}}],[{key:"isReadOnlySupported",get:function(){return!0}}]),t}()})(),r.default})()));