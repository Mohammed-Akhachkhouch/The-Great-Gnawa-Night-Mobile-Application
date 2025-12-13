
import { getAllartists, getartistsbyid } from "../services/artistService.js";

export const getArtistsController = async (req, res) => {
    try {
        const artists = await getAllartists();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getartistsbyidController = async (req, res) => {
    try {
        const { id } = req.params; 
        const artist = await getartistsbyid(id);
        if (!artist) {
            return res.status(404).json({ message: "Artist not found" });
        }
        res.json(artist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
