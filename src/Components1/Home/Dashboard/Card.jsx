import react from 'react'
import './card.css'

const Card = ({ img, h4, text,per, progress }) => {
    return (
        <div className='card'>
            <div className='sub_card'>
                <img src={img} />
                <div className='textDiv'>
                    <h3>{h4}</h3>
                    <div className='version'><p>{text}</p> <h4>{per}</h4></div>
                    {progress}
                </div>
            </div>
        </div>
    )
}

export default Card