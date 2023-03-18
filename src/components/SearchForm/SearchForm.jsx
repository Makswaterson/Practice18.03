import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ formSubmit }) => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    formSubmit(value);
    setValue('');
  };
  return (
    <SearchFormStyled onSubmit={onFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select onChange={onChange} aria-label="select" name="region" required>
        <option defaultValue="">Select a region and press enter</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
