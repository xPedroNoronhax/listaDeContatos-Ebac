import  {useState} from "react";
import {  useDispatch  } from "react-redux";
import { cadastrar } from "../../store/reducers/cadastrar";
import { v4 as uuidv4 } from 'uuid';

const CadastrarContato = () => {
    const dispatch = useDispatch();


 

    const [contato, setContato] = useState({
        nome: '',
        email:'',
        telefone:'',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContato((prevContato) => ({...prevContato, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const contatoComID = { ...contato, id: uuidv4() };
        console.log("Contato cadastrado:", contato);
        dispatch(cadastrar(contatoComID));
        setContato({
            nome:'',
            email:'',
            telefone:'',
        });


    };

    return (
        <div>
            <h2>Cadastre o novo contato:</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" value={contato.nome} onChange={handleChange} />
                <label>Email:</label>
                <input type="email"  name="email" value={contato.email} onChange={handleChange}/>
                <label>Telefone:</label>
                <input type="tel" name="telefone" value={contato.telefone} onChange={handleChange} />
                <button type="submit">Cadastrar</button>
            </form>

            

            
        </div>
    )
}

export default CadastrarContato

