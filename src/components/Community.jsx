import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PostForm from './PostForm'
import TimeLine from './TimeLine'
import styled from 'styled-components'

const Title = styled.h2`
  margin-top: 10px;
  text-align: center;
  letter-spacing: 5px;
  color: black;
  position: relative;

  &::before,
  &::after {
    content: '[';
    display: inline-block;
    position: relative;
    top: 1px;
    height: 100%;
    color: steelblue;
    font-size: 30px;
  }

  &::after { content: ']'; }
`

export default function Community() {
  return (
    <>
      <Header/>
      <Title>Community</Title>
      <PostForm/>
      <TimeLine/>
      <Footer/>

    </>
  )
}
