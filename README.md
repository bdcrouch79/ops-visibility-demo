# IronRidge Operations Visibility Dashboard

## Overview

This repo shows what operational reporting can look like when leadership no longer has to piece the story together from spreadsheets, meetings, and inboxes.

The IronRidge Operations Visibility Dashboard is a fictional demo built around a contractor-focused business environment. It brings project health, service backlog, closeout pressure, and operational risk into one clean view so leaders can see what needs attention without waiting on a manual rollup.

## Business Problem

At IronRidge, reporting is not broken because people do not care. It is broken because growth creates drag.

Project updates live in PM trackers. Service work gets managed differently across teams. Closeout issues often surface late. Risk builds quietly until someone notices it in a meeting or starts chasing it directly. Leadership can usually get the answers they need, but it takes too much effort and often happens later than it should.

## Solution Concept

This repo models a lightweight reporting layer built for operational clarity.

It combines connected sample data across projects, service activity, field issues, closeout items, and action tracking into a dashboard-ready structure that is easy to review and easy to discuss. The goal is not to show a complicated software build. The goal is to show what better visibility looks like.

## Ecosystem Context

This repo is the top-level reporting view inside the broader IronRidge demo ecosystem.

The other repos show the operating activity behind the numbers:
- `workflow-drag-reduction-demo` shows how requests move through intake, routing, and approval
- `execution-infrastructure-demo` shows how commitments, blockers, and follow-through are tracked
- `contractor-ops-system-demo` shows the field and closeout activity that feeds leadership visibility

Together, they form one connected contractor environment instead of four unrelated demos.

## Repository Structure

- `docs/` contains the business framing, architecture notes, KPI definitions, and ecosystem context
- `data/raw/` contains fictional but connected operational records
- `data/curated/` contains summary tables shaped for reporting
- `data/sample_exports/` contains simple KPI export examples
- `src/dashboard-mock/` contains the static dashboard mock used for walkthroughs and screenshots
- `assets/` contains shared IronRidge visual assets
- `notes/` contains roadmap and screenshot planning notes

## Data and Sample Assets

The data in this repo is fictional, but it is shaped to feel like a real operating environment. Projects, users, issues, service records, and closeout items are all tied to the same IronRidge context used across the rest of the portfolio.

The curated layer is where the reporting story comes together. It gives leadership-level visibility into project condition, service pressure, issue exposure, and closeout readiness without requiring a heavy application stack.

## Mock Experience / Screenshots

The mock dashboard is meant to be the clearest visual artifact in the IronRidge ecosystem.

It is designed to feel like an internal leadership tool: practical, readable, and focused on what matters most. The page is intentionally lightweight so it can be used quickly for screenshots, walkthroughs, and portfolio conversations.

## Future Enhancements

- connect curated CSVs to lightweight client-side filtering
- add trend views for backlog, closeout pressure, and risk movement
- introduce division-specific and leadership-specific views
- expand KPI documentation with source logic and refresh assumptions

## Fictional Demo Notice

This repository is part of a fictional demonstration environment built around IronRidge Contractors, a sample contractor-focused operating company created to showcase reporting, workflow, execution, and operations system design. Names, data, and scenarios are illustrative, but the business patterns reflect real-world operational needs.