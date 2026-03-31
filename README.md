# IronRidge Operations Visibility Dashboard

## Overview

IronRidge Operations Visibility Dashboard shows how IronRidge Contractors could give leadership a faster, cleaner view of project health, service backlog, closeout drag, and emerging operational risk without waiting for manual spreadsheet rollups.

## Business Problem

Operational reporting at IronRidge is fragmented across PM trackers, service logs, recurring meetings, email threads, and verbal updates. Leadership can usually piece together the story, but not quickly enough to intervene early when risk, backlog, or closeout drag begins to build.

## Solution Concept

This repo models a lightweight visibility layer that combines raw operational records into curated summary datasets and a static executive-facing dashboard mock. The focus is practical reporting structure, believable operating signals, and business-readable metrics.

## Ecosystem Context

This repo is the executive reporting layer within the broader IronRidge demo ecosystem. It depends conceptually on the same projects, employees, field issues, and operational workflows represented in the other three repositories. `workflow-drag-reduction-demo` shows how support requests enter the system, `execution-infrastructure-demo` shows how commitments are tracked after review, and `contractor-ops-system-demo` shows the field-level issue and closeout detail that feeds leadership visibility.

## Repository Structure

- `docs/` overview, business context, architecture, KPI definitions, diagrams, and ecosystem framing
- `data/raw/` employees, projects, service tickets, field issues, closeout items, and action items
- `data/curated/` dashboard-ready project, service, risk, and closeout summaries
- `data/sample_exports/` executive KPI export examples
- `src/dashboard-mock/` static dashboard mock for walkthroughs and screenshots
- `assets/` shared visual assets including the IronRidge wordmark
- `notes/` roadmap and screenshot planning

## Data And Sample Assets

The raw layer includes connected operational records grounded in the same IronRidge company context used across the ecosystem. Curated outputs focus on project health, service demand, issue exposure, and closeout readiness so the repo can be discussed as a reporting skeleton rather than a software build.

## Mock Experience / Screenshots

The mock dashboard is designed to be the strongest public-facing screen in the ecosystem. It emphasizes KPI hierarchy, project health, regional service pressure, risk visibility, and closeout warnings in a dark neutral internal-tooling style that is suitable for portfolio screenshots.

## Future Enhancements

- connect curated CSVs to lightweight client-side filters
- add weekly trend movement for risk, backlog, and closeout aging
- introduce division and leader views using the same curated layer
- expand KPI documentation with source and refresh logic

## Fictional Demo Notice

This repository is part of a fictional demonstration environment built around IronRidge Contractors, a sample contractor-focused operating company created to showcase reporting, workflow, execution, and operations system design. Names, data, and scenarios are illustrative, but the business patterns reflect real-world operational needs.