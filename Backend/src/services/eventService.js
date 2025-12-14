import EventInfo from '../models/eventInfo.js';


const getEventInfo  = async () => {

   const events = await EventInfo.findAll();
    return events;
};


export { getEventInfo};