/* 위로 올릴 텍스트 */
const infoTarget = document.querySelector(".info-text-r");
const targetText = infoTarget.querySelector("p");

/* 헤더 높이 계산하여 nav 색깔 변화*/
const header = document.querySelector(".header");
const headerHeight = parseFloat(window.getComputedStyle(header).height);
const headerNav = document.querySelector(".header__nav");

window.addEventListener("scroll", function () {
  /* 스크롤 시 글자 나타나기 효과 */
  const infoRect = infoTarget.getBoundingClientRect();
  if (infoRect.top < window.innerHeight) {
    setTimeout(() => {
      targetText.classList.remove("active");
    }, 1000);
  } else {
    targetText.classList.add("active");
  }

  /* 스크롤 시 body 색깔 바꾸기 */
  /* skills 높이 계산하여 body 색깔 변화 */
  const skills = document.querySelector(".content__skill");
  const skillsRect = skills.getBoundingClientRect();
  if (skillsRect.top < 300) {
    document.body.classList.add("white-theme");
    headerNav.classList.remove("active");
  } else {
    document.body.classList.remove("white-theme");
    /* 스크롤 시 헤더 색깔 바꾸꾸기 */
    if (headerHeight < window.scrollY) {
      headerNav.classList.add("active");
    } else {
      headerNav.classList.remove("active");
    }
  }
});
