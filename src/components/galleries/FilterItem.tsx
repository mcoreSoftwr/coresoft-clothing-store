import React from 'react';

type FilterProps = {
  name: string;
  active: boolean;
  onClick: () => void;
};

const FilterItem: React.FC<FilterProps> = ({ name, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer py-2 px-4 rounded-md w-full 
        ${active ? 'bg-green-500 text-white shadow-lg' : 'shadow border-2 border-gray-300'} 
        hover:shadow-lg transition-all`}
    >
      {name}
    </div>
  );
};

export default FilterItem;
