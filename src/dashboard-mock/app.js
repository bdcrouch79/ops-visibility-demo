const kpis = [
  { label: "Active Projects", value: "6", note: "Current delivery and program work needing weekly visibility." },
  { label: "Projects At Risk", value: "1", note: "Riverside remains the clearest escalation case." },
  { label: "Open Field Issues", value: "23", note: "Most of the exposure is sitting inside watch-status work." },
  { label: "Closeout Overdue", value: "6", note: "Glenpark and Brookstone are driving most of the turnover drag." },
  { label: "Tickets Over 7 Days", value: "8", note: "Backlog pressure is concentrated in Indianapolis and Central Indiana." },
  { label: "Overdue Actions", value: "7", note: "Follow-through risk is still visible across reporting and closeout work." }
];

const projects = [
  ["Northgate Medical Office Renovation", "General Contracting", "Active", "58%", "Watch", "On track with coordination items open"],
  ["Summit Logistics Tenant Buildout", "General Contracting", "Active", "71%", "Healthy", "Startup sequencing still needs review"],
  ["Riverside Schools Facility Upgrade", "Special Projects", "Active", "34%", "At Risk", "Safety and material risk still elevated"],
  ["Glenpark Retail Interior Refresh", "Special Projects", "Closeout", "96%", "Watch", "Closeout package is slipping"],
  ["Brookstone Office Suite Modernization", "Field Services", "Closeout", "93%", "Healthy", "Turnover pressure building"],
  ["IronRidge HQ Operations Refresh", "Operations Support", "Active", "47%", "Watch", "Internal coordination needed"],
];

const serviceSummary = [
  { title: "Indianapolis", meta: "8 open tickets | 3 in progress | 2 breached SLA" },
  { title: "Central Indiana", meta: "3 open tickets | startup-related backlog | 3 breached SLA" },
  { title: "Northern Kentucky", meta: "6 open tickets | 2 in progress | 1 closed this week" }
];

const riskSummary = [
  { title: "Healthy", meta: "3 projects | 9 open issues", tone: "healthy" },
  { title: "Watch", meta: "4 projects | 14 open issues", tone: "watch" },
  { title: "At Risk", meta: "1 project | 1 critical issue", tone: "risk" }
];

const closeoutWarnings = [
  { title: "Glenpark Retail Interior Refresh", meta: "4 open closeout items | 3 overdue | owner training still unresolved" },
  { title: "Brookstone Office Suite Modernization", meta: "4 open closeout items | training signoff overdue | vendor dependency still open" },
  { title: "Northgate Medical Office Renovation", meta: "3 planned closeout items | nothing overdue yet" }
];

document.getElementById("kpi-cards").innerHTML = kpis.map((item) => `
  <article class="card">
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

renderStack("service-summary", serviceSummary);
renderStack("risk-summary", riskSummary, true);
renderStack("closeout-summary", closeoutWarnings);
