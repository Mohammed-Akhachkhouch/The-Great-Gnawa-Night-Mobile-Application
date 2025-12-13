import api from "../../instant";

export const fetchArtists = async () => {
  try {
    const response = await api.get("/artists"); // لا حاجة لإضافة /api لأنه موجود في baseURL
    return response.data;
  } catch (error) {
    console.log("❌ API error:", error.message);
    throw error;
  }
};

export const fetchArtistById = async (id) => {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  } catch (error) {
    console.log("❌ API error by ID:", error.message);
    throw error;
  }
};
