import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "../styles/skillsCharts.css";

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Function to create the bar chart
    const createBarChart = () => {
      const svg = d3.select(chartRef.current);

      // Set the dimensions of the chart
      const containerWidth = chartRef.current.parentElement.clientWidth;

      const width = containerWidth;
      const height = 300;
      const margin = { top: 20, right: 30, bottom: 30, left: 100 };

      // Calculate the chart dimensions without margins
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      // Create scales
      const xScale = d3.scaleLinear().domain([0, 100]).range([0, chartWidth]);

      const yScale = d3
        .scaleBand()
        .domain(data.map((d) => d.label))
        .range([0, chartHeight])
        .padding(0.3);

      // Create axes
      const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(10);

      // color arrays
      const colorArray = [
        "#A0B044",
        "#64B946",
        "#38908D",
        "#93223E",
        "#8254A9",
        "#A57352",
        "#A55653",
        "#9C4A73",
        "#6C8C46",
      ];

      const shuffledColors = [...colorArray].sort(() => Math.random() - 0.5);

      // Add axes to the chart
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .call(yAxis)
        .call((g) => g.select(".domain").remove());

      // Create bars
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", margin.left)
        .attr("y", (d) => yScale(d.label) + margin.top)
        .attr("width", (d) => xScale(d.value))
        .attr("height", yScale.bandwidth())
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", (d, i) => shuffledColors[i % shuffledColors.length]);

      svg
        .selectAll(".bar-label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "bar-label")
        .attr("x", (d) => margin.left + xScale(d.value) + 10) // Adjust the position as needed
        .attr("y", (d) => yScale(d.label) + margin.top + yScale.bandwidth() / 2)
        .text((d) => `${d.value}%`)
        .attr("alignment-baseline", "middle");
    };

    // Call the function to create the bar chart
    createBarChart();
  }, [data]);

  return <svg ref={chartRef} width="100%" height={300}></svg>;
};

export default BarChart;
