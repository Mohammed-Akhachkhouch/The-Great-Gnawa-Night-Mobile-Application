// import Artist from "../src/models/artist.js";

// const seedArtist = async () => {
//   try {
//     await Artist.create({
//       name: "Gnawa Master",
//       bio: "Famous Gnawa artist",
//       photo: "photo_url.jpg",
//       performance_time: "21:00"
//     });
//     console.log("Artist added successfully");
//   } catch (err) {
//     console.log("Seeding artist failed", err);
//   }
// };

// seedArtist();


module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Artists", [
      {
        name: "Mahmoud Guinia",
        bio: "One of the most famous Maâlems of Gnawa music from Essaouira.",
        photo: "https://example.com/photos/mahmoud-guinia.jpg",
        performance_time: new Date("2025-12-28T20:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hamid Kasri",
        bio: "A legendary Gnawa master known for mixing traditional and modern Gnawa.",
        photo: "https://example.com/photos/hamid-kasri.jpg",
        performance_time: new Date("2025-12-28T20:45:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mustapha Bakbou",
        bio: "Maâlem and Moroccan singer with over 40 years of Gnawa heritage.",
        photo: "https://example.com/photos/mustapha-bakbou.jpg",
        performance_time: new Date("2025-12-28T21:30:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hassan Boussou",
        bio: "Famous Gnawa artist blending African rhythms with modern fusion.",
        photo: "https://example.com/photos/hassan-boussou.jpg",
        performance_time: new Date("2025-12-28T22:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abdelkebir Merchane",
        bio: "Traditional Gnawa maestro known for spiritual performances.",
        photo: "https://example.com/photos/abdelkebir-merchane.jpg",
        performance_time: new Date("2025-12-28T22:45:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mohamed Kouyou",
        bio: "Renowned artist bringing new energy to classic Gnawa music.",
        photo: "https://example.com/photos/mohamed-kouyou.jpg",
        performance_time: new Date("2025-12-28T23:15:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abdelmajid Faska",
        bio: "Traditional musician known for authentic Gnawa trance rituals.",
        photo: "https://example.com/photos/abdelmajid-faska.jpg",
        performance_time: new Date("2025-12-28T23:45:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Saïd Oughessal",
        bio: "New-generation Maâlem mixing Gnawa with jazz and world music.",
        photo: "https://example.com/photos/said-oughessal.jpg",
        performance_time: new Date("2025-12-29T00:15:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Artists", null, {});
  },
};

