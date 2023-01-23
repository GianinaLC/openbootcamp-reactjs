import './App.css';
import ContactoLista from './components/containers/contactos_list';
/* import TaskListComponent from './components/containers/task_list'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hola mundo 2023</h2>
        {/* componentes de listado de tareas */}
        {/*     <TaskListComponent /> */}
        <ContactoLista />
      </header>
    </div>
  );
}

export default App;
