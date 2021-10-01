import styled from 'styled-components';
import Typed from 'react-typed';
// import Logo from './Elementos-05.png';

const Container = styled.div`
  margin-top: 30px;
`;

const Video = styled.div`
  width: 100%;
  height: 400px;
  background: orangered;
  padding: 10px;
`;

const Flex = styled.div`
  width: 60%;
  height: 100%;
  display: flex;

  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  height: 200px;

  & span {
    color: white;
    font-size: 30px;
  }
`;

const Palabra = () => {
  return (
    <Container>
      <Video>
        <Flex>
          <Box>
            <Typed
              strings={[
                'Palabra fiel es esta, y digna de ser recibida por todos. 1 Timoteo 4:9',
                'Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración. Romanos 12:12',
                'No seas vencido de lo malo, sino vence con el bien el mal. Romanos 12:21',
                'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta. Romanos 12:2',
                'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados. Romanos 8:28',
                'Al que está sentado en el trono, y al Cordero, sea la alabanza, la honra, la gloria y el poder, por los siglos de los siglos. Apocalipsis 5:13b',
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
            />
          </Box>
        </Flex>
      </Video>
    </Container>
  );
};

export default Palabra;
