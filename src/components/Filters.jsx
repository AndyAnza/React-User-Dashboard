import { useState, useEffect } from 'react';
import { useUsers } from '../context/UsersProvider';

export default function Filters() {
  const { applyFilters, filtersData, users, exportToCSV } = useUsers();
  const { nationalities, ages } = filtersData;

  const [gender, setGender] = useState('All');
  const [nationality, setNationality] = useState('');
  const [ageRange, setAgeRange] = useState('');

  // Apply filters dynamically when any filter changes
  useEffect(() => {
    function applyDynamicFilters() {
      applyFilters({ gender, nationality, ageRange });
    }
    applyDynamicFilters();
  }, [gender, nationality, ageRange, applyFilters]);

  return (
    <form>
      {/* Gender Filter */}
      <label htmlFor='gender'>Gender</label>
      <select
        id='gender'
        name='gender'
        value={gender}
        onChange={(e) => setGender(e.target.value)} // Update gender state on change
      >
        <option value='All'>All</option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
      </select>

      {/* Nationality Filter */}
      <label htmlFor='nationality'>Nationality</label>
      <select
        id='nationality'
        name='nationality'
        value={nationality}
        onChange={(e) => setNationality(e.target.value)} // Update nationality state
      >
        <option value=''>All</option>
        {nationalities.map((nat, index) => (
          <option key={index} value={nat}>
            {nat}
          </option>
        ))}
      </select>

      {/* Age Range Filter */}
      <label htmlFor='ageRange'>Age Range</label>
      <select
        id='ageRange'
        name='ageRange'
        value={ageRange}
        onChange={(e) => setAgeRange(parseInt(e.target.value))} // Update age range state
      >
        <option value=''>All</option>
        {ages.map((age, index) => (
          <option key={index} value={age}>{`${age} - ${age + 9}`}</option>
        ))}
      </select>

      {/*CSV button  */}
      <button onClick={() => exportToCSV(users, 'filtered_users')}>
        Export to CSV
      </button>
    </form>
  );
}
