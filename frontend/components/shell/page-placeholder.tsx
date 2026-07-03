import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="section-title text-4xl font-semibold text-slate-900">{title}</h1>
        <p className="max-w-3xl text-base text-slate-600">{description}</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Placeholder Module</CardTitle>
          <CardDescription>Business logic is intentionally deferred. This area is ready for feature implementation in the next phase.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[1.5rem] border border-dashed border-sky-200 bg-sky-50/50 p-8 text-sm text-sky-900">
            Navigation, layout, and route protection are active. Domain workflows, data models, and integrations are not implemented yet.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

