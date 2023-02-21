import './App.css';
import ContactoLista from './components/containers/contactos_list';
import SesionDoce from './components/sesion-doce';
/* import TaskListComponent from './components/containers/task_list'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*  <ContactoLista /> */}
        <SesionDoce />
      </header>
    </div>
  );
}

export default App;
