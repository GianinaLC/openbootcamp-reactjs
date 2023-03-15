import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

 const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .required('Email requerido'),
            password: Yup.string()
                .min(2,'Contraseña muy corta')
                .max(10,'Contraseña muy larga')
                .required('Contraseña requerida')
        }
)
    
const LoginForm = () => {
    const initialCredential = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h1>Iniciar sesion</h1>
            <Formik initialValues={initialCredential}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    /* guardando datos en el storage */
                    localStorage.setItem('login', values)
                }}
            >
                {
                    ({ errors }) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id='email'
                                type='email'
                                name='email'
                                placeholder='example@gmail.com'
                            />
                            {errors.email && <ErrorMessage name='email' component='div'/>}

                            <label htmlFor='password'>Password</label>
                            <Field id='password'
                                type='password'
                                name='password'
                                placeholder='pass1234' />
                            {errors.password && <ErrorMessage name='password' component='div'/>}

                            <button type='submit'>Login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default LoginForm;