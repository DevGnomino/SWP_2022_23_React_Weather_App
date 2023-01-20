import './App.css';
import DayCard from './components/DayCard';

function App() {
  return (
    <div className='App'>
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <DayCard test="Hallo" />
          </div>
          <div className='TimelineDiv'></div>
          <div className='DescDiv'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
