import ArtistInfo from '../models/artist.js';

const getAllartists = async () => {

const artists = await ArtistInfo.findAll();
return artists;

}
export {getAllartists};


const getartistsbyid = async (id) => {

return await ArtistInfo.findByPk(id);
};

export {getartistsbyid};