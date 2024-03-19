import React, { useState } from 'react';
import AddMoney from './AddMoney';

const ButtonMoney = () => {
    const [money, setMoney] = useState(0);

    const handleChange = (event) => {
        const currentMoney = parseInt(event.target.value) || 0;
        if (currentMoney < 10) {
            document.getElementById("invalidAmount").classList.remove('hidden');
            document.getElementById("invisible").classList.add("hidden");
            document.getElementById("moneyInput").classList.remove("text-gray-400");
            document.getElementById("moneyInput").classList.add("text-red-400");
            document.getElementById("uah-icon").classList.remove("text-gray-400");
            document.getElementById("uah-icon").classList.add("text-red-400");
        } else {
            document.getElementById("invalidAmount").classList.add('hidden');
            document.getElementById("invisible").classList.remove("hidden");
            document.getElementById("moneyInput").classList.remove("text-red-400");
            document.getElementById("uah-icon").classList.remove("text-red-400");
            document.getElementById("moneyInput").classList.add("text-black");
            document.getElementById("uah-icon").classList.add("text-black");
        }
    };

    const handleClick = (amount) => {
        const currentMoney = parseInt(document.getElementById("moneyInput").value) || 0;
        if (currentMoney < 10) {
            document.getElementById("invalidAmount").classList.remove('hidden');
            document.getElementById("invisible").classList.add("hidden");
            document.getElementById("moneyInput").classList.remove("text-gray-400");
            document.getElementById("moneyInput").classList.add("text-red-400");
            document.getElementById("uah-icon").classList.remove("text-gray-400");
            document.getElementById("uah-icon").classList.add("text-red-400");
        }
        const newMoney = AddMoney(currentMoney, amount);
        document.getElementById("moneyInput").value = newMoney;
        
        document.getElementById("invalidAmount").classList.add('hidden');
        document.getElementById("invisible").classList.remove("hidden");
        document.getElementById("moneyInput").classList.remove("text-red-400");
        document.getElementById("uah-icon").classList.remove("text-red-400");
        document.getElementById("moneyInput").classList.add("text-black");
        document.getElementById("uah-icon").classList.add("text-black");
        
    };

    return (
        <div className="mt-12 ml-8 bg-gradient-to-br from-blue-500 to-pink-600 h-[216px] w-[393px] rounded-[24px] flex justify-center items-center ">
            <div className="bg-white w-[387px] h-[210px] rounded-[22px] absolute px-9 py-1">
                <div className="pt-6 justify-center flex font-inter font-semibold leading-4 text-base text-gray-700">
                    <p>Сума поповнення</p>
                    <img
                        src="https://send.monobank.ua/img/money.png"
                        className="flex w-4 ml-2 mb-5"
                        alt="money"
                    />
                </div>
                <div className="inline pl-10 font-bold font-sans">
                    <input
                        id="moneyInput"
                        type="number"
                        className="text-right border-none outline-none text-4xl font-bold text-gray-400 w-32"
                        placeholder="0"
                        onChange={handleChange} 
                    />
                </div>
                <div id="uah-icon" className="p-0 text-4xl font-bold text-gray-400 inline font-sans"> ₴</div>
                <div id="invisible" className="">&nbsp;</div>
                <div id="invalidAmount" className="hidden text-red-500">Сумма повинна бути від 10 ₴ до 29 999 ₴</div>
                <div className="mt-6 text-center">
                    <button onClick={() => handleClick(100)} id="button100" type="button"
                        className="btnPlus text-black border border-gray-300 bg-gray-100 hover:bg-gray-300 focus:outline-none  focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        +100 ₴&nbsp;
                    </button>
                    <button onClick={() => handleClick(500)} id="button500" type="button"
                        className="btnPlus text-black bg-gray-100 border border-gray-300 hover:bg-gray-300 focus:outline-none  focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">

                        +500 ₴&nbsp;
                    </button>
                    <button onClick={() => handleClick(1000)} id="button1000" type="button"
                        className="btnPlus text-black bg-gray-100 border border-gray-300 hover:bg-gray-300 focus:outline-none  focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        +1000 ₴
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonMoney;
