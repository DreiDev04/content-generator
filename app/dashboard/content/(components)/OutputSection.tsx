"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const OutputSection = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "bg-background p-4 rounded-md shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-full border shadow-lg",
      },
    },
  });

  return (
    <div className="h-full w-full">
      <EditorContent
        editor={editor}
        className="h-full w-full"
        onChange={() => {
          console.log(editor?.getHTML());
        }}
      />
    </div>
  );
};

export default OutputSection;