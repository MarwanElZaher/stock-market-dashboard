import React, { useEffect, useState } from 'react';
import { mockData, filterMockData } from '../../mockedData.js'; // Import mocked mockData if needed
import FiltersApplied from '../FiltersApplied/index.jsx';
import SearchBar from '../SearchBar/index.jsx';
import FilterDropDownComponent from '../FilterDropDownComponent/index.jsx';

function Filters({setFilteredData}) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [dropdownVisibility, setDropdownVisibility] = useState({
        industry: false,
        marketCap: false,
        riskLevel: false,
    });
    useEffect(() => {
        if (mockData) {
        setFilteredData(mockData)
        }
    }, [])
    useEffect(() => {
        if (!selectedFilters.length > 0) {
        setFilteredData(mockData)
    }}, [selectedFilters])
    // Function to apply filter
    const applyFilter = (filterType, filterValue) => {
        const filterExists = selectedFilters.some(
            (filter) => filter.type === filterType && filter.value === filterValue
        );
    
        if (!filterExists) {
            // Add filter to selected filters array
            setSelectedFilters([...selectedFilters, { type: filterType, value: filterValue }]);
        }
    };

    // Function to clear all filters
    const clearAllFilters = () => {
        // Clear selected filters
        setSelectedFilters([]);
        // Reset filtered mockData to original mockData
        setFilteredData(mockData);
    };
    const removeFilter = (filter) => {
        const newFilters = selectedFilters.filter(f => f !== filter);
        setSelectedFilters(newFilters);

        const filtered = mockData.filter((item) => {
            return newFilters.some(filter =>  (item[filter.type])
            .replace(/\s+/g, '')
            .toLowerCase() === filter.value.replace(/\s+/g, '').toLowerCase());
        });

        setFilteredData(filtered);
    };
    const toggleDropdownVisibility = (dropdownName) => {
        setDropdownVisibility({
            ...dropdownVisibility,
            [dropdownName]: !dropdownVisibility[dropdownName],
        });
    };
    const applyFiltersToData = () => {

        const filtered = mockData.filter((item) => {
            return selectedFilters.some(filter => 
                (item[filter.type])
                    .replace(/\s+/g, '') // Remove all spaces
                    .toLowerCase() === filter.value.replace(/\s+/g, '').toLowerCase()
            );
        });

        setFilteredData(filtered);
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


            <FilterDropDownComponent
                isComponentVisible={dropdownVisibility.industry}
                toggleVisibility={() => toggleDropdownVisibility('industry')}
                filterData={filterMockData.industries}
                text="Industry"
                applyFilter={(value) => applyFilter("industry", value)}
            />
            <div className='flex flex-row justify-between p-4'>
                <FilterDropDownComponent
                isComponentVisible={dropdownVisibility.marketCap}
                toggleVisibility={() => toggleDropdownVisibility('marketCap')}
                filterData={filterMockData.marketCaps}
                text="Market Cap"
                applyFilter={(value) => applyFilter("marketCap", value)} />

            <FilterDropDownComponent
                isComponentVisible={dropdownVisibility.riskLevel}
                toggleVisibility={() => toggleDropdownVisibility('riskLevel')}
                filterData={filterMockData.riskLevels}
                text="Risk Level"
                applyFilter={(value) => applyFilter("riskLevel", value)}
                />
            </div>
          
            {/* Apply button */}
            <div className='flex justify-center'>
                <button className="bg-[#53ACFF] text-white px-12 py-2 rounded-md" onClick={applyFiltersToData} disabled={selectedFilters.length == 0} >Apply</button>
            </div>
        </div>
    );
}

export default Filters;
