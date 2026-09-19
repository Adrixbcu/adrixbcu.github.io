document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".menu-toggle").forEach(function(btn){
    btn.addEventListener("click",function(e){
      e.stopPropagation();
      const wrap=btn.closest(".menu-wrap");
      wrap.classList.toggle("open");
      const menu=wrap.querySelector(".dropdown-menu");
      menu.style.display=wrap.classList.contains("open")?"block":"";
    });
  });
  document.addEventListener("click",function(){
    document.querySelectorAll(".menu-wrap.open").forEach(function(w){
      w.classList.remove("open");
      const m=w.querySelector(".dropdown-menu");
      if(m)m.style.display="";
    });
  });
});