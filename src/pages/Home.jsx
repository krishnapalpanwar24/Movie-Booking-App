import MovieCard from "../components/MovieCard";

const movies = [
{
id:1,
title:"Avengers",
rating:9,
image:"/Avengers.jpg"
},
{
id:2,
title:"Avatar",
rating:8.5,
image:"/avatar.jpg"
},
{
id:3,
title:"Batman",
rating:8.8,
image:"/Batman.jpg"
}
];

export default function Home(){

return(

<div className="movies">

{movies.map((movie)=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

)

}