const btns = document.querySelectorAll(".portfolio__info button");
console.log(btns);

btns.forEach((button) => {
  button.addEventListener("click", () => {
    return `
<div class="detail-container">
      <h1>TROUBLE</h1>
      <h6>
        TROUBLE é uma loja fictícia de roupas que tem como principal
        característica o estilo alternativo e colorido.
      </h6>
      <div class="phone-mockups">
        <img src="../assets/trouble 2.png" alt="" />
        <img src="../assets/trouble 3.png" alt="" />
        <img src="../assets/trouble 4.png" alt="" />
      </div>
    </div>
`;
  });
});
