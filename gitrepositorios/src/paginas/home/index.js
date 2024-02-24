import './style.css'
import background from '../../assets/image/logo.png';
import Button from '../../compenents/button';
import Input from '../../compenents/input';
import { useState } from 'react';
import ListarItem from '../../compenents/items';
// import api from '../../servicos/api'

function App() {

	//Guarda o repositorio digitado
	const [repos,SetRepos] = useState([]);

	const [retorno,setRetorno] = useState([])

	//funcao que vai pegar os repositorios com  que pesquisa
	const BuscarRepositorios = async() => {

		const retur = await fetch(`https://api.github.com/search/repositories?q=${repos}`);
		const newRepos = await retur.json();

		const items = newRepos.items;

		if(items)
		{		
			
			setRetorno(items)
	
		}
	}	


	return (
		<div className="App">
			<div className='header'>
				<img src={background}   alt="Logo do GitHub" className='img-1'/> 
				<Input  inputName={'repositorio'} value={repos} onChange={event => SetRepos(event.target.value)} />
				<Button label='Pesquisa'  onClick={BuscarRepositorios}/>
			</div >
			<div className='container-conteudo'>
		
				{retorno.map(repos => <ListarItem repositorios={repos} />)}

			</div>

		</div>
	);
}

export default App;
