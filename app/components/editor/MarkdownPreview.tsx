"use client";

import clsx from "clsx";
import Heading from "@/app/components/markdown/Heading";
import { robotoSlab } from "@/app/fonts";
import List from "@/app/components/markdown/List";
import Blockquote from "@/app/components/markdown/Blockquote";
import CodeSnippet from "@/app/components/markdown/CodeSnippet";

export default function MarkdownPreview() {
  return (
    <div
      className={clsx(
        "theme-dark:text-neutral-400 mobile:py-5 mobile:px-6 grid w-full content-start gap-y-5 px-5 py-4 text-neutral-500 peer-[[data-hidden=false]]:hidden peer-[[data-hidden=true]]:col-span-2 peer-[[data-hidden=true]]:mx-auto peer-[[data-hidden=true]]:max-w-2xl @sm:py-2 @sm:peer-[[data-hidden=false]]:grid",
        robotoSlab.className,
      )}
    >
      <Heading level="h1"> Heading 1 </Heading>
      <Heading level="h2"> Heading 2 </Heading>
      <Heading level="h3"> Heading 3 </Heading>
      <Heading level="h4"> Heading 4 </Heading>
      <Heading level="h5"> Heading 5 </Heading>
      <Heading level="h6"> Heading 6 </Heading>

      <p>
        Markdown is a lightweight markup language that you can use to add
        formatting elements to plaintext text documents.
      </p>

      <List>
        <li>
          Create headings, paragraphs, links, blockquotes, inline-code, code
          blocks, and lists
        </li>
        <li> Name and save the document to access again later</li>
        <li>Choose between Light or Dark mode depending on your preference</li>
      </List>

      <Blockquote>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        exercitationem blanditiis officia perspiciatis eveniet veniam cum, culpa
        consectetur, tenetur mollitia, nesciunt praesentium cumque reiciendis.
        Aut quisquam et laboriosam odio reiciendis?
      </Blockquote>

      <CodeSnippet type="inline">I'm inline</CodeSnippet>
      <CodeSnippet type="block">
        &lt;main&gt; <br /> &nbsp; &lt;h1&gt; This is a larger code block
        &lt;h1/&gt; <br />
        &lt;main/&gt;
      </CodeSnippet>
    </div>
  );
}
