export interface Thread {
  title?: string;
  date: string;
  content: Content[];
}

export interface Content {
  type: "image" | "paragraph";
  url?: string;
  paragraph?: string;
  description?: string;
}

export interface Image extends Content {
  type: "image";
  url: string;
  description: string;
}

export interface Paragraph extends Content {
  type: "paragraph";
  paragraph: string;
}

export interface PostData {
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string[];
  body: React.ReactNode[];
  image: string;
  anchor: string;
  link: string;
  thread?: Thread[];
  post: "about" | "maintenance";
}
