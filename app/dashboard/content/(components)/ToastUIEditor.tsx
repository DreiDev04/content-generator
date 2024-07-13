"use client";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useRef, useContext, useEffect } from "react";
import { FormContext } from "@/components/context/FormContext";
import Loaders from "@/components/loaders";

const ToastUIEditor = () => {
  const editorRef = useRef<Editor | null>(null);
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("ToastUIEditor must be used within a FormProvider");
  }

  const { formData, isLoading } = context;

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(formData);
    }
  }, [formData]);

  // if (isLoading) {
  //   return <Loaders />;
  // }
  // return <Loaders />;

  return (
    <>
      {isLoading && <Loaders />}
      <div className={isLoading ? "hidden" : "block h-full"}>
        <Editor
          ref={editorRef}
          initialValue="Result will be shown here"
          initialEditType="wysiwyg"
          height="100%"
          useCommandShortcut={true}
          onChange={() => {
            // Handle editor change if needed
          }}
        />
      </div>
    </>
  );
};

export default ToastUIEditor;
