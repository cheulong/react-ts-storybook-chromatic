import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ContentText from './components/ContentText';
import Link from './components/Link';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ContentText>
          <>
            <p>Hello Vite + React!</p>
            <p>
              <Button count={count} setCount={setCount} />
            </p>
            <p>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
          </>
        </ContentText>

        <p>
          <Link label=' Learn React' url='https://reactjs.org' />
          {' | '}
          <Link
            label='Vite Docs'
            url='https://vitejs.dev/guide/features.html'
          />
        </p>
      </header>
    </div>
  );
}

export default App;
