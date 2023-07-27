import { useState, useRef } from 'react'
import { BiSolidParty } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const Search = () => {
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

  return (
    <form className='flex justify-around items-center w-1/2 p-5 rounded-md shadow-sm bg-white-color'>
      <div className='flex w-1/3 p-2 items-center bg-secondary-color rounded-md'>
        <label htmlFor="events">
            <BiSolidParty className='text-xl mr-2 text-orange-color'/>
        </label>
        <select name="" id="events" className='w-full bg-secondary-color' ref={eventInputRef} onMouseLeave={searchBtnHandler}>
            <option value="---">---</option>
            <option value="all">All</option>
        </select>
      </div>

      <div className='flex w-1/3 p-2 items-center bg-secondary-color rounded-md'>
        <label htmlFor="state"><MdLocationOn className='text-xl mr-2 text-orange-color'/></label>
        <select id="state" name="state" className='w-full bg-secondary-color' ref={countryInputRef} onMouseLeave={searchBtnHandler}>
            <option value="---">---</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts
            </option><option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Northern Marianas Islands">Northern Marianas Islands</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
            </select>
      </div>
      <div>
        <input type='submit' className={searchBtn ? "w-full p-2 pr-10 pl-10 rounded-md bg-primary-color text-white-color font-bold cursor-pointer" : "w-full p-2 pr-10 pl-10 rounded-md bg-soft-primary text-white-color font-bold pointer-events-none"} />
      </div>

    </form>
  )
}

export default Search
