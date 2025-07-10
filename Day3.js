const submitBtn = document.getElementById("submitBtn");
    const inputField = document.getElementById("userInput");
    const displayArea = document.getElementById("displayArea");

    submitBtn.addEventListener("click", function () {
      const inputValue = inputField.value;
      displayArea.textContent = inputValue || "Nothing entered!";
    });
