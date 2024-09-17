import CardForm from "../Components/Card";
import React from "react";

function Home() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardForm
          title="Total Members"
          text="120 Accounts"
          footer="Active Members Present"
        />
        <CardForm
          title="Total Members"
          text="120 Accounts"
          footer="Active Members Present"
        />
        <CardForm
          title="Total Members"
          text="120 Accounts"
          footer="Active Members Present"
        />
      </div>
      <div>
        summary
      </div>
    </div>
  );
}

export default Home;
