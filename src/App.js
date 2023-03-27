import './App.css';
/* import ContactoLista from './components/containers/contactos_list'; */
/* import TaskListFormik from './components/pure/forms/task_list_formik'; */
/* import SesionDoce from './components/sesion-doce';
import TaskListComponent from './components/containers/task_list'; */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/home/Homepage';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginForm from './components/pure/forms/LoginForm';
import DashboardPage from './pages/dashboard/Dashboard';
import AxiosExample from './components/pure/AxiosExample';

function App() {
	let isLogged = true;

	return (
		<BrowserRouter>
			{/* <Routes>
				<Route exact path='/'
					element={
						isLogged ? <Navigate replace to='/dashboard' /> : <Navigate replace to='/login' />
					} />
				<Route exact path='/' element={<Homepage />} />
				<Route exact path='/login' element={<LoginForm />} />
				<Route exact path='/dashboard'
					element=
					{
						isLogged ? <DashboardPage /> : <Navigate replace to='/login' />
					}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes> */}
			{/*  <ContactoLista /> */}
			{/*  <SesionDoce /> */}
			{/* ejemplo formik yup */}
			{/* <TaskListFormik /> */}
			{/* 19 20 21 */}
			<AxiosExample />

		</BrowserRouter>
	);
}

export default App;
