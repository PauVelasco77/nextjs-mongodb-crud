import {NextResponse} from "next/server";

export function GET() {
  return NextResponse.json({message: "obteniendo tareas"});
}

export function POST() {
  return NextResponse.json({message: "creando tarea"});
}
