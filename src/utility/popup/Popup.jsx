import styled from 'styled-components';

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
  height: 400px;
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
          {/* <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1970993.6306081007!2d-90.24282939226846!3d15.235208628969945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d15.4075619!2d-87.78617!4m3!3m2!1d14.6675024!2d-90.4557636!5e0!3m2!1ses!2shn!4v1633739028894!5m2!1ses!2shn"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          /> */}
        </PopBox>
      </Pop>
    </>
  );
};

export default Popup;
