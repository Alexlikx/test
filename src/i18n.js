import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        EN: 'EN',
                        headerLink1: 'About me',
                        headerLink2: 'Services',
                        headerLink3: 'Blog',
                        headerLink4: 'Contacts',
                        spec: 'Financial Analyst',
                        aboutSubtitle2: 'I am keen on international development and global politics.',
                        aboutSubtitle: 'A Financial Analyst with  strong expertise in corporate finance with 3+ years experience in M&A. Currently working in real estate development. Moreover, I have a passion for macroeconomic events and strategies.Actively interested in equity research, stock market, business, entrepreneurship, corporate investments, and cryptocurrencies.Actively investing in equities, cryptocurrencies and blockchain projects.',
                        services: 'Services',
                        service1: 'Corporate Finance',
                        service2: 'Investments',
                        service3: 'Real Estate',
                        service4: 'Market Analytics',
                        service5: 'Other services',
                        corporateFinance1: 'Business plan preparation & reviews',
                        corporateFinance2: 'Preparing financial models and DCF valuations for private markets',
                        corporateFinance3: 'Preparing financial models and DCF valuations for public and private markets',
                        Investments1: 'Shortlisting of value/growth stocks based on corporate finance knowledge and micro trends',
                        Investments2: 'Investment analysis of real estate sector',
                        Investments3: 'Market research of locations for potential real estate development',
                        Investments4: 'Intensive company research',
                        RealEstate1: "Investment analysis of real estate sector",
                        RealEstate2: "Market research of locations for potential real estate development",
                        RealEstate3: "Project optimisation analysis",
                        RealEstate4: "Feasibility studies  - preparation & evaluation",
                        RealEstate5: "Monitoring of new trends, market research & analysis",

                        MarketAnalytics1: "Shortlisting of value/growth stocks based on corporate finance knowledge and micro trends",
                        MarketAnalytics2: "Preparing financial models and DCF valuations for public and private markets",
                        MarketAnalytics3: "Following international markets, completing intensive company research",
                        FoodServices: "Currently establishing itself in food services market providing cafeteria and buffet services in small size venues",
                        Crypto: "Crypto advisory",
                    }
                }
            },
            sk: {
                translation: {
                    description: {
                        EN: 'SK',
                        headerLink1: 'O mne',
                        headerLink2: 'Slu??by',
                        headerLink3: 'Blog',
                        headerLink4: 'Kontakty',
                        spec: 'Finan??n?? analytik',
                        aboutSubtitle2: 'Zauj??ma ma medzin??rodn?? rozvoj a glob??lna politika.',
                        aboutSubtitle: 'Finan??n?? analytik so siln??mi odborn??mi znalos??ami v oblasti podnikov??ch financi?? s viac ako 3-ro??n??mi sk??senos??ami v oblasti f??zi?? a akviz??ci??. V s????asnosti p??sob??m v oblasti realitn??ho developmentu. Okrem toho m??m v????e?? pre makroekonomick?? udalosti a strat??gie. Akt??vne sa zauj??mam o akciov?? trh, podnikanie, podnikov?? invest??cie. Akt??vne investujem do akci?? a blockchainov??ch projektov.',
                        services: 'Slu??by',
                        service1: 'Podnikov?? financie',
                        service2: 'Invest??cie',
                        service3: 'Blank section',
                        service4: 'Blank section',
                        corporateFinance1: 'Pr??prava a kontrola podnikate??sk??ho pl??nu',
                        corporateFinance2: 'Pr??prava finan??n??ch modelov a oce??ovania DCF pre s??kromn?? trhy',
                        corporateFinance3: 'Pr??prava finan??n??ch modelov a oce??ovania DCF pre verejn?? a s??kromn?? trhy',
                        Investments1: 'U?????? v??ber hodnotov??ch/rastov??ch akci?? na z??klade znalost?? podnikov??ch financi?? a mikro trendov',
                        Investments2: 'Investi??n?? anal??za realitn??ho sektora',
                        Investments3: 'Prieskum trhu lokal??t pre potenci??lny rozvoj nehnute??nost??',
                        Investments4: 'Intenz??vny firemn?? prieskum',
                        RealEstate1: "Investment analysis of real estate sector",
                        RealEstate2: "Market research of locations for potential real estate development",
                        RealEstate3: "Project optimisation analysis",
                        RealEstate4: "Feasibility studies  - preparation & evaluation",
                        RealEstate5: "Monitoring of new trends, market research & analysis",
                        FoodServices: "Currently establishing itself in food services market providing cafeteria and buffet services in small size venues",
                        Crypto: "Krypto poradenstvo",
                    }
                }
            }
        }
    });
export default i18n;