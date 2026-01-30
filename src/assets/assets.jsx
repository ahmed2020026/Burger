import logo_image from './logo.webp'
import hero_image from './hero.webp'
import Average_image from './Average.webp'
import cooked_image from './cooked.webp'
import Light from './lightbulb.png'
import burger_1 from './burger1.jpg';
import burger_2 from './burger2.jpg';
import burger_3 from './burger3.jpg';
import burger_4 from './burger4.jpg';
import burger_5 from './burger5.jpg';
import burger_6 from './burger6.jpg';
import burger_7 from './burger7.jpg';
import burger_8 from './burger8.jpg';
import burger_9 from './burger9.jpg';
import burger_10 from './burger10.jpg';
import burger_11 from './burger11.jpg';
import burger_12 from './burger12.jpg';
import burger_13 from './burger13.jpg';
import burger_14 from './burger14.jpg';
import burger_15 from './burger15.jpg';
import burger_16 from './burger16.jpg';
import burger_17 from './burger17.jpg';
import burger_18 from './burger18.jpg';
import burger_19 from './burger19.jpg';

import Hero_1 from './hero (1).jfif'
import Hero_video from './hero (1).mp4';
import Hero_2 from './hero (2).jfif'
import Hero_3 from './hero (3).jfif'
import Hero_4 from './hero (4).jfif'
import Hero_5 from './hero (5).jfif'

export const assets = {
    logo_image, hero_image, Average_image, cooked_image, Light, Hero_1, Hero_2, Hero_3, Hero_4, Hero_5, Hero_video
}

export const LinksRoute = [
    { text: "Home", route: '' },
    { text: "About", route: 'about' },
    { text: "Menu", route: 'menu' },
    { text: "Features", route: 'feature' },
]
export const Features = [
    {
        icon: '🍔', head: 'Fresh Ingredients', content: '100% fresh meat and daily baked buns.'
    }, {
        icon: '🔥', head: 'Perfect Grilling', content: 'Cooked to perfection by our expert chefs.'
    }, {
        icon: '🚀', head: 'Fast Delivery', content: 'Hot and fresh at your door in no time.'
    }, {
        icon: '💰', head: 'Best Price', content: 'Premium quality at affordable prices.'
    }
]

export const Burgers = [
    {
        id: 1,
        name: "Silver Beach",
        description: 'CLASSIC: Briossisämpylä, paahdettu jalapenomajoneesi, pikkelöity punasipuli, 100 % suomalainen naudanlihapihvi, cheddarjuusto, amerikansalaatti, ketsuppi<br>SMASH: Sämpylä, paahdettu jalapenomajoneesi, pikkelöity punasipuli, kaksi 100 % suomalaisesta naudanlihasta valmistettua smash -pihviä, amerikanjuusto, amerikansalaatti, ketsuppi',
        price: '13,90 €',
        image: burger_1,
    },
    {
        id: 2,
        name: "Mill Basin",
        description: "Sämpylä, tryffelimajoneesi, rucola,  100 % suomalainen naudanlihapihvi, emmentaljuusto, karamellisoitu sipuliherkkusienipaistos, dijon-sinappi",
        price: '13,50 €',
        image: burger_2,
    },
    {
        id: 3,
        name: "Bronx",
        description: 'Briossisämpylä, Bronx-majoneesi, pikkelöity punasipuli, cheddarjuusto, ketsuppi, pihvi valintasi mukaan (saatavana vegaanisena)  (saatavana gluteenittomalla sämpylällä).<br>Jugi maalasi graffitia meidän ekan ravintolan seinään. Testailtiin samalla eri makuja ja iskettiin kiinni tähän tosi simppeliin, perinteitä kunnioittavaan burgeriin. Se oli siinä. Katottiin sitä graffitia seinällä ja tiedettiin heti, että mikä tälle rehelliselle burgerille tullaan laittamaan nimeksi. Bronx.',
        price: '11,90 €',
        image: burger_3,
    },
    {
        id: 4,
        name: "Brooklyn Habanero",
        description: 'Briossisämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, pihvitomaatti, cheddarjuusto, habaneroketsuppi, pihvi valintasi mukaan (tulinen) (saatavana vegaanisena) (saatavana gluteenittomalla sämpylällä) .<br>”Halusimme rakentaa meidän ensimmäiselle menulle niin tiukan burgerin, että kylillä kohistaan. Syntyi Brooklyn Habanero, jota on sittemmin modattu muutamaankin otteeseen entistä tiukemmaksi. Vaikka alun perin Brooklyn olikin vain vegaanisena listalla, se tämän päivän Brooklyn Habanero, aito instituutio, löytyy nykyään niin liha- kuin vegeversionakin. Tulinen klassikko taipuu moneksi. Se on sun päätös millä mennään.”',
        price: '13,50 €',
        image: burger_4,
    },
    {
        id: 5,
        name: "Harlem Bacon",
        description: 'Briossisämpylä, pekonimajoneesi, pikkelöity vihreä tomaatti, pekoni, cheddarjuusto, ketsuppi, pihvi valintasi mukaan (saatavana gluteenittomalla sämpylällä).<br>”Harlem sheikkaa pekonista pitävien päiväunissa. Sen tarina alkoi satunnaisena kausiburgerina, mutta sen ronski ja rouhea meininki pisti jengin virsut heti vispaamaan. Pakkohan se oli sitten vakiokalustoon menuussa nostaa. Harlem on rehdin rasvainen ja rakastettu. Aito klassikko.”',
        price: '13,50 €',
        image: burger_5,
    },
    {
        id: 6,
        name: "Wallstreet",
        description: 'Briossisämpylä, Wall Street -majoneesi, pikkelöity punasipuli, jääsalaatti, ilmakuivattu kinkku, cheddarjuusto, ketsuppi, pihvi valintasi mukaan. (saatavana gluteenittomalla sämpylällä)<br>”Kun meidän ensimmäisen ravintolamme ovi ekaa kertaa potkaistiin auki, löytyi jo silloin listalta Wallstreet. Sen reseptiä on tiristetty entistä tiukemmaksi matkan varrella, mutta kyllä klassikon ensipuraisulla edelleen tunnistaa. Wallstreet on sopivasti tulinen ja röyhkeän rapea – ja siitähän sä pidät.”',
        price: '13,50 €',
        image: burger_6,
    },
    {
        id: 7,
        name: "Oakwood",
        description: 'Briossisämpylä, savuchipotle-BBQ-majoneesi, karamellisoitu sipuli, amerikansalaatti, 100 % kotimainen naudanlihapihvi, cheddarjuusto, pekoni, Coca-Cola-ketsuppi. (saatavana gluteenittomalla sämpylällä)<br>”Purista sitä, näytä sille hampaasi. Pure sitä niin, että tuntuu. Se on sen ansainnut. Ja te olette ansainneet toisenne. Oakwood – kerran sen kesytettyäsi ei sen savuinen sielu jätä koskaan sua rauhaan.”',
        price: '13,90 €',
        image: burger_7
    },
    {
        id: 8,
        name: "Crispy Chicken",
        description: "Briossisämpylä, sour cream-majoneesi, pikkelöity punasipuli, pihvitomaatti, amerikansalaatti, crispy chicken -pihvi.<br>”Olo rapea? Sama täällä. Crispy Chicken on häpeilettömän härskisti nimensä mukainen, rakastetun rapea kanaburgeri. Koukuttaa kerrasta ja maku vie vaivihkaa järjen jakauksesta. Jos maailman meno riipii, niin Crispy Chickeniä rouskutellessa olo on pian taas kuin pumpulissa sukeltelisi.”",
        price: '12,50 €',
        image: burger_8,
    },
    {
        id: 9,
        name: "Chicken Madison",
        description: 'Martin’s sämpylä, valkosipuli-parmesaanimajoneesi, karamellisoitu sipuli, crispy chicken -pihvi, pihvitomaatti, jääsalaatti.<br>”Muna vai kana, ollako vai eikö, kanalla vai kanatta. Nää on näitä elämän suuria kysymyksiä. Kanaburgerin rooli menussamme ei siis ollut meille alun pitäen itsestäänselvä. Martin’s-sämpylän väliin löytyi kuitenkin niin muikea makujen sinfonia kanaburgereiden ystäville soiteltavaksi, että Chicken Madison perusteli paikkansa listallamme. Chicken Madison on nyt viimeisen päälle vireessä, joten pistähän soimaan!”',
        price: '12,50 €',
        image: burger_9,
    },
    {
        id: 10,
        name: "Ketoburger",
        description: 'Ketosämpylä, savuchipotle-parmesaanimajoneesi, 100 % suomalainen naudanlihapihvi, pekoni, cheddarjuusto, pihvitomaatti, jääsalaatti<br>Ketohampurilaisen makrot – hiilihydraatit 4.6 g, proteiinit 58.3 g, rasva 99.2g<br>”Ketoburgeria rakennettiin rakkaudella. Jokaisen burgerin elementin tuli jutella jouhevasti keskenään kokonaisuudessa, luontevasti solahtaa sisään pitkään ja hartaasti hakemamme ketosämpylän väliin. Rakkaus lajiin piti maistua jokaisella puraisulla. Tingi siis jostain muusta, älä mausta – ketoon baby, ketoon!”',
        price: '13,50 €',
        image: burger_10,
    },
    {
        id: 11,
        name: "Ketoburger Smash",
        description: 'Ketosämpylä, savuchipotle-parmesaanimajoneesi, kaksi 100 % suomalaista naudanlihapihviä, pekoni, cheddarjuusto, pihvitomaatti, jääsalaatti<br>Ketohampurilaisen makrot – hiilihydraatit 4.6g, proteiinit 58.3g, rasva 99.2g <br>”Ketoburgeria rakennettiin rakkaudella. Jokaisen burgerin elementin tuli jutella jouhevasti keskenään kokonaisuudessa, luontevasti solahtaa sisään pitkään ja hartaasti hakemamme ketosämpylän väliin. Rakkaus lajiin piti maistua jokaisella puraisulla. Tingi siis jostain muusta, älä mausta – ketoon baby, ketoon!”',
        price: '13,50 €',
        image: burger_11,
    },
    {
        id: 12,
        name: "Bronx jr.",
        description: 'Briossisämpylä, cheddarjuusto, ketsuppi, 100 % suomalainen naudanlihapihvi.<br>”Pohdimme pitkään oman junnuburgerin tarpeellisuutta, samaan aikaan herkällä korvalla asiakkaiden toiveita ja kommentteja kuunnellen. Pienempään lapaseen sopivaa burgeria testaillessa oli esikuvana legendaarinen Bronx – simppeli, perusasiat suvereenisti klaaraava klassikko. Syntyi Bronx Jr., jonka kautta onkin alkanut monen skidin makumatka peremmälle Burgerhoodiin.”',
        price: '6,60 €',
        image: burger_12,
    },
    {
        id: 13,
        name: "Brooklyn Habanero Smash",
        description: 'Sämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, pihvitomaatti, cheddarjuusto, habaneroketsuppi, kaksi 100 % kotimaista naudanlihapihviä.<br>”Halusimme rakentaa meidän ensimmäiselle menulle niin tiukan burgerin, että kylillä kohistaan. Syntyi Brooklyn Habanero, jota on sittemmin modattu muutamaankin otteeseen entistä tiukemmaksi. Vaikka alun perin Brooklyn olikin vain vegaanisena listalla, se tämän päivän Brooklyn Habanero, aito instituutio, löytyy nykyään niin liha- kuin vegeversionakin. Tulinen klassikko taipuu moneksi. Se on sun päätös millä mennään.”',
        price: '13,50 €',
        image: burger_13,
    },
    {
        id: 14,
        name: "Harlem Bacon Smash",
        description: 'Sämpylä, pekonimajoneesi, pikkelöity vihreä tomaatti, pekoni, cheddarjuusto, ketsuppi, kaksi 100 % kotimaista naudanlihapihviä. (saatavana gluteenittomalla sämpylällä)<br>”Harlem sheikkaa pekonista pitävien päiväunissa. Sen tarina alkoi satunnaisena kausiburgerina, mutta sen ronski ja rouhea meininki pisti jengin virsut heti vispaamaan. Pakkohan se oli sitten vakiokalustoon menuussa nostaa. Harlem on rehdin rasvainen ja rakastettu. Aito klassikko.”',
        price: '13,50 €',
        image: burger_14,
    },
    {
        id: 15,
        name: "Oakwood Smash",
        description: 'Sämpylä, savuchipotle-BBQ-majoneesi, karamellisoitu sipuli, amerikansalaatti, kaksi 100 % kotimaista naudanlihapihviä, cheddarjuusto, pekoni, Coca-Cola-ketsuppi. (saatavana gluteenittomalla sämpylällä)<br>”Purista sitä, näytä sille hampaasi. Pure sitä niin, että tuntuu. Se on sen ansainnut. Ja te olette ansainneet toisenne. Oakwood – kerran sen kesytettyäsi ei sen savuinen sielu jätä koskaan sua rauhaan.”',
        price: '13,90 €',
        image: burger_15,
    },
    {
        id: 16,
        name: "Bronx Smash",
        description: 'Sämpylä, Bronx-majoneesi, pikkelöity punasipuli, kaksi 100 % kotimaista naudanlihapihviä, amerikanjuusto, ketsuppi. (saatavana gluteenittomalla sämpylällä)<br>”Homman nimi on smash – ohueksi kuumalle parilalle painettu pihvi. Sen rapea, karamellisoitu pinta yhdistettyä aavistuksen ohueamman Martin’s-sämpylän kanssa, tarjoilee muhkeasti makua mehukkuudesta mitään menettämättä. Bronx Smash – pipo päästä, smash-kunkku on tässä.”',
        price: '13,90 €',
        image: burger_16,
    },
    {
        id: 17,
        name: "Vegan Crispy NoChicken",
        description: 'Vegaaninen sämpylä, basilikamajoneesi, tomaatti, pikkelöity punasipuli, jääsalaatti, The Vegetarian Butcher NoChicken -pihvi.<br>”Maailman kolme kauneinta sanaa eivät suinkaan ole ’I Love You’, vaan ’Crispy NoChicken’. Kuskaa se pöytään, sulje silmäsi ja puraise. Ja huomaat, miten tämä erittäin maukas vegeburgeri vie välittömästi sydämesi erittäin freesillä makumaailmallaan. I Love You, Crispy NoChicken!”',
        price: '12,50 €',
        image: burger_17,
    },
    {
        id: 18,
        name: "Vegan Bronx",
        description: 'Briossisämpylä, Bronx-majoneesi, pikkelöity punasipuli, cheddarjuusto, ketsuppi, 2 x papupihvi.<br>”Miten olisi legendaarinen klassikko ilman eläinperäisiä elementtejä? Pistele parilla papupihvillä tai testaa äärimmäisen mehukkaalla Moving Mountains -vegepihvillä. Tietäjät tietää – Vegan Bronx on käsite, ei korvike.”',
        price: '11,90 €',
        image: burger_18,
    },
    {
        id: 19,
        name: "Vegan Brooklyn Habanero",
        description: 'Briossisämpylä, habaneromajoneesi, pikkelöity punasipuli, amerikansalaatti, pihvitomaatti, cheddarjuusto, habaneroketsuppi, 2 x papupihvi.<br>”Brooklyn rakentui jo meidän ensimmäiselle menulle tavoitteena, että se on parasta mitä aitoa vegeburgeria etsivä kyliltä käteensä löytää. Se Vegan Brooklyn Habanero, jonka savuiseen sieluun tänä päivänä jo ensipuraisulla sukellat, on oikeastaan vuosien evoluution tulos, jossa meidän osaaminen ja intohimo kulminoituu. Tämän melko kipakan burgerpersoonan nautit papupihveillä tai kenties maailman mehukkaimmalla Moving Mountains -vegepihvillä. Se on sun päätös millä mennään.”',
        price: '13,50 €',
        image: burger_19,
    },
];

export const Offers = [
    {
        head: 'Buy 1 Get 1 Free',
        content: 'Every Friday on all classic burgers.'
    }, {
        head: 'Free Fries',
        content: 'With any combo order for a limited time.'
    }, {
        head: 'Combo Deals',
        content: 'Save more with our special burger combos.'
    }
]