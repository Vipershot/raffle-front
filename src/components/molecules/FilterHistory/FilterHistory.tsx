import { useState } from 'react';
import { AppButton } from '../../atoms/AppButton/AppButton';

interface FilterOption {
  value: string;
  label: string;
}

const filterOptions: FilterOption[] = [
  { value: 'all', label: 'Todos' },
  { value: 'inProgress', label: 'Tickets en curso' },
  { value: 'completed', label: 'Tickets finalizados' },
];

interface Props {
  handleFilter: (value:string) => void
}

export const FilterHistory = ({handleFilter}:Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleFilterChange = (value: string) => {
    handleFilter(value)
    console.log(`Filtrado por: ${value}`);
    setIsMenuVisible(false);
  };

  return (
    <div className="relative">
      <AppButton 
        title="Filtrar estado" 
        appearance="outline" 
        size="sm"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />

      {isMenuVisible && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button-1">
            {filterOptions.map((option) => (
              <li key={option.value} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <button
                  className="w-full text-left"
                  onClick={() => handleFilterChange(option.value)}
                  aria-controls="dropdown-menu-1"
                  aria-expanded={isMenuVisible}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};





