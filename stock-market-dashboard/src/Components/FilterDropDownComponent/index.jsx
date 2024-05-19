import React from "react";

function FilterDropDownComponent({ isComponentVisible, toggleVisibility, filterData, applyFilter, text }) {
    return (
        <div className="mt-4">
            <div onClick={toggleVisibility} className="cursor-pointer">
                <p className="text-xl font-semibold">{text}</p>
            </div>
            {isComponentVisible && (
                <div className="ml-2 mt-2">
                    {filterData.map((option, index) => (
                        text === "Industry" ? (
                            <div key={index} onClick={() => applyFilter(option)} className="cursor-pointer py-1">
                                {option}
                            </div>
                        ) : (
                            <div key={index} className='flex items-center'>
                                <input
                                    type='radio'
                                    name={text}
                                    onChange={() => applyFilter(option)}
                                />
                                <label className='ml-2'>{option}</label>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterDropDownComponent;
