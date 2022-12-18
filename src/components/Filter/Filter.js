import React from 'react'

const Filter = () => {
  return (
<div >
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn btn-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Sort By Date(asc)</button></li>
    <li><button class="dropdown-item" type="button">Sort By Date(Desc)</button></li>
    <li><button class="dropdown-item" type="button">Filter By Like</button></li>
  </ul>
</div>
</div>
  )
}

export default Filter