
function UserPanel() {

  return (
    <>
      <p>{localStorage.getItem('token')}</p>
      <p>{localStorage.getItem('first_name')}</p>
    </>
  );
}

export default UserPanel;