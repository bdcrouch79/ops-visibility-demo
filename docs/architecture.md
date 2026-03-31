# Architecture

## Reporting Structure

1. Raw operational datasets capture project, service, issue, closeout, and action detail.
2. Curated summary datasets shape that detail into reporting-friendly views.
3. A lightweight dashboard mock shows how the same information could be presented for leadership review without extra noise.

## Ecosystem Relationship

The structures in this repo align with the rest of the IronRidge environment.

Support requests from the workflow repo, follow-through data from the execution repo, and issue and closeout activity from the field operations repo all fit naturally into this reporting layer.

## Practical Design Choice

This architecture is intentionally simple.

The value here is the reporting model, not stack theatrics. The goal is clear structure, believable signals, and a dashboard shape that would make sense inside a real contractor environment.
