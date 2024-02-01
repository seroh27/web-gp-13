import CircularProgress from "../../circularProgressBar";

function UserPanel() {

  return (
    <>
      <p>{localStorage.getItem('token')}</p>
      <p>{localStorage.getItem('first_name')}</p>
      <CircularProgress value={1200} min={0} max={2500} size={150} strokeWidth={10}/>
    </>
  );
}

export default UserPanel;