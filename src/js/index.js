import HomeComponent from "../components/Home/home";
import initialAPICall from "../services";


const apiResponse = async () => {
  return await initialAPICall();
};
const Index = () => {
   apiResponse();
  return (
    <>
     <HomeComponent/>
    </>
  );
};

export default Index;
