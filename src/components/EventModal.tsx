// src/components/EventModal.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { EventItem } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

type Props = {
  event: EventItem | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  canRegister: boolean;
};

export default function EventModal({ event, open, onOpenChange, canRegister }: Props) {
  const navigate = useNavigate();
  if (!event) return null;

  const handleRegister = () => {
    // If you have external registration URL, use it; otherwise navigate to internal route
    if (!canRegister) {
      navigate("/login");
      onOpenChange(false);
      return;
    }
    if (event.registrationUrl) {
      navigate(event.registrationUrl);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{event.title}</DialogTitle>
            <DialogDescription className="mt-2">
              <div className="text-sm">
                <strong>Date:</strong> {format(new Date(event.dateISO), "PPP p")}
                <br />
                {event.location ? <><strong>Location:</strong> {event.location}<br/></> : null}
                <div className="mt-2">{event.description}</div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="ghost">Close</Button>
            </DialogClose>

            <Button onClick={handleRegister} disabled={!canRegister}>
              {canRegister ? "Register Now" : "Login to Register"}
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
