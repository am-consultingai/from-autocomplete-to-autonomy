/**
 * Types for the "From Autocomplete to Autonomy" landing page.
 */

export interface LadderRung {
  index: number;
  label: string;
  teaser: string;
  locked: boolean;
}

export interface TakeawayItem {
  id: string;
  title: string;
  description: string;
}

export interface ThesisItem {
  id: string;
  quote: string;
  subtext: string;
}
