import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import HorizontalBarChart from './components/HorizontalBarChart';
import ScatterPlot from './components/ScatterPlot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React D3 Charts</h1>
        <div className="chart-row">
          <BarChart />
          <HorizontalBarChart />
        </div>
        <div className="chart-row">
          <LineChart />
          <ScatterPlot />
        </div>
        <div className="chart-row">
          <PieChart />
        </div>
      </header>
    </div>
  );
}

export default App;
