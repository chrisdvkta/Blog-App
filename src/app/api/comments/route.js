import prisma from "@/utils/connect";
import { NextResponse } from "next/server";



export const GET = async (req) => {


  const {searchParams} = new URL(req.url);
  const postSlug = searchParams.get("postSlug"); //pass postslug as query and search it for comments since prisma db model comment consists of postslug frield. 

 try{

  const comments = await prisma.comment.findMany(
    {
      where:{
        ...(postSlug && {postSlug}),
      },
      include:{user:true},
    }
  );
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" + err }, { status: 500 }));
  }
};