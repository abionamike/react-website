import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({ path, src, text, label, alt, to }) => {
    return (
        <>
            <li className="cards-item">
                <Link className="cards-item-link" to={ to }>
                    <figure className="cards-item-pic-wrap" data-category={ label }>
                        <img src={ src } alt={ alt } className="cards-item-img"/>
                    </figure>
                    <div className="cards item-info">
                        <h5 className="cards-item-text">{ text }</h5>
                    </div>
                </Link>
            </li>  
        </>
    )
}

export default CardItem;
