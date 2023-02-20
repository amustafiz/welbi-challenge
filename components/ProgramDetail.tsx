import React from "react";

type ProgramDetailsProps = {
  label: string;
  children: any;
};

const ProgramDetail = ({ label, children }: ProgramDetailsProps) => {
  return (
    <section className="flex flex-col">
      <div className="font-metropolisBold md:font-metropolis">
        {label}
        <section className="text-[#61c0c2]">{children}</section>
      </div>
    </section>
  );
};
export default ProgramDetail;
