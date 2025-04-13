import React from 'react'

const Cards = ({title, content}) => {
  return (
    <>
      <div className='max-w-sm p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700'>
          <h1 className='text-2xl text-white flex justify-center font-bold font-mono'>{title}</h1>
          <p className='text-gray-300 flex justify-center items-center align-middle'>{content}</p>
      </div>
    </>
  )
}


const DisplayCards = () => {
  return(
    <>
    <div className='flex flex-col min-h-screen text-white'>
      <div className='flex-grow flex flex-col items-center justify-center py-10 gap-5'>
          <Cards title="Title Card #1" content="This is some random content about card #1"/>
          <Cards  title="Title Card #2" content="This is some random content about card #2"/>
          <Cards  title="Title Card #3" content="This is some random content about card #3"/>
      </div>
    </div>
    </>
  )
}

export default DisplayCards;