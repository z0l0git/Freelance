import React from "react";

type TypeProps = {
  deleteProject: () => Promise<void>;
  handleClose: () => void;
};

export const DeleteModal = (props: TypeProps) => {
  const { deleteProject, handleClose } = props;

  return (
    <div className="w-[400px] h-[150px] bg-white rounded-lg flex flex-col justify-between p-4">
      <div className="text-center text-[20px] font-semibold">
        Are you sure you want to delete your post?
      </div>
      <div className="flex w-[100%] h-[70px] items-center justify-center gap-[40px]  ">
        <div
          onClick={deleteProject}
          className="w-[30%] h-[30px]  bg-red-700 text-[24px] text-white flex justify-center items-center rounded-lg cursor-pointer"
        >
          Yes
        </div>
        <div
          onClick={handleClose}
          className="w-[30%] h-[30px] bg-slate-500 text-[24px] text-white flex justify-center items-center rounded-lg cursor-pointer"
        >
          No
        </div>
      </div>
    </div>
  );
};
