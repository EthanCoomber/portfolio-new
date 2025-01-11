import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [expandedPositions, setExpandedPositions] = useState({});
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const toggleExpand = (index) => {
    setExpandedPositions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        {cardInfo.positions.map((position, index) => (
          <div key={index} className="experience-position-details">
            <div 
              className={`experience-header ${expandedPositions[index] ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
              style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
            >
              <div>
                <h5
                  className={
                    isDark
                      ? "experience-text-role dark-mode-text"
                      : "experience-text-role"
                  }
                >
                  {position.role}
                </h5>
                <h5
                  className={
                    isDark
                      ? "experience-text-date dark-mode-text"
                      : "experience-text-date"
                  }
                >
                  {position.date}
                </h5>
              </div>
              {expandedPositions[index] ? (
                <FaChevronUp className={isDark ? "dark-mode-text" : ""} />
              ) : (
                <FaChevronDown className={isDark ? "dark-mode-text" : ""} />
              )}
            </div>
            <div className={`experience-content ${expandedPositions[index] ? 'expanded' : ''}`}>
              <p
                className={
                  isDark
                    ? "subTitle experience-text-desc dark-mode-text"
                    : "subTitle experience-text-desc"
                }
              >
                {position.desc}
              </p>
              <ul className="experience-bullets">
                <GetDescBullets descBullets={position.descBullets} isDark={isDark} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
