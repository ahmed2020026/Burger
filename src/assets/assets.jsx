import logo_image from './logo.webp'
import Average_image from './Average.webp'
import cooked_image from './cooked.webp'
import Light from './lightbulb.png'
import burger_1 from './Burger1.jpg';
import burger_2 from './Burger2.jpg';
import burger_3 from './Burger3.jpg';
import burger_4 from './Burger4.jpg';
import burger_5 from './Burger5.jpg';
import burger_6 from './Burger6.jpg';
import burger_7 from './Burger7.jpg';
import burger_8 from './Burger8.jpg';
import burger_9 from './Burger9.jpg';
import burger_10 from './Burger10.jpg';
import burger_11 from './Burger11.jpg';
import burger_12 from './Burger12.jpg';
import burger_13 from './Burger13.jpg';
import burger_14 from './Burger14.jpg';
import burger_15 from './Burger15.jpg';
import burger_16 from './Burger16.jpg';
import burger_17 from './Burger17.jpg';
import burger_18 from './Burger18.jpg';
import burger_19 from './Burger19.jpg';
import burger_20 from './Burger20.webp';
import burger_21 from './Burger21.jpg';
import burger_22 from './Burger22.webp';
import burger_23 from './Burger23.webp';
import burger_24 from './Burger24.webp';
import burger_25 from './Burger25.webp';
import burger_26 from './Burger26.webp';
import burger_27 from './Burger27.webp';
import burger_28 from './Burger28.webp';
import burger_29 from './Burger29.webp';
import burger_30 from './Burger30.webp';
import burger_31 from './Burger31.webp';
import burger_32 from './Burger32.webp';
import burger_33 from './Burger33.webp';
import burger_34 from './Burger34.webp';
import burger_35 from './Burger35.webp';
import burger_36 from './Burger36.webp';
import burger_37 from './Burger37.webp';
import burger_38 from './Burger38.webp';
import burger_39 from './Burger39.jpg';
import burger_40 from './Burger40.jpg';
import burger_41 from './Burger41.jpg';
import burger_42 from './Burger42.webp';
import burger_43 from './Burger43.webp';

import Hero_video from './hero_video.mp4';
import Hero_2 from './hero2.jfif'
import Hero_3 from './hero3.jfif'
import Hero_4 from './hero4.jfif'
import Hero_5 from './hero5.jfif'

export const assets = {
    logo_image, Average_image, cooked_image, Light, Hero_2, Hero_3, Hero_4, Hero_5, Hero_video
}

export const LinksRoute = [
    { text: "Koti", route: "" },
    { text: "Tietoa", route: "about" },
    { text: "Menu", route: "menu" },
    { text: "Ominaisuudet", route: "feature" },
];

export const Features = [
    {
        icon: '🍔',
        head: 'Tuoreet Raaka-aineet',
        content: '100% tuore liha ja päivittäin leivotut sämpylät.'
    },
    {
        icon: '🔥',
        head: 'Täydellinen Paisto',
        content: 'Kokit paistavat täydellisyyteen asiantuntemuksellaan.'
    },
    {
        icon: '🚀',
        head: 'Nopea Toimitus',
        content: 'Kuuma ja tuore suoraan ovelle hetkessä.'
    },
    {
        icon: '💰',
        head: 'Paras Hinta',
        content: 'Premium-laatua edullisesti.'
    }
];




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
    {
        id: 20,
        name: "Vegan NoChicken Bites",
        description: '6 Vegan NoChicken Bites palaa, valitse mieluinen dippi<br>”Mitä jos tällä kertaa puraisisit palasta vähän parempaa ja muhkean maukasta maailmaa? Tingi muusta, tässä tapauksessa eläinperäisistä elementeistä, älä mausta!”',
        price: '13,90 €',
        image: burger_20,
    },
    {
        id: 21,
        name: "Chicken Bites",
        description: '3 kanapalaa, valitse itsellesi mieluinen dippi. Kuorrute sisältää gluteenia. Vaihtoehtoina myös 6 ja 10 kanapalaa lisähintaan<br>”Laatutietoisille bongareille mehevää tiirailtavaa. Päivän resepti kuuluukin, että chiksit kuumina ja juomat kylminä, eiks vaan.”',
        price: '13,90 €',
        image: burger_21,
    },
    {
        id: 22,
        name: "Fries",
        description: '”Kaduilla kerrotaan tarinaa ranuista, joita puraistessa nälkäisen rauhaton sielu soi saman tien seesteisyyden sinfoniaa. Niitä ilman ei burgerelämys ole koskaan eheä taikka täysi, vaan aavistuksen aina apea ja alakuloinen. No, vähän jäävejä ollaan kantaa ottamaan, mutta tässä ne olisi – Burgerhoodin legendaariset ranet.”',
        price: '13,90 €',
        image: burger_22,
    },
    {
        id: 23,
        name: "Parmesan Fries",
        description: '”Klassisen päräyttävät ranskalaiset parmesaanilla. Ei mitään turhaa, mutta kaikki oleellinen hyvään ja maistuvaan elämään. Pistä silmät kiinni ja puraise – ja kun avaat öögat uudelleen, ei ole maailma enää entisensä.”',
        price: '13,90 €',
        image: burger_23,
    },
    {
        id: 24,
        name: "Loaded Fries",
        description: 'Chorizo, rosmariinivalkosipulimajoneesi, limemajoneesi, korianteri.<br>”Lataa ja laukaise. Tuima ja chorizon verran tuhdimpi ranusetti pistää nälkäisemmänkin burgerholistin tyytyväisyydestä tuhisemaan. Loaded Fries, my friend.”',
        price: '5,50 €',
        image: burger_24,
    },
    {
        id: 25,
        name: "Animal Style Fries",
        description: 'Limepikkelöity jalapeno, savu-BBQ-majoneesi, pikkelöidyt kesäkurpitsan siemenet, cheddarkastike, lehtipersilja.<br>”Eat Like A Beast! Unohda siis pöytätavat & käytöskoodit, päästä eläin irti itsessäsi. Animal Style Fries tarkoittaa eläimellistä meininkiä muhkeine makuineen. Ja siitähän sä tykkäät.”',
        price: '5,50 €',
        image: burger_25,
    },
    {
        id: 26,
        name: "Chili Fries",
        description: 'Chilisuola, habaneromajoneesi, extrachili, habaneroketsuppi, limepikkelöity jalapeno.<br>”Legendaariset ranut hotisti höystettynä taivuttavat sut tavanomaista tulisempaan tansiin. Anna Chili Friesien viedä, äläkä turhia vastaan vikise.”',
        price: '5,50 €',
        image: burger_26,
    },
    {
        id: 27,
        name: "Greenside",
        description: 'Grillattu sydänsalaatti, hunajavinaigrette, paahdettu kurpitsansiemen, sormisuola.<br>”Laiva on lastattu vihreällä. Tämä kosmista kuola-arvoa omaava kattaus on rakennettu grillatun sydänsalaatin ympärille. Pöytään pärähtäessään kerää kehut ja kiitokset, sekä varastaa suitsait jengin sydämet.”',
        price: '3,90 €',
        image: burger_27,
    },
    {
        id: 28,
        name: "Loaded Greenside",
        description: 'Grillattu sydänsalaatti, hunajavinaigrette, paahdettu kurpitsansiemen, paahdettu mantelirouhe, Aura-sinihomejuusto, limemajoneesi, sormisuola.<br>”Saammeko esitellä uusi lempiannoksesi! Loaded Greensidea kuvaillessa loppuu äkkiä adjektiivit kesken. Kehuttu, kiitetty hurmuri, joka varastaa väistämättä jengin sydämet. Älä kuvittelekaan, että sä olisit poikkeus. Testaa ja tuuleta ennakkoluulottomasti makumaailmaasi.”',
        price: '5,50 €',
        image: burger_28,
    },
    {
        id: 29,
        name: "Halloum Fingers",
        description: '5 halloumitikkua, valitse itsellesi mieluinen dippi.<br>”Jos liian hyvästä sapuskasta saisi sakottaa, niin pelkästään Halloum Fingereiden hypistelystä räpsähtäisi joka kerta iso pikavoitto. Lähes laittoman hyvät Halloum Fingersit ovat todella toivottu lisä valikoimaan, joten dippailemisiin!”',
        price: '5,50 €',
        image: burger_29,
    },
    {
        id: 30,
        name: "Bronx majoneesi",
        description: '',
        price: '1,90 €',
        image: burger_30,
    },
    {
        id: 31,
        name: "Aura-sinihomejuustomajoneesi",
        description: '',
        price: '1,90 €',
        image: burger_31,
    },
    {
        id: 32,
        name: "Basilikamajoneesi",
        description: '',
        price: '1,90 €',
        image: burger_32,
    },
    {
        id: 33,
        name: "Habanero",
        description: '',
        price: '1,90 €',
        image: burger_33,
    },
    {
        id: 34,
        name: "Savu BBQ",
        description: '',
        price: '1,90 €',
        image: burger_34,
    },
    {
        id: 35,
        name: "Rosmariinivalkosipuli",
        description: '',
        price: '1,90 €',
        image: burger_35,
    },
    {
        id: 36,
        name: "Lime",
        description: '',
        price: '1,90 €',
        image: burger_36,
    },
    {
        id: 37,
        name: "Tryffeli",
        description: '',
        price: '1,90 €',
        image: burger_37,
    },
    {
        id: 38,
        name: "Valkosipuliparmesaani",
        description: '',
        price: '1,90 €',
        image: burger_38,
    },
    {
        id: 39,
        name: "Coca-Cola 0,33l",
        description: '',
        price: '3,90 €',
        image: burger_39,
    },
    {
        id: 40,
        name: "Coca-Cola Zero 0,33l",
        description: '',
        price: '1,90 €',
        image: burger_40,
    },
    {
        id: 41,
        name: "Fanta 0,33l",
        description: '',
        price: '1,90 €',
        image: burger_41,
    },
    {
        id: 42,
        name: "Pillimehu omena 0,2l",
        description: '',
        price: '2,00 €',
        image: burger_42,
    },
    {
        id: 43,
        name: "Pillimehu rypäle 0,2l",
        description: '',
        price: '2,00 €',
        image: burger_43,
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