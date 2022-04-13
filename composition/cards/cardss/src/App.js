import '../src/css/main.css'
import Cards from './components/Cards';
import CardsImg from './components/CardsImg';


export default function App() {

  return (
    <div className="App">
      <Cards img = {<CardsImg/>}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href=" " class="btn btn-primary">Go somewhere</a>
      </Cards>

      <Cards>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href=" " class="btn btn-primary">Go somewhere</a>
      </Cards>
    </div>
  );
}
