import './App.css';
import './Components/style.css'
import OutlinedCard from './Components/Corusel';
import ResponsiveAppBar from './Components/Navbar';
import OutlinedCard2 from './Components/Card'
import ButtonAppBar from './Components/GridCard';
import SimplePaper from './Components/ImgCard';
import ButtonAppBar2 from './Components/GridCard2';
import Types from './Components/Recends';
import SimplePaper2 from './Components/ImgCard2';
import ButtonAppBar3 from './Components/Footer';


function App() {
  return (
    <div>
      
      <div className="Back">
      <ResponsiveAppBar/>
      <OutlinedCard/>
      </div>
      <OutlinedCard2/>
      <ButtonAppBar/>
      <SimplePaper/>
      <ButtonAppBar2/>
      <Types/>
      <SimplePaper2/>
      <ButtonAppBar3/>
    </div>
  );
}

export default App;
