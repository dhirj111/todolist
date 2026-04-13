import React from 'react'
function Todo({item , onDelete}) {
  return (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-${item.id}`}
                aria-expanded="false"
                aria-controls={`flush-${item.id}`}
              >
                {item.title}
              </button>

            </h2>

            <div
              id={`flush-${item.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
                            <button
                className="btn btn-danger"
                onClick={onDelete}
              >
                Delete
              </button>
              <div className="accordion-body">
                {item.desc}
              </div>
            </div>
          </div>
    
  )
}

export default Todo