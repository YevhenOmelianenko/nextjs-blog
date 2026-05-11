export { termsAndConditionsMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';
import { termsAndConditionsSchema } from '@/lib/seo/static';

export default function TermsAndConditionsPage() {
  return (
    <>
      <main className="page-main">
        <div className="content-wrapper measure-prose">
          <h1 className="heading text-3xl sm:text-4xl">Terms &amp; conditions</h1>
          <p className="hero-lead mt-6">
            This page will hold your terms of use. Replace this placeholder with counsel-approved
            text before launch.
          </p>
        </div>
      </main>
      <JsonLd schema={termsAndConditionsSchema} />
    </>
  );
}
