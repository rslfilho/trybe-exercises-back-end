import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001/');

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('setProducts', (produtos) => {
      setProducts(produtos);
    });
  }, []);

  const handleClick = (id) => {
    socket.emit('lance', { id, username });
  };

  const handleChange = ({ target: { value }}) => {
    setName(value);
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setUsername(name);
    socket.emit('setName', name);
  };

  return (
    <>
      <h1>$ Leilão do Cincão $</h1>
      {
        !username
        &&
        <form>
        <input
          type="text"
          placeholder='Nome'
          id='input-name'
          name='name'
          value={name}
          onChange={ handleChange }
        />
        <button type="submit" onClick={ handleChangeName }>Entrar</button>
      </form>
      } 
      {
        username &&
        <p>Bem-vindo(a) { username }</p>
      }
      {
        username
        && 
        <div className='container'>
        {
          products.map((product, index) => (
            <div className='card' key={ index }>
              <img src={ product.image } />
              <p className='card-name'>{ product.name }</p>
              <p>R$ { product.valor.toFixed(2) }</p>
              <button
                onClick={ () => handleClick(product.id) }
                disabled={ product.valor >= 100 }
              >
                {
                  product.valor >= 100 ? `${product.ultimoLance} arrematou!` : 'Dar Lance R$ 5,00'
                }
              </button>
            </div>
          ))
        }
      </div>
      }
    </>
  )
}

export default App
