import resume from '../../models/rusume'
export default (req, res) => {

  if (req.method === "GET") {
    resume.find({}, (err, data) => {
      if (!err && data) {
        res.status(200).send(data);
      }
    });
  }
};