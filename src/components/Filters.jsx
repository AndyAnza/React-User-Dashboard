import { useState, useEffect } from 'react';
import { useUsers } from '../context/UsersProvider';
import '../assets/css/filter.css';

export default function Filters() {
  const { applyFilters, filtersData, users, exportToCSV } = useUsers();
  const { nationalities, ages } = filtersData;

  const [gender, setGender] = useState('All');
  const [nationality, setNationality] = useState('');
  const [ageRange, setAgeRange] = useState('');

  useEffect(() => {
    function applyDynamicFilters() {
      applyFilters({ gender, nationality, ageRange });
    }
    applyDynamicFilters();
  }, [gender, nationality, ageRange, applyFilters]);

  return (
    <div className='filter'>
      <form>
        {/* Gender Filter */}
        <div>
          <label htmlFor='gender'>Gender</label>
          <select
            id='gender'
            name='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
          </select>
        </div>

        {/* Nationality Filter */}
        <div>
          <label htmlFor='nationality'>Nationality</label>
          <select
            id='nationality'
            name='nationality'
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value=''>All</option>
            {nationalities.map((nat, index) => (
              <option key={index} value={nat}>
                {nat}
              </option>
            ))}
          </select>
        </div>

        {/* Age Range Filter */}
        <div>
          <label htmlFor='ageRange'>Age Range</label>
          <select
            id='ageRange'
            name='ageRange'
            value={ageRange}
            onChange={(e) => setAgeRange(parseInt(e.target.value))}
          >
            <option value=''>All</option>
            {ages.map((age, index) => (
              <option key={index} value={age}>{`${age} - ${age + 9}`}</option>
            ))}
          </select>
        </div>

        {/*CSV button  */}
        <button onClick={() => exportToCSV(users, 'filtered_users')}>
          Export to CSV
        </button>
      </form>
    </div>
  );
}
