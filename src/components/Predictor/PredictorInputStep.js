import React from 'react';
import * as S from '../../styles';

const PredictorInputStep = props => {
  return (
    <S.PredictorInputStep>
      <div>
        <label htmlFor={props.htmlFor}>Company Location:</label>
        <input type={props.type} name={props.name} id={props.id} />
      </div>
      
      <div>Next</div>
    </S.PredictorInputStep>
  );
};

export default PredictorInputStep;
