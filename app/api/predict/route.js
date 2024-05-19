const { NextResponse } = require("next/server");

export async function POST(req) {
  const data = await req.json;
  console.log(req.body.json);
  //   const response = await fetch("http://0.0.0.0:8080/predict", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   }).then((res) => res.json());
  // return NextResponse.json({ data: req.body.json }, { status: 200 });
}
