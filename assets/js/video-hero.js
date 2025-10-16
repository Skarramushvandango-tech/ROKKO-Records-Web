// Hero video sound toggle
const hv = $(".hero-video");
if (hv) {
  const video = $("video", hv);
  const btn = $(".sound-toggle", hv);
  if (video && btn) {
    btn.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        video.volume = 1.0;
        btn.textContent = "Sound: On";
        video.play().catch(()=>{});
      } else {
        video.muted = true;
        btn.textContent = "Sound: Off";
      }
    });
    // Initial label
    btn.textContent = "Sound: Off";
  }
}
