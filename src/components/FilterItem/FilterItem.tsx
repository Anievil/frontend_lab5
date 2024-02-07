import React from "react";
import { IStats } from "../../types";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

interface IProps {
  item: IStats;
}

function FilterItem({ item: { month, activity } }: IProps) {
  return (
    <div className="filter_item" key={month}>
      <Progress.Line
        percent={activity}
        vertical={true}
        showInfo={false}
        strokeColor={"#40005d"}
      />
      <p className="filter_month_text">{month}</p>
    </div>
  );
}

export default FilterItem;
