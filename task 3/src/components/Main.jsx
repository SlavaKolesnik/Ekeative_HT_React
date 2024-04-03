import React, { useState } from "react";
import Palette from "./Palette"; 
import paletteData from '../pallete.json'

const Main = ({ toggleComponent }) => {
    const [selectedPalette, setSelectedPalette] = useState(null); 

    const selectPalette = (index) => {
        setSelectedPalette(index);
        // alert(index) 
    };

    const handleButtonClick = (num) => {
        toggleComponent(num);
    };

    const palettes = [];
    for (let i=0; i < 9; i++) {
        palettes[i] = { name: paletteData[i]['paletteName'], colors: paletteData[i]['colors'] , emoji: paletteData[i]['emoji']}
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/colorful-abstract-background-concept_23-2148453934.jpg?w=1380&t=st=1711214836~exp=1711215436~hmac=a8a75566426d4d79d8ae734ce4ee28bd334125cb11869702faeba840682e42f2')] w-full min-h-screen">
            <div className="m-0 p-10 grid grid-cols-3 gap-10 w-2/3 mx-auto">
                {palettes.map((palette, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg font-semibold cursor-pointer hover:cursor-pointer" onClick={() => {
                        handleButtonClick(index);
                        selectPalette(index);
                      }}>  
                        <Palette colors={palette.colors} />
                        <div className="flex pt-4 justify-between">
                            <h2 className="">{palette.name}</h2>
                            <p>{palette.emoji}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
