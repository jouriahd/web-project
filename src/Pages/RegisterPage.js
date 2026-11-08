import HeroCard from "../Components/HeroCard.js";
import {ContactForm,LogInForm} from "../Components/RegisterCard.js";

const Register = () => {
return (
  <>
     <HeroCard
      title="Register now"
      description="its time for a new begining"
    />
     <ContactForm/>
  </>
    
     );
};
export default Register;