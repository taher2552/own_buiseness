const otpInputs = document.querySelectorAll(".mob_otp_input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (event.target.value.length === 1) {
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      } else {
        // Last input reached
        // You can trigger verification or other actions here
      }
    } else if (event.target.value.length === 0 && index > 0) {
      // If the user deletes the value, move focus to the previous input
      otpInputs[index - 1].focus();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (
      event.key === "Backspace" &&
      event.target.value.length === 0 &&
      index > 0
    ) {
      // If the backspace key is pressed in an empty input, move focus to the previous input
      otpInputs[index - 1].focus();
    }
  });
});

document.querySelectorAll(".mob_otp_input").forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.target.value.length >= 1) {
      e.preventDefault();
    }
  });
});
