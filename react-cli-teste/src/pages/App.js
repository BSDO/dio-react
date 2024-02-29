
import './App.css';
import { Home }  from './home/index'
import  { Login } from './login/index'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
   
	<Router>
		<Routes>
			<Route path="/" element={<Home />}  /> 
			<Route path="/login" element={<Login />} />
			
			
			
		</Routes>
	</Router>
  );
}

export default App;
