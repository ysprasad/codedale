import { NextResponse } from 'next/server';
import { saveModule } from '@/lib/modules';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (!data.slug || !data.title || !data.description || !data.image || !data.chapters) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields'
        },
        { status: 400 }
      );
    }

    const result = await saveModule(data);

    if (result) {
      return NextResponse.json({ 
        success: true,
        message: 'Module saved successfully'
      });
    } else {
      throw new Error('Failed to save module');
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to save module',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}