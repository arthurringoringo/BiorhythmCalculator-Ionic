(this["webpackJsonpbiorhythm-calculator"]=this["webpackJsonpbiorhythm-calculator"]||[]).push([[51],{462:function(t,n,e){"use strict";e.r(n),e.d(n,"KEYBOARD_DID_CLOSE",(function(){return r})),e.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(n,"copyVisualViewport",(function(){return v})),e.d(n,"keyboardDidClose",(function(){return g})),e.d(n,"keyboardDidOpen",(function(){return p})),e.d(n,"keyboardDidResize",(function(){return b})),e.d(n,"resetKeyboardAssist",(function(){return d})),e.d(n,"setKeyboardClose",(function(){return h})),e.d(n,"setKeyboardOpen",(function(){return f})),e.d(n,"startKeyboardAssist",(function(){return c})),e.d(n,"trackViewportChanges",(function(){return l}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,d=function(){o={},u={},a=!1},c=function(t){s(t),t.visualViewport&&(u=v(t.visualViewport),t.visualViewport.onresize=function(){l(t),p()||b(t)?f(t):g(t)&&h(t)})},s=function(t){t.addEventListener("keyboardDidShow",(function(n){return f(t,n)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},f=function(t,n){w(t,n),a=!0},h=function(t){y(t),a=!1},p=function(){var t=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&t>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},w=function(t,n){var e=n?n.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:e}});t.dispatchEvent(r)},y=function(t){var n=new CustomEvent(r);t.dispatchEvent(n)},l=function(t){o=Object.assign({},u),u=v(t.visualViewport)},v=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=51.6cc5d0ef.chunk.js.map