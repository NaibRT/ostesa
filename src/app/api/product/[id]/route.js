import { prisma } from "../../../../lib/prisma"
import { NextResponse } from "next/server";
import multer from "multer";
import { parse } from "url";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Middleware from '../../middleware';

export async function GET(req, res) {
    const { query } = parse(req.url, Boolean(1));
    console.log("query",query);
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