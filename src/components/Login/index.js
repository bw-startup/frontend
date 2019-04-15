import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } };

  if (false) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <form>Log In Form</form>
    </div>
  );
}
