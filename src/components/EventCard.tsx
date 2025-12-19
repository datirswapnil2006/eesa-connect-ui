import React from "react";
import { EventItem } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Props = {
  event: EventItem;
  canRegister: boolean;
  onRegister: () => void;
  onView?: () => void; // 🔑 optional
};

export default function EventCard({
  event,
  canRegister,
  onRegister,
  onView,
}: Props) {
  const date = new Date(event.dateISO);

  return (
    <div className="p-4 rounded-lg shadow-sm bg-card flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{event.title}</h3>

        <p className="text-sm text-muted-foreground mt-1">
          {event.location ?? ""} • {format(date, "PPP p")}
        </p>

        <p className="mt-2 text-sm">{event.description}</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        {/* ✅ View button ONLY if onView exists */}
        {onView && (
          <Button variant="outline" onClick={onView}>
            View
          </Button>
        )}

        <Button
          onClick={onRegister}
          disabled={!canRegister}
          title={!canRegister ? "Login required" : "Register"}
        >
          {canRegister ? "Register" : "Login to Register"}
        </Button>
      </div>
    </div>
  );
}
