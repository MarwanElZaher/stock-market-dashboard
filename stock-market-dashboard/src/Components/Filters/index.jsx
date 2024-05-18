import React, { useState } from 'react';
// import FilterOptions from './Components/FilterOptions'; // Create FilterOptions component for the filter options
import { mockData } from '../../mockedData.js'; // Import mocked data if needed
import FiltersApplied from '../FiltersApplied/index.jsx';
import SearchBar from '../SearchBar/index.jsx';

function Filters() {
    const [selectedFilters, setSelectedFilters] = useState([]); // State to store applied filters

    // Function to handle applying a filter
    const applyFilter = (filter) => {
        setSelectedFilters([...selectedFilters, filter]);
    };

    // Function to handle clearing all filters
    const clearAllFilters = () => {
        setSelectedFilters([]);
    };
    const removeFilter = (filter) => {
        setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    };
    return (
        <div className="flex flex-col bg-[#181818] rounded-tl-lg p-4">
            <div className='flex justify-center'>
                <h1 className="text-2xl font-semibold text-white">Filters</h1>
            </div>

            <div className='flex flex-row items-center justify-between'>
                <p className='text-white'>Filters Applied</p>
                <button className='text-white' onClick={clearAllFilters}>Clear All</button>

            </div>
            <FiltersApplied
                selectedFilters={selectedFilters}
                onClearFilter={removeFilter}
            />

            {/* filters options selectttt container */}
            <div className='bg-[#202020] p-2 rounded-md'>
                <p className='text-white'> Stock</p>
                <SearchBar />
            </div>

            {/* Apply button */}
            <div className='flex justify-center'>
                <button className="bg-[#53ACFF] text-white px-12 py-2 rounded-md">Apply</button>
            </div>
        </div>
    );
}

export default Filters;
