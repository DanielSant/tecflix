import { useState } from 'react';

export function useForm(valoresIniciais) {
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  
    const [values, setValues] = useState(valoresIniciais);
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }
  
    function clearForm() {
      setValues(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm,
    }
}

export default useForm;