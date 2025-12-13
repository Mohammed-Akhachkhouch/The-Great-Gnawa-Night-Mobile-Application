
import Booking from "../models/booking.js";
import Artist from "../models/artist.js";

export const creatBookingController = async (req, res) => {
  try {
    const { artistId, name, email, seats } = req.body;

    if (!artistId || !name || !email) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    const artist = await Artist.findByPk(artistId);
    if (!artist) {
      return res.status(404).json({ error: "Artist not found" });
    }

    const ticket_code = Math.random().toString(36).substring(2, 8).toUpperCase();

    const booking = await Booking.create({
      artistId,
      name,
      email,
      seats: seats || 1,
      ticket_code,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};



export const getBookingByCodeController = async (req, res) => {
  try {
    const { code } = req.params;
    const booking = await getBookingByCode(code);
    if (!booking) return res.status(404).json({ message: "booking not found" });
    res.json(booking);
  } catch (error) {
    console.error("Get booking by code error:", error);
    res.status(500).json({ message: "server error" });
  }
};

export const getBookingsByEmailController = async (req, res) => {
  try {
    const { email } = req.params;

    const bookings = await Booking.findAll({
      where: { email },
      include: [
        {
          model: Artist,
          attributes: ["id", "name"],
        },
      ],
    });

    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};
