import { useState, useRef, useContext, useEffect } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { ApiContext } from '../context/ApiProvider';
import { BiSolidParty } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const Search = () => {

  const { darkMode } = useContext(DarkModeContext);
  const { data, setData, loading, fetchData } = useContext(ApiContext);

  const eventInputRef = useRef(null);
  const countryInputRef = useRef(null);

  const [searchBtn, setSearchBtn] = useState(false);

  const searchBtnHandler = () => {
    if(countryInputRef.current.value == "---" || eventInputRef.current.value == "---") {
      setSearchBtn(false);
    } else {
      setSearchBtn(true);
    }
  }



  const handleClickSubmit = (e) => {
    e.preventDefault();
    // console.log(eventInputRef.current.value);
    // console.log(countryInputRef.current.value);
    const searchData = fetchData(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&taxonomies.name=${eventInputRef.current.value}&per_page=12&venue.state=${countryInputRef.current.value}`);
    setData(searchData);
  }

  return (
    <form className={`flex justify-around items-center w-1/2 p-5 rounded-md shadow-sm ${darkMode ?  'bg-secondary-color' : 'bg-white-color'}`}>
      <div className={`flex  w-1/3  p-2 items-center ${darkMode ? 'bg-white-color' : 'bg-secondary-color'} rounded-md`}>
        <label htmlFor="events">
            <BiSolidParty className='text-xl mr-2 text-orange-color'/>
        </label>
        <select name="" id="events" className={`w-full ${darkMode ? 'bg-white-color' : 'bg-secondary-color'}`} ref={eventInputRef} onMouseLeave={searchBtnHandler}>
            <option value="---">---</option>
            <option value="all">All</option>
            <option value="sport">Sport</option>
            <option value="comedy">Comedy</option>
            <option value="family">Family</option>
            <option value="theatre">Theatre</option>
            <option value="music_festival">Music Festival</option>
            <option value="literary">Literary</option>
        </select>
      </div>

      <div className={`flex  w-1/3  p-2 items-center ${darkMode ? 'bg-white-color' : 'bg-secondary-color'} rounded-md`}>
        <label htmlFor="state"><MdLocationOn className='text-xl mr-2 text-orange-color'/></label>
        <select id="state" name="state" className={`w-full ${darkMode ? 'bg-white-color' : 'bg-secondary-color'}`} ref={countryInputRef} onMouseLeave={searchBtnHandler}>
            <option value="---">---</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts
            </option><option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="MP">Northern Marianas Islands</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="VI">Virgin Islands</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            </select>
      </div>
      <div className={searchBtn ? '' : 'cursor-not-allowed'}>
        <input type='submit' className={searchBtn ? "w-full p-2 pr-10 pl-10 rounded-md bg-primary-color text-white-color font-bold cursor-pointer" : "w-full p-2 pr-10 pl-10 rounded-md bg-soft-primary text-white-color font-bold  pointer-events-none"} onClick={handleClickSubmit}/>
      </div>

    </form>
  )
}

export default Search
