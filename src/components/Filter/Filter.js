import React from "react";
import { createSearchParams, useNavigate} from "react-router-dom";

const Filter = () => {

  const navigate = useNavigate();
  // const { categoryName } = useParams();
  // const [filter, setFilter] = useState({})

   
  function onFilterChange(event) {
    
    if (event.target.value === "asc" || event.target.value === "desc") {
        navigate({
            search: createSearchParams({
                sortByDate: event.target.value,
            }).toString(),
        });
    } else {
        navigate({
            search: createSearchParams({
                filterByLike: event.target.value,
            }).toString(),
        });
    }
    
}

  return (
<div >
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle btn btn-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter
      </button>
      <ul class="dropdown-menu">
        <li><button onClick={onFilterChange}   name="sortByDate" value="asc" class="dropdown-item" type="button">Sort By Date(asc)</button></li>
        <li><button onClick={onFilterChange}  name="sortByDate" value="desc" class="dropdown-item" type="button">Sort By Date(Desc)</button></li>
        <li><button onClick={onFilterChange}  name="sortByFilter" value="like" class="dropdown-item" type="button">Filter By Like</button></li>
      </ul>
    </div>
</div>
  )
}

export default Filter