function getCookie(name) {
  const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  return match ? match[1] : null;
}

if (getCookie("email")) {
  window.location.href = "user.html";
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errors = [];

  const emailRegex = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!email) errors.push("Email обов'язковий.");
  else if (!emailRegex.test(email)) errors.push("Некоректний email.");

  if (!password) errors.push("Пароль обов'язковий.");
  else if (!passwordRegex.test(password)) errors.push("Пароль має містити 6 символів, літери верхнього і нижнього регістру та цифру.");

  if (!confirmPassword) errors.push("Підтвердження пароля обов'язкове.");
  else if (password !== confirmPassword) errors.push("Паролі не збігаються.");

  const errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = errors.join("<br>");

  if (errors.length === 0) {
    const expires = new Date(Date.now() + 3600 * 1000).toUTCString();
    document.cookie = `email=${email}; expires=${expires}; path=/`;
    window.location.href = "user.html";
  }
});