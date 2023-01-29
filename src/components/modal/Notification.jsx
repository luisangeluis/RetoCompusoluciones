const Notification = ({message}) => {
  return (
    <div className="toast bg-color-four mx-auto my-2 shadow-lg text-danger fw-bolder align-items-center position-absolute top-0 start-0 d-block w-25" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
          {message}
        </div>
        {/* <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button> */}
      </div>
    </div>
  )
}
export default Notification;