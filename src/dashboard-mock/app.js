const kpis = [
  { label: "Projects At Risk", value: "1", note: "Riverside remains the one issue leadership cannot normalize away." },
  { label: "Closeout Risk", value: "2", note: "Glenpark is the clearest turnover pressure point." },
  { label: "Service Pressure", value: "1", note: "Cedar Hill is still carrying route instability." },
  { label: "Open Field Issues", value: "23", note: "Field conditions are still feeding real reporting pressure." }
];

const projects = [
  ["Riverside Schools Facility Upgrade", "Special Projects", "Active", "34%", "At Risk", "Egress conflict remains unresolved"],
  ["Glenpark Retail Interior Refresh", "Special Projects", "Closeout Risk", "96%", "Watch", "Startup sheets and attic stock are still missing"],
  ["Cedar Hill Service Response Program", "Field Services", "Service Pressure", "64%", "Watch", "Routing instability is still affecting response quality"],
  ["Northgate Medical Office Renovation", "General Contracting", "Active", "58%", "Watch", "On track with coordination items open"]
];

const serviceSummary = [
  { title: "Northern Kentucky", meta: "Cedar Hill route strain is still causing uneven response times and handoff quality." },
  { title: "Indianapolis", meta: "Backlog is present, but it is not the main story this week." }
];

const riskSummary = [
  { title: "At Risk", meta: "Riverside | egress conflict still unresolved", tone: "risk" },
  { title: "Watch", meta: "Glenpark and Cedar Hill are both still adding operating pressure", tone: "watch" },
  { title: "Contained", meta: "The rest of the portfolio is still manageable", tone: "healthy" }
];

const leadershipNotes = [
  {
    title: "Riverside remains unresolved",
    copy: "Riverside egress conflict (REQ-617 \u2192 AI-502 \u2192 FI-305) remains unresolved"
  },
  {
    title: "Glenpark is now a closeout risk",
    copy: "Missing startup sheets and attic stock are still holding the turnover package open."
  },
  {
    title: "Cedar Hill is the service-pressure story",
    copy: "Routing instability is still showing up in response quality, but it remains localized enough to manage."
  }
];

const closeoutWarnings = [
  { title: "Glenpark Retail Interior Refresh", meta: "Startup sheets and attic stock are still unresolved and keeping closeout exposed." },
  { title: "Brookstone Office Suite Modernization", meta: "Pressure is building, but it is still secondary to Glenpark." }
];

document.getElementById("kpi-cards").innerHTML = kpis.map((item) => `
  <article class="summary-card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

document.getElementById("project-rows").innerHTML = projects.map(([name, division, status, progress, risk, readiness]) => `
  <tr>
    <td>${name}</td>
    <td>${division}</td>
    <td>${status}</td>
    <td>${progress}</td>
    <td><span class="badge ${risk === "Healthy" ? "healthy" : risk === "Watch" ? "watch" : "risk"}">${risk}</span></td>
    <td>${readiness}</td>
  </tr>
`).join("");

function renderStack(id, rows, tagged = false) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <div class="stack-item">
      <div class="stack-title">${tagged ? `<span class="badge ${row.tone}">${row.title}</span>` : row.title}</div>
      <div class="stack-meta">${row.meta}</div>
    </div>
  `).join("");
}

document.getElementById("leadership-notes").innerHTML = leadershipNotes.map((item) => `
  <article class="note-item">
    <div class="note-title">${item.title}</div>
    <div class="note-copy">${item.copy}</div>
  </article>
`).join("");

renderStack("service-summary", serviceSummary);
renderStack("risk-summary", riskSummary, true);
renderStack("closeout-summary", closeoutWarnings);
