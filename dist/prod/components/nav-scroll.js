"use strict";(()=>{var r=".nav_component",n="is-scrolled",e=document.querySelector('[data-el="nav-scroll-pos"]'),o=document.querySelector(r);function t(){if(!e||!o){window.DEBUG("scroll position element or nav not found"),window.DEBUG({scrollPosEl:e},{navEl:o});return}window.DEBUG("scrollHandler"),new IntersectionObserver(l=>{l[0].isIntersecting?o.classList.remove(n):o.classList.add(n)},{root:null,threshold:0}).observe(e)}})();