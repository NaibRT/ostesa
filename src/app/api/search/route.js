import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { parse } from "url";


export async function GET(req, res) {
    try {
        const { query } = parse(req.url, Boolean(1));
        if (!query.searchKey) {
            return new NextResponse("searchKey can not be null", { status: 201 });
          };

      const products = await prisma.product.findMany({
        where:{
          name:{
            contains:searchKey,
          }
        },
        include: {
          photo: true,
        },
      });

      return new NextResponse(JSON.stringify(products), {
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