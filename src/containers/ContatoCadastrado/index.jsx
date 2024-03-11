import { useSelector } from "react-redux";

const ContatoCadastrado = () => {
  const selectedContato = useSelector((state) => state.contatos.selectedContato);

  if (!selectedContato) {
    return <p>Contato não encontrado</p>;
  }

  return (
    <div>
      <h2>Contato Cadastrado:</h2>
      <p>Nome: {selectedContato.nome}</p>
      <p>Email: {selectedContato.email}</p>
      <p>Telefone: {selectedContato.telefone}</p>
    </div>
  );
};

export default ContatoCadastrado;
