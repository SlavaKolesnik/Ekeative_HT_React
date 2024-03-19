import React from 'react';

const JarStats = ({ amount }) => {

    return (
      
        <div className="mt-4 flex bg-white rounded-lg">
          <div className="flex gap-3 px-5 py-0 my-3 border-r border-gray-300">
            <img
              src="https://send.monobank.ua/img/collected.svg"
              alt="stats-data__label"
            />
            <div>
              <div className="font-normal text-sm leading-4 text-gray-400">Накопичено</div>
              <div id="money-now">{amount} &nbsp;₴</div>
            </div>
          </div>
          <div className="bg-gray-300 h-10 w-[1px] mt-2"></div>
          <div className="flex gap-3 px-5 py-0 my-3">
            <img
              src="https://send.monobank.ua/img/target.svg"
              alt="stats-data"
            />
            <div>
              <div className="font-normal text-sm leading-4 text-gray-400">Ціль</div>
              <div>25&nbsp;000&nbsp;₴</div>
            </div>
          </div>
        </div>
    );
}

export default JarStats;