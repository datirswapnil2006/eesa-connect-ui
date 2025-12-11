export interface EventItem {
  id: string;
  title: string;
  description: string;
  dateISO: string;
  location?: string;
  registrationUrl?: string;
}

export const events: EventItem[] = [
  {
    id: "evt-1",
    title: "Upcoming Workshop",
    description: "A hands-on event about innovations.",
    dateISO: "2026-01-22T10:00:00.000Z",
    location: "Seminar Hall",
    registrationUrl: "/events/register/evt-1",
  },
];
