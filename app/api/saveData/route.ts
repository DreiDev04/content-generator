import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { clerkClient, getAuth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  const { data, selectedTemplate, aiResponse } = await req.json();
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  const user = await clerkClient().users.getUser(userId);

  try {
    await db.insert(AIOutput).values({
      createdBy: user.id,
      templateSlug: selectedTemplate.slug,
      aiResponse,
      formdata: JSON.stringify(data),
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Database insertion failed' }, { status: 500 });
  }
}
