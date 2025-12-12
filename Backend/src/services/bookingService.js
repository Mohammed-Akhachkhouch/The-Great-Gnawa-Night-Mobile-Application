import booking from '../models/booking.js';
import Artist from '../models/artist.js';

export const createBooking = async (data) => {
  if (!data.ticket_code) {
    data.ticket_code = Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  if (!data.artistId) {
    throw new Error("artistId is required");
  }
  const artist = await Artist.findByPk(data.artistId);
  if (!artist) {
    throw new Error("Artist not found");
  }

  return await Booking.create(data);
};

export const getBookingBycode = async (code) => {
    return await booking.findOne({where : {code}})
};

export const getBookingsByEmail = async () => {
    return await booking.findAll({where : {code}})
}

