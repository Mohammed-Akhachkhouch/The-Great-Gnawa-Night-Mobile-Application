import  {getEventInfo} from '../services/eventService.js';

   export       const geteventcontroller = async (req, res) => {
    try {
    const events = await getEventInfo();
    res.json(events);
    }
    catch(error){
        res.status(500).json({error : error.message})
    }


}
