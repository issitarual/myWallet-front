import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import Historic from "./Historic";
import { HomeContainer } from "./HomeStyles";

export default function Home(){
    return(
        <HomeContainer>
            <HomeHeader />
            <Historic />
            <HomeFooter />
        </HomeContainer>
    );
};
