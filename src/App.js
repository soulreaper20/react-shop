import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const Shop = () => {
  return ( 
    <div>
      <h1>I am the shop page.</h1>;
    </div>
  )
}
const App = () => {
  return (
    <Routes>
    <Route path='/' element = {<Navigation/>}>
      <Route index element = { <Home />} />
      <Route path = 'shop'  element = { <Shop />} />
      <Route path = 'auth'  element = { <Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;