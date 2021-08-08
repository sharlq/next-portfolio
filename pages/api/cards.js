import cards from '../../models/cardsModel'
export default (req, res) => {

  if (req.method === "GET") {
    cards.find({}, (err, data) => {
      if (!err && data) {
        res.status(200).send(data);
      }
    });
  }
};
