// services/events/events.js
import api from "../../instant";

export const fetchEvents = async () => {
  try {
    const response = await api.get("/events"); // لأننا في backend استعملنا /api/events
    return response.data;
  } catch (error) {
    console.log("❌ Events API error:", error.response?.data || error.message);
    throw error;
  }
};
