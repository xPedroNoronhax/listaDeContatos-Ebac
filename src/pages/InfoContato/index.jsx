import BarraLateral from '../../containers/BarraLateral/index';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '../../styles';

const InfoContato = () => {
  const { contatoId } = useParams();
  const contatosList = useSelector((state) => state.contatos.contatosList);
  const selectedContato = contatosList.find((contato) => contato.id === contatoId);

  return (
    <Container>
      <BarraLateral />
      <div>
        <h2>Informações do Contato:</h2>
        {selectedContato && (
          <>
            <p>Nome: {selectedContato.nome}</p>
            <p>Email: {selectedContato.email}</p>
            <p>Telefone: {selectedContato.telefone}</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default InfoContato;
