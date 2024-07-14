import { useContext, useState } from "react";
import { chatSession } from "@/utils/aimodel";
import { FormContext } from "@/components/context/FormContext";
import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";
import { SaveToDatabase } from "@/utils/helper";


export const useGenerateAIContent = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("GenerateForms must be used within a FormProvider");
  }
  const { setFormData, setIsLoading, isLoading } = context;

  const [error, setError] = useState<Error | null>(null);

  const generateContent = async (
    selectedTemplate: TEMPLATE,
    data: FORMDATA
  ) => {
    setIsLoading(true);

    const selectedPrompt = selectedTemplate.aiPrompt;
    const stringData = JSON.stringify(data);
    const prompt = selectedPrompt + "\n\n" + stringData;
    
    try {
      const promptResult = await chatSession.sendMessage(prompt);
      const aiResponse = await promptResult.response.text();
      setFormData(aiResponse);
      await SaveToDatabase(data, selectedTemplate, aiResponse);
    } catch (error) {
      if (error instanceof Error) {
        setError(new Error(`Error generating AI content: ${error.message}`));
        console.error("Error generating AI content:", error);
      } else {
        setError(new Error("An unexpected error occurred"));
        console.error("Unexpected error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { generateContent, isLoading, error };
};
