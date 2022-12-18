import React,{useState} from 'react'

const GallaryCard = () => {

    const [galleryList, setGalleryList] = useState([
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        } ,
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        } 
        ,
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        } ,
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        } 
        
        
        
    ]);

  return (
    <div className='container-fluid  d-flex justify-content-around' >
    {galleryList.map((image) => (
        <div>
            <img className="w-50 h-auto mt-5 ms-5 rounded-5 " src={image.url} alt="" />
        </div>
    ))}
</div>
  )
}

export default GallaryCard