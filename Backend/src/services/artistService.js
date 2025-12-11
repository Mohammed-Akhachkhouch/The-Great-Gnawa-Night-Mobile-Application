import ArtistInfo from '../models/artist.js';

const getArtistInfo = async () => {

const artists = await ArtistInfo.findAll();
return artists;

}
export {getArtistInfo};