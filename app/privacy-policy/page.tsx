export { privacyPolicyMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';
import { privacyPolicySchema } from '@/lib/seo/static';

export default function PrivacyPage() {
  return (
    <>
      <main className="page-main">
        <div className="content-wrapper measure-prose">
          <h1 className="heading text-3xl sm:text-4xl">Privacy</h1>
          <p className="hero-lead mt-6">
            This page will hold your privacy policy. Replace this placeholder with your final legal
            copy.
          </p>
        </div>
      </main>
      <JsonLd schema={privacyPolicySchema} />
    </>
  );
}
