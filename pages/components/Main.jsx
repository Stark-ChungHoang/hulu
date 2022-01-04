import ThumbNail from "./ThumbNail";
function Main({results}) {

    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((results) => (
          <ThumbNail key={results.id} results={results} />
        ))}
      </div>
    )
}

export default Main
