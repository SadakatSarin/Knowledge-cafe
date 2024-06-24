import React from 'react';
import './Bookmark.css';


const Bookmark = (props) => {

    // console.log(props.bookmark);

   const bookmark = props.bookmark;

    return (
        <div>

            <h3>Bookmarked Blogs : {bookmark.length}</h3>
            <h4>
                {bookmark.map((bookmarkedBlog) => (

                    <div className='bookmark-title-name'>{bookmarkedBlog.blogTitle}</div>

                ))}
            </h4>

        </div>
    );
};

export default Bookmark;