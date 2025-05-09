import "./index.css";

//How To use:
//import on src/index.js
//insert import declarations
//import { ProfileCard } from "./components/challenges/ProfileCard";
//import { userData } from "./components/challenges/mock";

export function ProfileCard({ userData }) {
  const { userName, description, skills, colors, userImage } = userData;

  return (
    <>
      <div className="userProfileContainer">
        <div className="imageContainer">
          <img className="profileImage" src={userImage} alt="Profile" />
        </div>
        <div className="infosContainer">
          <h2 className="userName">{userName}</h2>
          <p className="userDescription">{description}</p>
          <ul>
            {skills.map((item, index) => {
              return (
                <li
                  className="listItem"
                  style={{ backgroundColor: colors[index] }}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
