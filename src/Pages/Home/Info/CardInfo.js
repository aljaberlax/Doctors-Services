import React from 'react';

const CardInfo = ({ img,cardTitel,bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />

            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitel}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default CardInfo;