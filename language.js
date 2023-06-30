window.currentLanguage = 'en';

function loadLanguageData(loadItemsCallback) {
  // Load language-specific data based on the currentLanguage

  let translations = {
    en: {
      subtitle: 'Cosplay & clothing Workshop',
      description: 'I realize dreams',
      stock: 'Items in stock',
    },
    es: {
      subtitle: 'Taller de cosplays & ropa',
      description: 'Yo cumplo sueños',
      stock: 'Items en stock',
    },
  };

  // Retrieve selected language from local storage
  const selectedLanguage = localStorage.getItem('selectedLanguage');

  // Set current language to selected language if it exists, otherwise default to 'en'
  currentLanguage = selectedLanguage ? selectedLanguage : 'en';

  // Apply translations to HTML elements
  document.getElementById('subtitle').innerText = translations[currentLanguage].subtitle;
  document.getElementById('description').innerText = translations[currentLanguage].description;
  document.getElementById('stock').innerText = translations[currentLanguage].stock;

  // Load items based on the current language
  if (currentLanguage === 'en') {
    loadItems(items);
  } else if (currentLanguage === 'es') {
    loadItems(itemsEs);
  }
  if (typeof loadItemsCallback === 'function') {
  loadItemsCallback();
  }
}

function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('selectedLanguage', language);
  loadLanguageData();
}

// Initial data load
