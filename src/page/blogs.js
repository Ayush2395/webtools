import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import animationData from "../assets/animation/98849-book-lover.json";

function Blogs() {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preserveaspectratio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Helmet>
        <title>Web Tools | Blogs</title>
      </Helmet>
      <div className="section blog_section">
        <div className="banner">
          <h1 style={{ color: "var(--yellow-color)" }}>Blogs</h1>
          <div className="animation">
            <Lottie options={defaultOptions} width={205} height={205} />
          </div>
        </div>
        <div className="blogs grid">
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog image"
              className="blog_img"
            />
            <h1>title of blog</h1>
            <p className="content">Lorem ipsum dolor sit amet.</p>
            <p className="author">Author: Ayush</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
