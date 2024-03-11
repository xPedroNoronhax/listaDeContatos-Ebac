import BarraLateral from "../../containers/BarraLateral"
import CadastrarContato from "../../containers/CadastrarContato"
import { Container } from "../../styles"

const Cadastro = () => {
  return (
    <Container>
        <BarraLateral/>
        <CadastrarContato/>
    </Container>
  )
}

export default Cadastro