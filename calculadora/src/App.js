import Input from './components/Inputs';
import Button from './components/Button';


import { Container,Content ,Row} from "./styles";
import { useState } from 'react';

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
	const handleAddNumber = (num) => 
	{
		setCurrentNUmber(prev=> `${prev}${num}`)
	}	
	
	const Soma = ()=> {

		if(firstNumber === '')
		{
			setNumber(String(currentNumber));
			setCurrentNUmber('')
			setOperacao('+')



		}else{
			const sum = Number(firstNumber) + Number(currentNumber);
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
			const sum = Number(firstNumber) - Number(currentNumber);
			setCurrentNUmber(String(sum))
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
			const sum = Number(firstNumber) * Number(currentNumber);
			setCurrentNUmber(String(sum))
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
			const sum = Number(firstNumber) / Number(currentNumber);
			setCurrentNUmber(String(sum))
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
			const sum = Number(firstNumber) ** Number(currentNumber);
			setCurrentNUmber(String(sum))
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
		}

	}

	return (
		<Container>
			<Content>
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
