import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Intro() {

  const navigate = useNavigate()

  const timeout = ()=>{
    setTimeout(() => {
			navigate('/join');
		}, 2000);
  }

  useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	}); 
  //랜더링되면 timeout실행 실행 후 클리어

  return (
    <div>


      <p>랜딩페이지입니다</p>

    </div>
  )
}
