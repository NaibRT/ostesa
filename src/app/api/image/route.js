import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import multer from "multer";
import {FileUpload} from '../../utils'
import Middleware from "../middleware"


// const upload = multer({ dest: "../../../../public/uploads" });

export async function GET(req, res) {
  try {
    const images = await prisma.image.findMany();
    return new NextResponse(JSON.stringify(images), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function POST(req, res) {
  Middleware(req,res)
  try {
    
    const data = await req.formData();
    const files = await data.getAll('photo');
    const id = await data.get("productID");
    const fileNames = await FileUpload(files);

    const newImages = await Promise.all([...fileNames.map(f => prisma.image.create({data:{
      name: f,
      productID: id
    }}))]);

    return new NextResponse(JSON.stringify(newImages), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
