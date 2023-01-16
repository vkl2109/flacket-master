import ReactDOM from "react-dom"
import '../css/eventcard.css'

const EventCard = ({ showEventCard, setShowEventCard, title, children }) => {
  return ReactDOM.createPortal(
    <>
      {
        showEventCard ?
        <div
          className="modalContainer" 
          onClick={setShowEventCard(showEventCard = false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title}</h2>
              <button className="close" onClick={setShowEventCard(showEventCard = false)} >
                Close </button>
            </header>
            <main className="modal_content"> {children}
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={setShowEventCard(showEventCard = false)}>
                Cancel
              </button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
        : null
      },
    document.getElementById("modal")
    </>
  )
}

export default EventCard