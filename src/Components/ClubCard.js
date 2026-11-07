import "../styles/FeatureCard.css";
import "../styles/Cards.css";

const ClubCard = ({title, description,members,time}) => {
  return (
    <article className="club-card">
      <h2 className="club-title">{title}</h2>
      <p className="club-description">{description}</p>
      <p Members className="club-members"> Members: {members}</p>
      <p className= "club-time"> Every: {time}</p>
    </article>
  );
};
export default ClubCard;