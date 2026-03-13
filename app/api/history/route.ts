import { NextResponse } from "next/server";
import { studyDates } from "../study/route";

export async function GET() {

  const history = [...studyDates].reverse();

  return NextResponse.json(history);

}