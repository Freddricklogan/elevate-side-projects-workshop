/* Site configuration. Edit these values; no other file needs to change. */
/* Edit this file to update a session. Nothing else in the site needs to change. */
window.PW_CONFIG = {
  // One entry per session, Chicago time (America/Chicago), 24-hour clock.
  // The site shows the next session that has not ended yet; ended sessions move to "Past sessions" on the home page.
  // To schedule the next session, add an entry here.
  sessions: [
    { date: "2026-11-19", start: "12:45", end: "13:45", room: "Hermann Hall 010", doors: "12:30" }
  ],
  // Legacy single-event fields: filled in at load time from the next session by assets/site.js. Leave blank.
  eventDate: "", eventTime: "", eventRoom: "",
  checkinUrl: "https://312.iit.edu/career/events/",      // 312 self check-in link for this event (replace with the event's cglink.me link; regenerate assets/checkin-qr.png)
  bookingUrl: "https://bookings.cloud.microsoft/bookwithme/user/1503544b91244ca495f66b5e1d2386fe%40illinoistech.edu?anonymous&ismsaljsauthenabled",
  staffEmail: "flogan1@illinoistech.edu",
  teamsUrl: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MjVmZjRiMWYtYWYwNy00ZTY2LWFmNjgtYjllYjY0N2MwOWZl%40thread.v2/0?context=%7b%22Tid%22%3a%22da90653e-1e02-4208-b68a-6224891bea63%22%2c%22Oid%22%3a%220f29cbfa-8df0-4585-acf3-7cee326216b7%22%7d",
  /* Microsoft Forms: Side Projects Live Poll (anyone can respond, no sign-in). Present mode in Forms shows live charts. Leave blank for show-of-hands tally mode. */
  pollUrl: "",
  /* Microsoft Forms: Side Projects: Questions and Feedback (anyone can respond, no sign-in). */
  qaUrl: "",
  /* Exit survey link from Career Services. When set, an "Open the exit survey" button appears on the exit-questions slide. */
  exitUrl: "",
  /* Optional: Forms "Embed" code URLs (Collect responses > Embed) to show the form inside the page instead of a button. */
  pollEmbedUrl: "",
  qaEmbedUrl: "",
  formEmbedUrl: ""
};
