import React from "react"
import getImage from "../../Utils";
function FiltersApplied({ selectedFilters, onClearFilter }) {
    return (
        <div className="flex items-center space-x-2 p-4 mb-3 bg-[#202020] rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#202020]">
            {selectedFilters.map((filter, index) => (
                filter.type === "industry" &&
                <button
                    key={index}
                    onClick={() => onClearFilter(filter)}
                    className="bg-gray-200 px-2 py-1 rounded-md"
                    >
                        <div className="flex flex-row items-center justify-between whitespace-nowrap">
                        {filter.value}
                            <img src={getImage(filter?.value)} alt={filter?.value} className="p-1 mx-1"/>
                            </div>
                </button>
            ))}
        </div>
    );
}
export default FiltersApplied