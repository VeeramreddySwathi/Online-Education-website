import React from "react";
import "remixicon/fonts/remixicon.css";

const CourseCard = (props) => {
  const { item = {} } = props;
  const { imgUrl, title, lesson, students, rating } = item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt={title} className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className="d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#">Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
