/* 로딩 완료 시 로딩 화면 제거 */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loading-screen").style.top = "-100%";
    setTimeout(function () {
      document.querySelector(".loading-screen").style.opacity = "0";
    }, 500);
  }, 5000);
});

/* 로딩창에서 휠 불가능 */
const loadingPage = document.querySelector(".loading-screen");
loadingPage.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);
