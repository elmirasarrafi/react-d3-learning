import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ScatterPlot = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select("svg").remove();
      const data = [
        { x: 30, y: 20 },
        { x: 50, y: 90 },
        { x: 90, y: 50 },
        { x: 20, y: 80 },
        { x: 40, y: 40 },
      ];

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
        .attr('r', 5)
        .attr('fill', 'teal');

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));
    }
  }, []);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default ScatterPlot;
