const video = document.getElementsByTagName("video");

for (let i = 0; i < video.length; i++) {
  video[i].addEventListener("mouseenter", () => {
    video[i].play();
  });

  video[i].addEventListener("mouseleave", () => {
    video[i].pause();
    video[i].currentTime = 0;
  });
}
