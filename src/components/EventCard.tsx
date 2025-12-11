// src/components/EventCard.tsx
import React from "react";
import { EventItem } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Props = {
  event: EventItem;
  onRegister: (event: EventItem) => void;
  canRegister: boolean;
};

export default function EventCard({ event, onRegister, canRegister }: Props) {
  const date = new Date(event.dateISO);
  return (
    <div className="p-4 rounded-lg shadow-sm bg-card">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{event.location ?? ""} • {format(date, "PPP p")}</p>
      <p className="mt-2 text-sm">{event.description}</p>

      <div className="mt-4 flex items-center justify-end">
        <Button
          onClick={() => onRegister(event)}
          className="ml-2"
          disabled={!canRegister}
          title={!canRegister ? "Please login to register" : "Register for this event"}
        >
          {canRegister ? "Register" : "Login to Register"}
        </Button>
      </div>
    </div>
  );
}
