export * from "./constitution";

export interface CarouselSlide {
  step: string;
  headline: string;
  badge: string;
  content: string[];
  callout: string;
}

export interface InfographicPost {
  id: string;
  tag: string;
  title: string;
  slides: CarouselSlide[];
}
