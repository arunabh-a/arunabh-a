import { getPostHogClient } from "@/lib/posthog-server";
import { OTHER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const links: Record<string, string> = Object.fromEntries([
    ...SOCIAL_LINKS.map((l) => [l.name.toLowerCase(), l.url]),
    ...OTHER_LINKS.map((l) => [l.name.toLowerCase(), l.url]),
]);

export async function GET(
    req: Request,
    { params }: { params: Promise<{ link: string }> },
) {
    const { link } = await params;

    const target = links[link];

    if (!target) {
        return new Response("Not Found", { status: 404 });
    }

    const posthog = getPostHogClient();
    posthog.capture({
        distinctId: crypto.randomUUID(),
        event: "link_redirect",
        properties: {
            link,
            target,
            userAgent: req.headers.get("user-agent"),
        },
    });

    return Response.redirect(target, 302);
}
