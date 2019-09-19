const router = require('express')();
const skipController = require('../controllers/memberController');


function passError(err, req, res, next) {
  if (err) {
    console.log(err, 'router');
    return res.status(500).json({ error: err });
  }
  console.log(res.locals.oneSkip, 'router');
  return res.json(res.locals.members);
}
router.get('/:id',
    skipController.getMembers,
    (req,res) => res.json(res.locals.members), passError);
router.get('/member/:id',
    skipController.getMembers,
    (req,res) => res.json(res.locals.members), passError);
router.post('/',
    skipController.insertMember,
    (req,res) => res.json(res.locals.member), passError);
router.put('/:id',
    skipController.updateMember,
    (req,res) => res.json(res.locals.member), passError);
router.delete('/:id',
    skipController.deleteMember,
    (req,res) => res.json(res.locals.member), passError);

module.exports = router;