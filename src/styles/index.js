import styled, {createGlobalStyle} from 'styled-components';

export const GlobalCssReset = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400');

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: 1px solid red;
}
body {
  font-family: 'Lato', sans-serif;
  font-size: 62.5%;
  font-weight: 300;
}
h2 {
  font-size: 2rem;
  margin-bottom: 8px;
}
button {
  border: none;
}
input {
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
}
p {
  font-size: 0.8rem;
}
a {
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
}
`;

export const Container = styled.div`
  padding: 40px;
  margin: 0 auto;
`;

export const Prediction = styled.div`
  display: flex;
`;

export const PredictionLeft = styled.div`
  display: flex;
`;

export const PredictionRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PredictionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PredictionRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const PredictionDataLeft = styled.div`
  text-align: left;
`;

export const PredictionDataLeftHeader = styled.div`
  font-size: 1.5rem;
`;

export const PredictionDataLeftSubHeader = styled.div`
  font-size: 1rem;
`;

export const PredictionDataRight = styled.div`
  text-align: right;
`;
