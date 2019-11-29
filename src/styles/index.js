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

export const PredictionRight = styled.div``;

export const PredictionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PredictionRow = styled.div`
  padding: 40px;
`;
