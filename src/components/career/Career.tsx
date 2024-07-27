import React from "react";
import Button from "../button/page";

function Career() {
  return (
    <div className="box-center flex-col gap-5 py-12 mb-12">
      <h1 className="font-paladins text-4xl">
        Check Out MUlearn - Career Labs
      </h1>
      <Button label="Career Labs " url="https://mulearn.org/careers" />
    </div>
  );
}

export default Career;
