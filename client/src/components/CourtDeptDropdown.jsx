import React from "react";

const CourtDeptDropdown = ({ policeStations }) => {
  return (
    <div className=" grid grid-cols-4 my-2">
      <label className="">Court Department :</label>
      <select className=" border border-slate-400 rounded-md px-2">
        <option value="">Select Court Department :</option>
        {policeStations.map((station) => (
          <option key={station} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourtDeptDropdown;