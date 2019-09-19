const membersModel = require('../models/members');

async function getMembers(req,res,next) {
    try {
        res.locals.members = await membersModel.getMembers();
        next();
    } 
    catch(e) {
        throw e;
    }
}

async function getMemberyId(req,res,next) {
    try {
        res.locals.member = await membersModel.getMemberById(req.params.id);
        next();
    }
    catch(e) {
        throw e;
    }
}

async function insertMember(req,res,next) {
    try {
        res.locals.member = await membersModel.insertMember(req.body);
        next();
    }
    catch(e) {
        throw e;
    }
}

async function updateMember(req,res,next) {
    try {
        res.locals.member = await membersModel.updateMember(req.body);
        next();
    }
    catch(e) {
        throw e;
    }
}
async function deleteMember(req,res,next) {
    try {
        res.locals.member = await membersModel.deleteMember(req.params.id);
        next();
    }
    catch(e) {
        throw e;
    }
}

module.exports = {
    getMembers,
    getMemberById,
    insertMember,
    updateMember,
    deleteMember
   }