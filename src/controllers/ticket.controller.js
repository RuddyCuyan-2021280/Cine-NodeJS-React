    import Ticket from "../models/tickets.model.js";

export const getTickets = async(req, res) => {
    const tickets = await Ticket.find({
        user: req.user.payload.id
    }).populate('user')
    res.json(tickets)
}

export const getTicket = async(req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate('user')
    if(!ticket) return res.status(404).json("Ticket not found")
    res.json(ticket)
}

export const createTicket = async(req, res) => {
    const {movieId, seatings} = req.body
    console.log();
    try {

        const existingTicket = await Ticket.findOne({ movieId, seatings });
        if (existingTicket) {
            return res.status(400).json({ msg: 'Seatings must be unique for the same movie.' });
        }

        const newTicket = new Ticket({
            movieId,
            seatings,
            user: req.user.payload.id
        })
        const ticketSave = await newTicket.save()

        res.json({
            movieId: ticketSave.movieId,
            seatings: ticketSave.seatings
        })

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTicket = async(req, res) => {
    console.log(req.params.id);
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    if(!ticket) return res.status(404).json("Ticket not found")
    res.json(ticket)
}

export const deleteTicket = async(req, res) => {
    console.log(req.params.id);
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    if(!ticket) return res.status(404).json("Ticket not found")
    return res.sendStatus(204)
}