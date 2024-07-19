import React from 'react';

const Tiles = ({ name, src, onClick }) => {
  return (
    <div className="h-10 w-40 bg-indigo-500 text-slate-900 flex justify-center items-center font-bold rounded-sm hover:bg-indigo-600 transition-all duration-300 active:scale-95 cursor-pointer" onClick={() => onClick(src)}>
      {name}
    </div>
  );
};

export default Tiles;