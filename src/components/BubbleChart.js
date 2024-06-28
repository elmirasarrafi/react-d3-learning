import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useData } from '../DataContext';

const BubbleChart = () => {
  const d3Container = useRef(null);
  const { bubbleChartData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select('svg').remove();
      const data = bubbleChartData;

      const width = 300;
      const height = 300;
      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const x = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);

      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.x))
        .attr('cy', d => y(d.y))
        .attr('r', d => d.r)
        .attr('fill', 'teal');

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));
    }
  }, [bubbleChartData]);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default BubbleChart;
