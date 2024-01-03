
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req,res){
    try {
        const users = await prisma.user.findMany();
        return new NextResponse(JSON.stringify(users),{
            status:201,
            headers: { "Content-Type": "application/json" },
        })
    } catch (error) {
        if (error.code === "P2002") {
            return new NextResponse("User with email already exists", {
              status: 409,
            });
          }
          return new NextResponse(error.message, { status: 500 });
    }
};


export async function POST(req, res) {
        try {
            const data = await req.json();
            const user = await prisma.user.create({data:data});
            return new NextResponse(JSON.stringify(user),{
                status:201,
                headers: { "Content-Type": "application/json" },
            })
        } catch (error) {
            if (error.code === "P2002") {
                return new NextResponse("User with email already exists", {
                  status: 409,
                });
              }
              return new NextResponse(error.message, { status: 500 });
        }

}