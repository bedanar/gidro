import React from "react";

export default function LineIcon({active = false} : {active ?: boolean}) {
    return <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
            <g opacity="1">
            <rect x="6" width="19" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            <rect x="6" y="8" width="19" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            <rect x="6" y="16" width="19" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            <rect width="3" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            <rect y="8" width="3" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            <rect y="16" width="3" height="3" rx="1.5" fill={active ? "#2F3035" : "#C4C4C4"}/>
            </g>
        </svg>
    </button>
}