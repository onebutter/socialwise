import models from 'models';
const {Namecard} = models;

export const retrieve = async (req, res) => {
    try{
        if (!req.headers.authorization){
            return;
        }
    }
    catch(err){
        res.status(400).json(err);
    }
}