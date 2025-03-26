import env from 'dotenv';
env.config();


const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.URL_FE);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
}

export default cors;