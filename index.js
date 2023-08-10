const div = document.getElementById("en");

function cardsItemsLarge(items) {
    items.forEach(item => {
      let card = document.createElement("div");
      card.className = "card";
  
      const itemName = currentLanguage === 'en' ? item.name : item.nameEs;
      const itemDescription = currentLanguage === 'en' ? item.description : item.descriptionEs;
  
      console.log("itemName:", itemName);
      console.log("itemDescription:", itemDescription);
  
      card.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
          <table>
            <tr>
              <td>
                <img src="${item.img}" class="img-fluid rounded-start" alt="${itemName}" style="max-width: 150px;">
              </td>
              <td>
                <h5 class="card-title">${itemName}</h5>
                <p class="card-desc">${itemDescription}</p>
                <p class="card-price"><small class="text-body-secondary">AR$${item.price}</small></p>
              </td>
            </tr>
            </table>
            <table>
            <tr>
              <td>
                <img src="${item.img2}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img3}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img4}" style="max-width: 200px;">
              </td>
            </tr>
            <tr>
              <td>
                <img src="${item.img5}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img6}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img7}" style="max-width: 200px;">
              </td>
            </tr>
            <tr>
              <td>
                <img src="${item.img8}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img9}" style="max-width: 200px;">
              </td>
              <td>
                <img src="${item.img10}" style="max-width: 200px;">
              </td>
            </tr>
            <tfoot> 
              <tr>  
                <td></td> 
                <td>
                  <a href="index.html">Back</a>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      `;
      div.append(card);
    });
  }
  

function cardItemsSmall(items) {
  items.forEach(item => {
    let card = document.createElement("div");
    card.className = "card";

    const itemName = currentLanguage === 'en' ? item.name : item.nameEs;
    const itemDescription = currentLanguage === 'en' ? item.description : item.descriptionEs;

    card.innerHTML = `
      <div class="card" style="width: 180px; gap: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 10px">
        <img src="${item.img}" class="card-img-top" id="${item.id}" alt="${itemName}" style="width: 150px;">
        <div class="card-body">
          <p class="card-text">${itemDescription}</p>
        </div>
      </div>
    `;

    div.append(card);
  });
};

function loadItems() {
  div.innerHTML = "";
  const itemsArray = currentLanguage === 'en' ? items : itemsEs;
  cardItemsSmall(itemsArray);
  cardFocus();
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

loadLanguageData(() => loadItems());