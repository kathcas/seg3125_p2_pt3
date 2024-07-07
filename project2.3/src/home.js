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
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain('Casper', e)}}>Click me again</button>
        </div>
     );
}
 
export default Home;
