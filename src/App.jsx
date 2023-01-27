import './App.css';
import {Header, Content, ImageSection} from './components';
//Gsap
import {gsap, Power3} from 'gsap';

function App() {
  let tl = new gsap.timeline()
  let ease = Power3.easeOut()
  
  return (
    <div className="hero">
     <Header timeline= {tl} ease={ease}/>
     <div className="container">
        <Content timeline={tl}/>
        <ImageSection timeline={tl} ease={ease} />
     </div>
    </div>
  )
}

export default App
