import React from 'react'
import styled from 'styled-components'

const Ready = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  img{
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function PageReady() {
  return (
    <div>
        <Ready>
            <img src={ process.env.PUBLIC_URL + '/img/page_ready.png'} alt="img" />
         </Ready>
    </div>
  )
}
