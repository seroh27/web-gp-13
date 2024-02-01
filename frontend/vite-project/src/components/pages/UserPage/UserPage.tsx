
function UserPanel() {

  return (
    <p>{localStorage.getItem('token')}</p>
  );
}

export default UserPanel;