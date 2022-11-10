import './card.style.css'
import cardData from '../../data'
import {MdLocationPin} from 'react-icons/md'

export default function Card (){
   
    return(
        <div className='main-card wrapper'>
            {cardData.map((data)=>{
                return(
                    <div className='card '>
                        <div className="left"><img loading='lazy' src={data.image} alt="card-img" /></div>
                        <div className="right">
                            <div className="location-gmap">
                                <p><MdLocationPin className='card-logo'/>{data.location}</p>
                                <a target='_blank' href={data.googlemaps} >View on Google Maps</a>
                            </div>
                            <h2 className='title'>{data.title}</h2>
                            <div className="card-date">
                                <p className='date'>{data.startdate}/</p>
                                <p className='date'>{data.enddate}</p>
                            </div>
                            <p className='description'>
                                {data.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}