import Shoe from "../component/Shoe";

function Home(props){
    return(
        <>
        <div className="main-bg"></div>
        <Shoe shoes = {props.shoes}/>
        </>
    );
}

export default Home;