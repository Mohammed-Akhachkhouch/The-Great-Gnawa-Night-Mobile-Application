import checker from "../src/config/database.js";
import Artist from "../src/models/artist.js";

const artistsDataCompletelyNew = [
  {
    name: "Maâlem Aziz Ouazzani",
    speciality: "Spiritual Hypnosis",
    bio: "His performances are a journey into deep trance, focusing on the spiritual healing power of Gnawa.",
    photo: "https://i.pinimg.com/736x/8f/9a/0b/8f9a0b.jpg",
    performance_time: new Date("2025-12-30T17:00:00Z"),
  },
  {
    name: "Maâlema Hanane Sefrioui",
    speciality: "Desert Blues Infusion",
    bio: "Fusing the melancholy of the desert blues with the pulsating rhythm of the Gnawa tradition.",
    photo: "https://i.pinimg.com/736x/2c/3d/4e/2c3d4e.jpg",
    performance_time: new Date("2025-12-30T18:00:00Z"),
  },
  {
    name: "Maâlem Younes Benjelloun",
    speciality: "Krakebs and Percussion",
    bio: "A master of the metal castanets (krakebs), leading high-energy percussion ensembles.",
    photo: "https://i.pinimg.com/736x/5f/6g/7h/5f6g7h.jpg",
    performance_time: new Date("2025-12-30T19:00:00Z"),
  },
  {
    name: "Maâlem Said Tazi",
    speciality: "Andalusian Gnawa Mix",
    bio: "Bringing subtle Andalusian melodies into the core structure of the Gnawa sound.",
    photo: "https://i.pinimg.com/736x/9d/0e/1b/9d0e1b.jpg",
    performance_time: new Date("2025-12-30T20:00:00Z"),
  },
  {
    name: "Maâlema Laila Bouaida",
    speciality: "Traditional Call & Response",
    bio: "A specialist in the authentic call-and-response vocal tradition of the ancient rituals.",
    photo: "https://i.pinimg.com/736x/1h/2i/3j/1h2i3j.jpg",
    performance_time: new Date("2025-12-30T21:00:00Z"),
  },
  {
    name: "Maâlem Reda Khamlichi",
    speciality: "Acoustic Guembri",
    bio: "Focuses on the pure, unamplified sound of the guembri and traditional acoustic instrumentation.",
    photo: "https://i.pinimg.com/736x/4l/5m/6n/4l5m6n.jpg",
    performance_time: new Date("2025-12-30T22:00:00Z"),
  },
  {
    name: "Maâlem Zaki El Alaoui",
    speciality: "Cinematic Gnawa",
    bio: "His music is known for its dramatic and expansive soundscapes, often featured in films.",
    photo: "https://i.pinimg.com/736x/7p/8q/9r/7p8q9r.jpg",
    performance_time: new Date("2025-12-30T23:00:00Z"),
  },
  {
    name: "Maâlema Sanae Fihri",
    speciality: "Youth Gnawa Wave",
    bio: "Represents the new generation, blending electronic elements with deep Gnawa grooves.",
    photo: "https://i.pinimg.com/736x/0b/1c/2d/0b1c2d.jpg",
    performance_time: new Date("2025-12-31T00:00:00Z"),
  },
];

const seedArtists = async () => {
  try {
    await checker.sync({ force: true });
    await Artist.bulkCreate(artistsDataCompletelyNew);
    console.log(`${artistsDataCompletelyNew.length} completely new Gnawa artists seeded successfully!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding artists:", error);
    process.exit(1);
  }
};

seedArtists();