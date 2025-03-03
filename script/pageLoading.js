const loadingPage = document.querySelector(".loading-screen");

/* 로딩 완료 시 로딩 화면 제거 */
window.addEventListener("load", function () {
  setTimeout(function () {
    loadingPage.style.top = "-100%";
    setTimeout(function () {
      loadingPage.style.opacity = "0";
    }, 500);
  }, 5000);
});

/* 로딩창에서 휠 불가능 */
loadingPage.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);
