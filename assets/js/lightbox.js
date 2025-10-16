// YouTube lightbox (no external libs)
const lb = document.createElement('div');
lb.className = 'lightbox-backdrop';
lb.innerHTML = `<div class="lightbox-content"><button class="lightbox-close" type="button">Close</button><div id="lb-slot"></div></div>`;
document.body.appendChild(lb);
const lbSlot = $("#lb-slot", lb);
$(".lightbox-close", lb).addEventListener("click", () => closeLB());
lb.addEventListener("click", (e)=>{ if(e.target===lb) closeLB(); });

function openLB(ytId){
  lb.classList.add("open");
  lbSlot.innerHTML = `<iframe width="100%" height="540" src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function closeLB(){
  lb.classList.remove("open");
  lbSlot.innerHTML = "";
}

$$("[data-youtube]").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const id = thumb.dataset.youtube;
    if (id) openLB(id);
  });
});
