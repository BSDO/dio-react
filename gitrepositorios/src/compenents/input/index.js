import './style.css';

//input que recebe o valor e a funcao de evento
const Input = ({value,onChange}) => {
    return (
        <input className='input' value={value} type='text' onChange={onChange} placeholder='Digite um repositorio: ' />
    );
}
  
export default Input;
  