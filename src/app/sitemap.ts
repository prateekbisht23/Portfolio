import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";
import { caseStudies } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...nav.map(({ href }) => href), ...caseStudies.map(({ slug }) => `/work/${slug}`)];
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly" }));
}
