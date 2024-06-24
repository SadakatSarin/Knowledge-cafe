import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
// import toast, { Toaster } from 'react-hot-toast';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import './Blog.css';

const Blog = (props) => {


    const { id, authorName, blogTitle, images, publishDate, readTime } = props.blog;
    // console.log(props);

    const handleAddToBookmark = props.handleAddToBookmark;
    const handleMarkAsRead = props.handleMarkAsRead;


    const isBookmarked = props.isBookmarked;


    if (isBookmarked) {
        console.log("true");
    } else {
        console.log("false");
    }




    const notify = () => {
        if (isBookmarked) {
            toast('🦄 Removed from the bookmark', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",




            });
        } else {
            toast('🦄Bookmarked successfully', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",



            });
        }
    };



    return (


        <div className="single-blog">


            <div className="blog-image">
                <img src={images.blogCoverImage} alt="Blog Cover" />
            </div>

            <div className="blogger-info">
                <div className="blogger-details">
                    <div className="blogger-profile">
                        <img src={images.authorImage} alt="Blogger Profile" />
                    </div>
                    <div className="blogger-name-date">
                        <h6>{authorName}</h6>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div className="blog-read-time">
                    <p>

                        {readTime}

                        <FontAwesomeIcon onClick={() => {


                            notify()
                            handleAddToBookmark(props.blog)



                        }}
                            icon={faBookmark} className="bookmark-icon" />
                        <ToastContainer />





                    </p>

                </div>
            </div>

            <div className="blog-title">

                <h2>{blogTitle}</h2>

                <p className='mark-as-read'
                    onClick={() => {
                        
                        handleMarkAsRead(props.blog)
                       
                    }}>Mark as read</p>
            </div>


        </div>
    );
};

export default Blog;


