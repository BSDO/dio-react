import './style.css';


//botao que recebe o nome do botao e o evento
const Button = ({label,onClick}) => {
    return (
      	<button  type='button' onClick={onClick} className='btn'>
            {label}
      	</button>
    );
}
  
export default Button;
  