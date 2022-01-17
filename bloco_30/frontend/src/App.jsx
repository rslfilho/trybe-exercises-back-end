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
        <button type="submit" onClick={ handleChangeName }>Mudar Nome</button>
      </form>
      }
      <p>Usuário logado: { username || socket.id }</p>
      {
        username
        && 
        <div className='container'>
        {
          products.map((product, index) => (
            <div className='card' key={ index }>
              <img src={ product.image } />
              <p>{ product.name }</p>
              <p>R$ { product.valor.toFixed(2) }</p>
              <button
                onClick={ () => handleClick(product.id) }
                disabled={ product.valor >= 100 }
              >
                {
                  product.valor >= 100 ? 'Arrematado' : 'Dar Lance'
                }
              </button>
              {
                product.valor >= 100 && <p>{ product.ultimoLance } arrematou</p>
              }
            </div>
          ))
        }
      </div>
      }
    </>
  )
}

export default App
