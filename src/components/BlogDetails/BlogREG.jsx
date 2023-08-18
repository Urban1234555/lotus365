import React from "react";
import blogImg from "../../assets/img/blog/blog_img01.jpg";
import blogDetails01 from "../../assets/img/blog/blog_details01.jpg";
import blogDetails02 from "../../assets/img/blog/blog_details02.jpg";
import blogDetails03 from "../../assets/img/blog/blog_details03.jpg";
import { Link } from "react-router-dom";

const BlogREG = () => {
  return (
    <div className="blog-post-item blog-details-wrap">
        <h2 className="title">
          Responsible Gaming
        </h2>
      <div className="blog-post-content">
        <div className="blog-meta">

        </div>
        <p class="px-4 pb-2 mb-3">
    <span class="text1">This game may be addictive, user discretion is advised. Fantasy sports may be addictive to a certain extent, we advise to avoid playing the games continuously and take regular breaks while you play.</span>
</p>
<p class="px-4 pb-2">
    <span class="text1">Here are some tips you can apply while playing online fantasy sports:</span>
</p>
    <p class="black--text f14 my-4">Set time limit for gaming</p>
    <p class="black--text f14 my-4">Take regular breaks</p>
    <p class="black--text f14 my-4">Stop playing during work</p>
    <p class="black--text f14 my-4">Don't chase losses</p>
    <p class="black--text f14 my-4">Play with a good frame of mind</p>
    <p class="black--text f14 my-4">Working Since 2010</p>
<p class="px-4 py-10">
    <span class="text1">These points might be helpful for you while playing and might help you in not being addicted to it.</span>
</p>

  
      </div>
    </div>
  );
};

export default BlogREG;
