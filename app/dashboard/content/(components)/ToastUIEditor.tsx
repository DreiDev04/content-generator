"use client";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useRef, useContext, useEffect } from "react";
import { FormContext } from "@/components/context/FormContext";
import Loaders from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ToastUIEditor = () => {
  const editorRef = useRef<Editor | null>(null);
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("ToastUIEditor must be used within a FormProvider");
  }

  const { formData, isLoading } = context;
  const { toast } = useToast();

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(formData);
    }
  }, [formData]);
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-3">
          <h2 className="text-xl font-bold text-primary ml-2">Result</h2>
        </div>
        <Button
          className="m-2 flex gap-2"
          onClick={() => {
            const editorInstance = editorRef.current?.getInstance();
            if (editorInstance) {
              const markdown =
                editorInstance.getEditorElements().wwEditor.innerText;
              navigator.clipboard.writeText(markdown);
              toast({
                title: "Copied",
                description: "Result successfully copied to clipboard",
              });
            }
          }}
        >
          Copy
          <CopyIcon />
        </Button>
      </div>
      {isLoading && <Loaders />}
      <div className={isLoading ? "hidden" : "block h-full"}>
        <Editor
          ref={editorRef}
          initialValue="Result will be shown here"
          initialEditType="wysiwyg"
          height="100%"
          useCommandShortcut={true}
        />
      </div>
    </div>
  );
};

export default ToastUIEditor;
