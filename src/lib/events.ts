export interface EventItem {
  id: string;
  title: string;
  description: string;
  dateISO: string;
  location?: string;
  registrationUrl?: string;

  // ✅ ADD THESE (required for filters)
  status: "upcoming" | "past";
  type: "Workshop" | "Seminar" | "Webinar";
}

export const events: EventItem[] = [
  {
    id: "evt-1",
    title: "Upcoming Workshop",
    description: "A hands-on event about innovations.",
    dateISO: "2025-12-15T10:00:00.000Z",
    location: "Seminar Hall",
    registrationUrl: "/events/register/evt-1",

    // ✅ ADD THESE
    status: "upcoming",
    type: "Workshop",
  },
];
