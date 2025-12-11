import EventInfo  from "../src/models/eventInfo.js";

const seedEvent = async () => {
    try {
    await EventInfo.create ({
        title : "gnawa 2026",
        name : "gnawa event agadir", 
        date : "desember 2026",
        location : "agadir ",
        descrepion : "this event is in agadir we have it to show a lot of people ...."
    })
    console.log("data successfuly added to database");
}
catch (err){
    console.log("seeding field", err);
}}
seedEvent();