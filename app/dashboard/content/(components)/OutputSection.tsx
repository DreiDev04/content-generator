import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import Loaders from "@/components/loaders";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function OutputSection() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("ToastUIEditor must be used within a FormProvider");
  }

  const { formData, setFormData, isLoading } = context;
  const handleChange = (newValue: any) => {
    setFormData(newValue || "");
  };

  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-3">
          <h2 className="text-xl font-bold text-primary ml-2">Result</h2>
        </div>
        <Button
          className="m-2 flex gap-2 dark:text-foreground"
          onClick={() => {
            navigator.clipboard.writeText(formData?.toString() ?? "");
          }}
        >
          Copy
          <CopyIcon />
        </Button>
      </div>
      {isLoading && <Loaders />}
      <div className={isLoading ? "hidden" : "block h-full"}>
        <MDEditor
          value={formData?.toString()}
          onChange={handleChange}
          preview="preview"
          minHeight={500}
          height={500}
          enableScroll={false}
        />
      </div>
    </div>
  );
}

export default OutputSection;
