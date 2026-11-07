import ClubCard from "../Components/ClubCard.js";
import HeroCard from "../Components/HeroCard.js";

function Clubs() {
  return (
   < div>
   <HeroCard
      title="Discover Our Clubs"
      description="Join our clubs to explore the mystical, the magical, and the mysterious. From book clubs to craft circles, there's a place for every curious soul."
    />  
   <section className="cards-section">
     <ClubCard
      title= "Witchcraft & Wizardry Club"
      description="Dive into the world of spells, potions, and magical lore. Share your knowledge and learn from fellow enthusiasts."
      members="25"
      time= "Thursday at 6 PM"
     />
     <ClubCard
      title= "Chess Club"
      description="Sharpen your strategic thinking and enjoy friendly competition. All skill levels are welcome!"
      members="14"
      time= "Thursday at 9 PM"
     />
      <ClubCard 
      title= "Book Club"
      description="Explore mystical literature and discuss your favorite magical tales with fellow book lovers."
      members="30"
      time= "Wednesday at 7 PM"
     />
    <ClubCard 

      title= "Art & Craft Circle"
      description="Unleash your creativity and craft magical artifacts. Share techniques and inspire each other."
      members="20"
      time= "Friday at 5 PM"
     />
    <ClubCard 
      title= "Astronomy Club"
      description="Gaze at the stars and explore the mysteries of the universe. Learn about constellations, planets, and celestial events."
      members="18"
      time= "Saturday at 12 PM"
     /> 
     <clubCard
     title= "Music & Performance Club"
     description="Express yourself through music and performance. Join jam sessions, open mics, and collaborative projects."
     members="22"
     time= "Sunday at 4 PM"
     />
   </section>
 </div>
    
  );
}

export default Clubs;
