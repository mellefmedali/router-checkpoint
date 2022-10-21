import MovieCard from "./MovieCard";
import { useState } from "react";
import "./Filter.css"

const Filter = (props) => {
    const [ratingSearch, setratingSearch] = useState(0);
    const handleRatingSearch = e => setratingSearch(e.target.value);
    const [titleSearch, setTitleSearch] = useState("");
    const handleTitleSearch = e => setTitleSearch(e.target.value)

    return (
        <div className="filterBody">
            <div className="filterForm">
                <form>
                    <label htmlFor="rateValue">Filter by rating :</label>
                    <input
                        type="number"
                        name="rateValue"
                        // value={props.name}
                        onChange={handleRatingSearch}
                    />
                </form>

                <form >
                    <label htmlFor="titleValue">Filter by Title :</label>
                    <input
                        type="text"
                        name="titleValue"
                        // value={props.name}
                        onChange={handleTitleSearch}
                    />
                </form>
            </div>

            {console.log(ratingSearch)}
            <div className="card-group">
                {
                    props.list.filter(
                        x => x.title.toLocaleLowerCase().includes(titleSearch.toLocaleLowerCase())
                    ).filter(
                        e => e.rating >= ratingSearch).map(
                            v => <MovieCard keyNumber={v.id} posterURL={v.posterURL} title={v.title} description={v.description} rating={v.rating} />)
                }
            </div>
        </div>
    )
}
export default Filter