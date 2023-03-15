import { Formik, Field, Form, ErrorMessage } from 'formik'
import { LEVELS } from '../../../models/levels.enum'
import useList from '../../../hooks/useList'
import '../../../styles/task_list_form.css'
import * as Yup from 'yup'

const TaskListFormik = () => {
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(2, 'Muy corto')
                .max(50, 'Muy largo')
                .required('Requerido'),
            
            description: Yup.string()
                .min(2, 'Muy corto')
                .max(100, 'Muy largo')
                .required('Requerido')
        }
    )

    const defaultTask = {
        name: 'tarea',
        description: 'descripcion',
        level: LEVELS.NORMAL ,
        completed:false
    }

    const tasks = useList([defaultTask])

   function levelTask(task) {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className="mb-0">
                    <p className="badge bg-primary">{task.level}</p>
                </h6>)
            
            case LEVELS.URGENTE:
                return (<h6 className="mb-0">
                    <p className="badge bg-warning">{task.level}</p>
                </h6>)
            
            case LEVELS.BLOCKING:
                return (<h6 className="mb-0">
                    <p className="badge bg-danger">{task.level}</p>
                </h6>)
            default:
                break;
        }
    }
    
    return (
        <div className='containerForm'>
            <h3>Formik Tareas</h3>
            <Formik
            // ** valores iniciales que recibe el form 
                initialValues={{
                    name: '',
                    description: '',
                    level: LEVELS.NORMAL ,
                    completed:false
                }}
            // ** Yup validacion esquema 
                validationSchema={taskSchema}
                
            // ** evento onSubmit
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        tasks.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }}
                
                 /* onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }} */
                
                
            >
            {({ errors }) => (
                <Form>
                    <label htmlFor='name'>Nombre de la Tarea</label>
                    <Field
                        id='name'
                        name='name'
                        placeholder='Comprar Cafe'
                        type='text'
                    />
                    {
                            errors.name &&  
                            <div  style={{fontSize:'16px', color:'tomato'}}>
                                <ErrorMessage name="name"  />
                            </div>
                    }


                    <label htmlFor="description">Descripcion</label>
                    <Field
                    id="description"
                    name="description"
                    placeholder="Nescafe"
                    type="text"
                    />

                    {/* descripcion errors */}
                    {errors.description && 
                        <div  style={{fontSize:'16px', color:'tomato'}}>
                            <ErrorMessage name="description"  />
                        </div>
                    }
                    
                    <Field as="select" name="level" className='form-select'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENTE}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>

                    <button type="submit" className='form-button'>Agregar</button>
                </Form>
                )
            }
                
            </Formik>
            {tasks.isEmpty() ? (
                <p>Lista de tareas vacia</p>
            ) : (
                    tasks.value.map((task, index) => {
                        return <li key={index} className='task-class'>
                                <p>{task.name}</p>
                                <p>{task.description}</p>
                                {levelTask(task)}
                                <i className="bi-trash task-action"
                                    onClick={() => tasks.remove(index)}></i>
                                </li>
                    })
            )}
        </div>
    )
}

export default TaskListFormik;