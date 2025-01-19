import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import CampaignList from "../components/CampaignList";
import Footer from "../components/Footer";
import StoryList from "../components/StoryList";

const Home = () => {
    const nav = useNavigate();
    
    return (
        <div>
            <Header/>
            <CampaignList/>
            <StoryList/> 
            <Footer/>   
        </div>
    )
}

export default Home;