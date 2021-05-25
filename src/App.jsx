import { Button, Footer, Header, Navigation } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation brand="My app" />
      <Header title={<p>Edit <code>src/App.js</code> and save to reload.</p>} />
      <main>
        <div className="container">
          <Button label="Click me" />
        </div>
      </main>
      <Footer>
        This is My App's footer
      </Footer>
    </div>
  );
}

export default App;
