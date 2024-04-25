"use client";
import React, { useEffect, useState } from "react";
import { WhiteButton } from "../Button";
import { EducationAddComp } from "./EducationAddComp";
import { WorkExperienceComp } from "./WorkExperience";
import { IoCloseCircleSharp } from "react-icons/io5";

import EducationModelOfMap from "./EducationModelOfMap";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { MouseEvent } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EduModalForDelete from "./EduModalForDelete";
import EducationModalFroEdit from "./EducationModalFroEdit";
import { WorkExperience } from "./WorkExperienceSda";

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

export const Education = (props: PropsType) => {
  const { userDataGet } = props;

  const [getUserState, setGetUserData] = useState<getDataType>();
  const [founded, setFounded] = useState<eduType>();
  const [idForDelete, setIdForDelete] = useState<string>();
  // const [idForEdit, setIdForEdit] = useState<string>();

  useEffect(() => {
    setGetUserData(userDataGet);
  }, [userDataGet?.education]);

  const deletemodal = (event: MouseEvent<HTMLDivElement>) => {
    const eduId = event.currentTarget.id;
    setIdForDelete(eduId);
    handleOpen();
  };

  const deleteEdu = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/deleteEducation",
        {
          id: idForDelete,
        }
      );
      const leftOverData: any = getUserState?.education?.filter(
        (item: any) => item._id !== idForDelete
      );
      setGetUserData((prev: getDataType | undefined) => {
        if (prev) {
          return {
            ...prev,
            education: leftOverData,
          };
        }
      });
      handleClose();
     
    } catch (err: any) {
      console.log(err, "err");
    }
  };

  const HandlePushEduArray = (obj: eduType) => {
    setGetUserData((prev: getDataType | undefined) => {
      if (prev) {
        return {
          ...prev,
          education: [...prev.education, obj],
        };
      }
      return prev;
    });
  };

  const editEdu = (event: MouseEvent<HTMLDivElement>) => {
    const eduId = event.currentTarget.id;
   
    // setIdForEdit(eduId);

    const foundedOne = getUserState?.education?.find(
      (item: any) => item._id === eduId
    );

    handleOpenEdit();
 

    setFounded(foundedOne);
  };

  const [addEducation, setAddEducation] = useState(false);
  const clickButton = () => {
    setAddEducation(!addEducation);
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
        <h3 className="skillTitle">Education</h3>
        {!addEducation ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Add New "
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
        )}
      </div>
      <div>
        {!addEducation ? (
          <div>
            {getUserState?.education?.map((item: eduType, index: number) => (
              <div key={index}>
                <div>
                  <EducationModelOfMap
                    editEdu={editEdu}
                    deleteEdu={deleteEdu}
                    deletemodal={deletemodal}
                    schoolName={item?.schoolName}
                    profession={item?.profession}
                    index={index}
                    id={item._id}
                    title1="School "
                    title2="profession"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EducationAddComp
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
            <EducationModalFroEdit
              founded={founded}
              setGetUserData={setGetUserData}
              getUserState={getUserState}
              handleCloseEdit={handleCloseEdit}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
