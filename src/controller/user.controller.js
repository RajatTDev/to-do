const UserModel = require("../models/user")

const getUsers = async(req,res) => {
    try{
        const getUsers = await UserModel.find({});
        console.log('getUsers ', getUsers)
        if(getUsers){
            return res.status(200).json({
                success: true,
                data: getUsers
            })
        }else {
            return res.status(200).json({
                success: false,
                data: 'No Users Found'
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
};
module.exports = { getUsers }