export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FORM[];
}

export default [
  {
    name: "Presentation Outline",
    desc: " An AI tool that generates a professional presentation outline for your business, project, or research. The outline includes a title, introduction, body, and conclusion.",
    category: "presentation",
    icon: "https://cdn-icons-png.flaticon.com/128/1903/1903259.png",
    slug: "presentation-outline",
    aiPrompt:
      "Develop an outline for a presentation about the [topic]. The presentation should include an introduction, body, and conclusion. The introduction should provide an overview of the topic, the body should include [keyPoints] and supporting details, and the conclusion should summarize the main ideas and provide a call to action.",
    form: [
      {
        label: "Enter Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter Key Points",
        field: "textarea",
        name: "keyPoints",
        required: true,
      },
    ],
  },
  {
    name: "Cover Letter Generator",
    desc: "An AI tool that generates a professional cover letter for your job application, tailored to the job description and your qualifications.",
    category: "job",
    icon: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
    slug: "cover-letter-generator",
    aiPrompt:
      "Generate a professional cover letter for the job position of [jobTitle] at [companyName]. The cover letter should be tailored to the [jobDescription] and highlight [qualifications]. Avoid any grammatical errors and ensure the cover letter is engaging and professional.",
    form: [
      {
        label: "Enter Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Enter The Company Name",
        field: "input",
        name: "companyName",
        required: true,
      },
      {
        label: "Enter the Job Description",
        field: "textarea",
        name: "jobDescription",
        required: true,
      },
      {
        label: "Enter your Qualifications",
        field: "textarea",
        name: "qualifications",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate a heartwarming and wholesome blog post based on the topic [topic] and the outline [outline] The content should be positive, engaging, and suitable for all audiences. Avoid any hate speech or sexually explicit content. The blog should be inviting and captivating, encouraging readers to engage with it from the first glance. If it include hate speech and sexually explicit content make it wholesome and positive.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 10 Blog Topic Ideas in bullet point only, (no Description) based on [niche] in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 10 title ideas bullet wise only bases on [keywords] and [outline] and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description under 4-5 lines based on [topic] and [outline] in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on [title] and [outline] in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label: "Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improve",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the [inputText] by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user [codeDescription] write a code in [ProgrammingLanguage] then give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Programming Language",
        field: "textarea",
        name: "ProgrammingLanguage",
        required: true,
      },
      {
        label: "Enter description of code you want to write",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user [codeDescription]  explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user [codeInput] find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user [productName] and [outline] generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user [productName] and [description] generate description for product for e-commer business give output in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];

// {
//   name: "",
//   desc: "",
//   category: "",
//   icon: "",
//   slug: "",
//   aiPrompt:
//     "",
//   form: [
//     {
//       label: "Enter Topic",
//       field: "input",
//       name: "topic",
//       required: true,
//     },
//     {
//       label: "Enter Key Points",
//       field: "textarea",
//       name: "keyPoints",
//       required: true,
//     },
//   ],
// },

// DRAFTS
// {
//   name: "Sales Letter Generator",
//   desc: " An AI tool that generates a professional sales letter for your business, project, or research. The letter includes a title, introduction, body, and conclusion.",
//   category: "sales",
//   icon: "https://cdn-icons-png.flaticon.com/128/3211/3211596.png",
//   slug: "sales-letter-generator",
//   aiPrompt:
//     // " Develop a sales letter for the [product] that highlights its features, benefits, and value proposition. The letter should include an attention-grabbing title, an engaging introduction, a persuasive body, and a compelling call to action. The tone should be professional and persuasive, and the content should be tailored to the [description] and for the [targetAudience].",
//     "Write a sales letter about [topic] for [targetAudience].",
//   form: [
//     {
//       label: "Enter Topic",
//       field: "input",
//       name: "topic",
//       required: true,
//     },
//     // {
//     //   label: "Enter Product Description",
//     //   field: "textarea",
//     //   name: "description",
//     //   required: true,
//     // },
//     {
//       label: "Enter Target Audience",
//       field: "input",
//       name: "targetAudience",
//       required: true,
//     },
//   ],
// },
