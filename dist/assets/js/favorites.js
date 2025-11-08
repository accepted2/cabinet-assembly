document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card__like-button");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const productId = button.dataset.productId;


      if (!productId) {
        console.error("❌ Не указан data-js-product-id у кнопки");
        return;
      }

      try {
        const response = await fetch(`/favorites/toggle/${productId}/`, {
          method: "POST",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
          },
        });

        if (!response.ok) throw new Error("Ошибка сети");

        const data = await response.json();

        if (data.status === "added") {
          button.classList.add("is-liked");
        } else if (data.status === "removed") {
          button.classList.remove("is-liked");
        }
      } catch (err) {
        console.error("❌ Ошибка при добавлении в избранные", err);
      }
    });
  });
});

// Получаем CSRF токен из cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}