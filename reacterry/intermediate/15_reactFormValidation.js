import React,{useState} from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cnfPassword,setCnfPassword] = useState('')
  const [error,setError] = useState(null)
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName.length > 0){
      if(lastName.length > 0){
        if(emailRegex.test(email)){
          if(password.length > 7){
            if(cnfPassword.length == password.length){
              if(cnfPassword == password){
                console.log('Form submitted successfully');
                setError(null)
              }
              else{
      setError(true)
    }
            }
            else{
      setError(true)
    }
          }
          else{
      setError(true)
    }
        }
        else{
      setError(true)
    }
      }
      else{
      setError(true)
    }
    }else{
      setError(true)
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          value={firstName}
          onChange = {(e)=>setFirstName(e.target.value)}
          placeholder="First Name"
        />
        {error && <p data-testid="first-name-error-id" className="error">First name cannot be empty</p>}
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          value={lastName}
          onChange = {(e)=>setLastName(e.target.value)}
          placeholder="Last Name"
        />
        {error && <p data-testid="last-name-error-id" className="error">Last name cannot be empty</p>}
        <input
          data-testid="email-id"
          type="email"
          name="email"
          value={email}
          onChange = {(e)=>setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {error && <p data-testid="email-error-id" className="error">Invalid email address</p>}
        <input
          data-testid="password-id"
          type="password"
          name="password"
          value={password}
          onChange = {(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p data-testid="password-error-id" className="error">Password must be greater than 7 characters</p>}
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          value={cnfPassword}
          onChange = {(e)=>setCnfPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        {error && <p data-testid="confirm-password-error-id" className="error">Passwords do not match</p>}
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;