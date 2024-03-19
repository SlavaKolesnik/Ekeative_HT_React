import React from 'react';

const DataDonaters = ({ onDonateClick }) => {
  return (
    <div className="px-12 ml-6 text-center ">
      <div className="relative mt-4 w-76 border border-gray-400 border-solid rounded-2xl ">
      <input 
        type="email" 
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
        Ваше ім'я (необов'язково)
      </label>
</div>
<div className="relative mt-4 mb-4 w-76 border border-gray-400 border-solid rounded-2xl">
      <input 
        type="email" 
        id="hs-floating-input-email" 
        className="peer  p-4 block w-full border-black rounded-2xl text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900
         dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
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
        Коментар (необов'язково)
      </label>
</div>
      <div className="mb-2">
        <button id="mono-pay" type="button" class="text-white w-full bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onDonateClick}>
        <img
                    src="https://send.monobank.ua/img/mono_pay.svg"
                    alt="mono Pay"
                    className="px-16 "
                  />
      </button>
      </div>
      <div className="mb-4">
        <button type="button" class="text-white w-full bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-20 py-3.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onDonateClick}>
        <img
            src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg"
            alt="mx-auto"
            className="mx-auto"            
          />
      </button>
      </div>
      
    </div>
    

  );
}

export default DataDonaters; 