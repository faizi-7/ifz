import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function MDRender({content} : {content : string}) {
  const matterResult = matter(content);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return<div>
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </div>
}