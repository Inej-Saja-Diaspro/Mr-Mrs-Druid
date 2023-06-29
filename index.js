const div = document.getElementById("en");

function cardsItemsLarge(items){
    items.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.img}" class="img-fluid rounded-start" alt="${item.name}" style="max-width: 150px;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-desc">${item.description}</p>
                            <p class="card-price"><small class="text-body-secondary">AR$${item.price}</small></p>
                            <button class="back-button">Back<button>
                            </div>
                        </div>
                        </div>
                    </div>`
            div.append(card);
    });
};

function cardItemsSmall(items){
    items.forEach(item => {
    let card = document.createElement("div");
        card.className = "card";
        card.innerHTML =`
                        <div class="card" style="width: 180px; gap: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 10px">
                            <img src="${item.img}" class="card-img-top" id="${item.id}" alt="${item.name}" style="width: 150px;">
                            <div class="card-body">
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>`
        div.append(card);
    });
};

function loadItems(array){
    div.innerHTML = ""
    array.forEach(items => {
        cardItemsSmall(items);
    });
};

let cardFocus = () => {
    const addCards = document.querySelectorAll(".card-img-top");
    if (addCards !== null) {
      for (let card of addCards) {
        card.addEventListener("click", (event) => {
          const clickedImage = event.target;
          const id = clickedImage.id;
          const selectedItem = items.find(item => item.id == id);
          if (selectedItem) {
            div.innerHTML = ""; // Clear the previous cards
            cardsItemsLarge([selectedItem]);
          }
        });
      }
    }
  };

//   function activateBackButton() {
//     const addButtons = document.querySelectorAll(".bacl-button");
//     addButtons.addEventListener("click", (e) => {

//     })
//   }
  

cardItemsSmall(items);
cardFocus();