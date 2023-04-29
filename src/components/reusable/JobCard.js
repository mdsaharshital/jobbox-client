import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobsDescModal } from "../JobsDescModal";
import { useDispatch } from "react-redux";
import { getJobDetails } from "../../features/job/jobSlice";

const JobCard = ({ jobData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, position, companyName, location, employmentType } =
    jobData || {};
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      key={_id}
      className="border border-gray-300 p-5 rounded-2xl text-primary w-full"
    >
      <div className="flex justify-between  text-primary">
        <div>
          <p className="text-xl">{position}</p>
          <small className="text-primary/70 ">
            by{" "}
            <span className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p>{employmentType}</p>
        <button
          className="btn"
          onClick={() => {
            navigate(`/job-details/${_id}`);
            dispatch(getJobDetails(jobData));
          }}
        >
          Details
        </button>
        <button onClick={openModal}>Open Modal</button>
        <JobsDescModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default JobCard;
