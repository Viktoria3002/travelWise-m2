import { useState } from 'react';
import classes from './App.module.scss';
import { Link } from 'react-router-dom';
import About from '@/pages/about/About';
import platePng from '@/assets/plate.png';
import plateJpg from '@/assets/plate.jpg';
import Icon from '@/assets/icon.svg';

//TREE SHAKING
function TODO(a: number) {
  console.log('TODOFUNCTION');
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // TODO(12345);

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  // if (__ENV__ === 'development') {
  //   addDevtools();
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={platePng} alt="" />
        <img width={100} height={100} src={plateJpg} alt="" />
      </div>
      <div>
        <Icon className={classes.icon} width={50} height={50} fill={'red'} />
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>Inc</span>
      </button>
      <About />
    </div>
  );
};

export default App;
