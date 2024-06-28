import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select("svg").remove();
      const data = [12, 5, 6, 6, 9, 10];
      const width = 300;
      const height = 300;
      const margin = 40;
      const radius = Math.min(width, height) / 2 - margin;

      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const color = d3.scaleOrdinal()
        .domain(data)
        .range(d3.schemeSet2);

      const pie = d3.pie().value(d => d);
      const data_ready = pie(data);

      svg.selectAll('path')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(0)
          .outerRadius(radius))
        .attr('fill', d => color(d.data))
        .attr('stroke', 'white')
        .style('stroke-width', '2px')
        .style('opacity', 0.7);
    }
  }, []);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default PieChart;
