import mercury from '../assets/mercury.jpg'
import venus from '../assets/venus.jpg'
import earth from '../assets/earth.jpg'
import mars from '../assets/mars.jpg'
import jupiter from '../assets/jupiter.jpg'
import saturn from '../assets/saturn.jpg'
import uranus from '../assets/uranus.jpg'
import neptune from '../assets/neptune.jpg'
import ceres from '../assets/ceres.jpg'
import pluton from '../assets/pluton.jpg'
import moon from '../assets/moon.jpg'

import triton from '../assets/triton.jpg'

import titania from '../assets/titania.jpg'
import oberon from '../assets/oberon.jpg'
import umbriel from '../assets/umbriel.jpg'
import ariel from '../assets/ariel.jpg'
import miranda from '../assets/miranda.jpg'

import europe from '../assets/europe.jpg'
import io from '../assets/io.jpg'
import ganymede from '../assets/ganymede.jpg'
import callisto from '../assets/callisto.jpg'

import encelade from '../assets/encelade.jpg'
import titan from '../assets/titan.jpg'

import deimos from '../assets/deimos.jpg'
import phobos from '../assets/phobos.jpg'

import sun from '../assets/sun.jpg'

import charon from '../assets/charon.jpg'
import makemake from '../assets/makemake.jpg'
import sedna from '../assets/sedna.jpg'
import eris from '../assets/eris.jpg'
import haumea from '../assets/haumea.jpg'

export const planetList = [
    {
        name: "The Sun",
        category: "star",
        id: "sun0",
        cover: sun,
        position: 0,
        price: 10000000000,
        apsis: 0,
        description: "The star at the center of the Solar System."
    },
    {
        name: "Mercury",
        category: "planet",
        id: "mer1",
        cover: mercury,
        position: 1,
        price: 250000,
        apsis: 0.307499,
        description: "The smallest and closest planet to the Sun."
    },
    {
        name: "Venus",
        category: "planet",
        id: "ven2",
        cover: venus,
        position: 2,
        price: 1000000,
        apsis: 0.71843,
        description: "The second planet from the Sun, known for its thick atmosphere."
    },
    {
        name: "Earth",
        category: "planet",
        id: "ear3",
        cover: earth,
        position: 3,
        price: 100000000,
        apsis: 0.9832898912,
        description: "Our home planet, the only one known to support life."
    },
    {
        name: "The Moon",
        category: "moon",
        id: "moo3",
        cover: moon,
        position: 3.1,
        price: 2000000,
        apsis: 0.9832898912,
        description: "Earth's natural satellite, the closest celestial object to us."
    },
    {
        name: "Mars",
        category: "planet",
        id: "mar4",
        cover: mars,
        position: 4,
        price: 750000,
        apsis: 1.3814,
        description: "The Red Planet, known for its iron-rich surface."
    },
    {
        name: "Deimos",
        category: "moon",
        id: "dei4",
        cover: deimos,
        position: 4.1,
        price: 50000,
        apsis: 1.3814,
        description: "One of the two moons of Mars, the smaller and outer moon."
    },
    {
        name: "Phobos",
        category: "moon",
        id: "pho4",
        cover: phobos,
        position: 4.2,
        price: 75000,
        apsis: 1.3814,
        description: "The larger and innermost moon of Mars."
    },
    {
        name: "Ceres",
        category: "dwarf planet",
        id: "cer5",
        cover: ceres,
        position: 5,
        price: 200000,
        apsis: 2.558572,
        description: "The largest object in the asteroid belt between Mars and Jupiter, classified as a dwarf planet."
    },
    {
        name: "Jupiter",
        category: "planet",
        id: "jup6",
        cover: jupiter,
        position: 6,
        price: 5000000,
        apsis: 4.9511,
        description: "The largest planet in the Solar System, known for its Great Red Spot."
    },
    {
        name: "Europe",
        category: "moon",
        id: "eur6",
        cover: europe,
        position: 6.1,
        price: 1000000,
        apsis: 4.9511,
        description: "One of Jupiter's Galilean moons, with a subsurface ocean."
    },
    {
        name: "Io",
        category: "moon",
        id: "io6",
        cover: io,
        position: 6.2,
        price: 900000,
        apsis: 4.9511,
        description: "One of the most geologically active bodies in the Solar System, orbiting Jupiter."
    },
    {
        name: "Ganymede",
        category: "moon",
        id: "gan6",
        cover: ganymede,
        position: 6.3,
        price: 1200000,
        apsis: 4.9511,
        description: "The largest moon in the Solar System, a satellite of Jupiter."
    },
    {
        name: "Callisto",
        category: "moon",
        id: "cal6",
        cover: callisto,
        position: 6.4,
        price: 1100000,
        apsis: 4.9511,
        description: "A large moon of Jupiter, known for its ancient, heavily cratered surface."
    },
    {
        name: "Saturn",
        category: "planet",
        id: "sat7",
        cover: saturn,
        position: 7,
        price: 4500000,
        apsis: 9.023,
        description: "The second-largest planet in the Solar System, known for its beautiful rings."
    },
    {
        name: "Titan",
        category: "moon",
        id: "tit7",
        cover: titan,
        position: 7.1,
        price: 2000000,
        apsis: 9.023,
        description: "Saturn's largest moon, with a thick atmosphere and liquid methane lakes."
    },
    {
        name: "Enceladus",
        category: "moon",
        id: "enc7",
        cover: encelade,
        position: 7.2,
        price: 1500000,
        apsis: 9.023,
        description: "A small, icy moon of Saturn, known for its geysers of water vapor and ice."
    },
    {
        name: "Uranus",
        category: "planet",
        id: "ura8",
        cover: uranus,
        position: 8,
        price: 3000000,
        apsis: 18.2823,
        description: "A gas giant with a unique sideways rotation axis."
    },
    {
        name: "Titania",
        category: "moon",
        id: "tit8",
        cover: titania,
        position: 8.2,
        price: 1800000,
        apsis: 18.2823,
        description: "The largest moon of Uranus, known for its heavily cratered and complex surface features."
    },
    {
        name: "Oberon",
        category: "moon",
        id: "obe8",
        cover: oberon,
        position: 8.3,
        price: 1700000,
        apsis: 18.2823,
        description: "The second-largest moon of Uranus, with a heavily cratered surface indicating a long history of impacts."
    },
    {
        name: "Umbriel",
        category: "moon",
        id: "umb8",
        cover: umbriel,
        position: 8.4,
        price: 1600000,
        apsis: 18.2823,
        description: "A moon of Uranus with a dark, heavily cratered surface, among the oldest surfaces in the Solar System."
    },
    {
        name: "Ariel",
        category: "moon",
        id: "ari8",
        cover: ariel,
        position: 8.5,
        price: 1550000,
        apsis: 18.2823,
        description: "One of the larger moons of Uranus, featuring a smooth surface with geological formations like valleys and ridges."
    },
    {
        name: "Miranda",
        category: "moon",
        id: "mir8",
        cover: miranda,
        position: 8.6,
        price: 1750000,
        apsis: 18.2823,
        description: "The smallest and innermost of the main moons of Uranus, known for its varied surface and unique geological features."
    },
    {
        name: "Neptune",
        category: "planet",
        id: "nep9",
        cover: neptune,
        position: 9,
        price: 3500000,
        apsis: 29.8116,
        description: "The farthest planet from the Sun, known for its deep blue color."
    },
    {
        name: "Triton",
        category: "moon",
        id: "trit9",
        cover: triton,
        position: 9.1,
        price: 3500000,
        apsis: 29.8116,
        description: "The largest moon of Neptune, and the only large moon in the Solar System with a retrograde orbit."
    },
    {
        name: "Pluto",
        category: "dwarf planet",
        id: "plu10",
        cover: pluton,
        position: 10,
        price: 500000,
        apsis: 29.5733917,
        description: "A dwarf planet in the Kuiper Belt, formerly classified as the ninth planet."
    },
    {
        name: "Charon",
        category: "moon",
        id: "cha10",
        cover: charon,
        position: 10.1,
        price: 300000,
        apsis: 29.5733917,
        description: "The largest moon of Pluto, thought to be tidally locked to it."
    },
    {
        name: "Haumea",
        category: "dwarf planet",
        id: "hau15",
        cover: haumea,
        position: 11,
        price: 600000,
        apsis: 34.647,
        description: "A dwarf planet with a highly elongated shape and two known moons.",
        artistic: true
    },
    {
        name: "Makemake",
        category: "dwarf planet",
        id: "mak12",
        cover: makemake,
        position: 12,
        price: 450000,
        apsis: 38.104,
        description: "A dwarf planet with a reddish color, located in the Kuiper Belt.",
        artistic: true
    },
    {
        name: "Eris",
        category: "dwarf planet",
        id: "eri13",
        cover: eris,
        position: 13,
        price: 550000,
        apsis: 38.271,
        description: "One of the largest known dwarf planets, located in the scattered disc.",
        artistic: true
    },
    {
        name: "Sedna",
        category: "dwarf planet",
        id: "sed11",
        cover: sedna,
        position: 14,
        price: 400000,
        apsis: 76.0616,
        description: "A distant and mysterious dwarf planet with an extremely elliptical orbit.",
        artistic: true
    },
]