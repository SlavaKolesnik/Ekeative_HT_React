import React, { useState } from "react";
import paletteData from '../pallete.json';
import bulbSound from './bulb.mp3'; 

const RenderedPalette = ({  number, toggleComponent }) => {
    console.log('number' + number);
    const [hoveredColor, setHoveredColor] = useState(null);
    const [copiedColor, setCopiedColor] = useState(null); 
    const arrCopiedWords = ['WILL DO!', 'RIGHT ONE!', 'COPIED!', 'GOT IT!', 'IT\'LL ROCK!', 'PASTE ME!'];
    let randomNumber = Math.floor(Math.random() * 6);
    const palette = paletteData[number];

    if (!palette || !palette.colors) {
        return <div>Колір не знайдено</div>;
    }

    const copyColorCodeToClipboard = (colorCode) => {
        navigator.clipboard.writeText(colorCode)
            .then(() => {
                console.log('Color code copied to clipboard:', colorCode);
                setCopiedColor(colorCode); 
                setTimeout(() => {
                    setCopiedColor(null); 
                }, 1200);
            })
            .catch((err) => {
                console.error('Failed to copy color code:', err);
            });
    };

    const playSound = () => {
        const audio = new Audio(bulbSound); 
        setTimeout(() => {
            audio.play(); 
        }, 800);
    };

    const handleBackButtonClick = () => {
        toggleComponent(null); 
    };

    return (
        <div>
            <div>
                <div className="p-4" onClick={handleBackButtonClick}>&larr; Back</div> 
            </div>
            <div className="font-sans font-semibold h-screen overflow-hidden">
                <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full" style={{ gridColumnGap: '0', gridRowGap: '0' }}>
                    {palette.colors.map((color, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-end items-end relative"
                            style={{ backgroundColor: color.color, color: 'white', paddingBottom: '5px', paddingRight: '5px'}}
                            onMouseEnter={() => setHoveredColor(color.name)}
                            onMouseLeave={() => setHoveredColor(null)}
                        >
                            <div className="absolute inset-0 flex justify-center items-center">
                                {hoveredColor === color.name && 
                                    <button className="border-2 border-white  border-opacity-50 px-6 py-2 rounded-lg" onClick={() => { copyColorCodeToClipboard(color.color); playSound(); }}>COPY</button>
                                }
                            </div>
                            {color.name.toUpperCase()}
                        </div>
                    ))}
                </div>
            {copiedColor && (
                <div style={{ position: 'fixed', width: '100%', height: '100%', bottom: 0, right: 0, backgroundColor: copiedColor }}>
                <div className="text-white flex flex-col font-sans font-semibold items-center justify-center h-screen">
                    <div className="text-7xl  drop-shadow-lg w-full text-center p-4 mb-10" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", textShadow: "0px 1px 1px black" }}>{arrCopiedWords[randomNumber]}</div>
                    <div className="block " style={{ textShadow: "0px 1px 1px black" }}>{copiedColor}</div> 
                </div>
            </div>
            
            
            )}
        </div>
        </div>
        
    );
}

export default RenderedPalette;
