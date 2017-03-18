import React from 'react'

function Card(props) {
    return(
        <div className='bg-light-green dib pa3 ma2 tc br3 grow'> 
            <img 
                role="presentation" 
                src={`//robohash.org/${props.id}?size=200x200`} />
            <div> {props.name} </div> 
            <div> {props.email} </div> 
        </div>
    );
}

Card.propTypes= {
    id: React.PropTypes.string.isrequired,
    name: React.PropTypes.string.isrequired,
    email: React.PropTypes.string.isrequired,
}
export default Card;