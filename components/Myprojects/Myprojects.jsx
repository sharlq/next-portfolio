
import React,{useState,useEffect} from 'react'
import {CardAnimated} from 'sharlq-comp-lib';
import CardContent from './CardContent';
import axios from 'axios';

const Myprojects = () => {
   let [card,setCard] = useState(false)
   const fetchCardsData = async() =>{
      let data = await axios.get('/api/cards')
      console.log(data)
      setCard(data.data)
   }

   useEffect(()=>{
      fetchCardsData();
      console.log(card)
   },[])

    return (
      
        <div id="myProjects" className="myProjects">
          { card[0] &&
            <div className="myProjects-projectsGrid">
            <div>
              <p className="myProjects-projectsGrid_title">
                Projects
              </p>
              <p className="myProjects-projectsGrid_description">
                Here is a group of my projects to show my abilites and what iam capable of doing 
              </p>
            </div>
            <CardAnimated yourClass="card0" cardStyle={{height:'23.3vh',width:'23.3vw'}}>
              <CardContent
               cardTitle={card[0].title}
               github={card[0].github}
               preview={card[0].preview}
               cardImage={card[0].image}
               cardImageRatio={card[0].imageRatio} />
            </CardAnimated>
            <CardAnimated yourClass="card1" cardStyle={{height:'22vh',width:'22vw'}} >
            <CardContent
               cardTitle={card[1].title}
               cardDescription={card[1].description}
               github={card[1].github}
               preview={card[1].preview}
               cardImage={card[1].image}
               cardImageRatio={card[1].imageRatio} />
            </CardAnimated>
            <CardAnimated yourClass="card2" cardStyle={{height:'25vh',width:'25vw'}}>
            <CardContent
               cardTitle={card[2].title}
               cardDescription={card[2].description}
               github={card[2].github}
               preview={card[2].preview}
               cardImage={card[2].image}
               cardImageRatio={card[2].imageRatio} />
            </CardAnimated>
            <CardAnimated yourClass="card1" cardStyle={{height:'22vh',width:'22vw'}}>
            <CardContent
               cardTitle={card[4].title}
               cardDescription={card[4].description}
               github={card[4].github}
               preview={card[4].preview}
               cardImage={card[4].image}
               cardImageRatio={card[4].imageRatio} />
            </CardAnimated>
            <p className="myProjects-projectsGrid_description hideme">
               I have chosen various projects so they show my knowledge in various areas 
              </p>
            <CardAnimated yourClass="card0" cardStyle={{height:'23.5vh',width:'23.5vw',marginRight:"1.5vh"}}>
            <CardContent
               cardTitle={card[5].title}
               cardDescription={card[5].description}
               github={card[5].github}
               preview={card[5].preview}
               cardImage={card[5].image}
               cardImageRatio={card[5].imageRatio} />
            </CardAnimated>
            <CardAnimated yourClass="card2" cardStyle={{height:'25vh',width:'25vw',marginLeft:"1.5vh"}}>
            <CardContent
               cardTitle={card[3].title}
               cardDescription={card[3].description}
               github={card[3].github}
               preview={card[3].preview}
               cardImage={card[3].image}
               cardImageRatio={card[3].imageRatio} />
            </CardAnimated>
            
            </div>

      
           }
        </div>
    )
}

export default Myprojects
