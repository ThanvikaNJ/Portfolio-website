const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
document.querySelectorAll("a,button,.world-card").forEach(el=>{
  el.addEventListener("mouseenter",()=>{cursor.style.width="32px";cursor.style.height="32px"});
  el.addEventListener("mouseleave",()=>{cursor.style.width="12px";cursor.style.height="12px"});
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".world-card,.project,.play-card,.life-layout,.contact h2").forEach(el=>{el.classList.add("reveal");observer.observe(el)});

document.querySelectorAll(".world-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const target=card.dataset.target;
    const match=document.querySelector(`.project[data-category="${target}"]`);
    if(match) match.scrollIntoView({behavior:"smooth",block:"center"});
  });
});

window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  document.querySelectorAll(".hero-orbit").forEach((el,i)=>el.style.transform=`translateY(${y*(i?0.06:0.12)}px) rotate(${y*.02*(i? -1:1)}deg)`);
});
