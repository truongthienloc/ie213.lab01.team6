import './Form1.css';
import { useState } from 'react';

function Form1() {
  const [semester1Score, setSemester1Score] = useState('');
  const [semester2Score, setSemester2Score] = useState('');
  const [averageScore, setAverageScore] = useState(null);
  const [result, setResult] = useState("");
  const [assession, setAssession] = useState("");

  const handleCalculateResult = (event) => {
    event.preventDefault();
    console.log("Calculate result")
    if(Number.isNaN(semester1Score) || Number.isNaN(semester2Score))
        return;

    var average = (Number(semester1Score) + Number(semester2Score)*2)/3;
    var result, assession;
    result = (average >= 5) ? "Được lên lớp" : "Ở lại lớp";

    if(average < 5)
      assession = "Yếu"
    else if (average < 6.5)
      assession = "Trung bình"
    else if (average < 8)
      assession = "Khá"
    else assession = "Giỏi"

    setAverageScore(average)
    setResult(result)
    setAssession(assession)
  }

  return (
    <>
      <form className='form1' method='POST' action='/'>
        <div className='form1__header'>
          <h1 className='form1__title'>Kết quả học tập</h1>
        </div>
        <div className='form1__content'>
          <div className='form1__group'>
              <label className='form1__label' htmlFor='semester1'>Điểm HK1:</label>
              <input 
                  className='form1__input' 
                  id='semester1' 
                  type='text'
                  value={semester1Score}
                  onChange={e => setSemester1Score(e.target.value)}
              />
          </div>
          <div className='form1__group'>
              <label className='form1__label' htmlFor='semester2'>Điểm HK2:</label>
              <input 
                  className='form1__input' 
                  id='semester2' 
                  type='text'
                  value={semester2Score}
                  onChange={event => setSemester2Score(event.target.value)}
              />
          </div>
          <div className='form1__group'>
              <label className='form1__label' htmlFor='average'>Điểm trung bình:</label>
              <input 
                  className='form1__input readOnly' 
                  id='average' 
                  readOnly
                  type='text'
                  value={averageScore}
              />
          </div>
          <div className='form1__group'>
              <label className='form1__label' htmlFor='result'>Kết quả:</label>
              <input 
                  className='form1__input readOnly' 
                  id='result' 
                  readOnly
                  type='text'
                  value={result}
              />
          </div>
          <div className='form1__group'>
              <label className='form1__label' htmlFor='assession'>Xếp loại học lực:</label>
              <input 
                  className='form1__input readOnly' 
                  id='assession' 
                  readOnly
                  type='text'
                  value={assession}
              />
          </div>
          <div className='form1__group'>
              <button className='form1__btn' onClick={handleCalculateResult}>Xem kết quả</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form1;
