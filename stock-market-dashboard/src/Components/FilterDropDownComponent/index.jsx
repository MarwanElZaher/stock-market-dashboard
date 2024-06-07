import React from "react";
import DropDownIcon from '../../icons/DropDownIcon.svg'
import getImage from "../../Utils";

function FilterDropDownComponent({ isComponentVisible, toggleVisibility, filterData, applyFilter, text }) {
    return (    
        <div className="mt-4">
            <div onClick={toggleVisibility} className={`cursor-pointer flex flex-row ${text === "Industry" ? "text-white text-xl font-semibold px-4" : ""}`}>
                 <img src={DropDownIcon} alt="dropdown icon" className="mx-2 filter brightness-0 invert"/>
                <p className="text-white text-xl font-semibold">{text}</p>
            </div>
            {isComponentVisible && (
                <div className={`ml-2 mt-2 ${text === "Industry" ? "grid grid-cols-2 p-2" : ""}`} >
                    {filterData.map((option, index) => (
                        text === "Industry" ? (
                            <div onClick={() => applyFilter(option)} key={index} className="flex flex-row border-l-2 border-white pl-1">
                                <img src={getImage(option)} alt={option} className="cursor-pointer mx-2 filter brightness-0 invert"/> 
                                <div className="text-white cursor-pointer py-1 text-xs font-normal flex align-center">
                                    {option}
                                </div>
                            </div>
                        ) : (
                            <div key={index} className='flex items-center'>
                                <input
                                    type='radio'
                                    name={text}
                                    onChange={() => applyFilter(option)}
                                />
                                <label className='ml-2 text-white text-xs font-normal'>{option}</label>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterDropDownComponent;
