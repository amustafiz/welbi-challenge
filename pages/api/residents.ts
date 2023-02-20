import type { NextApiRequest, NextApiResponse } from 'next'
import { Resident } from '@/types';

export default async function handler( req: NextApiRequest,
  res: NextApiResponse<Resident[]>) {
  
  switch(req.method) {
    case 'GET':
        return getResidents(req,res)
    case 'POST':
        return postResidents(req,res)   
    default:
        res.status(400)
  }
}


const getResidents = async (
    req: NextApiRequest,
    res: NextApiResponse<Resident[]>) => {
      
    try {
      const response = await fetch(`${process.env.API_URL}/residents`, {
        headers: {
          Authorization: `Bearer ${process.env.WELBI_TOKEN}`,
        },
      });
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.log('error',error)
      res.status(500);
    }
  }

  const postResidents = async ( 
    req: NextApiRequest,
    res: NextApiResponse<Resident[]>) => {
    const { body }  = req;
     
    try {

      const response = await fetch(`${process.env.API_URL}/residents`, {
        method:'POST',
        body:JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.WELBI_TOKEN}`,
        },
      });
  
      const data = await response.json();
      
      res.status(201).json(data);
    } catch (error) {
      console.log('error',error)
      res.status(500);
    }
  }