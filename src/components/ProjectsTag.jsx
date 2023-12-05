import React from "react";

function ProjectsTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-bg-[#ffd452]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full border-2 border-[#ffd452] sm:py-5 sm:px-3 py-3 px-3 text-lg sm:text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
}

export default ProjectsTag;
