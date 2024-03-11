import { useSelector, useDispatch } from "react-redux";
import { Aside } from "./styles";
import { setContatoSelecionado } from "../../store/reducers/cadastrar";
import { useNavigate } from "react-router-dom";

const BarraLateral = () => {
  const contatosList = useSelector((state) => state.contatos.contatosList);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleContatoClick = (contato) => {
    dispatch(setContatoSelecionado(contato));
    navigate(`/info/${contato.id}`);
  };

  return (
    <Aside>
      <h1>Lista de contatos</h1>
      <ul>
        {contatosList.map((contato) => (
          <li key={contato.nome} onClick={() => handleContatoClick(contato)}>
            {contato.nome}
          </li>
        ))}
      </ul>
    </Aside>
  );
};

export default BarraLateral;