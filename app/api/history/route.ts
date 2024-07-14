import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { asc, desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  try {
    const user = await clerkClient().users.getUser(userId);
    const data = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user.id))
      .orderBy(desc(AIOutput.createdAt));
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Database selection failed" },
      { status: 500 }
    );
  }
}
