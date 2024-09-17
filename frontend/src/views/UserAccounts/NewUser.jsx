import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewUser() {
  const [values, setValues] = useState({
    fullname: "",
    id: "",
    gender: "",
    savings: "",
    telnumber: "",
    development: "",
    socialfund: "",
    shares: "",
    fines: "",
    socialfundgiveout: "",
    savingswithdraw: "",
    loan: "",
    loanformfee: "",
    otherfunds: "",
  });

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/member", values)
      .then((res) => {
        console.log(res);
        Navigate("/accounts");
      })
      .then((err) => console.log(err));
  };
  return (
    <div style={{ width: "70vw", marginLeft: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, fullname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Member Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gende">Gender</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <label htmlFor="savings">Savings</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, savings: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="development">Development</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, development: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, telnumber: e.target.value })
              }
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <label htmlFor="shares">Shares</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, shares: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="socialfund">Social Fund</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, socialfund: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="fines">Fines</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, fines: e.target.value })}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <label htmlFor="socialfundgiveout">Social Fund Give Out</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, socialfundgiveout: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="savingswithdraw">Savings Withdraw</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, savingswithdraw: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="loan">Loan Amount</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, loan: e.target.value })}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <label htmlFor="otherfunds">Other Funds</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, otherfunds: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanformfee">Loan Form Fee</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, loanformfee: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewUser;
