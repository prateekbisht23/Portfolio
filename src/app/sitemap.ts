import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map(({ href }) => ({ url: `${site.url}${href === "/" ? "" : href}`, changeFrequency: "monthly" }));
}
