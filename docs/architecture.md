# Architecture

## Reporting Structure

1. Raw operational datasets capture project, service, issue, closeout, and action detail.
2. Curated summary datasets translate that detail into dashboard-ready operational views.
3. The static mock demonstrates how an executive-facing reporting screen could present the same information clearly.

## Ecosystem Relationship

The data shapes used here align with the broader IronRidge demo environment. Request activity from the workflow repo, accountability tracking from the execution repo, and issue detail from the field operations repo all fit naturally into this reporting layer.

## Practical Design Choice

This architecture stays intentionally lightweight. The portfolio value comes from clarity of structure, believable metrics, and consistent operating language rather than from a heavy application stack.