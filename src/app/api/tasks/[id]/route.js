import {NextResponse} from "next/server";

export function GET(req, res) {
  const {
    params: {id},
  } = res;

  return NextResponse.json({message: "obteniendo tarea " + id});
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
