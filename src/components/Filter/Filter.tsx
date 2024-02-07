import React from "react";
import { statistic } from "../../contsans";
import FilterItem from "../FilterItem/FilterItem";
import FilterDateBlock from "../FilterDateBlock/FilterDateBlock";

function Filter() {
  return (
    <div className="filter_body">
        <div className="filter_year_div">
            <h1 className="filter_title" style={{color: 'white'}}>Filter by year</h1>
            <FilterDateBlock />
        </div>
        <div className="filter_filterDiv">
            {statistic.map((item) => (<FilterItem item={item} />))}
        </div>
    </div>
  );
}

export default Filter;
