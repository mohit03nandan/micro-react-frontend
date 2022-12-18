import React,{useState} from 'react'
import Filter from '../Filter/Filter';

import styles from "./Category.module.css";

const Category = () => {
 
    const [categoryList, setCategoryList] = useState([
        { name: "chairs" },
        { name: "fans" },
        { name: "curatin" },
        { name: "door" },
    ]);


  return (
    <div className='container-fluid m-1'>
        <>
           {categoryList.map((category) => (
                        <div className='btn btn-outline-dark col-2 ms-5 '>
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