import  Jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const authRequired = (req, res, next) => {

    const {token} = req.cookies;
    if(!token) return res.status(401).json({
        msg: "No token, authorization denied"
    });

    Jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({ msg: "Invalid token"});

        req.user = user
        next();
    });

}