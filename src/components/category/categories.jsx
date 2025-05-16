import React from 'react';
import { GiMeal, GiFruitBowl, GiGlassCelebration, GiCakeSlice, GiBowlOfRice, GiTomato, GiFriedEggs, GiOlive, GiFoodChain, GiSushis, GiPizzaSlice, GiPizzaCutter, GiFullPizza, GiKidSlide, GiKidneys, GiBabyFace, GiBabyBottle, GiHamburgerMenu, GiHamburger, GiFishBucket, GiFishCooked, GiFishCorpse, GiFishbone, GiFishEggs, GiBarbecue, GiHotSpices, GiWoodCabin, GiWoodFrame, GiCow, GiWoodPile, GiWoodStick, GiBarbedCoil } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa';

const categories = [
  {
    title: {
      sq: "Mëngjesi",
      en: "Breakfast"
    },
    svg: <GiMeal size={35} />,
    link: "/breakfast", // Shtoni këtë rresht
    hasSubcategories: false, // Shtoni këtë rresht
    subcategories: [
      {
        name: {
          sq: "Mëngjes i kombinuar",
          en: "Combined Breakfast"
        },
        description: {
          sq: "Vezë me suxhuk, speca në ajkë, ajvar, kaqkavall i fërguar, djath, domatina, long shtëpie",
          en: "Eggs with suxhuk, peppers in cream, ajvar, fried kashkaval, cheese, cherry tomatoes, homemade juice"
        },
        price: {
          sq: "6.80€",
          en: "6.80€"
        }
      },
      {
        name: {
          sq: "Llokuma",
          en: "Fried Dough (Llokuma)"
        },
        description: {
          sq: "Ajvar, long shtëpie",
          en: "Ajvar, homemade juice"
        },
        price: {
          sq: "4.80€",
          en: "4.80€"
        }
      },
      {
        name: {
          sq: "Waffle",
          en: "Waffle"
        },
        description: {
          sq: "Servohet me çokolladë belgjike dhe dredhëza",
          en: "Served with Belgian chocolate and strawberries"
        },
        price: {
          sq: "4.99€",
          en: "4.99€"
        }
      },
      {
        name: {
          sq: "Supë Pule",
          en: "Chicken Soup"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.49€",
          en: "2.49€"
        }
      },
      {
        name: {
          sq: "Supë Viçi",
          en: "Beef Soup"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      },
      {
        name: {
          sq: "Supë Perimesh",
          en: "Vegetable Soup"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.49€",
          en: "2.49€"
        }
      },
      {
        name: {
          sq: "Supë Peshku",
          en: "Fish Soup"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Starterat",
      en: "Starters"
    },
    svg: <GiOlive size={35} />,
    link: "/starters",
    subcategories: [
      {
        name: {
          sq: "Paragjell e kombinuar",
          en: "Combined Starter"
        },
        description: {
          sq: "Përshutë e terur, kaqkavall i fërguar, suxhuk, kërpudha, djathë, ullinj",
          en: "Cured ham, fried kashkaval, suxhuk, mushrooms, cheese, olives"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Brusket me erëza italiane",
          en: "Bruschetta with Italian herbs"
        },
        description: {
          sq: "Servohet me sos tartar dhe sos pikant",
          en: "Served with tartar sauce and spicy sauce"
        },
        price: {
          sq: "4.99€",
          en: "4.99€"
        }
      },
      {
        name: {
          sq: "Kaqkavall i fërguar",
          en: "Fried Kashkaval"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "4.20€",
          en: "4.20€"
        }
      },
      {
        name: {
          sq: "Kërpudha të fërguara",
          en: "Fried Mushrooms"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "3.99€",
          en: "3.99€"
        }
      },
      {
        name: {
          sq: "Djath shtëpie",
          en: "Homemade Cheese"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "3.60€",
          en: "3.60€"
        }
      },
      {
        name: {
          sq: "Pomfrit",
          en: "French Fries"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      },
      {
        name: {
          sq: "Pomfrit me djathë",
          en: "French Fries with Cheese"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "3.60€",
          en: "3.60€"
        }
      },
      {
        name: {
          sq: "Ullinj",
          en: "Olives"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      },
      {
        name: {
          sq: "Perime të fërguara",
          en: "Fried Vegetables"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "4.20€",
          en: "4.20€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Sallatat",
      en: "Salads"
    },
    svg: <GiTomato size={35} />, // Example icon
    link: "/salads",
    subcategories: [
      {
        name: {
          sq: "Sallatë Shtëpie",
          en: "Homemade Salad"
        },
        description: {
          sq: "Rukolla, sallatë e gjelbër, misër, karrota, speca, tranguj, domatina, parmesan, salc balsamic",
          en: "Arugula, green salad, corn, carrots, peppers, cucumbers, cherry tomatoes, parmesan, balsamic sauce"
        },
        price: {
          sq: "4.80€",
          en: "4.80€"
        }
      },
      {
        name: {
          sq: "Sallatë Greke",
          en: "Greek Salad"
        },
        description: {
          sq: "Domate, tranguj, ullinj, qepë, djathë, limon, speca",
          en: "Tomatoes, cucumbers, olives, onion, cheese, lemon, peppers"
        },
        price: {
          sq: "3.50€",
          en: "3.50€"
        }
      },
      {
        name: {
          sq: "Sallatë e Kombinuar",
          en: "Mixed Salad"
        },
        description: {
          sq: "Laker e bardhë, laker e kuqe, karrotë, marullë, domate, tranguj, qepë, sos french, djath, patate",
          en: "White cabbage, red cabbage, carrots, lettuce, tomatoes, cucumbers, onion, French dressing, cheese, potatoes"
        },
        price: {
          sq: "3.99€",
          en: "3.99€"
        }
      },
      {
        name: {
          sq: "Sallatë Me Arra",
          en: "Walnut Salad"
        },
        description: {
          sq: "Marullë, rukollë, domatina, djath, rrush të that, shegë, arra, mjaltë",
          en: "Lettuce, arugula, cherry tomatoes, cheese, raisins, pomegranate, walnuts, honey"
        },
        price: {
          sq: "5.49€",
          en: "5.49€"
        }
      },
      {
        name: {
          sq: "Sallatë Shope",
          en: "Shopska Salad"
        },
        description: {
          sq: "Domate, tranguj, djathë, qepë",
          en: "Tomatoes, cucumbers, cheese, onion"
        },
        price: {
          sq: "3.50€",
          en: "3.50€"
        }
      },
      {
        name: {
          sq: "Cesar Salad",
          en: "Caesar Salad"
        },
        description: {
          sq: "Copa të marullës, sos special Cesar, me bukë të thekur dhe mish i pulës i marinuar dhe i pjekur në grille",
          en: "Lettuce pieces, special Caesar dressing, with toasted bread and marinated grilled chicken"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Rizoto & Pasta",
      en: "Risotto & Pasta"
    },
    svg: <GiBowlOfRice size={35} />,
    link: "/rizoto-pasta",
    subcategories: [
      // Risotto items
      {
        name: {
          sq: "Rizoto me Mish viçi",
          en: "Veal Risotto"
        },
        description: {
          sq: "Perime të fërguara, kërpudha",
          en: "Fried vegetables, mushrooms"
        },
        price: {
          sq: "6.99€",
          en: "6.99€"
        }
      },
      {
        name: {
          sq: "Rizoto me Mish pule",
          en: "Chicken Risotto"
        },
        description: {
          sq: "Perime të fërguara",
          en: "Fried vegetables"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Rizoto me Fruta Deti",
          en: "Seafood Risotto"
        },
        description: {
          sq: "Fruta deti, bizele",
          en: "Seafood, peas"
        },
        price: {
          sq: "9.99€",
          en: "9.99€"
        }
      },
      // Pasta items
      {
        name: {
          sq: "Linguini/Makarona Boloneze",
          en: "Linguini/Spaghetti Bolognese"
        },
        description: {
          sq: "Sos domatesh, mish I bluar, hudhër, qepë, karrotë, selino",
          en: "Tomato sauce, minced meat, garlic, onion, carrot, celery"
        },
        price: {
          sq: "6.49€",
          en: "6.49€"
        }
      },
      {
        name: {
          sq: "Linguini/Makarona Aglio Olio",
          en: "Linguini/Spaghetti Aglio Olio"
        },
        description: {
          sq: "Ullinjë, hudhër, domatina",
          en: "Olives, garlic, cherry tomatoes"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Linguini/Makarona Fruta Deti",
          en: "Linguini/Spaghetti Seafood"
        },
        description: {
          sq: "Kallamari, karkalec, domatina, bazelik, parmezan",
          en: "Squid, crab, cherry tomatoes, basil, parmesan"
        },
        price: {
          sq: "9.99€",
          en: "9.99€"
        }
      },
      {
        name: {
          sq: "Linguini/Makarona Carbonara",
          en: "Linguini/Spaghetti Carbonara"
        },
        description: {
          sq: "Krem, proshutë, bazelik",
          en: "Cream, prosciutto, basil"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Tagliatelle Carbonara në notë Parmezani",
          en: "Tagliatelle Carbonara with Parmesan sauce"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "14.99€",
          en: "14.99€"
        }
      },
      {
        name: {
          sq: "Tagliatelle Carbonara me mish bifteku në notë Parmezani",
          en: "Tagliatelle Carbonara with beef steak and Parmesan sauce"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "17.99€",
          en: "17.99€"
        }
      },
      {
        name: {
          sq: "Lazanje",
          en: "Lasagna"
        },
        description: {
          sq: "Kaqkavall, sos bolonez",
          en: "Kashkaval cheese, bolognese sauce"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Specialitete Shtēpie",
      en: "House Specialties"
    },
    svg: <GiMeal size={35} />,
    link: "/house-specialties",
    subcategories: [
      {
        name: {
          sq: "Fli me ajran",
          en: "Baked beans with ayran"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "5.40€",
          en: "5.40€"
        }
      },
      {
        name: {
          sq: "Pogaç e vogël me saç",
          en: "Small sac bread"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.95€",
          en: "2.95€"
        }
      },
      {
        name: {
          sq: "Pite të ndryshme me saç",
          en: "Various pies with sac"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "46.80€",
          en: "46.80€"
        }
      },
      {
        name: {
          sq: "Speca me Kajmak",
          en: "Peppers with kajmak"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "4.50€",
          en: "4.50€"
        }
      },
      {
        name: {
          sq: "Long shtëpie",
          en: "House bread"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      },
      {
        name: {
          sq: "Bukê e hollë me mish bifteku",
          en: "Thin bread with beef steak"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "8.49€",
          en: "8.49€"
        }
      },
      {
        name: {
          sq: "Pogaçe me kajmak",
          en: "Bread with kajmak"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "7.99€",
          en: "7.99€"
        }
      },
      {
        name: {
          sq: "Ajron",
          en: "Ayran"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "1.20€",
          en: "1.20€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Sushi",
      en: "Sushi"
    },
    svg: <GiSushis size={35} />,
    link: "/sushi",
    subcategories: [
      {
        name: {
          sq: "Shrimp Tempura",
          en: "Shrimp Tempura"
        },
        description: {
          sq: "Shoaërohen me majonez pikant",
          en: "Served with spicy mayonnaise"
        },
        price: {
          sq: "7.99€",
          en: "7.99€"
        }
      },
      {
        name: {
          sq: "Salmon Night 3 copë",
          en: "Salmon Night 3 pieces"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "6.49€",
          en: "6.49€"
        }
      },
      {
        name: {
          sq: "Shrimp Dynamite",
          en: "Shrimp Dynamite"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "8.99€",
          en: "8.99€"
        }
      },
      {
        name: {
          sq: "Chicken Dynamite",
          en: "Chicken Dynamite"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Philadelphia Roll",
          en: "Philadelphia Roll"
        },
        description: {
          sq: "Salmon, krem djathi dhe avocado të shoqëruara me soy sauce",
          en: "Salmon, cream cheese and avocado served with soy sauce"
        },
        price: {
          sq: "11.99€",
          en: "11.99€"
        }
      },
      {
        name: {
          sq: "Philadelphia Roll Sake Teriyaki",
          en: "Philadelphia Roll Sake Teriyaki"
        },
        description: {
          sq: "Salmon, krem djathi dhe avocado të shoqëruara me soy sauce",
          en: "Salmon, cream cheese and avocado served with soy sauce"
        },
        price: {
          sq: "11.99€",
          en: "11.99€"
        }
      },
      {
        name: {
          sq: "Shrimp Tempura Roll",
          en: "Shrimp Tempura Roll"
        },
        description: {
          sq: "Karkalec, tranguj, krem djathi të shoqëruara me soy sauce",
          en: "Shrimp, cucumber, cream cheese served with soy sauce"
        },
        price: {
          sq: "12.99€",
          en: "12.99€"
        }
      },
      {
        name: {
          sq: "Salmon Tempura Roll",
          en: "Salmon Tempura Roll"
        },
        description: {
          sq: "Salmon, tranguj, krem djathi të shoqëruara me soy sauce",
          en: "Salmon, cucumber, cream cheese served with soy sauce"
        },
        price: {
          sq: "12.99€",
          en: "12.99€"
        }
      },
      {
        name: {
          sq: "Chicken Tempura Roll",
          en: "Chicken Tempura Roll"
        },
        description: {
          sq: "Mish pule, tranguj, krem djathi të shoqëruara me soy sauce",
          en: "Chicken, cucumber, cream cheese served with soy sauce"
        },
        price: {
          sq: "9.99€",
          en: "9.99€"
        }
      },
      {
        name: {
          sq: "Avokado Maki Roll",
          en: "Avocado Maki Roll"
        },
        description: {
          sq: "Avokado, krem djathi të shoqëruara me soy sauce",
          en: "Avocado, cream cheese served with soy sauce"
        },
        price: {
          sq: "8.49€",
          en: "8.49€"
        }
      },
      {
        name: {
          sq: "Cucumber Maki Roll",
          en: "Cucumber Maki Roll"
        },
        description: {
          sq: "Tranguj, krem djathi të shoqëruara me soy sauce",
          en: "Cucumber, cream cheese served with soy sauce"
        },
        price: {
          sq: "8.49€",
          en: "8.49€"
        }
      },
      {
        name: {
          sq: "Mixed Sushi 24 rolls + 3 nigiri",
          en: "Mixed Sushi 24 rolls + 3 nigiri"
        },
        description: {
          sq: "Philadelphia roll, shrimp tempura roll, cucumber maki roll, salmon nigiri",
          en: "Philadelphia roll, shrimp tempura roll, cucumber maki roll, salmon nigiri"
        },
        price: {
          sq: "36.99€",
          en: "36.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Pizza",
      en: "Pizza"
    },
    svg: <GiFullPizza size={35} />,
    link: "/pizza",
    subcategories: [
      {
        name: {
          sq: "Pizza Shtêpie",
          en: "House Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh, kepurdha, përshutê, suxhuk",
          en: "Kashkaval cheese, tomato sauce, mushrooms, prosciutto, sujuk"
        },
        price: {
          sq: "6.99€",
          en: "6.99€"
        }
      },
      {
        name: {
          sq: "Pizza Regina",
          en: "Regina Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh, kêpurdha, përshutê",
          en: "Kashkaval cheese, tomato sauce, mushrooms, prosciutto"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Pizza Proshutê",
          en: "Prosciutto Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh, përshutê",
          en: "Kashkaval cheese, tomato sauce, prosciutto"
        },
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Pizza Margarita",
          en: "Margherita Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh",
          en: "Kashkaval cheese, tomato sauce"
        },
        price: {
          sq: "3.49€",
          en: "3.49€"
        }
      },
      {
        name: {
          sq: "Pizza Vegjetariane",
          en: "Vegetarian Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh, perime",
          en: "Kashkaval cheese, tomato sauce, vegetables"
        },
        price: {
          sq: "5.30€",
          en: "5.30€"
        }
      },
      {
        name: {
          sq: "Pizza Tuna",
          en: "Tuna Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê damatesh, peshk tuna, qepê",
          en: "Kashkaval cheese, tomato sauce, tuna fish, onions"
        },
        price: {
          sq: "6.99€",
          en: "6.99€"
        }
      },
      {
        name: {
          sq: "Pizza Parmarukolla",
          en: "Parma-Rucola Pizza"
        },
        description: {
          sq: "Proshutê, salcê damatesh, kaqkavall, rukolla, domatina, parmezan",
          en: "Prosciutto, tomato sauce, kashkaval cheese, arugula, cherry tomatoes, parmesan"
        },
        price: {
          sq: "7.49€",
          en: "7.49€"
        }
      },
      {
        name: {
          sq: "Pizza Fungi",
          en: "Mushroom Pizza"
        },
        description: {
          sq: "Kaqkavall, salcê domotesh, kêpurdha",
          en: "Kashkaval cheese, tomato sauce, mushrooms"
        },
        price: {
          sq: "5.60€",
          en: "5.60€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Kids Menu",
      en: "Kids Menu"
    },
    svg: <GiHamburger size={35} />,
    link: "/kids-menu",
    subcategories: [
      {
        name: {
          sq: "Pizza Lepur",
          en: "Bunny Pizza"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "3.49€",
          en: "3.49€"
        }
      },
      {
        name: {
          sq: "Hambuger",
          en: "Hamburger"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      },
      {
        name: {
          sq: "Chicken Fingers",
          en: "Chicken Fingers"
        },
        description: {
          sq: "",
          en: ""
        },
        price: {
          sq: "2.99€",
          en: "2.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Specialitete Peshku",
      en: "Fish Specialties"
    },
    svg: <GiFishCooked size={35} />,
    link: "/fish-specialties",
    subcategories: [
      {
        name: {
          sq: "Levrek",
          en: "Sea Bass"
        },
        description: {
          sq: "Perime sezonale, pure patatesh, limon",
          en: "Seasonal vegetables, mashed potatoes, lemon"
        },
        price: {
          sq: "12.60€",
          en: "12.60€"
        }
      },
      {
        name: {
          sq: "Karkalec",
          en: "Crab"
        },
        description: {
          sq: "Perime sezonale, pure patatesh, limon",
          en: "Seasonal vegetables, mashed potatoes, lemon"
        },
        price: {
          sq: "16.60€",
          en: "16.60€"
        }
      },
      {
        name: {
          sq: "File Salmon",
          en: "Salmon Fillet"
        },
        description: {
          sq: "Perime sezonale, pure patatesh, limon",
          en: "Seasonal vegetables, mashed potatoes, lemon"
        },
        price: {
          sq: "14.99€",
          en: "14.99€"
        }
      },
      {
        name: {
          sq: "Troftë",
          en: "Trout"
        },
        description: {
          sq: "Perime të fërguara, oriz, limon",
          en: "Fried vegetables, rice, lemon"
        },
        price: {
          sq: "6.99€",
          en: "6.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Specialitet nga Skara",
      en: "Grill Specialties"
    },
    svg: <GiBarbecue size={35} />,
    link: "/grill-specialties",
    subcategories: [
      {
        name: {
          sq: "Specialitet për dy persona",
          en: "Specialty for two persons"
        },
        description: {
          sq: "Mish ne shitæ, medajon, mish furæ, benxolle pule, oriz, perime, pomitri",
          en: "Veal meat, beef medallion, pork meat, chicken breast, rice, vegetables, potatoes"
        },
        price: {
          sq: "27.99€",
          en: "27.99€"
        }
      },
      {
        name: {
          sq: "Extra Biftek",
          en: "Extra Steak"
        },
        description: {
          sq: "Pure patate, perime sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "19.99€",
          en: "19.99€"
        }
      },
      {
        name: {
          sq: "Tomahawk Vīgī",
          en: "Veal Tomahawk"
        },
        description: {
          sq: "Pure patate, perime sezonale Vīgī",
          en: "Mashed potatoes, seasonal veal vegetables"
        },
        price: {
          sq: "23.99€",
          en: "23.99€"
        }
      },
      {
        name: {
          sq: "Kallet Vīgī",
          en: "Veal Ribs"
        },
        description: {
          sq: "Pure patate, perime sezonale Vīgī",
          en: "Mashed potatoes, seasonal veal vegetables"
        },
        price: {
          sq: "16.99€",
          en: "16.99€"
        }
      },
      {
        name: {
          sq: "Dry Aged Tomahawk Steak",
          en: "Dry Aged Tomahawk Steak"
        },
        description: {
          sq: "Pure patate, perimne sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "10.80€ /100gr (minimumi porosis 400gr)",
          en: "10.80€ /100gr (minimum order 400gr)"
        }
      },
      {
        name: {
          sq: "Dry Aged T-bone Steak",
          en: "Dry Aged T-bone Steak"
        },
        description: {
          sq: "Pure patate, perimne sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "11.99€ /100gr (minimumi porosis 400gr)",
          en: "11.99€ /100gr (minimum order 400gr)"
        }
      },
      {
        name: {
          sq: "Biftek Vīgī 500gr",
          en: "Veal Steak 500gr"
        },
        description: {
          sq: "Pure patate, perimne sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "39.99€",
          en: "39.99€"
        }
      },
      {
        name: {
          sq: "Biftek Vīgī 1Kg",
          en: "Veal Steak 1Kg"
        },
        description: {
          sq: "Pure patate, perimne sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "79.99€",
          en: "79.99€"
        }
      },
      {
        name: {
          sq: "Biftek GOLD",
          en: "GOLD Steak"
        },
        description: {
          sq: "Pure patate, perimne sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "47.40€",
          en: "47.40€"
        }
      },
      {
        name: {
          sq: "Biftek nē Guri",
          en: "Stone Cooked Steak"
        },
        description: {
          sq: "Pure patate, perime sezonale (Shebeleri che nē ombeine te micenedörme 60% i plekur)",
          en: "Mashed potatoes, seasonal vegetables (Served on hot stone, 60% cooked)"
        },
        price: {
          sq: "28.80€",
          en: "28.80€"
        }
      },
      {
        name: {
          sq: "Mish Vīgī nē Guri",
          en: "Stone Cooked Veal"
        },
        description: {
          sq: "Pure patate, perime sezonale (Shebeleri che nē ombeine te micenedörme 60% i plekur)",
          en: "Mashed potatoes, seasonal vegetables (Served on hot stone, 60% cooked)"
        },
        price: {
          sq: "21.60€",
          en: "21.60€"
        }
      },
      {
        name: {
          sq: "Extra Kombinim",
          en: "Extra Combination"
        },
        description: {
          sq: "Pure patate, perime sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "17.99€",
          en: "17.99€"
        }
      },
      {
        name: {
          sq: "Medajon Me Salcē kēpurdhash",
          en: "Medallion with Mushroom Sauce"
        },
        description: {
          sq: "Pure patate, perime sezonale",
          en: "Mashed potatoes, seasonal vegetables"
        },
        price: {
          sq: "14.99€",
          en: "14.99€"
        }
      },
      {
        name: {
          sq: "Mish Vīgī",
          en: "Veal Meat"
        },
        description: {
          sq: "Perime tē ferguora, oriz",
          en: "Fried vegetables, rice"
        },
        price: {
          sq: "11.99€",
          en: "11.99€"
        }
      },
      {
        name: {
          sq: "Mish nē shtizē",
          en: "Skewered Meat"
        },
        description: {
          sq: "Perime tē ferguora, oriz",
          en: "Fried vegetables, rice"
        },
        price: {
          sq: "6.49€",
          en: "6.49€"
        }
      },
      {
        name: {
          sq: "Mish i kombinuar",
          en: "Mixed Meat"
        },
        description: {
          sq: "Mish pule, mish vīgī, mish furæ, mish nē fel, Perime tē ferguora, oriz",
          en: "Chicken, veal, pork, lamb, Fried vegetables, rice"
        },
        price: {
          sq: "11.49€",
          en: "11.49€"
        }
      },
      {
        name: {
          sq: "Mish vīgī i flakssur",
          en: "Grilled Veal"
        },
        description: {
          sq: "Karrot, spec i kuq, spec i gleibert, kerpurdha",
          en: "Carrot, red pepper, green pepper, mushrooms"
        },
        price: {
          sq: "9.99€",
          en: "9.99€"
        }
      },
      {
        name: {
          sq: "Mish pule i flakssur",
          en: "Grilled Chicken"
        },
        description: {
          sq: "Karrot, spec i kuq, spec i gleibert, kerpurdha",
          en: "Carrot, red pepper, green pepper, mushrooms"
        },
        price: {
          sq: "6.49€",
          en: "6.49€"
        }
      },
      {
        name: {
          sq: "File Pule",
          en: "Chicken Fillet"
        },
        description: {
          sq: "Perime tē ferguora, oriz",
          en: "Fried vegetables, rice"
        },
        price: {
          sq: "5.49€",
          en: "5.49€"
        }
      },
      {
        name: {
          sq: "Gorden blue e pules",
          en: "Chicken Cordon Bleu"
        },
        description: {
          sq: "Kaqkavall, penhule, perime, oriz, salcē kēpurdhash",
          en: "Kashkaval cheese, ham, vegetables, rice, mushroom sauce"
        },
        price: {
          sq: "7.49€",
          en: "7.49€"
        }
      },
      {
        name: {
          sq: "Skenderbeg",
          en: "Skanderbeg"
        },
        description: {
          sq: "Perime tē ferguora, oriz, kaqkavall, djalhe, sos tartar",
          en: "Fried vegetables, rice, kashkaval cheese, garlic, tartar sauce"
        },
        price: {
          sq: "12.49€",
          en: "12.49€"
        }
      },
      {
        name: {
          sq: "Pleskovicē",
          en: "Pljeskavica"
        },
        description: {
          sq: "Lokēr, pomitri",
          en: "Lettuce, potatoes"
        },
        price: {
          sq: "4.49€",
          en: "4.49€"
        }
      },
      {
        name: {
          sq: "Pleskovicē Shiēpie",
          en: "House Pljeskavica"
        },
        description: {
          sq: "Pēshule, speca, kaqkavall, kajmak, pomitri",
          en: "Peppers, cheese, kajmak, potatoes"
        },
        price: {
          sq: "6.99€",
          en: "6.99€"
        }
      },
      {
        name: {
          sq: "Pleskovicē e mbushur",
          en: "Stuffed Pljeskavica"
        },
        description: {
          sq: "Perime tē ferguora, oriz, djalhe",
          en: "Fried vegetables, rice, garlic"
        },
        price: {
          sq: "6.60€",
          en: "6.60€"
        }
      },
      {
        name: {
          sq: "File Pule vieneze",
          en: "Viennese Chicken Fillet"
        },
        description: {
          sq: "Perime tē ferguora, oriz, limon, salcē tartar",
          en: "Fried vegetables, rice, lemon, tartar sauce"
        },
        price: {
          sq: "6.50€",
          en: "6.50€"
        }
      }
    ]
  }
  ,
  {
    title: {
      id: 'pasta',
      sq: "Specialitete Furre",
      en: "Oven Specialties"
    },
    svg: <GiBarbedCoil size={35} />,
    link: "/oven-specialties",
    subcategories: [
      {
        name: {
          sq: "Pjekje Viçi",
          en: "Veal Roast"
        },
        description: {
          sq: "Perime tê férguara, oriz",
          en: "Fried vegetables, rice"
        },
        price: {
          sq: "11.99€",
          en: "11.99€"
        }
      },
      {
        name: {
          sq: "Muskuj Viçi",
          en: "Veal Muscles"
        },
        description: {
          sq: "Perime tê férguara, oriz",
          en: "Fried vegetables, rice"
        },
        price: {
          sq: "12.49€",
          en: "12.49€"
        }
      },
      {
        name: {
          sq: "Pjekje Viçi nê tavë",
          en: "Veal Roast in Pan"
        },
        description: {
          sq: "Perime tê férguara, oriz, kaqkavall",
          en: "Fried vegetables, rice, kashkaval cheese"
        },
        price: {
          sq: "12.49€",
          en: "12.49€"
        }
      },
      {
        name: {
          sq: "Muskuj Viçi nê tavë",
          en: "Veal Muscles in Pan"
        },
        description: {
          sq: "Perime tê férguara, oriz, kaqkavall",
          en: "Fried vegetables, rice, kashkaval cheese"
        },
        price: {
          sq: "12.99€",
          en: "12.99€"
        }
      },
      {
        name: {
          sq: "Tavë për dy persona",
          en: "Pan for Two Persons"
        },
        description: {
          sq: "Kotlet, mish furre, biftek, Perime tê férguara, oriz",
          en: "Cutlets, pork meat, steak, fried vegetables, rice"
        },
        price: {
          sq: "29.99€",
          en: "29.99€"
        }
      },
      {
        name: {
          sq: "Brinje Viçi",
          en: "Veal Ribs"
        },
        description: {
          sq: "Perime tê férguara, dhe pure patatesh",
          en: "Fried vegetables, and mashed potatoes"
        },
        price: {
          sq: "12.99€",
          en: "12.99€"
        }
      }
    ]
  }
  ,
  {
    title: {
      sq: "Pijet",
      en: "Drinks"
    },
    svg: <GiGlassCelebration size={35} />,
    link: "/drinks",
    hasSubcategories: true,
    subcategories: [
      {
        name: {
          sq: "Pije të ftohta",
          en: "Soft drinks"
        },
        items: [
          { name: { sq: "Coca Cola", en: "Coca Cola" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Coca Cola zero", en: "Coca Cola Zero" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fanta Orange", en: "Fanta Orange" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fanta Tropical", en: "Fanta Tropical" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Sprite", en: "Sprite" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Schweppes", en: "Schweppes" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Schweppes Tonic", en: "Schweppes Tonic" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "RedBull", en: "RedBull" }, price: { sq: "3.50€", en: "3.50€" } },
          { name: { sq: "Jaffa Ice Tea", en: "Jaffa Ice Tea" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Mollë", en: "Fructal Apple" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Boronicë", en: "Fructal Blueberry" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Pjeshkë", en: "Fructal Peach" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Vishnje", en: "Fructal Cherry" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Dredhëz", en: "Fructal Strawberry" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Portokall", en: "Fructal Orange" }, price: { sq: "1.50€", en: "1.50€" } },
          { name: { sq: "Fructal Karrotë", en: "Fructal Carrot" }, price: { sq: "1.50€", en: "1.50€" } }
        ]
      },
      {
        name: {
          sq: "Ujë",
          en: "Waters"
        },
        items: [
          { name: { sq: "Ujë Rugove 0.75l", en: "Rugove Water 0.75l" }, price: { sq: "3.00€", en: "3.00€" } },
          { name: { sq: "Ujë Dea Mineral 0.75l", en: "Dea Mineral Water 0.75l" }, price: { sq: "3.00€", en: "3.00€" } },
          { name: { sq: "Aqua Panna 0.75l", en: "Aqua Panna 0.75l" }, price: { sq: "3.50€", en: "3.50€" } },
          { name: { sq: "San Pelegrino 0.75l", en: "San Pelegrino 0.75l" }, price: { sq: "3.50€", en: "3.50€" } },
          { name: { sq: "Ujë Rugove 0.25l", en: "Rugove Water 0.25l" }, price: { sq: "1.00€", en: "1.00€" } },
          { name: { sq: "Radenska Mineral 0.25l", en: "Radenska Mineral 0.25l" }, price: { sq: "1.00€", en: "1.00€" } }
        ]
      },
      // Add the new Fresh Juices/Cocktails subcategory
      {
        name: {
          sq: "Lëngje të freskëta Koktej",
          en: "Fresh Juices Cocktails"
        },
        items: [
          {
            name: { sq: "Fresh Portokall/Orange", en: "Fresh Orange" },
            price: { sq: "3.50€", en: "3.50€" },
            description: { sq: "", en: "" }
          },
          {
            name: { sq: "Fresh Mix", en: "Fresh Mix" },
            price: { sq: "4.00€", en: "4.00€" },
            description: { sq: "", en: "" }
          },
          {
            name: { sq: "Blue Havana cocktail", en: "Blue Havana cocktail" },
            price: { sq: "3.00€", en: "3.00€" },
            description: { sq: "(pa alkool)", en: "(non alcoholic)" }
          },
          {
            name: { sq: "Tequila Sunrise", en: "Tequila Sunrise" },
            price: { sq: "4.00€", en: "4.00€" },
            description: { sq: "", en: "" }
          }
        ]
      },
      {
        name: {
          sq: "Shampanjat",
          en: "Champagnes"
        },
        items: [
          {
            name: { sq: "Moët Chandon Brut", en: "Moët Chandon Brut" },
            price: { sq: "150.00€", en: "150.00€" }
          },
          {
            name: { sq: "Moët Chandon Ros", en: "Moët Chandon Rosé" },
            price: { sq: "170.00€", en: "170.00€" }
          },
          {
            name: { sq: "Moët Ice Imperial", en: "Moët Ice Imperial" },
            price: { sq: "250.00€", en: "250.00€" }
          },
          {
            name: { sq: "Prosseco", en: "Prosseco" },
            price: { sq: "52.00€", en: "52.00€" }
          },
          {
            name: { sq: "Armand de Brignac", en: "Armand de Brignac" },
            price: { sq: "999.00€", en: "999.00€" }
          }
        ]
      },
      {
        name: {
          sq: "Pije Alkoolike",
          en: "Alcoholic Drinks"
        },
        items: [
          {
            name: { sq: "Birré e Peiès", en: "Birré e Peiès" },
            price: { sq: "2.50€", en: "2.50€" }
          },
          {
            name: { sq: "Krigell 0.3I", en: "Krigell 0.3I" },
            price: { sq: "2.50€", en: "2.50€" }
          },
          {
            name: { sq: "Heineken", en: "Heineken" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Llashko", en: "Llashko" },
            price: { sq: "2.50€", en: "2.50€" }
          },
          {
            name: { sq: "Tuborg", en: "Tuborg" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Corona", en: "Corona" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Paulaner 0.5I", en: "Paulaner 0.5I" },
            price: { sq: "4.50€", en: "4.50€" }
          },
          {
            name: { sq: "Paulaner 0.3I", en: "Paulaner 0.3I" },
            price: { sq: "3.50€", en: "3.50€" }
          },
          {
            name: { sq: "Bavaria Zero", en: "Bavaria Zero" },
            price: { sq: "2.00€", en: "2.00€" }
          },
          {
            name: { sq: "Raki Dardhe", en: "Raki Dardhe" },
            price: { sq: "3.50€", en: "3.50€" }
          },
          {
            name: { sq: "Raki Fioni", en: "Raki Fioni" },
            price: { sq: "3.50€", en: "3.50€" }
          },
          {
            name: { sq: "Raki Rrushi", en: "Raki Rrushi" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Raki Shtèpie", en: "Raki Shtèpie" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Raki e Kumbullès", en: "Raki e Kumbullès" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Raki Molle", en: "Raki Molle" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Grey Goose Vodka", en: "Grey Goose Vodka" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "Jack Daniels", en: "Jack Daniels" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Ballentine's", en: "Ballentine's" },
            price: { sq: "3.50€", en: "3.50€" }
          },
          {
            name: { sq: "Jagermister", en: "Jägermeister" },
            price: { sq: "3.50€", en: "3.50€" }
          },
          {
            name: { sq: "Gin Hendricks", en: "Gin Hendricks" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "Chivas Regal", en: "Chivas Regal" },
            price: { sq: "5.00€", en: "5.00€" }
          },
          {
            name: { sq: "Konjak", en: "Cognac" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Stock", en: "Stock" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Gin", en: "Gin" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Tequila", en: "Tequila" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Gin Pink", en: "Pink Gin" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "OUZO", en: "Ouzo" },
            price: { sq: "2.60€", en: "2.60€" }
          },
          {
            name: { sq: "JB Wiskey", en: "JB Whiskey" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Johnie Walker", en: "Johnnie Walker" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Bacardi", en: "Bacardi" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Campari", en: "Campari" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Martini", en: "Martini" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Malibu", en: "Malibu" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Ramazzoti", en: "Ramazzotti" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Amaretto", en: "Amaretto" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Baileys", en: "Baileys" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Badell", en: "Badell" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Vodkë e Kuqe", en: "Red Vodka" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Vodka Smirnoff", en: "Smirnoff Vodka" },
            price: { sq: "3.00€", en: "3.00€" }
          },
          {
            name: { sq: "Belvedere", en: "Belvedere" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "Tequila Gold", en: "Gold Tequila" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Vodka apsolut", en: "Absolut Vodka" },
            price: { sq: "3.60€", en: "3.60€" }
          },
          {
            name: { sq: "Black Label", en: "Black Label" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "JB GENTLEMAN", en: "JB Gentleman" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "Limoncello", en: "Limoncello" },
            price: { sq: "2.50€", en: "2.50€" }
          },
          {
            name: { sq: "Jack Honey", en: "Jack Daniel's Honey" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Hennessy", en: "Hennessy" },
            price: { sq: "6.00€", en: "6.00€" }
          },
          {
            name: { sq: "Yeni Raki", en: "Yeni Raki" },
            price: { sq: "3.00€", en: "3.00€" }
          }
        ]
      },
      {
        name: {
          sq: "Verë të Vogla (18ml)",
          en: "Small Wines (18ml)"
        },
        items: [
          {
            name: { sq: "Stone Castle - Cabernet", en: "Stone Castle - Cabernet" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Stone Castle - Chardonnay", en: "Stone Castle - Chardonnay" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Alexandria - Riesling", en: "Alexandria - Riesling" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Alexandria Cuve - Cabernet", en: "Alexandria Cuve - Cabernet" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Tarani - Sauvignon", en: "Tarani - Sauvignon" },
            price: { sq: "4.00€", en: "4.00€" }
          },
          {
            name: { sq: "Tarani - Malbec", en: "Tarani - Malbec" },
            price: { sq: "4.00€", en: "4.00€" }
          }
        ]
      }
      ,
      {
        name: {
          sq: "Verë Lokale (0.75l)",
          en: "Local Wines (0.75l)"
        },
        items: [
          { 
            name: { sq: "Stone Castle - Cabernet", en: "Stone Castle - Cabernet" }, 
            price: { sq: "35.99€", en: "35.99€" }
          },
          { 
            name: { sq: "Stone Castle - Chardonnay", en: "Stone Castle - Chardonnay" }, 
            price: { sq: "35.99€", en: "35.99€" }
          },
          { 
            name: { sq: "Stone Castle - Gecai Estate", en: "Stone Castle - Gecai Estate" }, 
            price: { sq: "120.00€", en: "120.00€" }
          },
          { 
            name: { sq: "Elephant - Chardonnay", en: "Elephant - Chardonnay" }, 
            price: { sq: "39.99€", en: "39.99€" }
          },
          { 
            name: { sq: "Elephant - Cabernet", en: "Elephant - Cabernet" }, 
            price: { sq: "39.99€", en: "39.99€" }
          },
          { 
            name: { sq: "She - White", en: "She - White" }, 
            price: { sq: "50.00€", en: "50.00€" }
          },
          { 
            name: { sq: "She - Red", en: "She - Red" }, 
            price: { sq: "60.00€", en: "60.00€" }
          }
        ]
      },
      {
        name: {
          sq: "Verë të Bardha (0.75l)",
          en: "White Wines (0.75l)"
        },
        items: [
          { 
            name: { sq: "Alexandria Riesling", en: "Alexandria Riesling" }, 
            price: { sq: "20.00€", en: "20.00€" }
          },
          { 
            name: { sq: "Taromi Sauvignon", en: "Taromi Sauvignon" }, 
            price: { sq: "20.00€", en: "20.00€" }
          },
          { 
            name: { sq: "Chisotou Lamille Vincent", en: "Chisotou Lamille Vincent" }, 
            price: { sq: "27.00€", en: "27.00€" }
          },
          { 
            name: { sq: "La Romosola Echise", en: "La Romosola Echise" }, 
            price: { sq: "70.60€", en: "70.60€" }
          },
          { 
            name: { sq: "Donna Luce", en: "Donna Luce" }, 
            price: { sq: "65.00€", en: "65.00€" }
          },
          { 
            name: { sq: "LÜFETA Fiona", en: "LÜFETA Fiona" }, 
            price: { sq: "57.00€", en: "57.00€" }
          },
          { 
            name: { sq: "Primoliano Vervaglione", en: "Primoliano Vervaglione" }, 
            price: { sq: "40.00€", en: "40.00€" }
          },
          { 
            name: { sq: "Grace Di Tufio", en: "Grace Di Tufio" }, 
            price: { sq: "54.00€", en: "54.00€" }
          },
          { 
            name: { sq: "Vers Rose", en: "Vers Rosé" }, 
            price: { sq: "30.00€", en: "30.00€" }
          }
        ]
      },
      {
        name: {
          sq: "Verë të Kuqe (0.75l)",
          en: "Red Wines (0.75l)"
        },
        items: [
          { 
            name: { sq: "Taromi Mellese", en: "Taromi Mellese" }, 
            price: { sq: "20.00€", en: "20.00€" }
          },
          { 
            name: { sq: "Alexandria Caberneri", en: "Alexandria Cabernet" }, 
            price: { sq: "20.00€", en: "20.00€" }
          },
          { 
            name: { sq: "Amorone Classico Bertoni", en: "Amarone Classico Bertani" }, 
            price: { sq: "350.00€", en: "350.00€" }
          },
          { 
            name: { sq: "Ramallo", en: "Ramallo" }, 
            price: { sq: "240.00€", en: "240.00€" }
          },
          { 
            name: { sq: "Amorone-BERTANI", en: "Amarone Bertani" }, 
            price: { sq: "120.00€", en: "120.00€" }
          },
          { 
            name: { sq: "Barolo", en: "Barolo" }, 
            price: { sq: "95.00€", en: "95.00€" }
          },
          { 
            name: { sq: "Replo", en: "Replo" }, 
            price: { sq: "56.00€", en: "56.00€" }
          },
          { 
            name: { sq: "Amorone Valpolicello", en: "Amarone Valpolicella" }, 
            price: { sq: "138.00€", en: "138.00€" }
          },
          { 
            name: { sq: "ESSENZE di Barolo", en: "Essenze di Barolo" }, 
            price: { sq: "95.00€", en: "95.00€" }
          },
          { 
            name: { sq: "Starmanello", en: "Starmanello" }, 
            price: { sq: "57.00€", en: "57.00€" }
          }
        ]
      }
    ]
  },

  {
    title: {
      sq: "Desertet",
      en: "Desserts"
    },
    svg: <GiCakeSlice size={35} />,
    link: "/desserts",
    hasSubcategories: false,
    subcategories: [
      {
        name: {
          sq: "Tortë e nxehtë",
          en: "Lava cake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      },
      {
        name: {
          sq: "Cheesecake",
          en: "Cheesecake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      },
      {
        name: {
          sq: "Tortë me limon",
          en: "Lemon cake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      },
      {
        name: {
          sq: "San Sebastian",
          en: "San Sebastian"
        },
        description: null,
        price: {
          sq: "4.99€",
          en: "4.99€"
        }
      },
      {
        name: {
          sq: "Tortë me mjedër dhe fēsték",
          en: "Raspberry & Pistachio cake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      },
      {
        name: {
          sq: "Qokollatë Dubai",
          en: "Dubai chocolate"
        },
        description: null,
        price: {
          sq: "5.99€",
          en: "5.99€"
        }
      },
      {
        name: {
          sq: "Trilège",
          en: "Trilèce"
        },
        description: null,
        price: {
          sq: "1.40€",
          en: "1.40€"
        }
      },
      {
        name: {
          sq: "Tortë me ananas dhe kokos",
          en: "Pineapple & Coconut cake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      },
      {
        name: {
          sq: "Tortë me fruta mali",
          en: "Forest fruits cake"
        },
        description: null,
        price: {
          sq: "2.50€",
          en: "2.50€"
        }
      }
    ],
  }
];

export default categories;