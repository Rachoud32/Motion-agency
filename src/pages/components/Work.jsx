import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WorksContext } from "./WorkList";

const Work = () => {
  const { filtered } = useContext(WorksContext);
  return !filtered ? (
    <div className="cases-list">
      <div className="container-placeholder">
        <div className="content-placeholder"></div>
        <div className="case-one__content">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="case-one__arrow">
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      <div className="container-placeholder">
        <div className="content-placeholder"></div>
        <div className="case-one__content">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="case-one__arrow">
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    filtered.map((el) => (
      <motion.div
        className="case-card"
        key={el._id}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="case-one__single">
          <div className="case-one__img">
            <img src={el.cover} alt="" />
          </div>
          <div className="case-one__content">
            <p className="case-one__tagline">{el.type.join(", ")}</p>
            <h3 className="case-one__title">{el.headerTitle}</h3>
            <div className="case-one__arrow">
              <Link to={"/works/" + el.slug}>
                <span className="icon-right-arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    ))
  );
};

export default Work;
