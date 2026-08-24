// 모바일 메뉴 열기와 닫기
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".head nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");
    });
}

// 짧은 안내 메시지 표시
function showMessage(message) {
    const oldMessage = document.querySelector(".toast");

    if (oldMessage) {
        oldMessage.remove();
    }

    const messageBox = document.createElement("div");
    messageBox.className = "toast";
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    setTimeout(function () {
        messageBox.remove();
    }, 2200);
}

// 목표 설정 폼
const goalForm = document.querySelector("[data-goal-form]");

if (goalForm) {
    goalForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showMessage("식단 목표를 확인했어요.");
    });
}

const skipButton = document.querySelector("[data-skip]");

if (skipButton) {
    skipButton.addEventListener("click", function () {
        window.location.href = "../subpage2/index.html";
    });
}

// 아침, 점심, 저녁, 간식 버튼 선택
const mealButtons = document.querySelectorAll(".chips button");

mealButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        mealButtons.forEach(function (item) {
            item.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

// 선택한 식사 사진 미리 보기
const photoInput = document.querySelector("[data-photo]");

if (photoInput) {
    photoInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const preview = document.querySelector("[data-preview]");
        const uploadText = document.querySelector("[data-upload-text]");

        preview.src = URL.createObjectURL(file);
        preview.classList.remove("hidden");
        uploadText.classList.add("hidden");
        showMessage("사진을 불러왔어요.");
    });
}

// 음식 중량에 따라 예상 칼로리 다시 계산
function updateTotal() {
    let totalGrams = 0;
    let totalCalories = 0;
    const foodInputs = document.querySelectorAll("[data-grams]");

    foodInputs.forEach(function (input) {
        const grams = Number(input.value) || 0;
        const calorieRate = Number(input.dataset.rate);
        const calories = Math.round(grams * calorieRate);
        const foodItem = input.closest(".food");

        totalGrams += grams;
        totalCalories += calories;
        foodItem.querySelector("[data-kcal]").textContent = calories + "kcal";
    });

    const gramResult = document.querySelector("[data-total-g]");
    const calorieResult = document.querySelector("[data-total-kcal]");

    if (gramResult && calorieResult) {
        gramResult.textContent = totalGrams;
        calorieResult.textContent = totalCalories;
    }
}

const foodInputs = document.querySelectorAll("[data-grams]");

foodInputs.forEach(function (input) {
    input.addEventListener("input", updateTotal);
});

const addFoodButton = document.querySelector("[data-add-food]");

if (addFoodButton) {
    addFoodButton.addEventListener("click", function () {
        showMessage("음식 직접 입력 기능은 준비 중입니다.");
    });
}

// 균형 제안에서 한 가지 방법 선택
const tipButtons = document.querySelectorAll("[data-tip]");

tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tipButtons.forEach(function (item) {
            item.textContent = "이 방법 선택";
        });

        button.textContent = "선택됨 ✓";
        showMessage("실천 방법을 선택했어요.");
    });
});
