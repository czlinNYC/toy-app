const router = require('express')();
const memberController = require('../controllers/memberController');


function passError(err, req, res, next) {
  if (err) {
    console.log(err, 'router');
    return res.status(500).json({ error: err });
  }
  console.log(res.locals.member, 'router');
  return res.json(res.locals.members);
}
router.get('/:id',
    memberController.getMembers,
    (req,res) => res.json(res.locals.members), passError);
router.get('/member/:id',
    memberController.getMemberById,
    (req,res) => res.json(res.locals.member), passError);
router.post('/',
    memberController.insertMember,
    (req,res) => res.json(res.locals.member), passError);
router.put('/:id',
    memberController.updateMember,
    (req,res) => res.json(res.locals.member), passError);
router.delete('/:id',
    memberController.deleteMember,
    (req,res) => res.json(res.locals.member), passError);

module.exports = router;