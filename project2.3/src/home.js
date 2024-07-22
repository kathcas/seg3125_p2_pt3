import ImageToggleButton from "./imagebutton";

const Home = () => {

    const handleClick = () => {
        console.log('hello world');
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Grand Manan Cottage Retreats</h2>
            <ImageToggleButton />
            </div>
     );
}
 
export default Home;
