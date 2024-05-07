import React, { useState } from 'react';

function Select() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2>Select Car brand</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">select...</option>
        <option value="Volvo">Volvo</option>
        <option value="Ford">Ford</option>
        <option value="Fiat">Fiat</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
}

export default Select;
