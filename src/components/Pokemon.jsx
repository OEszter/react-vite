import { useEffect, useState } from "react"
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'


function Pokemon({ pokemon }) {
	const [pokeData, setPokeData] = useState(null)
	//let pokeData = null
	
	//console.log(pokemon.url)

	useEffect(()=> console.log(pokeData), [pokeData]) //figyeljük így a statet. Itt: nézd a (pokeDatát), és ha változik, akkor írd ki a [pokeDatát]

	//nem változókba mentjük a fetch adatait, mert infinite loop-ra fut.
	useEffect(() => {
		fetch(pokemon.url)
			.then(res => res.json())
			.then(data => { 
			//pokeData = data
			setPokeData(data)
			//console.log("fetch finished: ", pokeData)
		})
	}, [pokemon.url])

	console.log("loading component")
	return (
		<Card 
			className="pokemon"
			sx={{ width: 200}}
		>

		<CardHeader
			title ={pokemon.name}
		/>

		{pokeData &&
			<> 
			<CardMedia
			component="img"
			image={pokeData.sprites.front_default}
			alt={pokemon.data}
			/>

			<CardContent>
				<p>weight: {pokeData.weight} kg</p>
				<p>height: {pokeData.height} cm</p>
			</CardContent>

			{/* {pokemon.name} */}
			{/* {pokeData.sprites.front_default} */}
				{/* {pokeData.weight} kg 
				{pokeData.height} cm
				<img src={pokeData.sprites.front_default} /> */}
			</>
		}
		</Card>
	)
}

export default Pokemon