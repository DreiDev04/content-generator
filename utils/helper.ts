import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";
import { HistoryProps } from "@/app/dashboard/history/page";
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
export const GetHistory = async () => {
  try {
    const response = await fetch("/api/history");
    const result = await response.json();
    const formatResult = result.map((item: HistoryProps) => {
      const x = JSON.parse(item.formdata);
      const formattedString = Object.values(x).join(", ")
      const plainTextResponse = markdownToPlainText(item.aiResponse);
      return {
        templateSlug: item.templateSlug
          .toLowerCase()
          .split("-")
          .map((item) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
          })
          .join(" "),
        aiResponse: plainTextResponse,
        createdAt: format(new Date(item.createdAt), "MM-dd-yyyy"),
        formdata: formattedString,
      };
    });
    return formatResult;
  } catch (error) {
    console.error("Error getting history:", error);
  }
};


const markdownToPlainText = (markdown: string) => {
  // Remove markdown formatting
  return markdown
    .replace(/##+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italics
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/[-*] /g, '') // Remove bullet points
    .replace(/\n/g, ' ') // Replace new lines with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim(); // Trim leading/trailing whitespace
};
