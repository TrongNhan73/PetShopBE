import { ResponseContent } from "../utils/FormatResponse.js"





const handleGetProducts = async (req, res) => {
    console.log(req.userdata);
    return res.send(ResponseContent('1', 'Successfully', null));
}



export { handleGetProducts }