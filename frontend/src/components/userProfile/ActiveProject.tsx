"ise client";

import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { ProjectTemplate } from "./ProjectTemplate";
import { MouseEvent } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DeleteModal } from "./DeleteModal";
import { EditModal } from "./EditModal";

type SkillType = {
  name: string;
  id: string;
};

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type PosdtDataType = {
  _id: string;
  createdBy?: {
    firstName: string;
    lastName: string;
    image: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  category: DataType[];
  skills: SkillType[];
  createdAt: string;
};

type PropsType = {
  skill: SkillType[];
};

export default function ActiveProject(props: PropsType) {
  const { skill } = props;

  const { data } = useContext(DataContext);

  const [projects, setProjects] = useState<PosdtDataType[]>();
  const [deleteId, setDeleteId] = useState<string>();
  const [postEdit, setPostEdit] = useState<PosdtDataType>();
  console.log(projects);
  //   console.log(postWilledit, "editlehh posttttt data");
  useEffect(() => {
    const getProjectByCreatedBy = async () => {
      try {
        const { data: getProjects } = await axios.post(
          "https://freelance-gmjr.onrender.com/getProjectByCreatedBy",
          {
            createdBy: data._id,
          }
        );
        setProjects(getProjects);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    getProjectByCreatedBy();
  }, []);

  //delete project
  const getIdforDelete = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    setDeleteId(id);
    handleOpen();
  };
  const deleteProject = async () => {
    try {
      const { data: deletedProject } = await axios.post(
        "https://freelance-gmjr.onrender.com/deleteProject",
        {
          id: deleteId,
        }
      );
      if (deleteId) {
        const leftOverData: PosdtDataType[] | undefined = projects?.filter(
          (item: any) => item._id !== deleteId
        );
        setProjects(leftOverData);
      }

      handleClose();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const editProject = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    const sda = projects?.find((el: any) => el._id === id);
    // const sss = sda.
    if (sda) {
      const updatedPostEdit = { ...sda, skills: [] };
      setPostEdit(updatedPostEdit);
    }
    handleOpenEdit();
  };

  ///MUI delete modaliin func
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ///MUI Edit postiin func
  const [openEditEdu, setOpenEditEdu] = React.useState(false);
  const handleOpenEdit = () => setOpenEditEdu(true);
  const handleCloseEdit = () => setOpenEditEdu(false);

  return (
    <div className="flex flex-col gap-10">
      {projects?.length === 0 ? (
        <div className="flex justify-center items-center">
          <Image alt="" src="/error.png" width={500} height={300} />
        </div>
      ) : (
        <div>
          {" "}
          {projects?.map((el: any, index: number) => {
            return (
              <div key={index}>
                <ProjectTemplate
                  editProject={editProject}
                  getIdforDelete={getIdforDelete}
                  id={el._id}
                  title={el.title}
                  description={el.description}
                  price={el.budget}
                  flexible={el.flexible}
                  createdAt={el.createdAt}
                  category={el.skills?.map((el2: any, index2: number) => {
                    return el2.name;
                  })}
                />
              </div>
            );
          })}
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div>
            <DeleteModal
              handleClose={handleClose}
              deleteProject={deleteProject}
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
            <EditModal
              postEdit={postEdit}
              skill={skill}
              handleCloseEdit={handleCloseEdit}
              setProjects={setProjects as any}
              projects={projects}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
