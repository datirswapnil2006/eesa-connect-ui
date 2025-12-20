import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { events } from "@/lib/events";
import EventModal from "./EventModal";
import type { EventItem } from "@/lib/events";

export default function EventPopupOnLogin() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    if (!user) return;

    
    if (events.length > 0) {
      setEvent(events[0]);
      setOpen(true);
    }
  }, [user]);

  if (!event) return null;

  return (
    <EventModal
      event={event}
      open={open}
      onOpenChange={setOpen}
      canRegister={true}
    />
  );
}
