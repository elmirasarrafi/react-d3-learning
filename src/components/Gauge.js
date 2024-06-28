import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useData } from '../DataContext';

const Gauge = () => {
  const d3Container = useRef(null);
  const { gaugeData } = useData();

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).select('svg').remove();
      const data = gaugeData;
      const width = 300;
      const height = 150;

      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const arc = d3.arc()
        .innerRadius(50)
        .outerRadius(70)
        .startAngle(-Math.PI / 2)
        .endAngle((Math.PI / 2) * (data.value / 100) - Math.PI / 2);

      svg.append('path')
        .attr('d', arc)
        .attr('fill', 'teal')
        .attr('transform', `translate(${width / 2},${height})`);
    }
  }, [gaugeData]);

  return <div className="chart-container" ref={d3Container}></div>;
};

export default Gauge;
