import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./styles/avatar-fix.css";

import React, { useEffect, useState } from "react";
import { events } from "@/lib/events";
import EventModal from "@/components/EventModal";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import Forums from "./pages/Forums";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import Events from "./pages/Events";

// Dashboards
import MemberDashboard from "./pages/dashboard/MemberDashboard";
import FacultyDashboard from "./pages/dashboard/FacultyDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AlumniDashboard from "./pages/dashboard/AlumniDashboard";

/* 
   EVENT POPUP AFTER LOGIN
*/
function EventPopupOnLogin() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [mainEvent, setMainEvent] = useState(events[0] ?? null);

  useEffect(() => {
    if (!user || user.role === "admin") {
      setOpen(false);
      return;
    }
    setMainEvent(events[0] ?? null);
    setOpen(true);
  }, [user]);

  if (!user || user.role === "admin") return null;

  return (
    <EventModal
      event={mainEvent}
      open={open}
      onOpenChange={setOpen}
      canRegister={!!user}
    />
  );
}

/* 
   PROTECTED ROUTE
 */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

/*
   DASHBOARD ROUTER
*/
function DashboardRouter() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "admin":
      return <AdminDashboard />;
    case "faculty":
      return <FacultyDashboard />;
    case "alumni":
      return <AlumniDashboard />;
    default:
      return <MemberDashboard />;
  }
}

/* 
   APP ROUTES
 */
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <EventPopupOnLogin />
    </>
  );
}

/* 
   MAIN APP COMPONENT
 */
export default function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRoutes />
    </TooltipProvider>
  );
}
