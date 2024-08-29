import React, { useState } from "react";
import styles from './MarkdownEditor.module.css'
import { remark } from "remark";
import html from "remark-html";
interface MarkdownEditorProps {
  content: string;
  setContent: (content: string) => void;
}
export default function MarkdownEditor({content , setContent} : MarkdownEditorProps){
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handleMarkdownChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const markdownContent = e.target.value;
    setContent(markdownContent);

    const processedContent = await remark().use(html).process(markdownContent);
    setPreviewHtml(processedContent.toString());
  };

  return (
    <div className={styles.editorContainer}>
      <textarea
        className={styles.textarea}
        placeholder="Write your markdown here..."
        value={content}
        onChange={handleMarkdownChange}
        rows={10}
      />
      <div className={styles.previewHeading}>Preview</div>
      <div
        className={styles.preview}
        dangerouslySetInnerHTML={{ __html: previewHtml }}
      />
    </div>
  );
};


