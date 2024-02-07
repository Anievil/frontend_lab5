import React, { useCallback, useState } from "react";

function NewExpenseFill() {
  const [isFillsOpen, setIsFillsOpen] = useState(false);

  const ToggleFills = useCallback(() => {
    setIsFillsOpen(!isFillsOpen);
  }, [isFillsOpen]);

  return (
    <div className="expense-fill_body">
      {isFillsOpen ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className="expense-fill_button" onClick={ToggleFills}>
            <p className="expense-fill_button-text">Add New Expense</p>
          </button>
        </div>
      ) : (
        <div>
          <div className="expense-fill_fill-div">
            <div className="expense-fill_fill-fill_disc">
              <p className="expense-fill_fill-p">Title</p>
              <input className="expense-fill_fill" />
            </div>
            <div className="expense-fill_fill-fill_disc">
              <p className="expense-fill_fill-p">Amount</p>
              <input className="expense-fill_fill" />
            </div>
            <div className="expense-fill_fill-fill_disc">
              <p className="expense-fill_fill-p">Date</p>
              <input type="date" className="expense-fill_fill" />
            </div>
          </div>

          <div className="expense-button-div">
            <button className="expense-fill_button" onClick={ToggleFills}>
              <p className="expense-fill_button-text">Cancel</p>
            </button>
            <button
              className="expense-fill_button"
              style={{ marginLeft: "20px" }}
              onClick={ToggleFills}
            >
              <p className="expense-fill_button-text">Add New Expense</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewExpenseFill;
