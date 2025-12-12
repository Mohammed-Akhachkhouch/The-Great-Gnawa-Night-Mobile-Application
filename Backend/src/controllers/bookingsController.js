import { createBooking, getBookingBycode, getBookingsByEmail } from "../services/bookingService.js";

export const creatBookingController = async (req, res) => {

    try {
    const booking = await createBooking(req.body);
    res.status(200).json(booking);
    }
    catch(error){
        console.error(error);
        console.error("create booking error:",error);
        res.status(500).json({message : "server error"});
    }

};

export const getBookingByCodeController = async (req, res) => {

    try {
    const {code} = req.params;
        
    const booking = await getBookingBycode(code);

    if(!booking)
    {
        return res.status(404).json({message : "booking not found"}); 
    }
    res.json(booking);
    
    }
    catch(error){
        console.error("get booking error :" , error);
        res.status(500).json({message : "server error"});
    }
};

export const getBookingsByEmailController = async (req, res) => {
    try{
     const {email} = req.body;   

    const booking = await getBookingsByEmail(email);
    if(!booking || booking.length === 0){
        return res.status(404).json({message : "no bookings found"});
    }

    res.json(booking);
    }
    catch(error){
        console.error("get booking by email error")
        res.status(500).json({message : "server error"});
    };


}