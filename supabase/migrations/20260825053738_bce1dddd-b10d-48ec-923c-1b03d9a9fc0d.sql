CREATE TABLE public.football_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  program TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  pain_point TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.football_leads TO service_role;

ALTER TABLE public.football_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages football leads"
  ON public.football_leads FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);