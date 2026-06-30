import {Route,Routes} from "react-router-dom"
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import Introduction from "./Pages/Introduction";
import Modules from "./Pages/Modules";
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='introduction' element={<Introduction/>}/>
        <Route path='modules' element={<Modules/>}/>
      </Route>
    </Routes>
  );
}