import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select("svg").remove();
      const data = [
        { date: new Date(2020, 1, 1), value: 30 },
        { date: new Date(2020, 2, 1), value: 80 },
        { date: new Date(2020, 3, 1), value: 45 },
        { date: new Date(2020, 4, 1), value: 60 },
        { date: new Date(2020, 5, 1), value: 20 },
        { date: new Date(2020, 6, 1), value: 90 },
        { date: new Date(2020, 7, 1), value: 55 },
      ];

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 300 - margin.left - margin.right;
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

      const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.value));

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));

      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
    }
  }, []);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default LineChart;
