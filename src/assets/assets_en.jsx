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

import Hero_video from './hero_video.mp4';
import Hero_2 from './hero2.jfif'
import Hero_3 from './hero3.jfif'
import Hero_4 from './hero4.jfif'
import Hero_5 from './hero5.jfif'

export const assets = {
    logo_image, Average_image, cooked_image, Light, Hero_2, Hero_3, Hero_4, Hero_5, Hero_video
}

export const LinksRoute_en = [
    { text: "Home", route: "" },
    { text: "About", route: "about" },
    { text: "Menu", route: "menu" },
    { text: "Features", route: "feature" },
];

export const Burgers_en = [
    {
        id: 1,
        name: "Silver Beach",
        description: 'CLASSIC: Brioche bun, toasted jalapeno mayo, pickled red onion, 100% Finnish beef patty, cheddar cheese, American salad, ketchup<br>SMASH: Bun, toasted jalapeno mayo, pickled red onion, two 100% Finnish beef smash patties, American cheese, American salad, ketchup',
        price: '13.90 €',
        image: burger_1,
    },
    {
        id: 2,
        name: "Mill Basin",
        description: "Bun, truffle mayo, arugula, 100% Finnish beef patty, Emmental cheese, caramelized onion and mushroom mix, Dijon mustard",
        price: '13.50 €',
        image: burger_2,
    },
    {
        id: 3,
        name: "Bronx",
        description: 'Brioche bun, Bronx mayo, pickled red onion, cheddar cheese, ketchup, patty of your choice (available vegan) (available with gluten-free bun).<br>Jugi painted graffiti on our first restaurant wall. We tested different flavors and landed on this simple, classic burger. Looking at the graffiti, we knew what to name this honest burger: Bronx.',
        price: '11.90 €',
        image: burger_3,
    },
    {
        id: 4,
        name: "Brooklyn Habanero",
        description: 'Brioche bun, habanero mayo, pickled red onion, American salad, tomato patty, cheddar cheese, habanero ketchup, patty of your choice (spicy) (available vegan) (available gluten-free).<br>"We wanted our first menu to feature a burger that would make waves. Brooklyn Habanero was born, later refined to be even bolder. Originally vegan-only, today it exists in both meat and veggie versions. Spicy classic, your choice."',
        price: '13.50 €',
        image: burger_4,
    },
    {
        id: 5,
        name: "Harlem Bacon",
        description: 'Brioche bun, bacon mayo, pickled green tomato, bacon, cheddar cheese, ketchup, patty of your choice (available gluten-free).<br>"Harlem shakes the dreams of bacon lovers. Started as a seasonal burger, its bold flavor made it a permanent menu classic. A truly fatty and loved burger."',
        price: '13.50 €',
        image: burger_5,
    },
    {
        id: 6,
        name: "Wallstreet",
        description: 'Brioche bun, Wall Street mayo, pickled red onion, iceberg lettuce, air-dried ham, cheddar cheese, ketchup, patty of your choice (available gluten-free).<br>"From our first restaurant opening, Wallstreet was on the menu. Its recipe has been refined over time, still recognizable as a classic – perfectly spicy and crunchy."',
        price: '13.50 €',
        image: burger_6,
    },
    {
        id: 7,
        name: "Oakwood",
        description: 'Brioche bun, smoked chipotle BBQ mayo, caramelized onion, American salad, 100% Finnish beef patty, cheddar cheese, bacon, Coca-Cola ketchup. (available gluten-free)<br>"Squeeze it, show your teeth. Oakwood – once tamed, its smoky soul never leaves you."',
        price: '13.90 €',
        image: burger_7
    },
    {
        id: 8,
        name: "Crispy Chicken",
        description: "Brioche bun, sour cream mayo, pickled red onion, tomato patty, American salad, crispy chicken patty.<br>”Feeling crispy? Crispy Chicken is unapologetically crunchy, a loved chicken burger that hooks you instantly.”",
        price: '12.50 €',
        image: burger_8,
    },
    {
        id: 9,
        name: "Chicken Madison",
        description: 'Martin’s bun, garlic-parmesan mayo, caramelized onion, crispy chicken patty, tomato patty, iceberg lettuce.<br>”Egg or chicken, to be or not to be. Chicken Madison is our fully perfected chicken burger for true flavor enthusiasts.”',
        price: '12.50 €',
        image: burger_9,
    },
    {
        id: 10,
        name: "Ketoburger",
        description: 'Keto bun, smoked chipotle parmesan mayo, 100% Finnish beef patty, bacon, cheddar cheese, tomato patty, iceberg lettuce<br>Keto burger macros – carbs 4.6 g, protein 58.3 g, fat 99.2 g<br>”Ketoburger was built with love, each element blending perfectly in our carefully crafted keto bun. Taste the love in every bite.”',
        price: '13.50 €',
        image: burger_10,
    },
    {
        id: 11,
        name: "Ketoburger Smash",
        description: 'Keto bun, smoked chipotle parmesan mayo, two 100% Finnish beef patties, bacon, cheddar cheese, tomato patty, iceberg lettuce<br>Keto burger macros – carbs 4.6 g, protein 58.3 g, fat 99.2 g<br>”Ketoburger was built with love. Each element blends perfectly in the carefully crafted keto bun. Taste the love in every bite.”',
        price: '13.50 €',
        image: burger_11,
    },
    {
        id: 12,
        name: "Bronx Jr.",
        description: 'Brioche bun, cheddar cheese, ketchup, 100% Finnish beef patty.<br>”Inspired by the legendary Bronx, Bronx Jr. is the perfect small burger for young taste buds.”',
        price: '6.60 €',
        image: burger_12,
    },
    {
        id: 13,
        name: "Brooklyn Habanero Smash",
        description: 'Bun, habanero mayo, pickled red onion, American salad, tomato patty, cheddar cheese, habanero ketchup, two 100% Finnish beef patties.<br>”Brooklyn Habanero Smash – spicy classic in both meat and veggie versions. Your choice.”',
        price: '13.50 €',
        image: burger_13,
    },
    {
        id: 14,
        name: "Harlem Bacon Smash",
        description: 'Bun, bacon mayo, pickled green tomato, bacon, cheddar cheese, ketchup, two 100% Finnish beef patties (available gluten-free).<br>”Harlem Bacon Smash – bold and loved, a true classic.”',
        price: '13.50 €',
        image: burger_14,
    },
    {
        id: 15,
        name: "Oakwood Smash",
        description: 'Bun, smoked chipotle BBQ mayo, caramelized onion, American salad, two 100% Finnish beef patties, cheddar cheese, bacon, Coca-Cola ketchup (available gluten-free).<br>”Oakwood Smash – once tamed, its smoky soul never leaves you.”',
        price: '13.90 €',
        image: burger_15,
    },
    {
        id: 16,
        name: "Bronx Smash",
        description: 'Bun, Bronx mayo, pickled red onion, two 100% Finnish beef patties, American cheese, ketchup (available gluten-free).<br>”Smash means pressing thin patties on a hot griddle. Bronx Smash delivers bold flavor without losing juiciness.”',
        price: '13.90 €',
        image: burger_16,
    },
    {
        id: 17,
        name: "Vegan Crispy NoChicken",
        description: 'Vegan bun, basil mayo, tomato, pickled red onion, iceberg lettuce, The Vegetarian Butcher NoChicken patty.<br>”Crispy NoChicken – tasty vegan burger that steals your heart with its fresh flavors.”',
        price: '12.50 €',
        image: burger_17,
    },
    {
        id: 18,
        name: "Vegan Bronx",
        description: 'Brioche bun, Bronx mayo, pickled red onion, cheddar cheese, ketchup, 2 x bean patties.<br>”Legendary classic without animal products. Bean or Moving Mountains patties – you decide.”',
        price: '11.90 €',
        image: burger_18,
    },
    {
        id: 19,
        name: "Vegan Brooklyn Habanero",
        description: 'Brioche bun, habanero mayo, pickled red onion, American salad, tomato patty, cheddar cheese, habanero ketchup, 2 x bean patties.<br>”Brooklyn Habanero Vegan – a bold burger with smoky flavor and plant-based patties. Your choice.”',
        price: '13.50 €',
        image: burger_19,
    },
];

export const Features_en = [
    {
        icon: '🍔',
        head: 'Fresh Ingredients',
        content: '100% fresh meat and daily baked buns.'
    },
    {
        icon: '🔥',
        head: 'Perfect Grilling',
        content: 'Cooked to perfection by our expert chefs.'
    },
    {
        icon: '🚀',
        head: 'Fast Delivery',
        content: 'Hot and fresh at your door in no time.'
    },
    {
        icon: '💰',
        head: 'Best Price',
        content: 'Premium quality at affordable prices.'
    }
];
