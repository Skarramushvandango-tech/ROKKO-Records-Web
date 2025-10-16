// Simple one-at-a-time audio player
let activeAudio = null;
let progressTimer = null;

function fmt(t){ if(!isFinite(t)) return "0:00"; const m=Math.floor(t/60), s=String(Math.floor(t%60)).padStart(2,"0"); return `${m}:${s}`; }

$$(".player").forEach(wrap => {
  const btn = $(".play", wrap);
  const bar = $("progress", wrap);
  const time = $(".time", wrap);
  const src = wrap.dataset.src;
  const audio = new Audio(src);
  audio.preload = "none";

  btn.addEventListener("click", () => {
    if (activeAudio && activeAudio !== audio) {
      activeAudio.pause();
      if (activeAudio._btn) activeAudio._btn.textContent = "Play";
      clearInterval(progressTimer);
    }
    if (audio.paused) {
      audio.play().catch(()=>{});
      btn.textContent = "Pause";
      activeAudio = audio; activeAudio._btn = btn;
      progressTimer = setInterval(() => {
        bar.max = audio.duration || 0;
        bar.value = audio.currentTime;
        time.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
      }, 200);
    } else {
      audio.pause();
      btn.textContent = "Play";
      clearInterval(progressTimer);
    }
  });

  audio.addEventListener("ended", () => { btn.textContent="Play"; clearInterval(progressTimer); });
  bar.addEventListener("click", (e) => {
    const r = bar.getBoundingClientRect();
    const ratio = (e.clientX - r.left) / r.width;
    audio.currentTime = ratio * (audio.duration || 0);
  });
});
