import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    if (session.user.isAdmin) {
      const orders = await prisma.order.findMany();
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } else {
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    }
  } else {
    return new NextResponse(JSON.stringify("Not authenticated"), {
      status: 401,
    });
  }
};
