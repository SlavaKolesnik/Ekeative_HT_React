import React from "react";

const Palette = ({ colors }) => {
    return (
        <div className="min-w-25 min-h-40 grid grid-cols-5 gap-4 rounded-lg" style={{ gridColumnGap: '0', gridRowGap: '0' }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="min-w-1 min-h-1 flex flex-col justify-end items-end relative"
                    style={{ backgroundColor: color.color}}
                >
                  
                </div>
            ))}
        </div>
    );
}

export default Palette;
