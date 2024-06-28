import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import AreaChart from './components/AreaChart';
import BubbleChart from './components/BubbleChart';
import SteppedAreaChart from './components/SteppedAreaChart';
import ColumnChart from './components/ColumnChart';
import ComboChart from './components/ComboChart';
import Gauge from './components/Gauge';
import ScatterPlot from './components/ScatterPlot';
import GeoChart from './components/GeoChart';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <h1>React D3 Charts</h1>
          <div className="chart-row">
            <BarChart />
            <ColumnChart />
          </div>
          <div className="chart-row">
            <LineChart />
            <ScatterPlot />
          </div>
          <div className="chart-row">
            <PieChart />
            <ComboChart />
          </div>
          <div className="chart-row">
            <AreaChart />
            <SteppedAreaChart />
          </div>
          <div className="chart-row">
            <BubbleChart />
            <Gauge />
          </div>
          <div className="chart-row">
            <GeoChart />
          </div>
        </header>
      </div>
    </DataProvider>
  );
}

export default App;
