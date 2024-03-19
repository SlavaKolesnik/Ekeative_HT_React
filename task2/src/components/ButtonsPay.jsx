import React, { useState } from 'react';

const ButtonsPay = ({ onDonateClick }) => {
    const [isAnotherPayVisible, setAnotherPayVisible] = useState(false);

    const toggleAnotherPayVisibility = () => {
        setAnotherPayVisible(!isAnotherPayVisible);

    };
    return (
        <div>
            <div className="px-12 ml-6 mb-10 text-center ">
                <div id="hr-gray" className={`w-full h-[1px] bg-gray-400 mb-6 ${isAnotherPayVisible ? 'hidden' : ''}`}></div>
                <div>
                    <div id="toggleButton" class="card-input-button" onClick={toggleAnotherPayVisibility}>
                        <img
                            src="https://send.monobank.ua/img/card.svg"
                            alt="Credit card"
                            className="inline h-4"
                            />
                            <div className="inline text-red-500"> Оплатити карткою</div>
                    </div>
                </div>
                <div id="another-pay" className={isAnotherPayVisible ? '' : 'hidden'}> 
                                   <div>
                    <div className="inline-block w-14 h-[1px] bg-gray-400 mr-2"></div>
                    <div className="inline-block"> або уведіть дані картки </div>
                    <div className="inline-block w-14 h-[1px] bg-gray-400 ml-2"></div>
                </div>
                <div className="relative mt-4 w-76 border border-gray-400 border-solid rounded-2xl ">
                <input 
                    type="number" 
                    id="hs-floating-input-email" 
                    className="peer border-solid p-4 block w-full rounded-2xl border-gray-400  text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2" 
                    placeholder="you@email.com" 
                />
                <label 
                    htmlFor="hs-floating-input-email" 
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">
                    Номер картки
                </label>
                </div>
                <div className="relative mt-4 w-[304px] border border-gray-400 border-solid rounded-2xl ">
    <div className="flex relative">
        <input 
            type="number" 
            id="hs-floating-input-mm" 
            className="peer border-solid p-4 block w-1/3 rounded-l-2xl border-gray-400 text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" 
            placeholder=" " 
        />
        <input 
            type="number" 
            id="hs-floating-input-yy" 
            className="peer border-solid p-4 block w-1/3 border-gray-400 text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" 
            placeholder=" " 
        />
        <input 
            type="number" 
            id="hs-floating-input-cvv" 
            className="peer border-solid p-4 block w-1/3 rounded-r-2xl border-gray-400 text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" 
            placeholder=" " 
        />
        <label 
            htmlFor="hs-floating-input-mm" 
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500">
            MM
        </label>
        <label 
            htmlFor="hs-floating-input-yy" 
            className="absolute top-0 left-1/3 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500">
            YY
        </label>
        <label 
            htmlFor="hs-floating-input-cvv" 
            className="absolute top-0 left-2/3 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500">
            CVV
        </label>
    </div>
    
</div>
<div className="mt-4">
    <button onClick={onDonateClick} type="button" className="w-full h-14 focus:outline-none text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Поповнити банку</button>
    </div>
                </div>
 

</div>

</div>
         
    );
}

export default ButtonsPay;