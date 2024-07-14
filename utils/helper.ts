import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";
import { HistoryProps } from "@/app/dashboard/history/page";
import removeMarkdown from "remove-markdown";
import { format } from "date-fns";

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
    // if (response.ok) {
    //   console.log("Data retrieved successfully");
    // }
    const result = await response.json();
    const formatResult = result.map((item: HistoryProps) => {
      const x = JSON.parse(item.formdata);
      let formattedString = "";

      for (const [key, value] of Object.entries(x)) {
        formattedString += `${
          key.charAt(0).toUpperCase() + key.slice(1)
        }: ${value}\n`;
      }

      return {
        templateSlug: item.templateSlug
          .toLowerCase()
          .split("-")
          .map((item) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
          })
          .join(" "),
        aiResponse: removeMarkdown(item.aiResponse),
        createdAt: format(new Date(item.createdAt), "MM-dd-yyyy"),
        formdata: formattedString,
      };
    });
    // console.log("Result: ", result);
    // console.log("Format Result: ", formatResult);
    return formatResult;
  } catch (error) {
    console.error("Error getting history:", error);
  }
};



