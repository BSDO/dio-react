import './style.css';

//input que recebe o valor e a funcao de evento
const ListarItem = ({repositorios}) => {
    return (
       <div className='card'>
            <h1 className='id'>{repositorios.id}</h1>
            <p className='name'>Nome repositorio: {repositorios.name}</p>
            <a href={repositorios.url} target="blank" className='link' >Link repositorio : {repositorios.url}</a>
            <p className='descricao'>{repositorios.description}</p>

            

       </div>
    );
}
  
export default ListarItem;
  