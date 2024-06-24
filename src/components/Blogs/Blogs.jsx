import React, { useEffect, useState } from 'react';

import './Blogs.css';

import blogImg1 from '../../images/1.jpg'
import boy1 from '../../images/boy1.png'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';






const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {

        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    // const handleAddToBookmark = (blog) => {

    //     const newBookMark = [...bookmark, blog]
        
    //     setBookmark(newBookMark);

        

    // }

    const handleAddToBookmark = (blog) => {


        const isBookmarked = bookmark.some(b => b.id === blog.id);
        if (isBookmarked) {
            const updatedBookmark = bookmark.filter(b => b.id !== blog.id);
            setBookmark(updatedBookmark);
        } else {
            const newBookMark = [...bookmark, blog];
            setBookmark(newBookMark);   
        }

    };

    const [time, setTime] = useState(0);
    const [readBlogs, setReadBlogs] = useState(new Set());



    // console.log(time);
    

    const handleMarkAsRead = (blog) => {

        if (!readBlogs.has(blog.id)) { 
            const readTime = parseInt(blog.readTime);
            setTime(prevTime => prevTime + readTime);
            setReadBlogs(prevReadBlogs => new Set(prevReadBlogs).add(blog.id));
        }
    };

    






    return (
        <>
            <div className='container'>

                <div className="blog-container">

                    {
                        blogs.map(blog =>

                            <Blog


                                key={blog.id}

                                blog={blog}

                                handleAddToBookmark={handleAddToBookmark}

                                // handleMarkAsRead={() => handleMarkAsRead(blog)}
                                 handleMarkAsRead={handleMarkAsRead}


                                isBookmarked={bookmark.some(b => b.id === blog.id)}



                            ></Blog>



                        )





                    }



                </div>

                <div className='reading-stats'>


                    <div className='spent-time-on-read'> 

                        <h3>Spent time on read : { time} min </h3>


                    </div>


                    <div className='book-mark-blogs'>

                        <Bookmark
                        
                            key={ bookmark.id}
                            bookmark={ bookmark}
                        
                        
                        ></Bookmark>
                        
                    </div>

                </div>




            </div>

        </>


    );
};

export default Blogs;