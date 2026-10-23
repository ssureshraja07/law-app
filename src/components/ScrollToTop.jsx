import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Refresh pannina browser pazhaya scroll position restore pannum, adha off pannitom.
// Appo page epovum top la irundhu start aagum, reveal animations correct ah run aagum.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // "instant" => CSS smooth-scroll irundhaalum page maarumbodhu thaavi pogaama direct ah top ku pogum
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}