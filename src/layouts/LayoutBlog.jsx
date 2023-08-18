import React from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import HeaderTwo from "../components/Header/HeaderTwo";
import FooterThree from "../components/Footer/FooterThree";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import BlogAside from "../components/BlogAside/BlogAside";

const LayoutBlog = (props) => {
  return (
    <div className={cn("white-background")}>
      <PageLoader />

      <main>

        <section className="blog-area pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">{props.children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LayoutBlog;
