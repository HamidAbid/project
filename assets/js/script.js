/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */
'use strict';
{  const header = document.querySelector("nav");
 

  window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
  header.classList.add("active");

  } else {  
  header.classList.remove("active");
  }
  })}








