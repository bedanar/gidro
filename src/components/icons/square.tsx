import React from "react";

export default function SquareIcon ({active = false} : {active?: boolean}) {
    return <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
            <rect x="1" y="1" width="21" height="19" stroke={active ? "#2F3035" : "#C4C4C4"} stroke-width="2"/>
            <rect x="7" y="6" width="2" height="2" fill={active ? "#2F3035" : "#C4C4C4"} stroke={active ? "#2F3035" : "#C4C4C4"} stroke-width="2"/>
            <rect x="7" y="13" width="2" height="2" fill={active ? "#2F3035" : "#C4C4C4"} stroke={active ? "#2F3035" : "#C4C4C4"} stroke-width="2"/>
            <rect x="14" y="6" width="2" height="2" fill={active ? "#2F3035" : "#C4C4C4"} stroke={active ? "#2F3035" : "#C4C4C4"} stroke-width="2"/>
            <rect x="14" y="13" width="2" height="2" fill={active ? "#2F3035" : "#C4C4C4"} stroke={active ? "#2F3035" : "#C4C4C4"} stroke-width="2"/>
        </svg>
    </button>
}