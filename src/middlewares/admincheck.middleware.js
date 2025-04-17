import { verifyjwt } from "../utils/Jwt.js"
import { config } from "dotenv";
import { ResponseContent } from "../utils/FormatResponse.js";
import { access_denied, access_token_err } from "../Err.js";



config();




const adminCheck = async (req, res, next) => {
    try {
        const preToken = req.headers.authorization;

        if (preToken) {

            const data = verifyjwt(preToken.split(' ')[1], process.env.ACCESS_TOKEN_KEY);
            if (data && data.role_id === process.env.ROLE_ID_ADMIN) {
                req.userdata = data;
                next();
            } else {
                //is not admin
                console.log('is not admin');
                return res.send(access_denied);

            }
        }
        else {
            //not login
            console.log('not login');
            return res.send(access_denied);
        }
    }
    catch (e) {
        //AC is expired or incorrect
        console.log(e);
        return res.status(401).send(access_token_err);
    }
}


export { adminCheck }