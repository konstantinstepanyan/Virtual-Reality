const OS=(()=>{const e=navigator.platform.toLowerCase();return e.includes("mac")?"MacOS":["iphone","ipad","ipod","ipod touch"].includes(e)?"iOS":e.includes("win")?"Windows":/android/.test(navigator.userAgent.toLowerCase())?"Android":/linux/.test(e)?"Linux":"unknown"})();let canUseWebp=function(){let e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")};const setClassToBody=(document.documentElement,void(canUseWebp&&"MacOS"!=OS?(document.documentElement.classList.add("webp"),document.documentElement.classList.remove("no-webp")):(document.documentElement.classList.add("no-webp"),document.documentElement.classList.remove("webp"))));document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("img");document.querySelectorAll("image");canUseWebp&&"MacOs"!=OS&&!document.documentElement.classList.contains("no-webp")||function(e,t){for(let n=0;n<e.length;n++){const o=e[n],s=o.getAttribute(t).toLowerCase(),c=s.slice(0,s.lastIndexOf("/")),d=s.substring(s.lastIndexOf("/")+1),a=d.slice(0,d.lastIndexOf("."));if(s.substring(s.lastIndexOf(".")+1),c.includes("/webp")){const e=`${/(.*?)(=?\/webp)/gi.exec(c)[1]}/${a}.${o.getAttribute("data-ext")}`;o.setAttribute(t,e)}}}(e,"src")});