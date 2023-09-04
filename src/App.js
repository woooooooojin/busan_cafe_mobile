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
import Search from './pages/Search'

import haeundaeData from './pages/data/haeundaeData'
import { useState } from 'react';
import DetailHaeundae from './pages/detailpage/DetailHaeundae';
import Cart from './pages/Cart';
import suyeongData from './pages/data/suyeongData';
import DetailSuyeong from './pages/detailpage/DetailSuyeong';






function App() {

  const [haeundae] = useState(haeundaeData)
  const [suyeong] = useState(suyeongData)

  return (
    <div className="App">

      



      <Routes>
        <Route path='/' element={<Logopage/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
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

        <Route path = '/search' element={<Search/>}></Route>

        <Route path='/haeundae/detailhaeundae/:id' element={<DetailHaeundae haeundae = {haeundae}/>}/>
        <Route path='/suyeong/detailsuyeong/:id' element={<DetailSuyeong suyeong = {suyeong}/>}/>

        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
