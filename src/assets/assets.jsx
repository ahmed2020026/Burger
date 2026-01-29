import logo_image from './logo.webp'
import hero_image from './hero.webp'
import Average_image from './Average.webp'
import cooked_image from './cooked.webp'
import intro_video from './burger.mp4'

export const assets = {
    logo_image, hero_image, Average_image, cooked_image, intro_video
}

export const LinksRoute = [
    { text: "Home" },
    { text: "Menu" },
    { text: 'About' },
    { text: 'Review' },
    { text: "Contact" }
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
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, and special sauce.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Cheese Lover Burger",
        description: "Beef patty topped with melted cheddar and Swiss cheese.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1606755962779-8c4e7a06b981?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Bacon BBQ Burger",
        description: "Crispy bacon, BBQ sauce, and cheddar cheese over a beef patty.",
        price: 10.5,
        image: "https://images.unsplash.com/photo-1617196039367-2b3a90b96dcf?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Spicy Jalapeno Burger",
        description: "Beef patty with jalapenos, pepper jack cheese, and spicy mayo.",
        price: 9.75,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Mushroom Swiss Burger",
        description: "Sautéed mushrooms and Swiss cheese over a juicy beef patty.",
        price: 10.0,
        image: "https://images.unsplash.com/photo-1617196039367-2b3a90b96dcf?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Double Beef Burger",
        description: "Two beef patties with double cheddar, lettuce, and tomato.",
        price: 12.0,
        image: "https://images.unsplash.com/photo-1606755962779-8c4e7a06b981?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 7,
        name: "Chicken Burger",
        description: "Grilled chicken breast with lettuce, tomato, and mayo.",
        price: 8.5,
        image: "https://images.unsplash.com/photo-1606755962779-8c4e7a06b981?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 8,
        name: "Veggie Burger",
        description: "Grilled veggie patty with avocado, lettuce, and tomato.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1598866533139-53b0c7c8d411?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 9,
        name: "Hawaiian Burger",
        description: "Beef patty with grilled pineapple, ham, and teriyaki sauce.",
        price: 10.25,
        image: "https://images.unsplash.com/photo-1617196039367-2b3a90b96dcf?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 10,
        name: "Big Tex Burger",
        description: "Beef patty, bacon, cheddar, onion rings, and BBQ sauce.",
        price: 11.5,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
];
