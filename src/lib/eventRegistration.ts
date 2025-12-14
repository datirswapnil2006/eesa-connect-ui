export function getRegistrations(userId: string): string[] {
  const data = JSON.parse(localStorage.getItem("event_registrations") || "{}");
  return data[userId] || [];
}

export function registerForEvent(userId: string, eventId: string) {
  const data = JSON.parse(localStorage.getItem("event_registrations") || "{}");
  const userEvents = data[userId] || [];

  if (!userEvents.includes(eventId)) {
    data[userId] = [...userEvents, eventId];
    localStorage.setItem("event_registrations", JSON.stringify(data));
  }
}
