import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useData } from '../DataContext';

const BarChart = () => {
  const d3Container = useRef(null);
  const { barChartData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select('svg').remove();
      const data = barChartData;
      const width = 300;
      const height = 300;
      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 40)
        .attr('y', (d) => height - d * 30)
        .attr('width', 35)
        .attr('height', (d) => d * 30)
        .attr('fill', 'teal');
    }
  }, [barChartData]);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default BarChart;
