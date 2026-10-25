# CREWAL — Autonomous Agentic AI Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CrewAI](https://img.shields.io/badge/CrewAI-Agentic%20Patterns-orange)](https://crewai.com)
[![Pydantic v2](https://img.shields.io/badge/Pydantic-v2-E92063.svg?logo=pydantic&logoColor=white)](https://docs.pydantic.dev/)

**CREWAL** is an enterprise-grade **Agentic AI platform** built on **FastAPI** that bridges autonomous multi-agent reasoning with high-throughput REST APIs. It consolidates **10 specialized AI agents** into a unified, modular backend service capable of executing complex real-world workflows.

---

## 📑 Table of Contents
1. [What is this Project?](#-what-is-this-project)
2. [Core Agentic Architecture & Patterns](#-core-agentic-architecture--patterns)
3. [The 10 Autonomous Agents](#-the-10-autonomous-agents)
4. [Local Setup & Running](#-local-setup--running)
5. [Testing & Verification](#-testing--verification)
6. [Project Structure](#-project-structure)

---

## 💡 What is this Project?

Most AI implementations rely on single-prompt completions that struggle with multi-step reasoning, fact-checking, and structured business logic. **CREWAL** solves this by implementing **Agentic AI**—systems where specialized autonomous agents collaborate, cross-verify information, route events, and enforce deterministic data schemas.

### Key Objectives:
* **Productionizing Multi-Agent Workflows:** Translates experimental notebook scripts into an asynchronous, production-ready FastAPI microservice.
* **10 Dedicated Specialized Endpoints:** Every agent operates as an isolated API route (`/api/agent-1` to `/api/agent-10` with short aliases `/agent1` to `/agent10`).
* **Strict Schema Enforcement:** Every request and response is validated via **Pydantic v2**, preventing hallucinations and guaranteeing uniform JSON contracts.
* **Resilient Dual-Mode Execution:** Leverages Google Gemini (`google-genai`) for real-time generative reasoning, backed by deterministic fallback handlers that guarantee 100% API availability even under network or quota constraints.
* **Full-Fledged Interactive Web Application:** Visiting `http://localhost:8000/` or any `/agent1` to `/agent10` in a web browser serves a modern visual dashboard rendering formatted agent outputs, interactive parameters, preset test scenarios, and SWOT/KPI metrics.
* **Dual-Mode Content Negotiation:** Returns rich interactive HTML for web browsers and clean structured JSON for automated API clients or when requested via `format=json`.
* **Interactive Dashboard & Docs:** Serves the visual web application at `/` and `/agent1`-`/agent10`, plus OpenAPI Swagger docs at `/docs`.

---

## 🧠 Core Agentic Architecture & Patterns

The platform demonstrates the 5 foundational design patterns of modern Agentic AI:

```
                                  ┌─────────────────────────────┐
                                  │      FastAPI Gateway        │
                                  │  (Pydantic v2 + CORS + Docs)│
                                  └──────────────┬──────────────┘
                                                 │
          ┌──────────────────┬───────────────────┼───────────────────┬──────────────────┐
          │                  │                   │                   │                  │
    ┌─────▼──────┐     ┌─────▼──────┐      ┌─────▼──────┐      ┌─────▼──────┐     ┌─────▼──────┐
    │  Agent 1   │     │  Agent 2   │      │  Agent 3   │      │  Agent 4   │     │  Agent 5   │
    │  Blog Crew │     │ Competitor │      │  Meeting   │      │Data Report │     │  Support   │
    │(Sequential)│     │(Hierarch.) │      │ (Parallel) │      │(Structured)│     │  (Router)  │
    └────────────┘     └────────────┘      └────────────┘      └────────────┘     └────────────┘
          │                  │                   │                   │                  │
    ┌─────▼──────┐     ┌─────▼──────┐      ┌─────▼──────┐      ┌─────▼──────┐     ┌─────▼──────┐
    │  Agent 6   │     │  Agent 7   │      │  Agent 8   │      │  Agent 9   │     │  Agent 10  │
    │   Resume   │     │ Bug Triage │      │ Repurposing│      │ Lead Qual. │     │  Approval  │
    │  Screening │     │   Special. │      │  (3-Way)   │      │  (B2B CRM) │     │ (Feedback) │
    └────────────┘     └────────────┘      └────────────┘      └────────────┘     └────────────┘
```

1. **Sequential Chaining (Agent 1):** Multi-stage linear pipeline where the output of a research specialist feeds into a content writer, followed by an editorial fact-checking agent.
2. **Hierarchical Orchestration (Agent 2):** Manager agent decomposes a high-level competitive analysis objective and delegates sub-tasks to specialized scraping, pricing, and strategic analysts.
3. **Parallel Fan-Out / Fan-In (Agents 3 & 8):** Distributes a raw transcript or article across independent worker agents simultaneously, synthesizing the results into structured takeaways.
4. **Deterministic Structured Verification (Agent 4):** Employs schema-enforced metrics calculations to audit text assertions against source numerical records.
5. **Dynamic Event Routing (Agents 5, 6, 7, 9, 10):** Evaluates incoming payload semantics to trigger specialized handling logic (priority escalation, resume shortlisting, defect triage, lead scoring, and human feedback loops).

---

## 🤖 The 10 Autonomous Agents

### Agent 1: Blog Post Generator Crew
* **Pattern:** Sequential Pipeline (Research Analyst $\rightarrow$ Content Writer $\rightarrow$ Content Editor)
* **Route:** `POST /api/agent-1` *(Alias: `POST /agent1`)*
* **Functionality:** Accepts a technical topic, conducts factual investigation, drafts an engaging 500–600 word article, and verifies tone & source links.
* **Input Schema:**
  ```json
  {
    "topic": "Edge AI in Modern Healthcare"
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 1",
    "name": "Blog Post Generator Crew",
    "status": "success",
    "topic": "Edge AI in Modern Healthcare",
    "word_count": 584,
    "blog_post": "# Edge AI in Modern Healthcare\n\nAs healthcare demands rise...",
    "sources": [
      "https://research.example.org/edge-ai-in-healthcare",
      "https://industry-benchmarks.example.com/2026-report"
    ]
  }
  ```

---

### Agent 2: Competitor Intelligence Crew
* **Pattern:** Hierarchical Delegation (Research Lead coordinating Scraper, Pricing Analyst, News Analyst, and Strategist)
* **Route:** `POST /api/agent-2` *(Alias: `POST /agent2`)*
* **Functionality:** Ingests competitor URLs or company names, scrapes pricing tiers, analyzes market updates, and builds a balanced SWOT matrix.
* **Input Schema:**
  ```json
  {
    "competitors": [
      "https://linear.app",
      "https://asana.com",
      "https://jira.com"
    ]
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 2",
    "name": "Competitor Intelligence Crew",
    "status": "success",
    "analyzed_competitors": ["https://linear.app", "https://asana.com", "https://jira.com"],
    "swot_analysis": {
      "Strengths": ["Established user base", "Modern API design"],
      "Weaknesses": ["Premium tier costs", "Complex onboarding"],
      "Opportunities": ["AI automation integrations"],
      "Threats": ["Open-source alternatives"]
    },
    "pricing_overview": [
      {"competitor": "https://linear.app", "tier": "Pro / Business", "estimated_price": "$12 - $30 / user / month", "notes": "Publicly listed rates"}
    ],
    "executive_summary": "Comprehensive competitive intelligence evaluation completed..."
  }
  ```

---

### Agent 3: Meeting Notes Summarizer Crew
* **Pattern:** Parallel Task Workers with Format Reducer
* **Route:** `POST /api/agent-3` *(Alias: `POST /agent3`)*
* **Functionality:** Parses raw dialogue transcripts into a 5-point executive summary, an action item table with assigned owners and due dates, and a registry of decisions made.
* **Input Schema:**
  ```json
  {
    "transcript": "Elena: We need to complete database cutover by Nov 14.\nMarcus: I will finish the migration scripts by Nov 8.\nSiddharth: I will configure the read-replicas by Nov 10.\nElena: We agreed to use pg_upgrade with hardlinks."
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 3",
    "name": "Meeting Notes Summarizer Crew",
    "status": "success",
    "summary_points": ["Timeline reviewed", "Infrastructure dependencies assigned"],
    "action_items": [
      {"owner": "Marcus", "task": "I will finish the migration scripts by Nov 8.", "status": "Assigned"}
    ],
    "decisions_made": ["We agreed to use pg_upgrade with hardlinks."],
    "formatted_notes_markdown": "# Executive Meeting Notes\n\n## Summary Points..."
  }
  ```

---

### Agent 4: Data Report & Audit Crew
* **Pattern:** Pydantic Structured Output & Numeric Audit
* **Route:** `POST /api/agent-4` *(Alias: `POST /agent4`)*
* **Functionality:** Takes sales transactions, calculates mathematical aggregates, identifies top-selling products and regions, and performs numeric auditing to guarantee verifiable metrics.
* **Input Schema:**
  ```json
  {
    "records": [
      {"product": "Workstation", "region": "South", "units_sold": 6, "unit_price": 62000},
      {"product": "Smartwatch", "region": "North", "units_sold": 14, "unit_price": 18000}
    ]
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 4",
    "name": "Data Report & Audit Crew",
    "status": "success",
    "total_records": 10,
    "total_units_sold": 127,
    "total_revenue": 2437000.0,
    "top_selling_product": "Earbuds",
    "highest_revenue_region": "South",
    "average_revenue_per_record": 243700.0,
    "key_findings": [
      "Total sales generated $2,437,000.00 across 10 transactions with 127 units moved."
    ],
    "audit_status": "Verified - 100% Arithmetic Consistency"
  }
  ```

---

### Agent 5: Customer Support Router Flow
* **Pattern:** Semantic Category & SLA Priority Router
* **Route:** `POST /api/agent-5` *(Alias: `POST /agent5`)*
* **Functionality:** Inspects customer inquiry tickets, determines whether the issue is Billing, Account Access, or Technical, assigns priority, and drafts an immediate resolution message.
* **Input Schema:**
  ```json
  {
    "ticket": "I was billed twice on invoice #9201 for my monthly subscription."
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 5",
    "name": "Customer Support Router Flow",
    "status": "success",
    "ticket": "I was billed twice on invoice #9201 for my monthly subscription.",
    "category": "billing",
    "priority": "high",
    "resolution_reply": "Your inquiry has been routed to our Priority Financial Operations team..."
  }
  ```

---

### Agent 6: Resume Screening Flow
* **Pattern:** Objective Competency Scoring & Routing
* **Route:** `POST /api/agent-6` *(Alias: `POST /agent6`)*
* **Functionality:** Evaluates applicant CVs against job specifications, scoring candidate fit (0–10) and routing each applicant to an interview shortlist summary or polite rejection notice.
* **Input Schema:**
  ```json
  {
    "job_description": "Junior Backend Engineer with Python, SQL, REST APIs, and Docker.",
    "resumes": [
      {"name": "Alice Wang", "text": "Python backend engineer with 3 years building APIs using FastAPI, Docker, and PostgreSQL."},
      {"name": "Bob Taylor", "text": "Graphic designer specialized in Photoshop and branding."}
    ]
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 6",
    "name": "Resume Screening Flow",
    "status": "success",
    "total_candidates": 2,
    "evaluations": [
      {"name": "Alice Wang", "score": 9, "status": "shortlisted", "summary_or_rejection": "Strong candidate demonstrating core competencies..."},
      {"name": "Bob Taylor", "score": 3, "status": "rejected", "summary_or_rejection": "Thank you for your interest. While your profile..."}
    ]
  }
  ```

---

### Agent 7: Bug & Issue Triage Flow
* **Pattern:** Issue Classification & Agile Story Generation
* **Route:** `POST /api/agent-7` *(Alias: `POST /agent7`)*
* **Functionality:** Categorizes developer issues as `bug`, `feature`, or `question`, determines severity, and outputs structured reproduction steps or user stories.
* **Input Schema:**
  ```json
  {
    "title": "Session token expires during multi-step checkout without saving draft",
    "body": "When filling out shipping details for >15 minutes, page redirects and form data is cleared."
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 7",
    "name": "Bug & Issue Triage Flow",
    "status": "success",
    "issue_type": "bug",
    "severity": "High - Production Blocker",
    "triage_output": {
      "component": "Application Core",
      "reproduction_steps": [
        "1. Log into the platform with an active user account.",
        "2. Trigger checkout flow.",
        "3. Wait for token expiry.",
        "4. Observe data loss."
      ],
      "recommended_action": "Assign to triage engineer and prioritize hotfix."
    }
  }
  ```

---

### Agent 8: Content Repurposing Flow
* **Pattern:** Multi-Channel Content Fan-Out
* **Route:** `POST /api/agent-8` *(Alias: `POST /agent8`)*
* **Functionality:** Takes a single technical article and automatically synthesizes it into three distinct distribution formats: a LinkedIn thought leadership post (~150 words), a 6-tweet thread, and a 3-bullet email newsletter.
* **Input Schema:**
  ```json
  {
    "article": "Many teams adopt microservices too early, introducing network latency and operational complexity. Modern software engineering teams are returning to modular monoliths for faster iteration."
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 8",
    "name": "Content Repurposing Flow",
    "status": "success",
    "linkedin_post": "🚀 Architectural Insights for Engineering Teams...",
    "twitter_thread": [
      "1/6 🧵 Why high-growth engineering teams are choosing modular monoliths...",
      "2/6 Defaulting to microservices too early introduces network hops..."
    ],
    "newsletter_intro": "In this week's issue, we examine why top engineering teams...",
    "newsletter_bullets": [
      "The hidden operational cost of microservices.",
      "Encapsulation without network overhead."
    ]
  }
  ```

---

### Agent 9: Lead Qualification Flow
* **Pattern:** Enterprise B2B Lead Scoring & Outreach
* **Route:** `POST /api/agent-9` *(Alias: `POST /agent9`)*
* **Functionality:** Analyzes company firmographics (headcount, revenue, domain), scores leads into `hot`, `warm`, or `cold` tiers, and drafts bespoke executive emails or nurture tracks.
* **Input Schema:**
  ```json
  {
    "company_name": "Apex Cloud Systems",
    "website": "https://apexcloud.example.com",
    "employees": 95,
    "annual_revenue": "$18M ARR"
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 9",
    "name": "Lead Qualification Flow",
    "status": "success",
    "company_name": "Apex Cloud Systems",
    "qualification_tier": "hot",
    "lead_score": 95,
    "outreach_strategy": "Immediate high-touch outreach from Senior Account Executive.",
    "personalized_email_draft": "Subject: Scaling workflow operations at Apex Cloud Systems..."
  }
  ```

---

### Agent 10: Approval & Executive Report Flow
* **Pattern:** Human-in-the-Loop Feedback & Publishing Loop
* **Route:** `POST /api/agent-10` *(Alias: `POST /agent10`)*
* **Functionality:** Compiles research on technical or business topics, accepts human reviewer feedback, and updates the executive report accordingly.
* **Input Schema:**
  ```json
  {
    "topic": "Adoption of Rust in High-Performance Systems",
    "audience": "Engineering Leadership & Directors",
    "feedback": "Add section on memory safety benchmarks."
  }
  ```
* **Output Schema:**
  ```json
  {
    "agent": "Agent 10",
    "name": "Approval & Executive Report Flow",
    "status": "success",
    "topic": "Adoption of Rust in High-Performance Systems",
    "audience": "Engineering Leadership & Directors",
    "approval_status": "revised",
    "final_report_markdown": "# Executive Brief: Adoption Of Rust In High-Performance Systems..."
  }
  ```

---

## 💻 Local Setup & Running

### 1. Requirements
* Python 3.10+
* (Optional) `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/)

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Launch the FastAPI Server
```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

Once running:
* **Interactive Web Dashboard:** Open [http://localhost:8000](http://localhost:8000)
* **Interactive Swagger UI:** Open [http://localhost:8000/docs](http://localhost:8000/docs)
* **Health Endpoint:** Open [http://localhost:8000/health](http://localhost:8000/health)

---

## 🧪 Testing & Verification

### 1. Interactive Swagger Documentation
Open [http://localhost:8000/docs](http://localhost:8000/docs) in your browser. Every agent endpoint provides a **"Try it out"** button where you can test payloads with one click.

### 2. Testing via cURL

```bash
# Agent 1 (Blog Post Crew)
curl -X POST "http://localhost:8000/api/agent-1" \
     -H "Content-Type: application/json" \
     -d '{"topic": "Autonomous Navigation Systems in Robotics"}'

# Agent 5 (Support Router)
curl -X POST "http://localhost:8000/api/agent-5" \
     -H "Content-Type: application/json" \
     -d '{"ticket": "Need help restoring MFA on new mobile phone"}'

# Agent 7 (Bug Triage)
curl -X POST "http://localhost:8000/api/agent-7" \
     -H "Content-Type: application/json" \
     -d '{"title": "Database connection timeout under heavy load", "body": "When traffic spikes, queries queue up and fail."}'

# Validation Check (Empty input returns HTTP 422)
curl -X POST "http://localhost:8000/api/agent-1" \
     -H "Content-Type: application/json" \
     -d '{"topic": ""}'
```

---

## 📁 Project Structure

```
CREWAI_PROJECTS/
├── app.py                      # FastAPI server with all 10 agents & dual-mode UI/API routes
├── requirements.txt            # Python dependencies (FastAPI, Uvicorn, Pydantic, GenAI)
├── README.md                   # Complete architectural and API documentation
├── static/                     # Web application static assets
│   ├── css/style.css           # Modern dark-glass design system
│   └── js/app.js               # Frontend controller, Markdown renderer & API client
├── templates/                  # Frontend HTML templates
│   └── index.html              # Full-fledged single page application for all 10 agents
├── render.yaml                 # Infrastructure-as-code blueprint for Render
├── Procfile                    # Web process launch definition for Render / Heroku
├── vercel.json                 # Serverless deployment configuration for Vercel
└── .gitignore                  # Git ignore rules for virtual environments & secrets
```

---

## 📜 License
This project is licensed under the MIT License.
#   C R E W A I  
 