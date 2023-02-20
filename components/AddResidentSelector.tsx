import React, { useState } from "react";
import useResidents from "@/hooks/useResidents";
import usePrograms from "@/hooks/usePrograms";

const AddResidentSelector = ({ programId }: { programId: number }) => {
  const { residents } = useResidents();
  const { addResidentToProgram, programsRefresh } = usePrograms();
  const [selectedResident, setSelectedResident] = useState<number | undefined>(
    residents?.[0].id
  );

  const handleSelectResident = (e: any) => {
    setSelectedResident(() => e.target.value);
  };

  const handleAddResidentToProgram = async () => {
    if (!selectedResident) {
      return;
    }

    await addResidentToProgram(programId, +selectedResident);
    await programsRefresh();
  };

  return (
    <div className="flex flex-col items-center space-y-2 font-metropolisBold md:font-metropolis">
      <p className="mb-2 font-bold">Add Resident</p>
      <select
        className="outline w-[80%] outline-[1px] rounded outline-[#61c0c2]"
        value={selectedResident}
        onChange={handleSelectResident}
      >
        {residents?.map(({ id, name }: { id: number; name: string }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
      <button
        className="bg-[#61c0c2] hover:bg-[#19a092] w-[40px] rounded-md font-bold p-1"
        onClick={handleAddResidentToProgram}
        disabled={!selectedResident}
      >
        +
      </button>
    </div>
  );
};

export default AddResidentSelector;
