import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select("svg").remove();
      const data = [12, 5, 6, 6, 9, 10];
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
  }, []);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default BarChart;
