import styled from 'styled-components';
import Typed from 'react-typed';
import videowe from './video3.webm';
import { device } from '../../../Responsive/Responsive';

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Flex = styled.div`
  position: absolute;
  top: 0;
  height: 80%;
  width: 100%;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.tablet} {
    height: 90%;
  }
`;

const Box = styled.div`
  text-align: center;

  & span {
    color: #ce8921;
    font-size: 13px;
  }

  @media ${device.mobileM} {
    & span {
      font-size: 15px;
      color: white;
    }
  }

  @media ${device.tablet} {
    & span {
      font-size: 20px;
    }
  }

  @media ${device.laptop} {
    & span {
      font-size: 30px;
    }
  }
`;

const Palabra = () => {
  return (
    <Container>
      <Video id="video" autoPlay loop muted>
        <source src={videowe} type="video/webm"></source>
      </Video>
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
            backSpeed={20}
            loop
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Palabra;
