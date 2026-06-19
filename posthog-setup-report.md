<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the portfolio site (`arunabh.online`). PostHog is initialized client-side via `instrumentation-client.ts` (Next.js 15.3+ pattern), routed through a reverse proxy (`/ingest`) added to `next.config.ts`, and backed by a shared server-side client in `src/lib/posthog-server.ts`. Exception capture (`capture_exceptions: true`) is enabled for automatic error tracking. 11 events are instrumented across 8 files — 8 client-side and 3 server-side. The pre-existing `link_redirect` server event was migrated to the shared PostHog client helper and the missing `links` lookup map was reconstructed from constants.

| Event | Description | File |
|---|---|---|
| `project_clicked` | User clicks on a project card in the projects section | `src/components/ProjectsSection.tsx` |
| `work_item_expanded` | User expands a work experience accordion item | `src/components/WorkSection.tsx` |
| `contact_email_clicked` | User clicks the email address in the Connect section | `src/components/ContactSection.tsx` |
| `social_link_clicked` | User clicks a social platform CTA button on the links page | `src/components/LinkItem.tsx` |
| `latest_project_clicked` | User clicks on the featured latest project card on the links page | `src/components/LatestProjectLink.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the site dock (mobile or desktop) | `src/components/LinkNav.tsx` |
| `link_redirect` | Server receives a short-link redirect request | `src/app/[link]/route.ts` |
| `contact_form_submitted` | Server receives a contact form POST request | `src/app/api/route.ts` |
| `contact_form_sent` | Server successfully sends the contact form email | `src/app/api/route.ts` |
| `contact_form_failed` | Server fails to send the contact form email | `src/app/api/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/477273/dashboard/1734689)
- [Portfolio engagement overview](https://us.posthog.com/project/477273/insights/gFwfl5Fb)
- [Project clicks](https://us.posthog.com/project/477273/insights/HZc9ULq2)
- [Social link clicks](https://us.posthog.com/project/477273/insights/nAk4ybka)
- [Contact conversion funnel](https://us.posthog.com/project/477273/insights/G9CBJT4Z)
- [Contact email clicks](https://us.posthog.com/project/477273/insights/uswQAO7V)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any CI/CD secrets so collaborators and production deployments know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify in PostHog error tracking.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
