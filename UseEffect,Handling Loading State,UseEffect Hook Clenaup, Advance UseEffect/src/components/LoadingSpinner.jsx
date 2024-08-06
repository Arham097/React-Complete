const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center spinner">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "120px", height: "120px" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
