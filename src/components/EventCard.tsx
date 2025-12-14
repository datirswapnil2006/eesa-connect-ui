import { EventItem } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Props = {
  event: EventItem;
  onView: () => void;
  onRegister: () => void;
  canRegister: boolean;
};

export default function EventCard({
  event,
  onView,
  onRegister,
  canRegister,
}: Props) {
  const date = new Date(event.dateISO);

  return (
    <div className="p-5 rounded-lg bg-card shadow">
      <h3 className="text-lg font-semibold">{event.title}</h3>

      <p className="text-sm text-muted-foreground mt-1">
        {event.location} • {format(date, "PPP p")}
      </p>

      <p className="mt-3 text-sm">{event.description}</p>

      <div className="mt-5 flex justify-between">
        <Button variant="outline" onClick={onView}>
          View
        </Button>

        <Button onClick={onRegister} disabled={!canRegister}>
          {canRegister ? "Register" : "Login to Register"}
        </Button>
      </div>
    </div>
  );
}
