import './App.css';
/* import ContactoLista from './components/containers/contactos_list'; */
import TaskListFormik from './components/pure/forms/task_list_formik';
/* import SesionDoce from './components/sesion-doce';
import TaskListComponent from './components/containers/task_list'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*  <ContactoLista /> */}
        {/*  <SesionDoce /> */}
        {/* ejemplo formik yup */}
        <TaskListFormik />
      </header>
    </div>
  );
}

export default App;
