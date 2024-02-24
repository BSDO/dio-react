/* eslint-disable react/jsx-no-comment-textnodes */
import { Header } from "../../components/Header";
import './style.css'
import background from "../../assets/background.png"
import ItemList  from "../../components/Item.list"
import { useState } from "react";


function App() {

	// Estados de usuario no input, pegar os dados do github e repositorio
	const [user,setUser] = useState('');
	const [currentUser,setCurrentUser] = useState(null);
	const [repos,setRepos] = useState(null);
	
	// funcao que vai buscar as apis
	const listarDados = async() => {

		// Fazendo requisao na api com o que foi escrito no input
		const userData = await fetch(`https://api.github.com/users/${user}`);

		// o retorno da api em json já
		const newUser  = await userData.json();
		
		//Verifica se existe o username

		if(newUser.name)
		{
			

			/*
				Pega os dados especifico no retorno da api

				- Busca os dados de repositorios desse usuario
			*/
			const {avatar_url,name,bio,login} = newUser;
			setCurrentUser({avatar_url, name, bio,login});

			const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
			const newRepos = await reposData.json();

			if(newRepos.length)
			{
				setRepos(newRepos);

			}

		}
		else{
			alert('Usuário Não Encontrado');
		}
		


	}


  	return (
		<div className="App">
			<Header />  
			<div className="conteudo">
	
	
				<img  src={background} alt='logoMateriais Complementares: Conceitos BásicosMateriais Complementares: Conceitos BásicosMateriais Complementares: Conceitos BásicosMateriais Complementares: Conceitos Básicos' className="img"/>

				<div className="info">
					<div className='container'>
						<div className="row">
							<input className='usuario' name='usuario' value={user} onChange={event => setUser(event.target.value)} placeholder='@username' />
							<button className="btn-buscar" type='button' onClick={listarDados}>Buscar</button>


						</div>


					</div>
					{currentUser?.name ? (
						<>
							<div className='container'>
								<div className="row">
									<div className="perfil">
										
										<img src={currentUser.avatar_url} alt='logo' className="img-profile" />
										<div>  
											<h1>{currentUser.name}
												<span>@{currentUser.login}</span>
											</h1>
											<p>{currentUser.bio}</p>

										</div>
										

									</div>
									
								</div>


							</div>

							<hr />
						</>
					) : null}

					{ repos?.length ? (
						<div className="item-repositorio">
							<h4>Repósitorios</h4>
							{repos.map(repos =>(
								<ItemList titulo={repos.name} Descricao={repos.clone_url} url={repos.clone_url}/> 	
							))}	
							

						</div>
					) :  null}
					
				</div>
			</div>
				

			
		</div>
    
  	);
}

export default App;
