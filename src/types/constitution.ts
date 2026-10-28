export interface ConstitutionClause {
  clauseNumber: string;
  text: string;
}

export interface ConstitutionArticle {
  articleNumber: number;
  title: string;
  summary?: string;
  content: string;
  partTitle?: string | null;
  clauses?: ConstitutionClause[];
  plainExplanation?: string;
}

export interface ConstitutionChapter {
  number: number;
  slug: string;
  title: string;
  swahiliTitle?: string;
  articleRange: string;
  summary: string;
  category: "Foundations" | "Rights and Freedoms" | "Governance" | "Accountability" | "State Organs";
  keyProvisions: string[];
  articles: ConstitutionArticle[];
}

export interface ConstitutionDataset {
  title: string;
  subtitle: string;
  promulgationDate: string;
  preamble: string;
  totalChapters: number;
  totalArticles: number;
  chapters: ConstitutionChapter[];
}
