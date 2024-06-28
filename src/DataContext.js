import React, { createContext, useContext } from 'react';

const DataContext = createContext();

const data = {
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
  pieChartData: [12, 5, 6, 6, 9, 10],
  scatterPlotData: [
    { x: 30, y: 20 },
    { x: 50, y: 90 },
    { x: 90, y: 50 },
    { x: 20, y: 80 },
    { x: 40, y: 40 },
  ],
  horizontalBarChartData: [12, 5, 6, 6, 9, 10],
};

export const DataProvider = ({ children }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
