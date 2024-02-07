import React, { useCallback, useEffect, useRef, useState } from "react";
import { years } from "../../contsans";

function FilterDateBlock() {
  const wrapRef = useRef<HTMLDivElement>();
  const [currentYear, setCurrentYear] = useState(years[0]);
  const [isAccardeonOpen, setIsAccardeonOpen] = useState(false);

  const ToggleAccardeon = useCallback(
    (event: { target: any }) => {
        console.log(event, event.target)
      if (wrapRef.current && !wrapRef.current.contains(event?.target)) {
        setIsAccardeonOpen(false);
      } else {
        console.log("ewe");
        setIsAccardeonOpen(!isAccardeonOpen);
      }
    },
    [isAccardeonOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", ToggleAccardeon);
    return () => {
      document.removeEventListener("mousedown", ToggleAccardeon);
    };
  }, [ToggleAccardeon]);

  return (
    <div
      className="filter_date_div"
      style={{ height: isAccardeonOpen ? "200px" : "40px" }}
      ref={(curRef) => {
        if (curRef) {
          wrapRef.current = curRef;
        }
      }}
    >
      <p className="filter_date_text">{`20${currentYear}`}</p>
      <div
        className="accardeonBody"
        style={{ height: isAccardeonOpen ? "200px" : "0" }}
      >
        {years.filter((year) => year !== currentYear).map((year) => (
            <div className="accardeonBodyItem" onClick={() => {setCurrentYear(year)}}>
                20{year}
            </div>
        ))}
      </div>
    </div>
  );
}

export default FilterDateBlock;
