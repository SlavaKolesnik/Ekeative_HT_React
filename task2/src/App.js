import React, { useState } from 'react';
import LogoMono from "./components/LogoMono"
import JarIcon from "./components/JarIcon"
import JarInfo from "./components/JarInfo"
import JarStats from "./components/JarStats"
import ButtonMoney from "./components/ButtonMoney"
import DataDonaters from "./components/DataDonaters"
import ButtonsPay from "./components/ButtonsPay"
import "./normalizes.css";
import "./resets.css";


function App() {
  const [jarAmount, setJarAmount] = useState(7700);

  const handleMoneyInputChange = (event) => {

  };

  const handleDonateClick = (value) => {
    setJarAmount(prevAmount => prevAmount + value);
  };

  return (
    <div className="flex min-h-screen justify-center items-center flex-col bg-gradient-to-br from-purple-400 via-purple-500 to-purple-400">
      <div className="flex bg-white relative min-h-170  rounded-3xl shadow-lg overflow-hidden mb-0 pb-0 font-sans">
      <div className="bg-gray-100 w-1/2  flex flex-col items-center  p-10">
            <LogoMono />
            <JarIcon />
            <JarInfo />
            <JarStats amount={jarAmount}/>
        </div>
        <div>
            <ButtonMoney onInputChange={handleMoneyInputChange} />
            <DataDonaters onDonateClick={() => handleDonateClick(parseInt(document.getElementById("moneyInput").value))}/>
            <ButtonsPay onDonateClick={() => handleDonateClick(parseInt(document.getElementById("moneyInput").value))} />
        </div>
        </div>
    </div>
     
  )
}

export default App;
