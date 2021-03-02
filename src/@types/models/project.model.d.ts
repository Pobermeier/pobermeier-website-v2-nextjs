/* eslint-disable */
interface Dimensions {
  width: number;
  height: number;
}

interface ProjectShowcaseImage {
  dimensions: Dimensions;
  alt: string;
  copyright?: any;
  url: string;
}

interface Dimensions2 {
  width: number;
  height: number;
}

interface ProjectLogo {
  dimensions: Dimensions2;
  alt: string;
  copyright?: any;
  url: string;
}

interface ProjectTitle {
  type: string;
  text: string;
  spans: any[];
}

interface ProjectSubtitle {
  type: string;
  text: string;
  spans: any[];
}

interface LiveProjectLink {
  link_type: string;
  url: string;
}

interface CodeLink {
  link_type: string;
  url?: string;
}

interface Data {
  project_showcase_image: ProjectShowcaseImage;
  project_logo: ProjectLogo;
  project_title: ProjectTitle[];
  project_subtitle: ProjectSubtitle[];
  project_type: "Personal" | "Work";
  project_description: string;
  technologies_used: string;
  live_project_link: LiveProjectLink;
  code_link: CodeLink;
}

interface Project {
  id: string;
  uid?: any;
  type: string;
  href: string;
  tags: any[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: Data;
}
