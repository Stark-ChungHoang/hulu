import ThumbNail from "./ThumbNail";
import FlipMove from "react-flip-move";
function Main({results}) {
    console.log(results);
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    {results.map((results,index) => 
            <ThumbNail key={index} results={results} />
            )}
    </FlipMove>
    )
}

export default Main
