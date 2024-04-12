"use state";

import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
type Props = {
  value: string;
  clickButton(): boolean;
  add: boolean;
  setAdd: boolean;
};

export const LanguagesDetail: React.FC<Props> = (props) => {
  const [addlanguage, setAddlanguage] = useState(false);
  const { value, add, setAdd } = props;
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
