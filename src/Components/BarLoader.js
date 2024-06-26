import './BarLoaderCss.css';

import react from "react";

export default function DoubleBubble({
    message,
    speed
}) {
    
    return (
        <div className='h-screen w-screen fixed top-0 left-0' style={{ "backgroundColor": "rgba(0,0,0,0.30)" }}>
            <div className="spinner-container ">

<svg width="100%" viewBox="0 0 248 247" fill="none" xmlns="http://www.w3.org/2000/svg"  >
    <g id="spinner2">
        <g id="outer" style={{animationDuration:speed+"s"}}>
            <circle id="Ellipse 1" cx="123.5" cy="124.5" r="104" stroke="#e0e0e0" stroke-width="11" />
            <circle id="Ellipse 2" cx="124" cy="20" r="20" fill="#aba9a9" />
            <circle id="Ellipse 5" cx="124" cy="227" r="20" fill="#aba9a9" />
            <circle id="Ellipse 3" cx="228" cy="127" r="20" fill="#aba9a9" />
            <circle id="Ellipse 4" cx="20" cy="127" r="20" fill="#aba9a9" />
        </g>
        <g id="inner" style={{animationDuration:speed+"s"}}>
            <circle id="Ellipse 1_2" cx="122.916" cy="125.545" r="61.1714" transform="rotate(32.5155 122.916 125.545)" stroke="#e0e0e0" stroke-width="11"  />
            <circle id="Ellipse 2_2" cx="157.374" cy="72.0558" r="12.1774" transform="rotate(32.5155 157.374 72.0558)" fill="#aba9a9" />
            <circle id="Ellipse 5_2" cx="89.626" cy="178.335" r="12.1774" transform="rotate(32.5155 89.626 178.335)" fill="#aba9a9" />
            <circle id="Ellipse 3_2" cx="175.751" cy="161.03" r="12.1774" transform="rotate(32.5155 175.751 161.03)" fill="#aba9a9" />
            <circle id="Ellipse 4_2" cx="68.958" cy="92.9549" r="12.1774" transform="rotate(32.5155 68.958 92.9549)" fill="#aba9a9" />
        </g>
    </g>
</svg>

    <p className='font-poppins font-bold text-white text-[0.8rem]'>{message === undefined ? "PROCESSING.." : message}</p>
</div>
        </div>

    )
}