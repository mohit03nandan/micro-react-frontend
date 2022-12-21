import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import Filter from '../Filter/Filter';

import styles from "./Category.module.css";

import { getCategories } from "../../api/discover";

const Category = () => {

    const navigate = useNavigate();
    let { categoryName } = useParams();
    const [categoryList, setCategoryList] = useState([
        
    ]);


    async function fetchCategories() {
      const result = await getCategories();
      setCategoryList(result);
      
      if (!categoryName) {
        const defaultCategory = categoryList[0];
        const defaultCategoryName = defaultCategory.name;
        navigate(`/${defaultCategoryName}`);
      }
    }

     
    useEffect(() => {
      fetchCategories();
  }, []);


  function navigateCategory(categoryName) {
    navigate(`/${categoryName}`);
}

  return (
    <div className='container-fluid m-1'>
        <>
           {categoryList.map((category) => (
                        <div className='btn btn-outline-dark col-2 ms-5 '   onClick={() => navigateCategory(category.name)}>
                            {category.name}
                        </div>
                    ))}
        </>

        <div  className={styles.filterContainer}>
           <Filter/>
        </div>

    </div>
  )
}

export default Category