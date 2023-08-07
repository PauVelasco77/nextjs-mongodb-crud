import {NextResponse} from "next/server";
import {connectDB} from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET() {
  connectDB();

  const tasks = await Task.find();

  return NextResponse.json(tasks);
}

export async function POST(req) {
  try {
    const data = await req.json();

    const newTask = new Task(data);
    const savedTask = await newTask.save();

    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
