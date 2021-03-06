const router = require('express').Router();

const db = require('../../db');

router.get('/', (req, res, next) => {
  db.graphemes
    .findAll({
      attributes: ['grapheme'],
      include: [
        {
          model: db.phonemes,
          attributes: ['phoneme', 'description', 'uniCode'],
        },
        {
          model: db.words,
          attributes: ['word'],
        },
      ],
    })
    .then(res.send.bind(res))
    .catch(next);
});

module.exports = router;
