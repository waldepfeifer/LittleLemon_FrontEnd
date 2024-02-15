import PastaImg from "../src/images/Pasta.jpg";
import Italian_SaladImg from "../src/images/Italian_Salad.jpg";
import BruschettaImg from "../src/images/Bruschetta.jpg";
import GrilledFishImg from "../src/images/Grilled_Fish.jpg";
import RestaurantFoodImg from "../src/images/restauranfood.jpg";

const recipes = [
  {
    id: 1,
    title: "Pasta",
    price: 8.99,
    image: PastaImg,
    description:
      "Classic Italian pasta with a rich tomato sauce, fresh basil, and parmesan cheese, simmered to perfection.",
  },
  {
    id: 2,
    title: "Italian Salad",
    price: 6.99,
    image: Italian_SaladImg,
    description:
      "A refreshing mix of arugula, cherry tomatoes, olives, mozzarella, and balsamic vinaigrette.",
  },
  {
    id: 3,
    title: "Bruschetta",
    price: 5.99,
    image: BruschettaImg,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 4,
    title: "Grilled Fish",
    price: 15.99,
    image: GrilledFishImg,
    description:
      "Freshly caught fish, grilled to perfection with lemon, herbs, and a side of steamed vegetables.",
  },
  {
    id: 5,
    title: "Salami Baguette",
    price: 9.50,
    image: RestaurantFoodImg,
    description:
      "A crusty baguette loaded with slices of spicy salami, provolone cheese, and a hint of mustard and mayo.",
  },
  {
    id: 6,
    title: "Pizza Bread",
    price: 8.99,
    image: RestaurantFoodImg,
    description:
      "Our homemade bread topped with pizza sauce, mozzarella cheese, and your choice of toppings, baked to perfection.",
  },
];

export default recipes;
