import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DemoCarousel from './components/Carousel_img';

const city = [
  {
    name: 'Hong Kong',
    picture: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
  },
  {
    name: 'Macao',
    picture: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'
  },
  {
    name: 'Japan',
    picture: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'
  },
  {
    name: 'Las Vegas',
    picture: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'
  },
]

function App() {
  return (
    <div style={{width:"600px", margin:"0 auto"}} >
        <DemoCarousel/>
    </div>
  );
}

export default App;

