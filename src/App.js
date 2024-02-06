import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logopage from './pages/Logopage';
import Main from './pages/Main';
import Bukgu from './pages/Bukgu';
import Dongrae from './pages/Dongrae';
import Gangseo from './pages/Gangseo';
import Yeonjae from './pages/Yeonjae';
import Jingu from './pages/Jingu';
import Jungu from './pages/Jungu';
import Seogu from './pages/Seogu';
import Sasang from './pages/Sasang';
import Suyeong from './pages/Suyeong';
import Haeundae from './pages/Haeundae'

import haeundaeData from './pages/data/haeundaeData'
import { useState } from 'react';
import DetailHaeundae from './pages/detailpage/DetailHaeundae';
import Cart from './pages/Cart';
import suyeongData from './pages/data/suyeongData';
import DetailSuyeong from './pages/detailpage/DetailSuyeong';
import Join from './pages/Join';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import Community from './components/Community';
import gangseoData from './pages/data/gangseoData';
import dongraeData from './pages/data/dongraeData';
import DetailDongrae from './pages/detailpage/DetailDongrae';
import DetailGangseo from './pages/detailpage/DetailGangseo';




function App() {

  const [haeundae] = useState(haeundaeData)
  const [suyeong] = useState(suyeongData)
  const [gangseo] = useState(gangseoData)
  const [dongrae] = useState(dongraeData)

  

  return (
    <div className="App">

      


      <Routes>
        <Route path='/' element={<Logopage/>}></Route>

        <Route path='/main' element={<ProtectedRoute><Main/></ProtectedRoute>}></Route>
        {/* <Route path='/protected' element={<ProtectedRoute></ProtectedRoute>}></Route> */}
        <Route path='/bukgu' element={<Bukgu/>}></Route> 
        <Route path='/dongrae' element={<Dongrae/>}></Route> 
        <Route path='/yeonjae' element={<Yeonjae/>}></Route> 
        <Route path='/jingu' element={<Jingu/>}></Route> 
        <Route path='/jungu' element={<Jungu/>}></Route> 
        <Route path='/seogu' element={<Seogu/>}></Route> 
        <Route path = '/gangseo' element={<Gangseo/>}></Route>
        <Route path = '/sasang' element={<Sasang/>}></Route>
        <Route path = '/suyeong' element={<Suyeong/>}></Route>
        <Route path = '/haeundae' element={<Haeundae/>}></Route>


        <Route path='/login' element={<Login/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
        <Route path='/community' element={<Community/>}></Route>
        
        <Route path='/haeundae/detailhaeundae/:id' element={<DetailHaeundae haeundae = {haeundae}/>}/>
        <Route path='/suyeong/detailsuyeong/:id' element={<DetailSuyeong suyeong = {suyeong}/>}/>
        <Route path='/dongrae/detaildongrae/:id' element={<DetailDongrae dongrae = {dongrae}/>}/>
        <Route path='/gangseo/detailgangseo/:id' element={<DetailGangseo gangseo = {gangseo}/>}/>

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path ='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
