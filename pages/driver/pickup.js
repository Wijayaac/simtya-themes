import React from "react";

// components

import CardTable from "components/Cards/CardTable";
// layout for page

import Driver from "layouts/Driver.js";

export default function Pickup() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}

Pickup.layout = Driver;
