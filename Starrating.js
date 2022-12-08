import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

let Starrat=()=>{

    let [rating, setRating]= useState( null );
    let [hover, setHover]= useState(null);

    return(
        <>
            {[...Array(5)].map((star,i)=>{
                let ratingValue=i+1;
                return(
                    <>
                        <label htmlFor="">
                            <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                            <FaStar className="star" color={ratingValue<=(hover || rating) ? '#ffc107': "#e4e5e9"}
                            onMouseEnter={()=>{setHover(ratingValue)}}
                            onMouseLeave={()=>{setHover(null)}} />
                        </label >
                    </>
                )
            })}  
        </>
    )
}

export default Starrat;