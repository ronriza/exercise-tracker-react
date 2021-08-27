import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'


function SortArrow({ id, sortCriteria }) {
    // renders a hidden arrow, an up arrow, or a down arrow, depending on sort criteria
    if (sortCriteria.field === id) {
        if (sortCriteria.direction === 'ascending') {
            return <MdKeyboardArrowUp />

        } else {
            return <MdKeyboardArrowDown />
        }

    } else {
        return <MdKeyboardArrowDown className="hidden" />
    }

}

export default SortArrow