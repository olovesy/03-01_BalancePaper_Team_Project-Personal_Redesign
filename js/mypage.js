const profileForm = document.querySelector("#profile-form");
const resetButton = document.querySelector("#reset-profile");
const saveStatus = document.querySelector("#save-status");
const hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector("header nav");
const loginButton = document.querySelector("[data-auth-open]");
const loginModal = document.querySelector("[data-auth-modal]");
const closeButton = document.querySelector("[data-auth-close]");
const loginForm = document.querySelector("[data-login-form]");

// 모바일 메뉴
hamburgerButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

// 입력 내용 확인
profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nickname = profileForm.elements.name.value || "사용자";
    saveStatus.textContent = nickname + "님의 정보를 확인했어요.";
});

// 입력 내용 초기화
resetButton.addEventListener("click", function () {
    profileForm.reset();
    saveStatus.textContent = "입력된 정보가 없습니다.";
});

// 포트폴리오용 로그인 화면 열기와 닫기
loginButton.addEventListener("click", function () {
    loginModal.classList.remove("hidden");
});

closeButton.addEventListener("click", function () {
    loginModal.classList.add("hidden");
});

loginModal.addEventListener("click", function (event) {
    if (event.target === loginModal) {
        loginModal.classList.add("hidden");
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginModal.classList.add("hidden");
    loginButton.textContent = "로그인 확인";
});
