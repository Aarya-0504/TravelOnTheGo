import React, { useState } from "react";
import "./FilteredButtons.css";
import CloseIcon from "./icons/CloseIcon";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import { withStyles } from '@material-ui/styles';

// const RedSlider = withStyles({
//     root: {
//       color: 'red', // Change the color to red
//     },
//   })(Slider);



function valuetext(value) {
    return `${value}Peepul`;
  }



const FilterButtons = ({onChangeFilters, filters}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSlider,setshowSlider] = useState(false);
    const [costValue, setCostValue] = useState(500); // Initialize cost value
    const [peopleValue, setPeopleValue] = useState(1); 
    const [isDaySelected, setIsDaySelected] = useState(true); // Initialize Day checkbox state
    const [isNightSelected, setIsNightSelected] = useState(false);

const handleCostChange = (event, newValue) => {
    setCostValue(newValue); // Update the cost value when the slider changes
};

const handlePeopleChange = (event, newValue) => {
        setPeopleValue(newValue); // Update the No. of People value when the slider changes
    };

    const handleDayCheckboxChange = () => {
        setIsDaySelected(!isDaySelected); // Toggle the Day checkbox state
    };

    const handleNightCheckboxChange = () => {
        setIsNightSelected(!isNightSelected); // Toggle the Night checkbox state
    };

const applyFilters = () => {
  const timeFilters = [];

        if (isDaySelected) {
            timeFilters.push("Day");
        }

        if (isNightSelected) {
            timeFilters.push("Night");
        }
    const updatedFilters = { ...filters, cost: costValue,people: peopleValue,time: timeFilters  };
    console.log(updatedFilters)
    onChangeFilters(updatedFilters);
    setShowMenu(false); // Close the menu after applying filters
};
    return (
      <>
        <div
          className={`sort-ratings-side-menu p-8 h-screen bg-gray-100 w-80 absolute z-10 top-0 ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <button onClick={() => setShowMenu(false)}>
            <CloseIcon className="absolute z-20 right-10 top-16 bg-transparent close-icon" />
          </button>
          <h1 className="bg-transparent text-4xl">Rating</h1>
          <div className="rating-buttons-container">
            {[1, 2, 3, 4, 5].map((elem) => (
              <button
                key={elem}
                type="button"
                className={`${
                  filters.rating === elem ? "bg-pink-200" : "bg-white"
                } flex  hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium my-2 border border-gray-300 transition duration-200 each-in-out rating-button`}
                onClick={() =>
                  onChangeFilters(
                    filters.rating === elem
                      ? { ...filters, rating: 0 }
                      : { ...filters, rating: elem }
                  )
                }
              >
                {`Rating: ${elem}.0+`}
              </button>
            ))}
          </div>
          <span>Cost</span>
          <div>
            <button onClick={() => setShowMenu(false)}>
              <CloseIcon className="absolute z-20 right-10 top-16 bg-transparent close-icon" />
            </button>

            <Box sx={{ width: 250 }}>
              <Slider
                aria-label="Temperature"
                value={costValue} // Set the value from state
                onChange={handleCostChange} // Handle cost value change
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={500}
                marks
                min={500}
                max={2500}
                sx={{ "& .MuiSlider-valueLabel": { color: "black" } }}
              />
              {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
            </Box>
          </div>
          <span >No. of People</span>
                <div >
                <button onClick={() => setShowMenu(false)}>
                    <CloseIcon className="absolute z-20 right-10 top-16 bg-transparent close-icon" />
                </button>
                
                <Box sx={{ width: 250}}>
      <Slider
        aria-label="Temperature"
        value={peopleValue} // Set the value from state
        onChange={handlePeopleChange} // Handle No. of People value change
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks   min={1}    max={5}
        sx={{ '& .MuiSlider-valueLabel': { color: 'black' } }}
        color='secondary'
      />

      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
</div>
<div class=" mt-3">
    <span >Time</span>

    <div class="flex items-center mb-4 pt-2">
    <input
                            id="day-checkbox"
                            type="checkbox"
                            value=""
                            className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={isDaySelected}
                            onChange={handleDayCheckboxChange}
                        />
                        <label
                            for="day-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Day</label>
    </div>
    <div class="flex items-center">
    <input
                            id="night-checkbox"
                            type="checkbox"
                            value=""
                            className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={isNightSelected}
                            onChange={handleNightCheckboxChange}
                        />
                        <label
                            for="night-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Night</label>
    </div>
</div>
<button
                    onClick={applyFilters}
                    type="button"
                    className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
                >
                    Apply Filters
                </button>
        </div>
        <div className="flex justify-start items-center mx-40 my-3 filter-buttons-container">
          <div className="flex">
            <button
              type="button"
              // onClick={() => setShowMenu(!showMenu)}
              className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:bg-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              {/* Filters */}
            </button>
            <button
              onClick={() => setShowMenu(!showMenu)}
              type="button"
              className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
            >
              {`Rating${filters.rating > 0 ? `: ${filters.rating}.0+` : ""}`}
            </button>
            <button
              type="button"
              className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
            >
              Cost
            </button>
            <button
              type="button"
              className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
            >
              Time
            </button>
            {/* <button type="button" className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:bg-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        Delivery Time
                    </button> */}
            <button
              type="button"
              className="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out"
            >
              Great Offers
            </button>
          </div>
        </div>
      </>
    );
};

export default FilterButtons;