export interface Contribution {
  project: string
  number: number
  title: string
  href: string
}

export const contributions: Contribution[] = [
  {
    project: 'Supabase',
    number: 38675,
    title: 'Update the import-data guide to match a dashboard UI change',
    href: 'https://github.com/supabase/supabase/pull/38675',
  },
  {
    project: 'freeCodeCamp',
    number: 62312,
    title: 'Correct role terminology in a curriculum user story',
    href: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/62312',
  },
  {
    project: 'Airbnb',
    number: 3153,
    title: 'Document the ESLint --ext requirement for .jsx files',
    href: 'https://github.com/airbnb/javascript/pull/3153',
  },
  {
    project: 'Invoicely',
    number: 56,
    title: 'Fix the wrong default status in the invoice status modal',
    href: 'https://github.com/legions-developer/invoicely/pull/56',
  },
  {
    project: 'Invoicely',
    number: 50,
    title: 'Fix unreadable optional-badge text in light mode',
    href: 'https://github.com/legions-developer/invoicely/pull/50',
  },
]
