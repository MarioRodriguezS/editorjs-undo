!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Undo=e():t.Undo=e()}(self,(function(){return(()=>{var t={571:function(t,e){var n,i;n=function(t){"use strict";var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),n=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.target=e,this.isContentEditable=e&&e.contentEditable}return e(t,[{key:"getPos",value:function(){if(document.activeElement!==this.target)return-1;if(this.isContentEditable){this.target.focus();var t=document.getSelection().getRangeAt(0),e=t.cloneRange();return e.selectNodeContents(this.target),e.setEnd(t.endContainer,t.endOffset),e.toString().length}return this.target.selectionStart}},{key:"setPos",value:function(t){if(this.isContentEditable){if(t>=0){var e=window.getSelection(),n=this.createRange(this.target,{count:t});n&&(n.collapse(!1),e.removeAllRanges(),e.addRange(n))}}else this.target.setSelectionRange(t,t)}},{key:"createRange",value:function(t,e,n){if(n||((n=document.createRange()).selectNode(t),n.setStart(t,0)),0===e.count)n.setEnd(t,e.count);else if(t&&e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(n.setEnd(t,e.count),e.count=0);else for(var i=0;i<t.childNodes.length&&(n=this.createRange(t.childNodes[i],e,n),0!==e.count);i++);return n}}]),t}();t.exports=n},void 0===(i=n.apply(e,[t]))||(t.exports=i)},334:(t,e,n)=>{t.exports=n(571)}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};return(()=>{"use strict";n.d(i,{default:()=>a});var t=n(334),e=n.n(t);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.holder=n,this.observer=null,this.debounceTimer=i,this.mutationDebouncer=this.debounce((function(){e()}),this.debounceTimer)}var e,n;return e=t,n=[{key:"setMutationObserver",value:function(){var t=this,e=this.holder.querySelector(".codex-editor__redactor");this.observer=new MutationObserver((function(e){t.mutationHandler(e)})),this.observer.observe(e,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t){var e=this,n=!1;t.forEach((function(t){switch(t.type){case"childList":t.target===e.holder?e.onDestroy():n=!0;break;case"characterData":n=!0;break;case"attributes":t.target.classList.contains("ce-block")||t.target.classList.contains("tc-toolbox")||(n=!0)}})),n&&this.mutationDebouncer()}},{key:"debounce",value:function(t,e){var n,i=this;return function(){for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];var a=i;clearTimeout(n),n=setTimeout((function(){return t.apply(a,s)}),e)}}},{key:"onDestroy",value:function(){var t=new CustomEvent("destroy");document.dispatchEvent(t),this.observer.disconnect()}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){var n=this,i=e.editor,o=e.config,r=void 0===o?{}:o,a=e.onUpdate,c=e.maxLength;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var l={maxLength:30,onUpdate:function(){},config:{debounceTimer:200,shortcuts:{undo:"CMD+Z",redo:"CMD+Y"}}},u=i.blocks,h=i.caret,d=i.configuration,f=d.holder,p=l.config.shortcuts,k=r.shortcuts,v=void 0===k?p:k,y=l.config.debounceTimer,g=r.debounceTimer,b=void 0===g?y:g;this.holder="string"==typeof f?document.getElementById(f):f,this.editor=i,this.blocks=u,this.caret=h,this.shouldSaveHistory=!0,this.readOnly=d.readOnly,this.maxLength=c||l.maxLength,this.onUpdate=a||l.onUpdate,this.config={debounceTimer:b,shortcuts:v},new s((function(){return n.registerChange()}),this.holder,this.config.debounceTimer).setMutationObserver(),this.setEventListeners(),this.initialItem=null,this.clear()}var n,i,o;return n=t,o=[{key:"isReadOnlySupported",get:function(){return!0}}],(i=[{key:"truncate",value:function(t,e){for(;t.length>e;)t.shift()}},{key:"initialize",value:function(t){var e="blocks"in t?t.blocks:t,n={index:e.length-1,state:e};this.stack[0]=n,this.initialItem=n}},{key:"clear",value:function(){this.stack=this.initialItem?[this.initialItem]:[{index:0,state:[{type:"paragraph",data:{text:""}}]}],this.position=0,this.onUpdate()}},{key:"setReadOnly",value:function(){var t=document.querySelector(".ce-toolbox");this.readOnly=!t}},{key:"registerChange",value:function(){var t=this;this.setReadOnly(),this.readOnly||(this.editor&&this.editor.save&&this.shouldSaveHistory&&this.editor.save().then((function(e){t.editorDidUpdate(e.blocks)&&t.save(e.blocks)})),this.shouldSaveHistory=!0)}},{key:"editorDidUpdate",value:function(t){var e=this.stack[this.position].state;return!!t.length&&(t.length!==e.length||JSON.stringify(e)!==JSON.stringify(t))}},{key:"save",value:function(t){this.position>=this.maxLength&&this.truncate(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1);var e=this.blocks.getCurrentBlockIndex(),n=this.blocks.getBlocksCount(),i=e;t[e]||(i-=n-t.length);var o=!t[i]||"paragraph"!==t[i].type&&"header"!==t[i].type?null:this.getCaretIndex(e);this.stack.push({index:i,state:t,caretIndex:o}),this.position+=1,this.onUpdate()}},{key:"getCaretIndex",value:function(t){var n=document.getElementsByClassName("ce-block__content");return new(e())(n[t].firstChild).getPos()}},{key:"insertDeletedBlock",value:function(t,e,n){for(var i=0;i<t.length;i+=1)if(!e[i]||t[i].id!==e[i].id){this.blocks.insert(t[i].type,t[i].data,{},i,!0),this.caret.setToBlock(n,"end");break}}},{key:"blockWasDropped",value:function(t,e){return t.length===e.length&&t.some((function(t,n){return t.id!==e[n].id}))}},{key:"blockWasSkipped",value:function(t,e,n,i){return t<e&&n.length!==i.length}},{key:"contentChangedInNoFocusBlock",value:function(t,e){return t!==e}},{key:"blockWasDeleted",value:function(t,e){return t.length>e.length}},{key:"undo",value:function(){var t=this;if(this.canUndo()&&this.position>=0){this.position-=1,this.shouldSaveHistory=!1;var e=this.stack[this.position].index,n=this.stack[this.position],i=n.state,o=n.caretIndex,s=this.stack[this.position],r=s.index,a=s.state;this.onUpdate();var c=this.blocks.getBlocksCount();if(i[e]||(e-=1,this.stack[this.position].index=e),this.blockWasDeleted(i,a))this.insertDeletedBlock(i,a,e);else if(this.blockWasSkipped(e,r,i,a))this.blocks.delete(),this.caret.setToBlock(e,"end");else if(c>i.length)this.blocks.render({blocks:i}).then((function(){t.editor.blocks.insert("paragraph",{text:""}),t.caret.setToLastBlock("end")}));else if(this.blockWasDropped(i,a))this.blocks.render({blocks:i}).then((function(){return t.caret.setToBlock(e,"end")}));else if(this.contentChangedInNoFocusBlock(e,r)){var l=this.blocks.getBlockByIndex(r).id;this.blocks.update(l,i[r].data),this.setCaretIndex(e,o)}var u=this.blocks.getBlockByIndex(e);u&&(this.blocks.update(u.id,i[e].data),this.setCaretIndex(e,o))}}},{key:"setCaretIndex",value:function(t,n){if(n&&-1!==n){var i=document.getElementsByClassName("ce-block__content");new(e())(i[t].firstChild).setPos(n)}else this.caret.setToBlock(t,"end")}},{key:"insertBlock",value:function(t,e){this.blocks.insert(t[e].type,t[e].data,{},e,!0)}},{key:"insertSkippedBlocks",value:function(t,e){for(var n=t;n<e.length;n+=1)this.insertBlock(e,n)}},{key:"redo",value:function(){var t=this;if(this.canRedo()){this.position+=1,this.shouldSaveHistory=!1;var e=this.stack[this.position],n=e.index,i=e.state,o=e.caretIndex,s=this.stack[this.position-1],r=s.index,a=s.state;this.blockWasDeleted(a,i)?(this.blocks.delete(),this.caret.setToBlock(n,"end")):this.blockWasSkipped(r,n,i,a)?(this.insertSkippedBlocks(a.length,i),this.caret.setToBlock(n,"end")):this.blockWasDropped(i,a)&&1!==this.position&&this.blocks.render({blocks:i}).then((function(){return t.caret.setToBlock(n,"end")})),this.onUpdate();var c=this.blocks.getBlockByIndex(n);c&&(this.blocks.update(c.id,i[n].data),this.setCaretIndex(n,o))}}},{key:"canUndo",value:function(){return!this.readOnly&&this.position>0}},{key:"canRedo",value:function(){return!this.readOnly&&this.position<this.count()}},{key:"count",value:function(){return this.stack.length-1}},{key:"parseKeys",value:function(t){var e={CMD:/(Mac)/i.test(navigator.platform)?"metaKey":"ctrlKey",ALT:"altKey",SHIFT:"shiftKey"},n=t.slice(0,-1).map((function(t){return e[t]})),i=n.includes("shiftKey")&&2===t.length?t[t.length-1].toUpperCase():t[t.length-1].toLowerCase();return n.push(i),n}},{key:"setEventListeners",value:function(){var t=this,e=this.holder,n=this.config.shortcuts,i=n.undo,o=n.redo,s=i.replace(/ /g,"").split("+"),r=o.replace(/ /g,"").split("+"),a=this.parseKeys(s),c=this.parseKeys(r),l=function(t){return t.replace("Key","").toLowerCase()},u=function(t,e){return 3===e.length&&t[e[0]]&&t[e[1]]&&(t.key===e[2]||l(t.code)===e[2])},h=function(t,e,n){return!(!function(t,e){return 2===e.length&&t[e[0]]&&(t.key===e[1]||l(t.code)===e[1])}(t,e)||u(t,n))||!!u(t,e)},d=function(e){h(e,a,c)&&(e.preventDefault(),t.undo())},f=function(e){h(e,c,a)&&(e.preventDefault(),t.redo())};e.addEventListener("keydown",d),e.addEventListener("keydown",f),e.addEventListener("destroy",(function(){e.removeEventListener("keydown",d),e.removeEventListener("keydown",f)}))}}])&&r(n.prototype,i),o&&r(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}()})(),i.default})()}));