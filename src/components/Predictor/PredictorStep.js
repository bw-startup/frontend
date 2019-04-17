import React from 'react';
import * as S from '../../styles';

const PredictorInputStep = props => {
  return (
    <S.PredictorInputStep>
      <S.PredictorInputStepField>
        <label htmlFor={props.htmlFor}>{props.title}</label>
        {props.type !== 'select' ? (
          <input
            type={props.type}
            name={props.name}
            id={props.id}
            onChange={props.handleInputChange}
            value={props.value[props.name]}
            placeholder={props.placeholder}
          />
        ) : (
          <select name={props.name} onChange={props.handleInputChange} value={props.value[props.name]}>
            <option default>{props.placeholder}</option>
            {props.options.sort().map(option => (
              <option key={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </S.PredictorInputStepField>
    </S.PredictorInputStep>
  );
};
export default PredictorInputStep;
