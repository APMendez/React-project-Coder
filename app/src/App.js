import './App.css';
import NavbarContainer from './components/navbarContainer';
import MenuContainer from './components/menuContainer';
import MenuOption from './components/menuOption';
import CartWidget from './components/cart';
import image from '../src/img/cart-widget.png'

function App() {
  return (
    <div className="App">
      <NavbarContainer className="navbar" img={"Aqui va el logo"}>
        <MenuContainer title={"Aqui va el menu"} >
          <MenuOption liName={"Inicio"}/>
          <MenuOption liName={"Conocenos"}/>
          <MenuOption liName={"Productos"}/>
          <MenuOption liName={"Contacto"}/>
        </MenuContainer>
        <CartWidget amount={"1"} className="cart" src={{backgroundImage: image}}/>
      </NavbarContainer>
        
      
    </div>
  );
}

export default App;
