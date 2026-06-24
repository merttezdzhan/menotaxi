const translations = {
    nl: {
        nav_home: "Home",
        nav_services: "Diensten",
        nav_prices: "Tarieven",
        nav_contact: "Contact",
        hero_title: "Betrouwbaar. Snel. Premium.",
        hero_subtitle: "Uw vertrouwde taxi service in en rond Utrecht.",
        hero_button: "Boek via WhatsApp",
        services_title: "Onze Diensten",
        services_subtitle: "Wat wij u kunnen bieden",
        service_airport: "Luchthaven Vervoer",
        service_airport_desc: "Comfortabel en op tijd naar Schiphol en andere luchthavens. Wij zorgen voor een ontspannen begin of einde van uw reis met onze betrouwbare chauffeurs en ruime voertuigen.",
        service_business: "Zakelijk Vervoer",
        service_business_desc: "Stijlvol vervoer voor uw zakelijke afspraken. Onze professionele chauffeurs garanderen discretie, stiptheid en een representatieve uitstraling, zodat u onderweg kunt doorwerken of ontspannen.",
        service_regular: "Reguliere Ritten",
        service_regular_desc: "Veilig en betrouwbaar vervoer binnen en buiten Utrecht. Of het nu gaat om een rit naar het station, een avondje uit, of familiebezoek, wij staan 24/7 voor u klaar met schone en comfortabele taxi's.",
        prices_title: "Vaste Prijzen",
        prices_subtitle: "Transparante tarieven voor populaire bestemmingen (Max 4 personen)",
        contact_title: "Neem Contact Op",
        footer_rights: "Alle rechten voorbehouden."
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_prices: "Rates",
        nav_contact: "Contact",
        hero_title: "Reliable. Fast. Premium.",
        hero_subtitle: "Your trusted taxi service in and around Utrecht.",
        hero_button: "Book via WhatsApp",
        services_title: "Our Services",
        services_subtitle: "What we can offer you",
        service_airport: "Airport Transfer",
        service_airport_desc: "Comfortable and on time to Schiphol and other airports. We ensure a relaxing start or end to your journey with our reliable drivers and spacious vehicles.",
        service_business: "Business Transport",
        service_business_desc: "Stylish transport for your business appointments. Our professional drivers guarantee discretion, punctuality, and a representative appearance, allowing you to work or relax on the go.",
        service_regular: "Regular Rides",
        service_regular_desc: "Safe and reliable transport inside and outside Utrecht. Whether it's a ride to the station, a night out, or a family visit, we are ready for you 24/7 with clean and comfortable taxis.",
        prices_title: "Fixed Prices",
        prices_subtitle: "Transparent rates for popular destinations (Max 4 persons)",
        contact_title: "Contact Us",
        footer_rights: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtnNl = document.getElementById('lang-nl');
    const langBtnEn = document.getElementById('lang-en');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        if (lang === 'nl') {
            langBtnNl.classList.add('active');
            langBtnEn.classList.remove('active');
            document.documentElement.lang = 'nl';
        } else {
            langBtnEn.classList.add('active');
            langBtnNl.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    }

    langBtnNl.addEventListener('click', () => setLanguage('nl'));
    langBtnEn.addEventListener('click', () => setLanguage('en'));
});
