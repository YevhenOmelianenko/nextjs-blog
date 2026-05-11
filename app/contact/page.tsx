export { contactMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';
import { contactSchema } from '@/lib/seo/static';

export default function ContactPage() {
  return (
    <>
      <main className="page-main">
        <div className="content-wrapper measure-prose">
          <h1 className="heading text-3xl sm:text-4xl">Contact</h1>
          <p className="hero-lead mt-6">
            Want to collaborate, report an issue, or suggest a topic? Reach out — we read every
            message.
          </p>
          <p className="muted-label mt-8 font-[family-name:var(--font-dm-sans)] text-sm">
            Add your contact channels or form here when ready.
          </p>
        </div>
      </main>
      <JsonLd schema={contactSchema} />
    </>
  );
}
