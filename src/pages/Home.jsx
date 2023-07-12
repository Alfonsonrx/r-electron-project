import React from "react";
import { Link } from "react-router-dom";

function componentDidMount() {
  window.electron.notificationApi.sendNotification("My custom message!");
}

const Home = () => {

  const handleCLick = () => {
    componentDidMount();
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handleCLick()}>Abrir ventana</button>
      <Link to='/settings'>Settings</Link>
    </div>
  );
};

export default Home;
