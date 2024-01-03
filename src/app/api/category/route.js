import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { FileUpload } from "../../utils";
import { parse } from "url";
import Middleware from "../middleware";

export async function GET(req, res) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count:true
      }
    });

    return new NextResponse(JSON.stringify(categories), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function POST(req, res) {
  Middleware(req, res);

  try {
    const data = await req.formData();
    const images = await data.getAll("image");
    const name = await data.get("name");
    const imageNames = await FileUpload(images);

    const newCategory = await prisma.category.create({
      data: {
        name,
        image: imageNames[0],
      },
    });

    return new NextResponse(JSON.stringify(newCategory), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function DELETE(req, res) {
  Middleware(req, res);

  try {
    const { query } = parse(req.url, Boolean(1));
    console.log("new query", query.id);

    if (!query.id) {
      return new NextResponse("id can not be null", { status: 201 });
    }

    const deletedCategory = await prisma.category.delete({
      where: {
        id: query.id,
      },
    });
    return new NextResponse(JSON.stringify(deletedCategory), { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
