import React,{useState,useEffect} from 'react'

import { useParams} from "react-router-dom";

import { getGallery } from "../../api/discover";

import { setFavoriteImage } from "../../api/discover";

const GallaryCard = () => {
    const { categoryName } = useParams();
    let sortByDate;
    let filterByLike;
    let shuffle;
    
    const queryParams = new URLSearchParams(window.location.search);
    const queryStringDate = queryParams.get("sortByDate");
    const queryStringLike = queryParams.get("filterByLike");
    const queryshuffle = queryParams.get("shuffle");
     
    if (queryStringDate) sortByDate = queryStringDate;
    else if (queryStringLike) filterByLike = true;
    else if(queryshuffle) shuffle = queryshuffle;
    

    const [isActive, setActive] = useState();
    const [galleryList, setGalleryList] = useState([
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        } 
    ]);

   

    async function fetchGallery(categoryName ,sortByLike, sortByDate,shuffle) {
        const galleryDetails = await getGallery( categoryName,  sortByLike,sortByDate,shuffle);
        setGalleryList(galleryDetails);
    }

    const toggleClass = () => {
        setActive(setFavoriteImage);
      };


    useEffect(() => {
        fetchGallery(categoryName, filterByLike, sortByDate,shuffle);
    }, [categoryName, sortByDate, filterByLike,shuffle]);


  return (
   <>
    <div className='container-fluid  d-flex justify-content-around' >
       {galleryList.map((image) => ( 
           <div>
                {image.name} 
               <img className="w-50 h-70 mt-5 ms-5 rounded-5 " src={image.imageLink} alt="" />
               <div   onClick={toggleClass}   style={{ color: isActive ? 'red' : 'black', }} >
                 <i class="bi bi-heart"></i>
                 
               </div>
           </div>
       ))}
   </div>

   
   </>  
  )
}

export default GallaryCard