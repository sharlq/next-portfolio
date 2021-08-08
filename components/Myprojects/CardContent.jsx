import React from 'react'
import Image from './Image'
const CardContent = ({cardTitle,cardDescription,github,preview,cardImage,cardImageRatio}) => {
    return (
        <>
              <div className="card-info">
                    <div className="card-title">{cardTitle}</div>
                    <div className="card-body">{cardDescription}</div>
                    <div className="card-tail">
                    <a href={github}>Github</a>
                    <a href={preview}>Preview</a>
                    </div>
                    </div>
                    <div>
                      <Image
                       src={cardImage}
                       ratio={cardImageRatio} 
                       link={preview}/>
                    </div>
        </>
    )
}

export default CardContent
