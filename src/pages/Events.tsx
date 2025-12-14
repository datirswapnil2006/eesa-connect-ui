import { useState } from "react";
import { events, EventItem } from "@/lib/events";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Events() {
  const { user } = useAuth();

  const [statusFilter, setStatusFilter] =
    useState<"upcoming" | "past">("upcoming");

  const [typeFilter, setTypeFilter] =
    useState<"all" | "Workshop" | "Seminar" | "Webinar">("all");

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [open, setOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    if (statusFilter === "upcoming" && event.status === "past") return false;
    if (statusFilter === "past" && event.status !== "past") return false;
    if (typeFilter !== "all" && event.type !== typeFilter) return false;
    return true;
  });

  return (
    <>
      <Navbar />

      {/* 🔥 FIX: heading cutting issue */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="text-3xl font-bold mb-6">Events</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={statusFilter === "upcoming" ? "default" : "outline"}
            onClick={() => setStatusFilter("upcoming")}
          >
            Upcoming / Live
          </Button>

          <Button
            variant={statusFilter === "past" ? "default" : "outline"}
            onClick={() => setStatusFilter("past")}
          >
            Past Events
          </Button>

          <select
            className="border rounded px-3 py-2"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as any)}
          >
            <option value="all">All Types</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Webinar">Webinar</option>
          </select>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              canRegister={!!user}
              onView={() => {
                setSelectedEvent(event);
                setOpen(true);
              }}
              onRegister={() => {
                alert(`Registered for ${event.title}`);
              }}
            />
          ))}
        </div>
      </div>

      {/* ✅ View Popup */}
      <EventModal
        event={selectedEvent}
        open={open}
        onOpenChange={setOpen}
        canRegister={!!user}
      />

      <Footer />
    </>
  );
}
