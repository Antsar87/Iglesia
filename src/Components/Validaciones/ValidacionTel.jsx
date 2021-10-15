export const ValidacionTel = (props) => {

  console.log(props);
  if (props.match('[0-9]{4}[ -][0-9]{4}')) {
    return false;
  } else {
    return true;
  }
};
