import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useData } from '../DataContext';

const SteppedAreaChart = () => {
  const d3Container = useRef(null);
  const { steppedAreaChartData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select('svg').remove();
      const data = steppedAreaChartData;

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 500 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));

      svg.append('path')
        .datum(data)
        .attr('fill', 'lightblue')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', d3.area()
          .curve(d3.curveStepAfter)
          .x(d => x(d.date))
          .y0(height)
          .y1(d => y(d.value)));
    }
  }, [steppedAreaChartData]);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default SteppedAreaChart;
