import "../styles/FeatureCard.css";

const FeatureCard = ({title, description, link, linktext }) => {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="feature-link">
        {linktext}
      </a>
    </article>
  );
}
export default  FeatureCard;