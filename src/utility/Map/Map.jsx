import React from 'react';

const Map = () => {
  return (
    <>
      <iframe
        title="myframe"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1974382.682507835!2d-91.00629849695588!3d14.869185619841572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x858998048ec29fa3%3A0x97cc18d40d233d3f!2sMinisterios%20Palabra%20Fiel%2C%20MG9V%2B2Q3%2C%20Cdad.%20de%20Guatemala%2C%20Guatemala!3m2!1d14.6675153!2d-90.4555705!5e0!3m2!1ses!2shn!4v1633843564250!5m2!1ses!2shn"
        width="100%"
        height="400"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Map;
