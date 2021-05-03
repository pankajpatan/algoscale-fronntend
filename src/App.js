
import './App.css';
import Login from './component/Login'
import Contact from './component/contact/contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicChart from './component/analytics/analytics'
import Navbar from './component/navbar/navbar'
function App() {
  return (
    <div className="App">
     
<BrowserRouter>
<Navbar/>
    <Switch>
  
  <Route exact path="/" component={Login}/>
  <Route  path="/contact" component={Contact}/>
  <Route  path="/analytics" component={DynamicChart}/>
  
  

    </Switch>
    
      </BrowserRouter>

   
    </div>
  );
}

export default App;
