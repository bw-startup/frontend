import styled, { createGlobalStyle } from 'styled-components';

export const primaryColor = '#4285f4';
export const secondaryColor = '#38c172';
export const labelColor = '#A2AEBB';

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
  background: ${props =>
    props.primary
      ? `linear-gradient(to right, ${primaryColor} 50%, #f3f3f3 50%)`
      : `linear-gradient(to right, ${secondaryColor} 50%, #f3f3f3 50%)`};
  font-family: 'Lato', sans-serif;
  font-size: 62.5%;
  font-weight: 300;
}

h2 {
  font-size: 2rem;
  margin-bottom: 8px;
}

input {
  font-family: 'Lato', sans-serif;
}

p {
  color: #838eaf;
  font-size: 0.8rem;
}

a {
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
}
`;

export const ErrorMessage = styled.div`
  border-radius: 5px;
  font-size: 0.7rem;
  color: white;
  padding: 10px;
  margin: 30px 0 10px;
  background: lightcoral;
`;

export const FormFooterLink = styled.div`
  font-size: 0.8rem;
  margin: 20px 0;
  a {
    color: ${props => (props.primary ? primaryColor : secondaryColor)};
    text-decoration: none;
  }
`;

// LOADER
export const Loader = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 120px;
  margin: 80px auto 80px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderText = styled.div`
  font-size: 1.5rem;
`;

// LOGIN
export const Login = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 800px;
  margin: 80px auto 80px;
  display: flex;
  align-items: center;
`;

export const LoginImage = styled.div`
  flex: 1 1 50%;
`;

export const LoginImageImg = styled.img`
  padding-right: 40px;
  width: 100%;
  height: auto;
`;

export const LoginForm = styled.div`
  background: #4286f417;
  padding: 80px;
  flex: 1 1 50%;

  input {
    color: #838eaf;
    padding: 10px;
    border-top: none;
    border-right: none;
    border-bottom: 4px solid #dde0e9;
    border-left: none;
    &:focus {
      color: #838eaf;
      outline: none;
      border-bottom: 4px solid #4285f4;
    }
  }
`;

export const LoginField = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  color: #dde0e9;

  label {
    font-weight: 400;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  &:focus-within {
    color: #4285f4;
  }
`;

export const LoginButton = styled.button`
  border-radius: 5px;
  color: white;
  background: #4285f4;
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  margin: 20px 0;
`;

// REGISTER
export const Register = styled(Login)`
  flex-direction: row-reverse;
`;

export const RegisterImage = styled(LoginImage)``;

export const RegisterImageImg = styled(LoginImageImg)``;

export const RegisterForm = styled(LoginForm)``;

export const RegisterField = styled(LoginField)``;

export const RegisterButton = styled(LoginButton)`
  background: ${secondaryColor};
`;

// PREDICTOR
export const PredictorInput = styled.div`
  background: #e3e9f3;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 40px;
  margin: 80px auto 80px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PredictorInputStep = styled.div`
  margin: 20px 0;
`;

export const PredictorInputForm = styled.form``;

export const PredictorInputTitle = styled.h2``;

export const PredictorInputStepField = styled.div`
  color: ${labelColor};
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 1rem;
  }

  &:focus-within {
    color: ${primaryColor};
  }

  input {
    font-size: 2rem;
    color: #838eaf;
    padding: 10px;
    border-top: none;
    border-right: none;
    border-bottom: 4px solid #dde0e9;
    border-left: none;
    &:focus {
      color: #838eaf;
      outline: none;
      border-bottom: 4px solid #4285f4;
    }
  }
`;

export const PredictorInputStepButton = styled.div`
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  cursor: pointer;
  color: white;
  background: ${primaryColor};
  border-radius: 5px;
  margin: 30px 0;
  font-size: 1rem;
  padding: 15px;
  float: right;
`;

export const PredictorInputStepSubmitButton = styled.button`
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  cursor: pointer;
  color: white;
  background: ${primaryColor};
  border-radius: 5px;
  margin: 30px 0;
  font-size: 1rem;
  padding: 15px;
  float: right;
`;

export const PredictorOutput = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 120px;
  margin: 80px auto 80px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
