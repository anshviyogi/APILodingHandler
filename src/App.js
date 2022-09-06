import React,{Suspense} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import GetUser from './component/GetUser'

const Home = React.lazy(()=> import('./component/Home'))

function App(){
return(
  <>
  <Router>
    
  <Suspense fallback={<div>Loading . . .</div>}>
    <Routes>

    <Route path='/' element={<Home/>}/>
      <Route path='/showUsers' element={<><Home/><GetUser/></>}/>
    </Routes>
  </Suspense>
  </Router>
  </>
)
}
export default App