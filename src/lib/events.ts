export interface EventItem {
  id: string;
  title: string;
  description: string;
  dateISO: string;
  location?: string;
  registrationUrl?: string;

  // 🔹 Required for filters
  status: "upcoming" | "past";
  type: "Workshop" | "Seminar" | "Webinar";
}

export const events: EventItem[] = [
  {
    id: "evt-1",
    title: "Upcoming Workshop",
    description: "A hands-on workshop on latest electronics innovations.",
    dateISO: "2025-12-15T10:00:00.000Z",
    location: "Seminar Hall",
    registrationUrl: "/events/register/evt-1",
    status: "upcoming",
    type: "Workshop",
  },
  {
    id: "evt-2",
    title: "Industry Seminar",
    description: "Expert talk on industry trends and career guidance.",
    dateISO: "2025-11-20T14:00:00.000Z",
    location: "Auditorium",
    registrationUrl: "/events/register/evt-2",
    status: "upcoming",
    type: "Seminar",
  },
  {
    id: "evt-3",
    title: "Webinar on Embedded Systems",
    description: "Online webinar covering embedded system basics.",
    dateISO: "2025-09-10T18:00:00.000Z",
    location: "Online",
    registrationUrl: "/events/register/evt-3",
    status: "past",
    type: "Webinar",
  },
];
