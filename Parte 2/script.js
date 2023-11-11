const ticketContainers = document.querySelectorAll(".ticket-container");

ticketContainers.forEach((ticketContainer) => {
  ticketContainer.addEventListener("click", () => {
    const ticket = ticketContainer.querySelector(".ticket");
    const title = ticket.querySelector("h2").textContent;
    const discount = ticket.querySelector("p").textContent;

    // Mostrar el formulario de compra de boletos
    const form = document.querySelector(".form");
    form.querySelector(".title").value = title;
    form.querySelector(".discount").value = discount;
    form.style.display = "block";
  });
});