!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return v.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=g();if(x(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function T(e){return f=void 0,s&&r?y(e):(r=i=void 0,u)}function h(){var e=g(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",x={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};x.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value;var t=JSON.stringify(O);localStorage.setItem(j,t)}),500)),x.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem(j)),e.currentTarget.reset(),localStorage.removeItem(j)})),function(){var e=localStorage.getItem(j);if(e){var t=JSON.parse(e),n=t.email,r=void 0===n?"":n,o=t.message,i=void 0===o?"":o;x.input.value=r,x.textarea.value=i}}();var O={email:x.input.value,message:x.textarea.value}}();
//# sourceMappingURL=03-feedback.8b4c735e.js.map