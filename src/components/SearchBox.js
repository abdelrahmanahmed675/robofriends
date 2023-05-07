import React from 'react';
import 'tachyons';

const SearchBox = ({serchField, searchchange}) =>{

    return(
      <div className=' ma3 pa2'>
       <input  placeholder='search roboots'
        type='search'
         className='pa3 b--green bg-light-blue'
         onChange={searchchange} /> 
       </div>
    	)

}


export default SearchBox;