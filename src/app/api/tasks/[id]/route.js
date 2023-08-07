import {NextResponse} from "next/server";
import {connectDB} from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET(req, {params}) {
  connectDB();
  const validId = params.id;

  try {
    const task = await Task.findById(validId);

    if (!task) {
      console.log("Tarea no encontrada");
      return NextResponse.json(
        {
          error: true,
          message: "Task not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(task);
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

export function PUT(req, res) {
  const {
    params: {id},
  } = res;

  return NextResponse.json({message: "actualizando tarea " + id});
}

export function DELETE(req, res) {
  const {
    params: {id},
  } = res;

  return NextResponse.json({message: "eliminando tarea " + id});
}
