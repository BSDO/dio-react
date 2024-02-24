import React from 'react';
import './style.css';

const ItemList = ({titulo,Descricao,url}) => {
    return (
      	<div className='item-list'>
            <strong> {titulo} </strong>
            <br></br>
            <p >Repositorio:<a href={url} target='blank'> {Descricao} </a> </p> 
      
            <hr />
      	</div>
    );
}
  
export default ItemList;
  