"use strict";(()=>{function s(){let e=16,o=3,r=document.querySelector('[data-el="font-size-increase"]'),i=document.querySelector('[data-el="font-size-decrease"]');if(!r||!i){window.DEBUG("increaseTriggerEl or decreaseTriggerEl not found"),window.DEBUG({increaseTriggerEl:r},{decreaseTriggerEl:i});return}r.addEventListener("click",()=>{let n=e+o;c(n,e),e=n}),i.addEventListener("click",()=>{let n=e-o;c(n,e),e=n})}function c(t,e){if(t<13||t>27){window.DEBUG(`Limit hit. Current font size is ${e}`);return}document.documentElement.style.fontSize=t+"px"}})();
