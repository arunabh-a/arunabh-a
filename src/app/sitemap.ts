import type { MetadataRoute } from "next";
import { PROFILE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: PROFILE.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${PROFILE.url}/journey`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${PROFILE.url}/links`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
