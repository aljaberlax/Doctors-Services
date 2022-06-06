import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, placeat. Magni assumenda quam dicta omnis, maiores consectetur ea animi laudantium?</p>
            </div>
            <div className='flex items-center p-10'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} />
                    </div>

                </div>
                <div>
                    <h4 className='text-xl'> {review.name}</h4>
                    <p>{review.location}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;