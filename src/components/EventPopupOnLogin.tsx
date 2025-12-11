import React, { useEffect, useState } from "react";
import { useLoggedInUser } from "@/context/AuthContext"; 
import { getUpcomingEvent } from "@/lib/events";
import EventModal from "./EventModal";

export default function EventPopupOnLogin() {
  const { user } = useLoggedInUser(); // checks login user from your auth context
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (user) {
      const upcoming = getUpcomingEvent();
      if (upcoming) {
        setEvent(upcoming);
        setOpen(true);      // show popup when logged-in
      }
    }
  }, [user]);

  if (!event) return null;

  return (
    <EventModal
      event={event}
      open={open}
      onOpenChange={setOpen}
      canRegister={!!user}
    />
  );
}
