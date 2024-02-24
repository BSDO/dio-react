import Input from './components/Inputs';
import Button from './components/Button';


import { Container,Content ,Row} from "./styles";
import { useState } from 'react';

import TextoH1 from './components/textos';

const App = () => 
{
	//Cria estados dos numeros e operacao para serem usados
	const [currentNumber ,setCurrentNUmber] = useState('');
	const [firstNumber , setNumber ] = useState('');
	const [operacao,setOperacao] = useState('');


	//FUncao de limpar a calculadora , numeros e a operacao 
	const handleAddLimpar = () => {
		setCurrentNUmber('')
		setNumber('')
		setOperacao('')
	}

	// funcao para adicionar o numero 
	const handleAddNumber = (num) => 
	{
		setCurrentNUmber(prev=> `${prev}${num}`)
	}	
	
	const Soma = ()=> {

		
		if(firstNumber === '')
		{

			// Adiciona o primeiro numero ao segundo caso seja a uma operacao
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('+')



		}else{
			// pegar o valor do primeiro numero guardo e soma com o segundo sendo digitado 
			const sum = Number(firstNumber) + Number(currentNumber);

			// transforma o soma dos numero para mostrar no resultado
			setCurrentNUmber(String(sum))
			setOperacao('')
		}
	}

	const Subtracao = ()=> {

		if(firstNumber === '')
		{
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('-')



		}else{
			const sub = Number(firstNumber) - Number(currentNumber);
			setCurrentNUmber(String(sub))
			setOperacao('')
		}
	}

	const Multiplicar = ()=> {

		if(firstNumber === '')
		{
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('*')



		}else{
			const mult = Number(firstNumber) * Number(currentNumber);
			setCurrentNUmber(String(mult))
			setOperacao('')
		}
	}

	const Divisao = ()=> {

		if(firstNumber === '')
		{
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('/')



		}else{
			const div = Number(firstNumber) / Number(currentNumber);
			setCurrentNUmber(String(div))
			setOperacao('')
		}
	}


	const Exponeciacao = ()=> {

		if(firstNumber === '')
		{
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('**')



		}else{
			const expo = Number(firstNumber) ** Number(currentNumber);
			setCurrentNUmber(String(expo))
			setOperacao('')
		}
	}

	const Resultado = ()=>{
		if(firstNumber !== '' && operacao !== '' && currentNumber !== ''){
			switch(operacao){
				case '+':
					Soma();
					break;
				case '-':
					Subtracao();
					break;
				case '*':
					Multiplicar();
					break;
				case '/':
					Divisao();
					break;	
				case '**':
					Exponeciacao();
					break;
				default:
				break;	
			}
		}else{
			alert('Digite os numeros e operacao');
		}

	}

	return (
		<Container>
			
			<Content>

				<TextoH1> </TextoH1>	
		


				<Input value={currentNumber}/>
				
				<Row>
					<Button label="1" onClick={() => handleAddNumber('1')}/>
					<Button label="2"  onClick={() => handleAddNumber('2')} />
					<Button label="3"  onClick={() => handleAddNumber('3')} />
					<Button label="+"   onClick={Soma}/>
					
				</Row>
					
				<Row>
					<Button label="4"  onClick={() => handleAddNumber('4')} />
					<Button label="5"  onClick={() => handleAddNumber('5')} />
					<Button label="6"  onClick={() => handleAddNumber('6')} />
					<Button label="-"  onClick={Subtracao} />
					
				</Row>
					
				<Row>
					<Button label="7"  onClick={() => handleAddNumber('7')} />
					<Button label="8"  onClick={() => handleAddNumber('8')} />
					<Button label="9"  onClick={() => handleAddNumber('9')} />
					<Button label="*"  onClick={Multiplicar} />
					
				</Row>
					
				<Row>
					<Button label="/"  onClick={Divisao}/>
					<Button label="**"  onClick={Exponeciacao}/>
					<Button label="C" onClick={() => handleAddLimpar()}/>
					<Button label="="  onClick={Resultado}/>
					
				</Row>
			
			</Content>
			
		</Container>
		
	);
}

export default App;
