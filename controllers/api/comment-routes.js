//*  Import express router and Comment and User model
const router = require('express').Router();
const { Comment, User } = require('../../models');

//*  CREATE a new comment
router.post('/', async (req, res) => {
    //! FINISH
})

router.put('/:id', async (req, res) => {
    //! FINISH
})

router.delete('/:id', async (req, res) => {
    //! FINISH
})

module.exports = router;
