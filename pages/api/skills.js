import skills from '../../models/skills'
export default (req, res) => {

  if (req.method === "GET") {
    skills.find({}, (err, data) => {
      if (!err && data) {
        res.status(200).send(data);
      }
    });
  }
};