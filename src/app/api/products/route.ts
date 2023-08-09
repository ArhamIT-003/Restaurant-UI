import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  console.log(cat);

  try {
    const product = await prisma.product.findMany();
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify("Something went wrong"), {
      status: 502,
    });
  }
};
