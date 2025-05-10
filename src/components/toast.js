// src/components/toast.js

export function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("visible");
  }, 100); // allow DOM to attach

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
