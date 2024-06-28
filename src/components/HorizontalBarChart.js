import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useData } from '../DataContext';

const HorizontalBarChart = () => {
  const d3Container = useRef(null);
  const { horizontalBarChartData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select('svg').remove();
      const data = horizontalBarChartData;
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
        .attr('y', (d, i) => i * 40)
        .attr('x', 0)
        .attr('height', 35)
        .attr('width', (d) => d * 30)
        .attr('fill', 'teal');
    }
  }, [horizontalBarChartData]);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default HorizontalBarChart;
