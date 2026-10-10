# CloudNotes Production Readiness Evidence Index

This document establishes traceable proof connecting each production readiness claim to empirical course artifacts, execution logs, and configuration manifests.

---

## Evidence Inventory

### Artifact E01: High Availability & Failover Execution Logs
* **Path / Link:** [`../5.8_High Availability and Failover Testing/failover.log`](file:///c:/Kalvium/Cloud%20Computing/Module-5/5.8_High%20Availability%20and%20Failover%20Testing/failover.log)
* **Title:** Automated HA & Failover Drill Benchmark
* **Capture Date:** October 10, 2026
* **Environment:** Local Simulated Microservices / Proxy Failover Testbed
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Upon primary node termination, proxy detects failure and redirects requests to secondary replica with zero unhandled 500 errors and recovery time under 10 seconds.
* **Observed Result:** Primary service killed at t=3.2s. Reverse proxy rerouted incoming requests to standby replica at t=3.8s. All subsequent HTTP requests returned `200 OK`. Measured RTO: 600ms.
* **Limits:** Verified local proxy failover; does not prove regional multi-cloud DNS failover or database multi-region replication.
* **Checks Supported:** `R1`, `R2`, `D3`

---

### Artifact E02: Containerization & Kubernetes Resource Manifests
* **Path / Link:** [`../Module-4/4.3_Deploy CloudNotes on GKE Cluster/k8s/deployment.yaml`](file:///c:/Kalvium/Cloud%20Computing/Module-4/4.3_Deploy%20CloudNotes%20on%20GKE%20Cluster/k8s/deployment.yaml)
* **Title:** Kubernetes Deployment & Pod Security Specifications
* **Capture Date:** October 2, 2026
* **Environment:** Local Minikube / Kubernetes Cluster Manifests
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Deployment manifest includes non-root security context, explicit CPU/Memory requests/limits, Liveness/Readiness probes, and RollingUpdate strategy.
* **Observed Result:** `readinessProbe` (HTTP GET /health, initialDelay 5s), `livenessProbe` (HTTP GET /health, period 10s), CPU request `100m`, Memory limit `256Mi`, `runAsNonRoot: true`, `runAsUser: 10001`.
* **Limits:** Proves static configuration compliance; requires active cluster runtime monitoring for load behavior.
* **Checks Supported:** `R2`, `R3`, `R4`, `O3`, `S1`, `S2`, `C2`

---

### Artifact E03: Observability & Monitoring Dashboard Configuration
* **Path / Link:** [`../Module-4/4.9_CloudNotes CICD with Cloud Build/app.py`](file:///c:/Kalvium/Cloud%20Computing/Module-4/4.9_CloudNotes%20CICD%20with%20Cloud%20Build/app.py)
* **Title:** Application Health Probes, Structured Logging & Metrics Instrumentation
* **Capture Date:** October 5, 2026
* **Environment:** Python/Flask Application Runtime Instrumentation
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Application exposes `/health` and `/metrics` endpoints, emits JSON structured logs without sensitive authorization headers, and defines alert hooks.
* **Observed Result:** Flask endpoints return JSON health status (`{"status": "healthy"}`) and Prometheus metrics. Structured JSON logger sanitizes authorization headers and query tokens.
* **Limits:** Tested in local runtime; alerting relies on external Prometheus Alertmanager routing.
* **Checks Supported:** `O1`, `O2`, `O3`, `O4`

---

### Artifact E04: Security Hardening & Audit Report
* **Path / Link:** [`../5.6_Cloud Security Hardening and Auditing/cloud-security-audit-123456.pdf`](file:///c:/Kalvium/Cloud%20Computing/Module-5/5.6_Cloud%20Security%20Hardening%20and%20Auditing/cloud-security-audit-123456.pdf)
* **Title:** Container Image & Dependency Security Audit Report
* **Capture Date:** October 8, 2026
* **Environment:** Trivy & Dependency Vulnerability Scanner
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Container image scan confirms 0 Critical and 0 High severity vulnerabilities; secret scanner detects 0 committed credentials.
* **Observed Result:** Trivy scan output clean (0 Critical, 0 High vulnerabilities in base alpine image). Gitleaks confirmed zero API keys or passwords in commit history.
* **Limits:** Security audit reflects static image scan at build time; dynamic runtime penetration testing is pending.
* **Checks Supported:** `S1`, `S2`, `S3`, `S4`

---

### Artifact E05: Database Backup Script & Disaster Recovery Playbook
* **Path / Link:** [`../Module-3/CloudNotes Containerized Automated Deployment/build.sh`](file:///c:/Kalvium/Cloud%20Computing/Module-3/CloudNotes%20Containerized%20Automated%20Deployment/build.sh)
* **Title:** Automated Database Backup Command & Recovery Procedure
* **Capture Date:** September 29, 2026
* **Environment:** Containerized Backup Daemon Script
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Backup script periodically dumps SQLite/Postgres state to persistent mounted volume.
* **Observed Result:** Script executes `sqlite3 cloudnotes.db ".backup 'backups/backup.db'"` correctly generating timestamped backup snapshots.
* **Limits:** **CRITICAL LIMITATION:** Script creates backup files, but NO execution log exists demonstrating isolated database restoration or application data integrity verification.
* **Checks Supported:** `D1`, `D3`, `D4`

---

### Artifact E06: Cloud Cost Optimization Analysis
* **Path / Link:** [`../Module-5/Cloud Cost Optimization Assignment/cost_report.json`](file:///c:/Kalvium/Cloud%20Computing/Module-5/5.11_CloudNotes%20Production%20Readiness%20Assessment/cost_report.json)
* **Title:** Cloud Cost Estimation & Rightsizing Model
* **Capture Date:** October 10, 2026
* **Environment:** Multi-Cloud Cost Modeling Worksheet
* **Source Commit / Version:** `61c19cd1eb445ddefd7040d418b2395d18d1a8a8`
* **Expected Result:** Standardized monthly cloud spending breakdown across compute, storage, and egress with rightsizing recommendations.
* **Observed Result:** Compute container rightsizing reduces monthly estimate from \$140 to \$98 (~28% reduction). Spending alerts configured at \$100 monthly budget limit.
* **Limits:** Estimates based on published provider pricing rates; not an actual billing invoice.
* **Checks Supported:** `C1`, `C2`, `C3`, `C4`

---

## Critical Gap Register

| Gap ID | Check | Impacted Area | Severity | Description | Action Owner | Target Closure Date | Closure / Retest Condition |
| :--- | :---: | :--- | :---: | :--- | :--- | :--- | :--- |
| **GAP-D2** | `D2` | Disaster Recovery | **CRITICAL (BLOCKER)** | **Unverified Restore Integrity:** Backup files exist, but no isolated restore drill has been performed to prove data can be recovered without corruption. | Lead DBA / SRE | October 17, 2026 | Execute isolated database restore drill in sandbox environment, run data integrity check (`SELECT count(*) FROM notes`), and verify application startup. |
