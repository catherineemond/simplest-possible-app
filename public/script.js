window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputField = document.getElementById("todo");
  const list = document.getElementById("todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = { todo: inputField.value };

    fetch("/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((data) => {
        const item = document.createElement("li");
        item.innerHTML = data.todo;
        list.append(item);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
