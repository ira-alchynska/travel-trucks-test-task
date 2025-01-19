import { useDispatch, useSelector } from 'react-redux';
import css from './CatalogFilter.module.css';
import {
    setEquipment,
    setType,
    setLocation,
    selectEquipment,
    selectLocation,
    selectType,
} from '../../redux/filterSlice';
import { useState } from 'react';
import {
    filterEquipmentOptions,
    filterTypeOptions,
    locations,
} from '../../utils/constants';
import { resetCurrentPage } from '../../redux/campersSlice';

const CatalogFilter = () => {
    const dispatch = useDispatch();
    const equipment = useSelector(selectEquipment);
    const location = useSelector(selectLocation);
    const type = useSelector(selectType);

    // Local state to hold temporary filter values
    const [localEquipment, setLocalEquipment] = useState(equipment);
    const [localLocation, setLocalLocation] = useState(location);
    const [localType, setLocalType] = useState(type);

    // Handle toggling equipment selection
    const handleEquipmentClick = (key, value) => {
        setLocalEquipment((prev) => {
            const newEquipment = { ...prev };
            if (key in newEquipment) {
                delete newEquipment[key]; // Remove the selected equipment if it exists
            } else {
                newEquipment[key] = value; // Add the equipment if it does not exist
            }
            return newEquipment;
        });
    };

    // Handle vehicle type selection
    const handleTypeClick = (value) => {
        setLocalType((prev) => (prev === value ? '' : value)); // Toggle the selected type
    };

    // Handle location change
    const handleLocationChange = (event) => {
        setLocalLocation(event.target.value);
    };

    // Apply filters when the search button is clicked
    const handleSearch = () => {
        dispatch(resetCurrentPage());
        dispatch(setEquipment(localEquipment));
        dispatch(setType(localType));
        dispatch(setLocation(localLocation));
    };

    return (
        <div className={css.filterContainer}>
            {/* Location Filter */}
            <div className={css.locationSection}>
                <label className={css.sectionTitle}>Location</label>
                <div
                    className={`${css.locationBox} ${
                        localLocation ? '' : css.emptyLocation
                    }`}
                >
                    <span
                        className={`icon icon-map ${css.filterMapIcon}`}
                        aria-hidden="true"
                    ></span>
                    <select
                        className={css.locationSelect}
                        value={localLocation || ''}
                        onChange={handleLocationChange}
                    >
                        <option value="" hidden>
                            City
                        </option>
                        {locations.map((loc, index) => (
                            <option key={index} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Equipment Filters */}
            <div className={css.filterSection}>
                <h3 className={css.sectionTitle}>Filters</h3>

                <div className={css.filterBlock}>
                    <h4 className={css.filterTitle}>Vehicle equipment</h4>
                    <div className={css.equipmentContainer}>
                        {filterEquipmentOptions.map((option) => (
                            <div
                                key={option.key}
                                className={`${css.equipmentItem} ${
                                    option.key in localEquipment
                                        ? css.selected
                                        : ''
                                }`}
                                onClick={() =>
                                    handleEquipmentClick(
                                        option.key,
                                        option.value
                                    )
                                }
                            >
                                <span
                                    className={`icon ${option.icon} ${css.filterOptionIcon}`}
                                    aria-hidden="true"
                                ></span>
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vehicle Type Filters */}
                <div className={css.filterBlock}>
                    <h4 className={css.filterTitle}>Vehicle type</h4>
                    <div className={css.typeContainer}>
                        {filterTypeOptions.map((option) => (
                            <div
                                key={option.key}
                                className={`${css.typeItem} ${
                                    localType === option.key ? css.selected : ''
                                }`}
                                onClick={() => handleTypeClick(option.key)}
                            >
                                <span
                                    className={`icon ${option.icon} ${css.filterOptionIcon}`}
                                    aria-hidden="true"
                                ></span>
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <button className={css.searchButton} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default CatalogFilter;
