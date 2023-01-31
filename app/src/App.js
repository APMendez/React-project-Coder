import './App.css';
import NavbarContainer from './components/navbarContainer';
import MenuContainer from './components/menuContainer';
import MenuOption from './components/menuOption';
import CartWidget from './components/cart';
import image from '../src/img/cart-widget.png';
import ItemList from './components/itemList';


function App() {
  return (
    <div className="App">
      <NavbarContainer logo={"APICAL"}>
        <MenuContainer>
          <MenuOption liName={"Inicio"}/>
          <MenuOption liName={"Conocenos"}/>
          <MenuOption liName={"Productos"}/>
          <MenuOption liName={"Contacto"}/>
        </MenuContainer>
        <CartWidget amount={"0"} style={{backgroundImage: image}}/>
      </NavbarContainer>
      
      <ItemList text={"¡Proximamente podrás ver todos nuestros productos!"}>
      </ItemList>
    </div>
  );
}

export default App;
