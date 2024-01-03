import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { parse } from "url";
import { cookies } from 'next/headers';
import Middleware from "../middleware"

export async function GET(req, res) {
  try {
    const shop = await prisma.shop.findFirst();
    return new NextResponse(JSON.stringify(shop), {
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
    const data = await req.json();
    data.sosialmedias;
    const shop = await prisma.shop.create({
      data: {
        ...data,
        sosialmedias: JSON.stringify(data.sosialmedias),
      },
    });
    return new NextResponse(JSON.stringify(shop), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function PUT(req, res) {
    Middleware(req,res)
  try {
    const data = await req.json();
    const upsatedShop = await prisma.shop.update({
      where: {
        id: data.id,
      },
      data: {
        contacts: data.contacts,
        sosialmedias: data.sosialmedias,
        adress: data.adress,
        about: data.about,
      },
    });
    return new NextResponse(JSON.stringify(upsatedShop), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
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
    }

    const deletedShop = await prisma.shop.delete({
      where: {
        id: query.id,
      },
    });
    return new NextResponse(JSON.stringify(deletedShop), { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
