import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";
import { UserResource } from "@clerk/types";

export const SaveToDatabase = async (
  data: FORMDATA,
  selectedTemplate: TEMPLATE,
  aiResponse: string,
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
