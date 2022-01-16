import { useState } from 'react'


export const useForm = ( initialState = {} ) => {
// podemos mandarle otro argumento con las reglas que queremos que sean inicializadas
// como las reglas de validacion de los campos, o cuales van a ser obligatorios
// para chequear que el formulario está completo 
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}