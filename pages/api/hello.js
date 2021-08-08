// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import test from '../../models/testModel'
import cards from '../../models/cardsModel'
export default (req, res) => {
  if(req.method==="POST"){
    const data = req.body;
    console.log(data)
    cards.create({...data},(err,data)=>{
      if(!err&&data){
        res.send(data)
      }
    })
  }
}
