//This is a cool and easy way to read local files
let s = document.querySelector(".bikes");

// console.log(eval(s.dataset.val));

// let data = eval(s.dataset.val).then(response => console.log(response.json()));

let data = eval(s.dataset.val).then(response =>
  response.json().then(jsn => dataJSON(jsn))
);

function createBikes(cl) {
  let html = `
     <div class="bike">
        <img src="${cl.image}" alt="bike 1" class="bike__img" />
        <svg class="bike__like">
          <use xlink:href="./img/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="bike__name">${cl.name}</h5>
        <div class="bike__type">
          <div class="bike__type-name">Type :</div>
          <p class="bike__type-item">${cl.product_type}</p>
        </div>

        <div class="bike__price">
          <div class="bike__price-name">Price:</div>
          <p class="bike__price-value">${cl.price}</p>
        </div>

        <a href="#popup" class="btn bike__btn">BOOK NOW</a>
      </div>
    
    `;
  s.insertAdjacentHTML("beforeend", html);
}

function dataJSON(jsn) {
  let txt = jsn.products;
  txt.forEach(function(cl) {
    createBikes(cl);
  });
}
