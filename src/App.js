import './App.css';
import ContactoLista from './components/containers/contactos_list';
/* import TaskListComponent from './components/containers/task_list'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactoLista />
      </header>
    </div>
  );
}

export default App;
