const { json } = require('express/lib/response');
const Admin = require('mongodb/lib/admin');

module.exports = {

    stella: (req, res) => {
       
        res.json({message:'winxclub funny',data : true})
   },
}
