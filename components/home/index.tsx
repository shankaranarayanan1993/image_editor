import HomeContxtProvider from "@/data/homeContxt";
import Home from "./home";

const Index = () => {

    return (
        <HomeContxtProvider>
            <Home />
        </HomeContxtProvider>
    );
}

export default Index;