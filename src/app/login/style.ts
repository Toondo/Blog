import { styled } from '~/libs/styled';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: auto;
  margin-top: 100px;

  h2 {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
