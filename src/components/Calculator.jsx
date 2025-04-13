import React, { useState } from 'react'

const CalcButton = ({children, ...collect}) =>{
  return(
    <button className="bg-blue-100 py-4 aspect-square rounded-xl
     text-gray-500 hover:cursor-pointer 
     active:brightness-95 text-2xl }"
     {...collect}>
      {children}
    </button>
  );
}

const CalcButtonOperators = ({children, ...collect}) => {
  return(
    <button className="bg-orange-300 py-4 aspect-square rounded-xl
     text-gray-500 hover:cursor-pointer 
     active:brightness-95 text-2xl"
     {...collect}
     >
      {children}
    </button>
  )
}

const CalcButtonZero = ({children, ...collect}) => {
  return ( 
    <button className="bg-blue-100 py-4 rounded-xl
    text-gray-500 hover:cursor-pointer 
    active:brightness-95 text-2xl col-span-2 aspect-auto"
    {...collect}
    >{children}
    </button>
  )
}

const Calculator = () => {

  const [value, setValue] = useState('');
  const [prevVal, setPrevVal] = useState('');
  const [operation, setOperation] = useState('');

  const handleDigitClick = (n) => { 
    if (value.replace('.', '').length >= 10){
      return;
    } 
    setValue((prev)=> prev +n);
  }

  const handleClear = () => { 
    setValue('');
    setPrevVal('');
    setOperation('');
  }

  const handlePercent = () => {
    setValue((prev) => prev /100);
  }

  const handleSquareRoot = () => {
    setValue((prev)=>Math.sqrt(prev));
  }

  const handleEval = () => {
    switch (operation){
      case '+':
        setValue(parseFloat(prevVal)+parseFloat(value));
        setPrevVal('');
        setOperation('');
        break;
      case 'x':
        setValue(parseFloat(prevVal)*parseFloat(value));
        setPrevVal('');
        setOperation('');
        break;
      case '-':
        setValue(parseFloat(prevVal)-parseFloat(value));
        setPrevVal('');
        setOperation('');
        break;
      case '÷':
        setValue(parseFloat(prevVal)/parseFloat(value));
        setPrevVal('');
        setOperation('');
        break;
      default:
        break;
    }
  }

  const handleDisplay = () => {

    if(value.length===0){
      return '0';
    }
    else if(value === '.'){
      return '0. ';
    }
    else{
      return parseFloat(value).toLocaleString();
    }
  }

  const handleOperation = (operation) => {
    setOperation(operation);
    setPrevVal(value);
    setValue('');
  }


  return (
    <>
     <div className='bg-white p-6 bg-gradient-to-r from-red-600 to-violet-600 rounded-2xl w-[480px]'>
      <div className="bg-blue-100 p-3 text-right text-5xl 
      rounded-xl mb-6 border-2 border-indigo-500 
      overflow-x-auto whitespace-nowrap flex items-center justify-end scrollbar-none">{handleDisplay()}</div>
        <div className='grid grid-cols-4 gap-4'>
          <CalcButton onClick={()=>handleClear()} className='bg-red-100 text-red-400 rounded-xl hover:cursor-pointer'>C</CalcButton>
          <CalcButton onClick={handlePercent}>%</CalcButton>
          <CalcButton onClick={handleSquareRoot}>√</CalcButton>
          <CalcButtonOperators onClick={() => handleOperation('÷')}>÷</CalcButtonOperators>
          <CalcButton onClick={()=>handleDigitClick('1')}>1</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('2')}>2</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('3')}>3</CalcButton>
          <CalcButtonOperators onClick={() => handleOperation('x')}>x</CalcButtonOperators>
          <CalcButton onClick={()=>handleDigitClick('4')}>4</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('5')}>5</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('6')}>6</CalcButton>
          <CalcButtonOperators onClick={() => handleOperation('-')}>-</CalcButtonOperators>
          <CalcButton onClick={()=>handleDigitClick('7')}>7</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('8')}>8</CalcButton>
          <CalcButton onClick={()=>handleDigitClick('9')}>9</CalcButton>
          <CalcButtonOperators onClick={() => handleOperation('+')}>+</CalcButtonOperators>
          <CalcButtonZero onClick={()=>handleDigitClick('0')}>0</CalcButtonZero>
          <CalcButton onClick={()=>handleDigitClick('.')}>.</CalcButton>
          <CalcButtonOperators onClick={handleEval}>=</CalcButtonOperators>
        </div>
     </div>
    </>
  )
}

export default Calculator