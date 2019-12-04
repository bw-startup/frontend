import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Welcome back!</h2>
      <form>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='email' id='email' />
        </div>
      </form>
    </div>
  );
};

export default Login;
