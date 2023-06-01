import React, { useState } from 'react';
import {RatingUpdate} from '../api/RatingUpdate';

const Rating = ({details}) => {
  const [stars, setStars] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleStarClick = (numberOfStars) => {
    	setStars(numberOfStars);
  };

  function handleFeedbackSubmit(event){
		event.preventDefault();
		console.log(feedback);
  }

  function handleFeedbackChange(event){
    	setFeedback(event.target.value);
  }

  async function handleSubmit(){
	try{
		const data = {
			job : details.job.id,
			student : details.student.id,
			rating : stars,
			comment : feedback
		}
		console.log("sending data: ",data);
		await RatingUpdate(data);
	}catch(error){
		console.log(error);
	}
  }

  return (
    <div>
        <h2 className='text-2xl font-semibold text-gray-800 pt-1'>Rating: {stars} star</h2>
        <div>
            {[1, 2, 3, 4, 5].map((number) => (
            <span
                key={number}
                onClick={() => handleStarClick(number)}
                style={{
                cursor: 'pointer',
                color: number <= stars ? 'gold' : 'gray',
                fontSize : 36
                }}
            >
                &#9733;
            </span>
            ))}
            {console.log(stars)}
        </div>
        <form onSubmit={handleFeedbackSubmit} className='flex flex-row justify-start'> 
            <textarea value={feedback} onChange={handleFeedbackChange} placeholder='Feedback' rows={4} className=' bg-gray-200 my-2 py-2 px-4 border solid border-gray-400 w-full md:w-4/5 rounded-md'/>
            <div className='place-self-end p-1 bg-blue-500 mx-2 rounded-full hover:bg-blue-400 hover:text-gray-600 mb-2'>
                <button type='submit' className='text-md font-semibold px-4 py-1' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
  );
};

export default Rating;