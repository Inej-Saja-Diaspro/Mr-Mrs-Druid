var currentLanguage = 'en';
        
        function changeLanguage(language) {
            currentLanguage = language;
            loadLanguageData();
        }
        
        function loadLanguageData() {
            // Load language-specific data based on the currentLanguage
            
            var translations = {
                en: {
                    subtitle: 'Cosplay & clothing Workshop',
                    description: 'I realize dreams',
                    stock: 'Items in stock',
                },
                es: {
                    subtitle: 'Taller de cosplays & ropa',
                    description: 'Yo cumplo sueños',
                    stock: 'Items en stock',
                }
            };
            
            // Apply translations to HTML elements
            document.getElementById('subtitle').innerText = translations[currentLanguage].subtitle;
            document.getElementById('description').innerText = translations[currentLanguage].description;
            document.getElementById('stock').innerText = translations[currentLanguage].stock;
        }
        
        // Initial data load
        loadLanguageData();
