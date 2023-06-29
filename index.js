const div = document.getElementById("en");

function cardsItemsLarge(items){
    items.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHtml = `<div class="card" style="max-width: 540px;">
                        <div class="row">
                        <div class="col img">
                            <img src="${item.img}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col text">
                            <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-desc">${item.description}</p>
                            <p class="card-price"><small class="text-body-secondary">AR$${item.price}</small></p>
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
        card.innerHtml =`
                        <div class="card" style="width: 18rem;">
                            <img src="${item.img}" class="card-img-top" id="${item.id}" alt="150px">
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
                const prod = event.target.id;
                cardsItemsLarge(prod);
            });
        }; 
    };
};

cardItemsSmall(items);
cardFocus();