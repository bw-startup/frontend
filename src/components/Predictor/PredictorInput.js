import React from 'react';

export default function PredictorInput() {
  const [inputs, setInputs] = useState({
    input001: '',
    input002: '',
    input003: '',
    input004: ''
  });

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handlePredictorInputSubmit = event => {
    event.preventDefault();
    //post with inputs
    // history.push "/predictor-output"
  };

  return (
    <div>
      <form onSubmit={handlePredictorInputSubmit}>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
      </form>
    </div>
  );
}
