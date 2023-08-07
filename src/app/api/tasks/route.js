import {NextResponse} from "next/server";
import {connectDB} from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET() {
  connectDB();

  const tasks = await Task.find();

  return NextResponse.json(tasks);
}

export function POST() {
  return NextResponse.json({message: "creando tarea"});
}
