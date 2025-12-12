import { getAllartists, getartistsbyid } from "../services/artistService.js";


export const getArtistsController = async (req, res) => {
    const artists = await getAllartists();
    res.json(artists);

}

export const getartistsbyidController = async (req, res) => {
    const artist = await getartistsbyid(req.param.id);
    res.json(artist);
}