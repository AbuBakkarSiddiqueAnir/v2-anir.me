const n=document.querySelector("body");n.addEventListener("mousemove",e=>{const l=e.clientX,a=e.clientY;n.style.setProperty("--centerX",`${l}px`),n.style.setProperty("--centerY",`${a}px`)});const s=document.getElementById("navbar"),t=document.getElementById("nav-links-cotainer");let o=150;window.addEventListener("scroll",()=>{const e=window.scrollY;e>o?s.classList.add("nav-shadow"):s.classList.remove("nav-shadow"),e>o+100?(s.classList.remove("scroll-upward"),s.classList.add("scroll-downward"),t.classList.remove("s-f-nav"),t.classList.add("b-f-nav")):(s.classList.remove("scroll-downward"),s.classList.add("scroll-upward"),t.classList.remove("b-f-nav"),t.classList.add("s-f-nav"))});
