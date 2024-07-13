import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";

export const SaveToDatabase = async (
  data: FORMDATA,
  selectedTemplate: TEMPLATE,
  aiResponse: string
) => {
  //id/slug/aiResponse/formdata/date/word

  try {
    const response = await fetch("/api/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        selectedTemplate,
        aiResponse,
      }),
    });
    if (response.ok) {
      console.log("Data saved successfully");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error saving to DB:", error);
  }
};

// export const GetHistoryPrompt = async (id: string) => {
//   try {
//     const response = await fetch(`/api/getHistory?id=${id}`);
//     if (response.ok) {
//       console.log("Data retrieved successfully");
//     }
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error("Error getting history:", error);
//   }
// }
export const GetHistory = async () => {
  try {
    const response = await fetch("/api/history");
    if (response.ok) {
      console.log("Data retrieved successfully");
    }
    const result = await response.json();
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.error("Error getting history:", error);
  }
};
