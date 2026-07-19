import Dietcoke from "../assets/Dietcoke.jpg";
import coke from "../assets/coke.jpg";
import fanta from "../assets/fanta.jpg";
import hell from "../assets/hell.jpg";
import kurkure from "../assets/kurkure.png";
import Lays from "../assets/Lays.png";
import mirinda from "../assets/mirinda.jpg";
import monster from "../assets/monster.jpg";
import pepsi from "../assets/pepsi.jpg";
import redbull from "../assets/redbull.jpg";
import sprite from "../assets/sprite.jpg";
import butterscotchcone from "../assets/butterscotchcone.webp";
import chocobar from "../assets/chocobar.webp";
import Chocolatecone from "../assets/Chocolatecone.webp";
import chocolatecup from "../assets/chocolatecup.webp";
import mango from "../assets/mango.webp";
import orange from "../assets/orange.webp";
import rabdi from "../assets/rabdi.webp";
import strawberrycup from "../assets/strawberrycup.webp";
import Vanillacup from "../assets/Vanillacup.webp";
import americannuts from "../assets/americannuts.webp";

//Stationery Images

import a4 from "../assets/Stationery/a4.webp";
import ballpen from "../assets/Stationery/ballpen.webp";
import crayons from "../assets/Stationery/crayons.webp";
import diaryimage from "../assets/Stationery/diaryimage.webp";
import drawingbook from "../assets/Stationery/drawingbook.webp";
import eraser from "../assets/Stationery/eraser.webp";
import gelpen from "../assets/Stationery/gelpen.webp";
import geometrybox from "../assets/Stationery/geometrybox.webp";
import highligher from "../assets/Stationery/highlighter.webp";
import longnotebook from "../assets/Stationery/longnotebook.webp";
import marker from "../assets/Stationery/marker.webp";
import natrajpencil from "../assets/Stationery/natrajpencil.webp";
import pmarker from "../assets/Stationery/pmarker.webp";
import sharpner from "../assets/Stationery/sharpner.webp";
import sketchcolor from "../assets/Stationery/sketchcolor.webp";
import smallnotebook from "../assets/Stationery/smallnotebook.webp";
import spiralnotebook from "../assets/Stationery/spiralnotebook.webp";
import watercolor from "../assets/Stationery/watercolor.webp";




const product = [{
        // Stationery Products
        id: 1,
        name: "Small Notebook",
        price: 80,
        category: "stationery",
        description: "200 pages, college-ruled",
        image: smallnotebook
    },
    {
        id: 2,
        name: "Long Notebook",
        price: 150,
        description: "500 pages",
        category: "stationery",
        image: longnotebook
    },
    {
        id: 3,
        name: "Eraser",
        price: 10,
        description: "Doms eraser",
        category: "stationery",
        image: eraser
    },
    {
        id: 4,
        name: "Sharpner",
        price: 5,
        description: "Pencil sharpner",
        category: "stationery",
        image: sharpner
    },
    {
        id: 5,
        name: "Spiral Notebook",
        price: 110,
        description: "400 pages",
        category: "stationery",
        image: spiralnotebook
    },
    {
        id: 6,
        name: "Diary",
        price: 250,
        description: "Diary",
        category: "stationery",
        image: diaryimage
    },
    {
        id: 7,
        name: "Drawing Book",
        price: 30,
        description: "Sketch book A4 size",
        category: "stationery",
        image: drawingbook
    },
    {
        id: 8,
        name: "A4 Sheets",
        price: 390,
        description: "Blank sheets full set",
        category: "stationery",
        image: a4
    },
    {
        id: 9,
        name: "Ball Pen",
        price: 20,
        description: "Blue ",
        category: "stationery",
        image: ballpen
    },
    {
        id: 10,
        name: "Gel Pen",
        price: 20,
        description: "blue",
        category: "stationery",
        image: gelpen
    },
    {
        id: 11,
        name: "Marker",
        price: 30,
        description: "Temporary Marker",
        category: "stationery",
        image: marker
    },
    {
        id: 12,
        name: "Marker",
        price: 30,
        description: "Permanent Marker",
        category: "stationery",
        image: pmarker
    },
    {
        id: 13,
        name: "Sketch color",
        price: 50,
        description: "All colors pack",
        category: "stationery",
        image: sketchcolor
    },
    {
        id: 14,
        name: "Water color",
        price: 30,
        description: "water color with brush",
        category: "stationery",
        image: watercolor
    },
    {
        id: 15,
        name: "Crayons",
        price: 40,
        description: "Temporary Marker",
        category: "stationery",
        image: crayons
    },
    {
        id: 16,
        name: "Highlighter",
        price: 20,
        description: "All colors",
        category: "stationery",
        image: highligher
    },
    {
        id: 17,
        name: "Pencil",
        price: 80,
        description: "Full Box",
        category: "stationery",
        image: natrajpencil
    },
    {
        id: 18,
        name: "Geometry-Box",
        price: 300,
        description: "Classmate Box",
        category: "stationery",
        image: geometrybox
    },

    //Food & Drinks
    {
        id: 19,
        name: "Coca Cola",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: coke
    },
    {
        id: 20,
        name: "Diet-Coke",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: Dietcoke
    },
    {
        id: 21,
        name: "Fanta",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: fanta
    },
    {
        id: 22,
        name: "Hell",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: hell
    },
    {
        id: 23,
        name: "Mirinda",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: mirinda
    },
    {
        id: 24,
        name: "Monster",
        price: 120,
        description: "400 ml",
        category: "food & drinks",
        image: monster
    },
    {
        id: 25,
        name: "Pepsi",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: pepsi
    },
    {
        id: 26,
        name: "Red Bull",
        price: 140,
        description: "400 ml",
        category: "food & drinks",
        image: redbull
    },
    {
        id: 27,
        name: "Sprite",
        price: 50,
        description: "400 ml",
        category: "food & drinks",
        image: sprite
    },
    {
        id: 28,
        name: "Kurkure",
        price: 20,
        description: "Masala Munch",
        category: "food & drinks",
        image: kurkure
    },
    {
        id: 29,
        name: "Lays",
        price: 25,
        description: "All Flavours",
        category: "food & drinks",
        image: Lays
    },

    // Ice Creams
    {
        id: 30,
        name: "Butterscotch Cone",
        price: 30,
        description: "butterscotch flavour",
        category: "icecream",
        image: butterscotchcone
    },
    {
        id: 31,
        name: "Chocolate Cone",
        price: 25,
        description: "Chocolate flavour",
        category: "icecream",
        image: Chocolatecone
    },
    {
        id: 32,
        name: "Vanilla Cup",
        price: 20,
        description: "Vanilla Flavour",
        category: "icecream",
        image: Vanillacup
    },
    {
        id: 33,
        name: "Chocolate Cup",
        price: 20,
        description: "Chocolate Flavour",
        category: "icecream",
        image: chocolatecup
    },
    {
        id: 34,
        name: "Strawberry cup",
        price: 20,
        description: "Strawberry Flavour",
        category: "icecream",
        image: strawberrycup
    },

    {
        id: 35,
        name: "American Nuts",
        price: 40,
        description: "With Fruits and Nuts",
        category: "icecream",
        image: americannuts
    },
    {
        id: 36,
        name: "Choco Bar",
        price: 10,
        description: "Delicious Chocolate flavour",
        category: "icecream",
        image: chocobar
    },
    {
        id: 37,
        name: "Rabdi",
        price: 10,
        description: "Indian rabdi flavour",
        category: "icecream",
        image: rabdi
    },
    {
        id: 38,
        name: "Orange",
        price: 5,
        description: "Delicious Orange Flavour",
        category: "icecream",
        image: orange
    },
    {
        id: 39,
        name: "Mango",
        price: 20,
        description: "Delicious Mango flavour",
        category: "icecream",
        image: mango
    }
];

export default product;