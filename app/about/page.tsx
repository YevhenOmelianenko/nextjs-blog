export { aboutMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';
import { aboutSchema } from '@/lib/seo/static';

export default function AboutPage() {
  return (
    <>
      <main className="page-main">
        <div className="content-wrapper measure-prose">
          <h1 className="heading text-3xl sm:text-4xl">About</h1>
          <p className="hero-lead mt-6">
            DevLog is a programming news blog built around a simple idea: technical writing should
            feel precise, human, and useful — never loud or shallow.
          </p>
          <div className="post-body mt-8">
            <p>
              We prioritize dark mode, readable typography, and a calm visual system so long-form
              posts stay comfortable on any display.
            </p>
          </div>
        </div>
      </main>
      <JsonLd schema={aboutSchema} />
    </>
  );
}
