/* import { NextResponse } from "next/server";

const data = { text: "hello" };

const postData = async () => {
  try {
    const response = await axios.post("http://0.0.0.0:8080/predict", data, {
      withCredentials: true,
    }); // Use Axios for POST request

    if (!response.data) {
      // Handle non-successful response
      throw new Error("No data returned");
    }

    console.log("Success:", response.data);
    return response.data;
    // Clear any previous errors
  } catch (error) {
    console.error("Error:", error); // Set the error message to state
  }
};

export async function GET() {
  return NextResponse.json({ postData });
}
 */
