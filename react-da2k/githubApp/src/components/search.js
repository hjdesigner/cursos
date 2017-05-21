'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input type='search' placeholder='Digite o nome do usuario no Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
