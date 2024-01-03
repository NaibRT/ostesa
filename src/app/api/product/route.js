import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import multer from "multer";
import { parse } from "url";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Middleware from '../middleware';

// const upload = multer({ dest: "../../../../public/uploads" });


export async function GET(req, res) {

  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
      },
    });

    return new NextResponse(JSON.stringify(products), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function getByOne(req, res) {
    const { query } = parse(req.url, Boolean(1));
try {
  const product = await prisma.product.findFirst({
    include: {
      images: true,
    },
    where:{
        id:query.id
    }
  });

  return new NextResponse(JSON.stringify(product), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
} catch (error) {
  return new NextResponse(error.message, { status: 500 });
}
}

export async function POST(req, res) {
  Middleware(req,res)
  try {
    const data = await req.json();
    const newProduct = await prisma.product.create({ data: data });
    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function DELETE(req, res) {
  Middleware(req,res)
  try {
    const { query } = parse(req.url, Boolean(1));
    console.log("new query", query.id);

    if (!query.id) {
      return new NextResponse("id can not be null", { status: 201 });
    };

    const deletedProduct = await prisma.product.delete({
      where: {
        id: query.id,
      },
      include:{
        images:{
          where:{
            productID:query.id,
          }
        }
      }
    });
    return new NextResponse(JSON.stringify(deletedProduct), { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
