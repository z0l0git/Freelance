"use client";
import React, { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { WorkExperienceComp } from "./WorkExperience";
import { IoCloseCircleSharp } from "react-icons/io5";
import { WhiteButton } from "../Button";
import EducationModelOfMap from "./EducationModelOfMap";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EduModalForDelete from "./EduModalForDelete";
import { StyledString } from "next/dist/build/swc";
import axios from "axios";
import EducationModalFroEdit from "./EducationModalFroEdit";
import ExpEditForModal from "./ExpEditForModal";
type eduType = {
  startedY: string;
  profession: string;
  finishedY: string;
  degree: string;
  schoolName: string;
  aboutSchool: string;
  _id: string;
};
type deletType = {
  id: eduType[];
};
type ExpType = {
  aboutCompany: string;
  companyName: string;
  firedY: string;
  hiredY: string;
  occupation: string;
  _id: string;
};

type getDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: eduType[];
  workExp: ExpType[];
  createdAt: string;
};
type PropsType = {
  userDataGet: getDataType | undefined;
};
export const WorkExperience = (props: PropsType) => {
  const { userDataGet } = props;
  const [workExp, setWorkExp] = useState<getDataType>();
  const [idForDelete, setIdForDelete] = useState<string>();
  const [founded, setFounded] = useState<ExpType>();
  console.log(idForDelete, "in exppp");

  useEffect(() => {
    setWorkExp(userDataGet);
  }, [userDataGet?.workExp]);

  console.log(workExp, "workeererereer");

  const HandlePushEduArray = (obj: ExpType) => {
    setWorkExp((prev: getDataType | undefined) => {
      if (prev) {
        return {
          ...prev,
          workExp: [...prev.workExp, obj],
        };
      }
      return prev;
    });
  };

  const deletemodal = (event: MouseEvent<HTMLDivElement>) => {
    const eduId = event.currentTarget.id;
    setIdForDelete(eduId);
    handleOpen();
  };

  const deleteEdu = async () => {
    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/deleteWorkExp",
        {
          id: idForDelete,
        }
      );
      const leftOverData: any = workExp?.workExp?.filter(
        (item: any) => item._id !== idForDelete
      );
      setWorkExp((prev: getDataType | undefined) => {
        if (prev) {
          return {
            ...prev,
            workExp: leftOverData,
          };
        }
      });
      handleClose();
      console.log(leftOverData, "leftOverData");
    } catch (err: any) {
      console.log(err, "err");
    }
  };

  const editEdu = (event: MouseEvent<HTMLDivElement>) => {
    const eduId = event.currentTarget.id;
    console.log(eduId, "id");
    // setIdForEdit(eduId);

    const foundedOne = workExp?.workExp?.find(
      (item: any) => item._id === eduId
    );

    handleOpenEdit();
    console.log(foundedOne, "foundadaddadasads");

    setFounded(foundedOne);
  };

  const [addCertification, setAddCertification] = useState(false);
  const clickButton = () => {
    setAddCertification(!addCertification);
  };

  ///Mui Funcs for delete Edu
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ///Mui funcs for edit Educations
  const [openEditEdu, setOpenEditEdu] = React.useState(false);
  const handleOpenEdit = () => setOpenEditEdu(true);
  const handleCloseEdit = () => setOpenEditEdu(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="skillTitle">Work Experience</h3>
        {!addCertification ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
        )}
      </div>
      <div>
        {!addCertification ? (
          <div>
            {workExp?.workExp?.map((el: any, index: number) => (
              <div key={index}>
                <EducationModelOfMap
                  deleteEdu={deleteEdu}
                  editEdu={editEdu}
                  deletemodal={deletemodal}
                  title1="Company"
                  title2="Occupation"
                  schoolName={el?.companyName}
                  profession={el?.occupation}
                  index={index}
                  id={el?._id}
                />
              </div>
            ))}
          </div>
        ) : (
          <WorkExperienceComp
            clickButton={clickButton}
            HandlePushEduArray={HandlePushEduArray}
          />
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div>
            <EduModalForDelete
              handleClose={handleClose}
              deleteEdu={deleteEdu}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openEditEdu}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div>
            <ExpEditForModal
              founded={founded}
              setGetUserData={setWorkExp}
              getUserState={workExp}
              handleCloseEdit={handleCloseEdit}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
