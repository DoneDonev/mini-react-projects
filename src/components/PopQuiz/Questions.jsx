import React, { useState } from 'react'
import Question from './Question';

const Questions = () => {
  const [QuestionNum, setQuestionNum] = useState(0);

  const questionData = [
    {
      q: "1. How many wonders are there in the world?",
      options: ["4", "6", "7", "8"]
    },
    {
      q: "2. What is the capital of Macedonia?",
      options: ["Berlin", "Skopje", "Sarajevo", "Sofia"]
    },
    {
      q: "3. Which planet is closest to the sun?",
      options: ["Pluto", "Venus", "Neptune", "Mercury"]
    },
    {
      q: "4. Which is the tallest mountain in the world?",
      options: ["Mt. Everest", "Mt. Kilimanjaro", "Mt. Fuji", "Mt. Korab"]
    },
  ];

  const current = questionData[QuestionNum];

  return (
    <>
      <div className='mx-10 my-10'>
        {/* Display the question number */}
        <div className='py-5'>
          <p className='text-2xl text-gray-200'><span className='text-blue-400'>{QuestionNum+1}</span>/{questionData.length}</p>
        </div>

        <div>
          {/* <p className='text-2xl text-gray-400'>1. How many wonders are there in the world?</p> */}
          <Question q={current.q} />
        </div>

        <div className='grid grid-cols-2 grid-rows-2 space-y-3 pt-10'>
            {current.options.map((ans, index)=>(
              <div key={index}>
                <button className='border border-gray-300 w-30 h-10 rounded-md hover:cursor-pointer hover:animate-bounce bg-gray-100 hover:bg-gray-200'>{ans}</button>
              </div>
            ))}
        </div>

        <div className='flex justify-evenly mt-10'>
          <button
            onClick={() => setQuestionNum(prev => Math.max(prev - 1, 0))}
            className='border rounded-lg w-20 hover:cursor-pointer bg-blue-400 text-white'
            disabled={QuestionNum === 0}>PREV
          </button>

          <button
            onClick={() => setQuestionNum(prev => Math.min(prev + 1, questionData.length - 1))}
            className='border rounded-lg w-20 hover:cursor-pointer bg-blue-400 text-white'
            disabled={QuestionNum === questionData.length - 1}>NEXT
          </button>
        </div>

      </div>
    </>
  )
}

export default Questions