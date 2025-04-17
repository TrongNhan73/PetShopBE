import env from 'dotenv';
env.config();


const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.URL_FE);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // handle preflight
    }
    next();
}

export default cors;