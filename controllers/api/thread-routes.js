//*  Import express router and Thread and User model
const router = require('express').Router();
const { Thread, User } = require('../../models');
const withAuth = require('../../utils/auth');

//*  CREATE new Thread
router.post('/', withAuth, async (req, res) => {
    try {
        const newThread = await Thread.create({
            title: req.body.title,
            text_body: req.body.text_body,
            date_created: req.body.date_created,
            user_id: req.session.user_id
        });
        if (!(newThread.title && newThread.text_body && newThread.date_created && newThread.user_id)) {
            res.status(404).json({ message: "Please enter data in all the required fields..." })
        }
        res.status(200).json(newThread);
    } catch (err) {
        res.status(400).json(err);
    }
});

//*  UPDATE an existing thread
router.put('/:id', withAuth, async (req, res) => {
    try {
        const selectedThread = await Thread.update({
            title: req.body.title,
            text_body: req.body.textBody,
            date_created: req.body.dateCreated
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if (!selectedThread) res.status(404).json({ message: "That thread doesn't exist..." });
        res.status(200).json(selectedThread);
    } catch (err) {
        res.status(500).json(err);
    }
});

//*  DELETE an existing thread
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const selectedThread = await Thread.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if (!selectedThread) {
            res.status(404).json({ message: "That thread can't be deleted..." })
        }
        res.status(200).json(selectedThread);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;