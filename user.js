function getCookie(name) {
  const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value) {
  const expires = new Date(Date.now() + 3600 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function deleteCookies() {
  ["email", "firstName", "lastName", "birthYear", "gender", "phone", "skype"].forEach(name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  });
}

if (!getCookie("email")) {
  window.location.href = "register.html";
}

window.onload = () => {
  ["firstName", "lastName", "birthYear", "gender", "phone", "skype"].forEach(id => {
    const val = getCookie(id);
    if (val) document.getElementById(id).value = val;
  });
};

document.getElementById("exitBtn").addEventListener("click", () => {
  deleteCookies();
  window.location.href = "register.html";
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const birthYear = parseInt(document.getElementById("birthYear").value);
  const gender = document.getElementById("gender").value;
  const phone = document.getElementById("phone").value.trim();
  const skype = document.getElementById("skype").value.trim();
  const errors = [];

  const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄє]{1,20}$/;
  const phoneDigits = phone.replace(/\D/g, "");

  if (!firstName || !nameRegex.test(firstName)) errors.push("Ім'я: тільки літери, максимум 20.");
  if (!lastName || !nameRegex.test(lastName)) errors.push("Прізвище: тільки літери, максимум 20.");
  if (!birthYear || birthYear < 1900 || birthYear > new Date().getFullYear()) errors.push("Рік народження: від 1900 до поточного.");
  if (!gender) errors.push("Стать обов'язкова.");
  if (phone && (phoneDigits.length < 10 || phoneDigits.length > 12)) errors.push("Телефон: 10-12 цифр.");
  if (skype && !/^[a-zA-Z0-9.-]*$/.test(skype)) errors.push("Skype: тільки літери, цифри, дефіс, крапка.");

  const errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = errors.join("<br>");

  if (errors.length === 0) {
    setCookie("firstName", firstName);
    setCookie("lastName", lastName);
    setCookie("birthYear", birthYear);
    setCookie("gender", gender);
    setCookie("phone", phone);
    setCookie("skype", skype);
    alert("Дані збережено!");
  }
});