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
                },
                es: {
                    subtitle: 'Taller de cosplays & ropa',
                    description: 'Yo cumplo sueños',
                }
            };
            
            // Apply translations to HTML elements
            document.getElementById('subtitle').innerText = translations[currentLanguage].subtitle;
            document.getElementById('description').innerText = translations[currentLanguage].description;
        }
        
        // Initial data load
        loadLanguageData();
