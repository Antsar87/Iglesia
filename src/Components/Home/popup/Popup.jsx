import styled from 'styled-components';
import Map from '../Map/Map';

const Pop = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  transition: opacity 500ms;
  visibility: visible;
`;

const PopBox = styled.div`
  text-align: center;
  padding: 20px;
  width: 900px;
  background: #fff;
  border-radius: 5px;
  transition: all 5s ease-in-out;
  z-index: 11;
`;
const Popup = (props) => {
  return (
    <>
      <Pop>
        <Overlay onClick={() => props.saving(false)} />
        <PopBox>
          <Map />
        </PopBox>
      </Pop>
    </>
  );
};

export default Popup;
