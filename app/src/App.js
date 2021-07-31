import './App.css';

import TitleBar from './components/TitleBar/TitleBar';
import Display from './components/Display';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="wrapper">
      <TitleBar />
      <Display />
      <TextBox />
    </div>
  );
}

export default App;
