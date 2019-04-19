import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const primaryColor = '#4285f4';
export const primaryColorLight = '#aad4f5';
export const secondaryColor = '#38c172';
export const viewContainerBackground = '#e3e9f3';
export const labelColor = '#A2AEBB';

// GLOBAL CSS RESET
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
  color: #05133C;
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

// APP CONTAINER
export const Container = styled.div`
  padding-top: 40px;
  margin: 0 auto;
`;

// VIEW CONTAINER
export const ViewContainer = styled.div`
  background: ${viewContainerBackground};
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// SHARED COMPONENTS
export const FormMessage = styled.div`
  border-radius: 5px;
  font-size: 1.2rem;
  color: white;
  padding: 10px;
  ${props => props.error && `background: lightcoral;`}
  ${props => props.success && `background: lightgreen;`}
`;

export const ErrorMessage = styled(FormMessage)`
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

// BODY BACKGROUND INJECTIONS
export const BodyBackgroundVertical = createGlobalStyle`
  body {
    background: ${props =>
      props.primary
        ? `linear-gradient(to right, ${primaryColor} 50%, ${viewContainerBackground} 50%)`
        : `linear-gradient(to right, ${secondaryColor} 50%, ${viewContainerBackground} 50%)`};
  }
`;

export const BodyBackgroundHorizontal = createGlobalStyle`
  body {
    background: ${props =>
      props.primary
        ? `linear-gradient(${primaryColor} 50%, ${viewContainerBackground} 50%) no-repeat`
        : `linear-gradient(${secondaryColor} 50%, ${viewContainerBackground} 50%) no-repeat`};
  }
`;

export const HtmlBackground = createGlobalStyle`
  html {
    background: ${viewContainerBackground}
  }
`;

// LOADER
export const Loader = styled(ViewContainer)`
  width: 700px;
  border-radius: 5px;
  padding: 120px 120px 200px 120px;
  align-items: center;
  background: white;
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
  margin: 80px auto;
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
  cursor: pointer;
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
export const Predictor = styled.div`
  margin: 0 auto;
`;

export const PredictorInput = styled(ViewContainer)`
  padding: 40px 250px 400px 250px;
`;

export const PredictorInputStep = styled.div`
  margin: 60px 0;
`;

export const PredictorInputForm = styled.form``;

export const PredictorTitle = styled.h2`
  text-align: center;
  margin: 25px 0 75px 0;
`;

export const PredictorInputStepField = styled.div`
  color: ${labelColor};
  display: flex;
  flex-direction: column;

  label {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    padding: 40px 0;
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
      color: #05133c;
      outline: none;
      border-bottom: 4px solid #4285f4;
    }

    &::placeholder {
      font-weight: 300;
      color: #838eaf;
    }
  }

  select {
    font-weight: 300;
    font-size: 2rem;
    width: 100%;
    height: 65px;
    color: #838eaf;
    border-radius: none;
    border-top: none;
    border-right: none;
    border-bottom: 4px solid #dde0e9;
    border-left: none;
    &:focus {
      color: #05133c;
      outline: none;
      border-bottom: 4px solid #4285f4;
    }
  }
`;

export const StepButtonContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextStepButton = styled.button`
  text-transform: uppercase;
  text-align: right;
  width: 200px;
  cursor: pointer;
  color: white;
  background: ${primaryColor};
  border-radius: 5px;
  margin: 30px 0;
  font-size: 1.2rem;
  padding: 15px;

  &:disabled {
    background: ${primaryColorLight};
    &:hover {
      background: ${primaryColorLight};
    }
  }

  &:hover {
    background: ${primaryColor};
  }
`;

export const PreviousStepButton = styled(NextStepButton)`
  text-align: left;
  background: ${primaryColor};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

export const Button = styled.button`
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  cursor: pointer;
  color: white;
  background: ${primaryColor};
  border-radius: 5px;
  margin: 60px 0;
  font-size: 1rem;
  padding: 20px;
`;

export const PredictorStepSubmitButton = styled.button`
  text-transform: uppercase;
  font-weight: 300;
  text-align: right;
  width: 230px;
  cursor: pointer;
  color: white;
  background: ${secondaryColor};
  border-radius: 5px;
  margin: 30px 0;
  font-size: 1.2rem;
  padding: 15px;

  &:disabled {
    background: #c4eed6;
    &:hover {
      background: #c4eed6;
    }
  }

  &:hover {
    background: rgb(4, 158, 81);
  }
`;

export const PredictorOutput = styled.div`
  background: #e3e9f3;
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OutputTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const OutputMiddle = styled.div`
  display: flex;
  align-items: center;
`;

export const OutputBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const OutputItem = styled.div`
  border-radius: 5px;
  background: white;
  margin: 20px;
  font-size: 1rem;
  padding: 15px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OutputItemResult = styled(OutputItem)`
  max-width: 100%;
  font-size: 5rem;
  padding: 20px 50px;
  font-weight: 400;
  color: white;
  background: ${secondaryColor};
`;

// PROFILE
export const Profile = styled(ViewContainer)`
  border-radius: 5px;
  padding: 65px 120px 420px 120px;
  align-items: center;
`;

// NAVIGATION
export const Navigation = styled.div`
  width: 700px;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
`;

export const NavigationLink = styled(NavLink)`
  border-radius: 5px 5px 0 0;
  margin-right: 15px;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 20px;
  background: ${primaryColor};

  &.active {
    color: ${primaryColor};
    background: #e3e9f3;
  }

  &:hover {
    color: ${primaryColor};
    background: #e3e9f3;
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
