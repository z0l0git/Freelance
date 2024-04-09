"use state";

import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
export const LanguagesDetail = () => {
  const [addlanguage, setAddlanguage] = useState(false);
  return (
    <div className="flex flex-between items-center w-full bg-transparent justify-between">
      <input type="text" disabled className="bg-transparent" value="English" />
      <div className="flex gap-2 items-center">
        <FiEdit />
        <FiTrash2 />
      </div>
    </div>
  );
};
