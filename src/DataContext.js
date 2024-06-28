import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const data = {
  areaChartData: [
    { date: new Date(2020, 1, 1), value: 30 },
    { date: new Date(2020, 2, 1), value: 80 },
    { date: new Date(2020, 3, 1), value: 45 },
    { date: new Date(2020, 4, 1), value: 60 },
    { date: new Date(2020, 5, 1), value: 20 },
    { date: new Date(2020, 6, 1), value: 90 },
    { date: new Date(2020, 7, 1), value: 55 },
  ],
  barChartData: [12, 5, 6, 6, 9, 10],
  lineChartData: [
    { date: new Date(2020, 1, 1), value: 30 },
    { date: new Date(2020, 2, 1), value: 80 },
    { date: new Date(2020, 3, 1), value: 45 },
    { date: new Date(2020, 4, 1), value: 60 },
    { date: new Date(2020, 5, 1), value: 20 },
    { date: new Date(2020, 6, 1), value: 90 },
    { date: new Date(2020, 7, 1), value: 55 },
  ],
  bubbleChartData: [
    { x: 30, y: 20, r: 10 },
    { x: 50, y: 90, r: 20 },
    { x: 90, y: 50, r: 15 },
    { x: 20, y: 80, r: 25 },
    { x: 40, y: 40, r: 30 },
  ],
  steppedAreaChartData: [
    { date: new Date(2020, 1, 1), value: 30 },
    { date: new Date(2020, 2, 1), value: 80 },
    { date: new Date(2020, 3, 1), value: 45 },
    { date: new Date(2020, 4, 1), value: 60 },
    { date: new Date(2020, 5, 1), value: 20 },
    { date: new Date(2020, 6, 1), value: 90 },
    { date: new Date(2020, 7, 1), value: 55 },
  ],
  columnChartData: [
    { category: 'A', value: 30 },
    { category: 'B', value: 80 },
    { category: 'C', value: 45 },
    { category: 'D', value: 60 },
    { category: 'E', value: 20 },
  ],
  pieChartData: [12, 5, 6, 6, 9, 10],
  comboChartData: [
    { date: new Date(2020, 1, 1), value1: 30, value2: 20 },
    { date: new Date(2020, 2, 1), value1: 80, value2: 40 },
    { date: new Date(2020, 3, 1), value1: 45, value2: 60 },
    { date: new Date(2020, 4, 1), value1: 60, value2: 80 },
    { date: new Date(2020, 5, 1), value1: 20, value2: 50 },
  ],
  gaugeData: { value: 70 },
  scatterPlotData: [
    { x: 30, y: 20 },
    { x: 50, y: 90 },
    { x: 90, y: 50 },
    { x: 20, y: 80 },
    { x: 40, y: 40 },
  ],
  geoChartData: [
    { country: 'USA', value: 100 },
    { country: 'CAN', value: 200 },
    { country: 'MEX', value: 300 },
    { country: 'IND', value: 400 },
    { country: 'IRN', value: 150 },
    { country: 'CHN', value: 500 },
    { country: 'PAK', value: 250 },
  ],
};

export const DataProvider = ({ children }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
