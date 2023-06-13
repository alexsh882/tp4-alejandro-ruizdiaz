const { Router } = require('express')
const indexController = require('../controllers/index.controllers');

const router = Router();


router.get('/', indexController.index)
router.post('/', indexController.store)
router.put('/', indexController.update)
router.delete('/', indexController.destroy)



module.exports = router;