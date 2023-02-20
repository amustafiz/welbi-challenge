import type { NextApiRequest, NextApiResponse } from "next";

const registerToProgram = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { body } = req;
  /*payload: programId, residentId, status*/
  const { programId, residentId, status } = body;
  try {
    const response = await fetch(
      `${process.env.API_URL}/programs/${programId}/attend`,
      {
        method: "POST",
        body: JSON.stringify({ programId, residentId, status }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.WELBI_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    res.status(201).json(data);
  } catch (error) {
    res.status(500);
  }
};
export default registerToProgram;
