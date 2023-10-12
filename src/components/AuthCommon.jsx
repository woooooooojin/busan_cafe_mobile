import { styled } from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    border: 1px solid #ccc;
`

export const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 0 30px;
    margin-bottom: 10px;
`

export const Input = styled.input`
    /* padding: 10px 20px; */
    padding: 0 20px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 16px;
    &[type='submit']{
        cursor: pointer;
        background-color: #749BC2;
        color: #fff;
        font-size: 14px;
        height: 40px;
    }
`
export const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  text-shadow: 0 0 10px black;
`
export const Error = styled.span`
  color: tomato;
  font-size: 12px;
`

export const Switcher = styled.span`
  margin-top: 20px;
  font-size: 14px;
  a{
    color: steelblue;
    text-decoration: underline;
    font-weight: 600;
  }

`