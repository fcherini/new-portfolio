//select elements
const qualificationText = document.querySelectorAll(".qualification__text");
const qualificationCircles = document.querySelectorAll(
  ".qualification__circle"
);
const qualificationContent = document.querySelector(".qualification__content");
const trabalhoBtn = document.querySelector(".trabalho");
const formacaoBtn = document.querySelector(".formacao");

//button functionality
formacaoBtn.addEventListener("click", () => {
  trabalhoBtn.classList.remove("btn--active");
  formacaoBtn.classList.add("btn--active");
  qualificationContent.innerHTML = `<!-- qualification content 1 -->
          <div class="qualification__data">
            <div class="qualification__text" id="1">
              <h5 class="qualification__title" id="1">DESIGN <br />GRÁFICO</h5>
              <div class="qualification__type" id="1">Bachalerado</div>
              <div class="qualification__place" id="1">UNINTER</div>
              <div class="qualification__year" id="1">2021 - Atual</div>
            </div>
            <div>
              <span
                class="qualification__circle qualification__circle--active"
                id="1"
              ></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <!-- qualification content 2 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__circle" id="2"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__text" id="2">
              <h5 class="qualification__title" id="2">
                WEB & MOBILE <br />DESIGN
              </h5>
              <div class="qualification__type" id="2">Curso</div>
              <div class="qualification__place" id="2">UDEMY</div>
              <div class="qualification__year" id="2">2021</div>
            </div>
          </div>
          <!-- qualification content 3 -->
          <div class="qualification__data">
            <div class="qualification__text" id="3">
              <h5 class="qualification__title" id="3">WEB <br />DEVELOPER</h5>
              <div class="qualification__type" id="3">Curso</div>
              <div class="qualification__place" id="3">UDEMY</div>
              <div class="qualification__year" id="3">2021</div>
            </div>
            <div>
              <span class="qualification__circle" id="3"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <!-- qualification content 4 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__circle" id="4"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__text" id="4">
              <h5 class="qualification__title" id="4">JAVASCRIPT</h5>
              <div class="qualification__type" id="4">Curso</div>
              <div class="qualification__place" id="4">UDEMY</div>
              <div class="qualification__year" id="4">2021</div>
            </div>
          </div>
          <!-- qualification content 5 -->
          <div class="qualification__data">
            <div class="qualification__text" id="5">
              <h5 class="qualification__title" id="5">REACT.JS</h5>
              <div class="qualification__type" id="5">Curso</div>
              <div class="qualification__place" id="5">UDEMY</div>
              <div class="qualification__year" id="5">2021 - Atual</div>
            </div>
            <div>
              <span class="qualification__circle" id="5"></span>
            </div>
          </div>`;
});

//trabalho btn
trabalhoBtn.addEventListener("click", () => {
  formacaoBtn.classList.remove("btn--active");
  trabalhoBtn.classList.add("btn--active");
  qualificationContent.innerHTML = `<!-- qualification content 1 -->
          <div class="qualification__data">
            <div class="qualification__text" id="1">
              <h5 class="qualification__title" id="1">WEB DEVELOPER</h5>
              <div class="qualification__type" id="1">Freelance</div>
              <div class="qualification__place" id="1">Brasil</div>
              <div class="qualification__year" id="1">2021-Atual</div>
            </div>
            <div>
              <span
                class="qualification__circle qualification__circle--active"
                id="1"
              ></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <!-- qualification content 2 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__circle" id="2"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__text" id="2">
              <h5 class="qualification__title" id="2">WEB DESIGNER</h5>
              <div class="qualification__type" id="2">Freelance</div>
              <div class="qualification__place" id="2">Brasil</div>
              <div class="qualification__year" id="2">2020-Atual</div>
            </div>
          </div>
          <!-- qualification content 3 -->
          <div class="qualification__data">
            <div class="qualification__text" id="3">
              <h5 class="qualification__title" id="3">DESIGNER GRÁFICO</h5>
              <div class="qualification__type" id="3">FCJ REFUGEE CENTER</div>
              <div class="qualification__place" id="3">Canadá [voluntário]</div>
              <div class="qualification__year" id="3">2019</div>
            </div>
            <div>
              <span class="qualification__circle" id="3"></span>
            </div>
          </div>`;
});

//hover functionality
qualificationText.forEach((text) => {
  text.addEventListener("mouseover", function (e) {
    //remove active class from all circles
    qualificationCircles.forEach((eachCircle) => {
      eachCircle.classList.remove("qualification__circle--active");
    });
    //add active class only to one item
    const currentId = e.target.id;
    Array.from(qualificationCircles).filter((circle) => {
      if (currentId === circle.id) {
        circle.classList.add("qualification__circle--active");
      }
    });
  });
});
