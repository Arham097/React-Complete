const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts available right now</h1>
      <button
        type="button"
        className="btn btn-primary "
        onClick={onGetPostClick}
      >
        Fetch Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
