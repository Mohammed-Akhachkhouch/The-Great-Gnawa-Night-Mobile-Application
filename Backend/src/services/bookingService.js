
import api from "../../instant";

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.log("❌ Booking API error:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchBookingsByEmail = async (email) => {
  try {
    const response = await api.get(`/bookings/email/${email}`);
    return response.data;
  } catch (error) {
    console.log("❌ Fetch bookings error:", error.response?.data || error.message);
    throw error;
  }
};
