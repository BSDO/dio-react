import { ButtonContainer }  from './styles.js'

// O botao recebe dois parametro dentro dele , um label e o outro a funcao de clicar
const Button = ({label,onClick}) => {
    return (
      	<ButtonContainer  onClick={onClick}>
            {label}
      	</ButtonContainer>
    );
}
  
export default Button;
  