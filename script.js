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
        service_airport_long: "Bij Meno Taxi begrijpen we dat uw reis begint op het moment dat u de voordeur uitstapt. Daarom bieden wij een stressvrije, comfortabele en betrouwbare luchthavenservice. Onze ervaren chauffeurs houden de verkeersinformatie en vluchttijden nauwlettend in de gaten, zodat u altijd op tijd op de luchthaven arriveert. Wij verzorgen ritten naar Schiphol, Rotterdam Airport, Eindhoven Airport en diverse internationale luchthavens zoals Düsseldorf en Zaventem. U hoeft zich geen zorgen te maken over parkeerkosten of het sjouwen met zware koffers; wij helpen u graag met uw bagage en brengen u tot aan de vertrekhal.",
        service_business: "Zakelijk Vervoer",
        service_business_desc: "Stijlvol vervoer voor uw zakelijke afspraken. Onze professionele chauffeurs garanderen discretie, stiptheid en een representatieve uitstraling, zodat u onderweg kunt doorwerken of ontspannen.",
        service_business_long: "Voor onze zakelijke klanten bieden wij een premium vervoerservaring die perfect aansluit bij uw professionele behoeften. Onze chauffeurs zijn discreet, representatief en uiterst punctueel. In onze comfortabele en schone voertuigen kunt u ongestoord werken, belangrijke telefoontjes plegen of simpelweg ontspannen tussen uw afspraken door. Wij bieden flexibele oplossingen voor directievervoer, het ophalen van uw zakelijke gasten en vervoer naar evenementen of congressen. Met Meno Taxi bent u verzekerd van een representatieve aankomst, elke keer weer.",
        service_regular: "Reguliere Ritten",
        service_regular_desc: "Veilig en betrouwbaar vervoer binnen en buiten Utrecht. Of het nu gaat om een rit naar het station, een avondje uit, of familiebezoek, wij staan 24/7 voor u klaar met schone en comfortabele taxi's.",
        service_regular_long: "Of u nu een avondje uit gaat in het centrum van Utrecht, een belangrijke doktersafspraak heeft of op familiebezoek gaat, Meno Taxi staat 24/7 voor u klaar. Onze reguliere taxidiensten zijn gericht op veiligheid, comfort en betrouwbaarheid. Onze chauffeurs kennen de regio Utrecht als hun broekzak en brengen u via de snelste en veilige route naar uw bestemming. We hanteren transparante meter tarieven en vaste prijzen voor bekende routes, zodat u nooit voor verrassingen komt te staan. Stap in en geniet van een zorgeloze rit.",
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
        service_airport_long: "At Meno Taxi, we understand that your journey begins the moment you step out the front door. That is why we offer a stress-free, comfortable, and reliable airport service. Our experienced drivers closely monitor traffic information and flight times, ensuring you always arrive at the airport on time. We provide rides to Schiphol, Rotterdam Airport, Eindhoven Airport, and various international airports such as Düsseldorf and Zaventem. You don't have to worry about parking costs or lugging heavy suitcases; we are happy to help with your luggage and take you right to the departure hall.",
        service_business: "Business Transport",
        service_business_desc: "Stylish transport for your business appointments. Our professional drivers guarantee discretion, punctuality, and a representative appearance, allowing you to work or relax on the go.",
        service_business_long: "For our corporate clients, we offer a premium transport experience that perfectly matches your professional needs. Our drivers are discreet, presentable, and extremely punctual. In our comfortable and clean vehicles, you can work undisturbed, make important phone calls, or simply relax between appointments. We offer flexible solutions for executive transport, picking up your business guests, and transport to events or conferences. With Meno Taxi, you are guaranteed a representative arrival, every time.",
        service_regular: "Regular Rides",
        service_regular_desc: "Safe and reliable transport inside and outside Utrecht. Whether it's a ride to the station, a night out, or a family visit, we are ready for you 24/7 with clean and comfortable taxis.",
        service_regular_long: "Whether you are going out for a night in the center of Utrecht, have an important doctor's appointment, or are visiting family, Meno Taxi is ready for you 24/7. Our regular taxi services are focused on safety, comfort, and reliability. Our drivers know the Utrecht region like the back of their hand and will take you to your destination via the fastest and safest route. We use transparent meter rates and fixed prices for well-known routes, so you never face any surprises. Get in and enjoy a carefree ride.",
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
    let currentLang = 'nl';

    function setLanguage(lang) {
        currentLang = lang;
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

    // Modal Logic
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            if (serviceType) {
                const titleKey = `service_${serviceType}`;
                const bodyKey = `service_${serviceType}_long`;
                
                modalTitle.innerText = translations[currentLang][titleKey];
                modalBody.innerText = translations[currentLang][bodyKey];
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
