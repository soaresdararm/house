import {
  Container,
  Image,
  ImageContainer,
  TextContainer,
} from "./components/PageContainer/index";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <TextContainer>
          <h2>House, M. D.:</h2>
          <p>
            Se você ainda não assistiu a série House M. D. e quer saber se vale
            a pena ou não, você não pode perder essa leitura, resumimos com dois
            episódios como é a dinâmica da série. Caso você já tenha assistido,
            vai adorar relembrar os grandes momentos do nosso médico preferido.
          </p>
        </TextContainer>
        <ImageContainer>
          <Image src="/house.png" alt="" />
        </ImageContainer>
      </Container>
      <Container>
        <TextContainer>
          <h2>O enredo</h2>
          <p>
            A série médica House acompanha a vida do Dr. Gregory House, um
            médico fora do comum, com hábitos excêntricos e vícios em remédios
            para alívio de sua dor. House, na maior parte da série, lidera uma
            equipe de 3 médicos brilhantes (Eric Foreman, Robert Chase e Allison
            Cameron) que se debruçam sobre casos médicos complexos e raros.
            Gregory não é uma pessoa fácil, se relaciona de maneira distante e
            tóxica com todas as pessoas ao seu redor – Incluindo pacientes, o
            único que suporta House é James Wilson, um médico oncologista do
            hospital.
          </p>
        </TextContainer>
      </Container>
    </>
  );
}

export default App;
