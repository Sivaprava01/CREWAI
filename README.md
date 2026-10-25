# CREWAL — Agentic AI Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CrewAI](https://img.shields.io/badge/CrewAI-Agentic%20Flows-orange)](https://crewai.com)

A production-grade **FastAPI Agentic AI service** orchestrating 10 specialized AI agents (Agent 1 through Agent 10) across **Sequential**, **Hierarchical**, **Parallel**, **Router**, and **Human-in-the-Loop** architectures.

---

## 📑 Table of Contents
1. [Overview & Architecture](#-overview--architecture)
2. [All 10 Agents Documentation](#-all-10-agents-documentation)
3. [Local Installation & Setup](#-local-installation--setup)
4. [Testing the Endpoints](#-testing-the-endpoints)
5. [Deployment Guide (Render & Vercel)](#-deployment-guide)
6. [Project Structure](#-project-structure)

---

## 🧠 Overview & Architecture

CREWAL bridges multi-agent reasoning workflows with a high-throughput, async REST API server. Every agent corresponds to an enterprise workflow pattern:

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

---

## 🤖 All 10 Agents Documentation

### Agent 1: Blog Post Generator Crew
* **Architecture:** Sequential Multi-Agent (Research Analyst $\rightarrow$ Content Writer $\rightarrow$ Content Editor)
* **Endpoint:** `POST /api/agent-1`
* **Purpose:** Researches a target topic, produces an engaging ~600-word technical article, and edits for tone & verifiable sources.
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
      "https://industry-benchmarks.example.com/2026-report",
      "https://standards.example.edu/publications"
    ]
  }
  ```

---

### Agent 2: Competitor Intelligence Crew
* **Architecture:** Hierarchical Crew (Research Lead delegating to Scraper, Pricing Analyst, News Analyst, and Strategist)
* **Endpoint:** `POST /api/agent-2`
* **Purpose:** Scrapes competitor websites, extracts pricing matrices, retrieves recent company announcements, and builds a comprehensive SWOT table.
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
      "Opportunities": ["AI automation integration"],
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
* **Architecture:** Parallel Task Execution (Summarizer, Action Item Tracker, Decision Recorder, Formatter)
* **Endpoint:** `POST /api/agent-3`
* **Purpose:** Reads raw meeting dialogue, simultaneously generates a 5-point concise summary, extracts action deliverables with assignees & due dates, logs explicit decisions, and outputs executive Markdown.
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
      {"owner": "Marcus", "task": "I will finish the migration scripts by Nov 8.", "status": "Assigned"},
      {"owner": "Siddharth", "task": "I will configure the read-replicas by Nov 10.", "status": "Assigned"}
    ],
    "decisions_made": ["We agreed to use pg_upgrade with hardlinks."],
    "formatted_notes_markdown": "# Executive Meeting Notes\n\n## Summary Points..."
  }
  ```

---

### Agent 4: Data Report & Audit Crew
* **Architecture:** Pydantic Structured Output Crew (Commercial Data Analyst, Insight Specialist, Report Quality Auditor)
* **Endpoint:** `POST /api/agent-4`
* **Purpose:** Ingests sales data records, validates strict Pydantic numeric constraints, isolates top 3 findings, and performs mathematical verification to guarantee zero hallucinations.
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
      "Total sales generated $2,437,000.00 across 10 transactions with 127 units moved.",
      "Top product by volume is 'Earbuds' with 50 total units sold."
    ],
    "audit_status": "Verified - 100% Arithmetic Consistency"
  }
  ```

---

### Agent 5: Customer Support Router Flow
* **Architecture:** Event-Driven Flow Router (`@start`, `@listen`, `@router`)
* **Endpoint:** `POST /api/agent-5`
* **Purpose:** Classifies incoming customer support tickets into `billing`, `account_access`, or `other`, sets SLA priority, and generates an immediate context-aware resolution reply.
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
* **Architecture:** Flow Router & Evaluation Crew
* **Endpoint:** `POST /api/agent-6`
* **Purpose:** Analyzes candidate resumes against a target job description, computes candidate compatibility scores (0–10), and routes applicants to a shortlisted summary or polite rejection notice.
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
* **Architecture:** Triage Router Flow & Specialist Crews (Bug Crew, Feature Crew, Answer Crew)
* **Endpoint:** `POST /api/agent-7`
* **Purpose:** Triages repository issues into `bug`, `feature`, or `question`, determines severity, and generates reproduction steps, agile user stories, or documentation answers.
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
        "2. Trigger action matching reported trigger...",
        "3. Observe unexpected failure behavior described in body."
      ],
      "recommended_action": "Assign to triage engineer and prioritize hotfix in current sprint."
    }
  }
  ```

---

### Agent 8: Content Repurposing Flow
* **Architecture:** Parallel Fan-Out Flow (`and_` branching across LinkedIn, Twitter, and Newsletter crews)
* **Endpoint:** `POST /api/agent-8`
* **Purpose:** Takes a single long-form technical article and repurposes it simultaneously into a high-engagement LinkedIn post (~150 words), a 6-tweet Twitter/X thread, and an email newsletter.
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
      "The hidden operational cost of microservices before product-market fit.",
      "How modular monoliths achieve strict boundary encapsulation."
    ]
  }
  ```

---

### Agent 9: Lead Qualification Flow
* **Architecture:** B2B Prospect Enrichment & Router Flow
* **Endpoint:** `POST /api/agent-9`
* **Purpose:** Evaluates inbound leads, checks company size & revenue benchmarks, scores leads as `hot`, `warm`, or `cold`, and produces customized AE email drafts or nurture tracks.
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
* **Architecture:** Human-in-the-Loop Feedback & Publishing Flow
* **Endpoint:** `POST /api/agent-10`
* **Purpose:** Synthesizes research into a publication-ready brief, accepts iterative reviewer feedback, and generates updated executive reports.
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

## 💻 Local Installation & Setup

### Prerequisites
* Python 3.10, 3.11, or 3.12 installed.
* Optional: Google Gemini API key from [Google AI Studio](https://aistudio.google.com/).

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/CREWAL.git
cd CREWAL
```

### 2. Create and Activate Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=8000
```
*(Note: If `GEMINI_API_KEY` is omitted, the application runs with high-fidelity deterministic responses, ensuring 100% endpoint stability during tests).*

### 5. Start the Server
```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```
Once launched, open your browser:
* **Interactive Dashboard:** [http://localhost:8000](http://localhost:8000)
* **Swagger API Documentation:** [http://localhost:8000/docs](http://localhost:8000/docs)
* **Alternative ReDoc Portal:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 🧪 Testing the Endpoints

### 1. Interactive Swagger Testing
Navigate to [http://localhost:8000/docs](http://localhost:8000/docs). Expand any of the 10 agent routes, click **"Try it out"**, modify the payload, and click **"Execute"**.

### 2. Testing via cURL

#### Test Agent 1 (Blog Post Crew):
```bash
curl -X POST "http://localhost:8000/api/agent-1" \
     -H "Content-Type: application/json" \
     -d '{"topic": "Autonomous Robotics in Modern Agriculture"}'
```

#### Test Agent 5 (Support Router Flow):
```bash
curl -X POST "http://localhost:8000/api/agent-5" \
     -H "Content-Type: application/json" \
     -d '{"ticket": "I need help resetting my MFA credentials after getting a new phone."}'
```

#### Test Agent 7 (Bug Triage Flow):
```bash
curl -X POST "http://localhost:8000/api/agent-7" \
     -H "Content-Type: application/json" \
     -d '{"title": "Database connection pool exhaustion under high load", "body": "When traffic spikes past 500 req/s, the worker fails with timeout."}'
```

#### Test Invalid Input Handling:
```bash
# Sending invalid/empty payload returns HTTP 422 Unprocessable Entity
curl -X POST "http://localhost:8000/api/agent-1" \
     -H "Content-Type: application/json" \
     -d '{"topic": ""}'
```

---

## 🚀 Deployment Guide

### Option A: Deploy to Render (Recommended)

1. Create a free account at [render.com](https://render.com/).
2. On your Render dashboard, click **"New +"** and choose **"Web Service"**.
3. Connect your GitHub repository **`CREWAL`**.
4. Set the following configuration settings:
   * **Name:** `crewal-agentic-ai`
   * **Environment:** `Python 3`
   * **Region:** Any preferred region (e.g., Oregon, Frankfurt)
   * **Branch:** `main`
   * **Build Command:** `pip install -r requirements.txt`
   * **Start Command:** `uvicorn app:app --host 0.0.0.0 --port $PORT`
5. In **Environment Variables**, add:
   * `GEMINI_API_KEY`: *(Your Google AI Studio API key)*
   * `PYTHON_VERSION`: `3.11.8`
6. Click **"Deploy Web Service"**. Once deployed, your API is live at `https://crewal-agentic-ai.onrender.com`!

*(Note: `render.yaml` and `Procfile` are pre-configured in the repository for one-click blueprint setup).*

---

### Option B: Deploy to Vercel

1. Install the Vercel CLI or import the GitHub repository on [vercel.com](https://vercel.com/).
2. Select your `CREWAL` repository.
3. In **Project Settings**, add `GEMINI_API_KEY` under Environment Variables.
4. Deploy using the included `vercel.json` rewrite configuration:
   ```bash
   vercel --prod
   ```

---

## 📁 Project Structure

```
CREWAI_PROJECTS/
├── app.py                                  # FastAPI server with 10 specialized agent endpoints
├── requirements.txt                        # Python dependencies (FastAPI, Uvicorn, Pydantic, GenAI)
├── README.md                               # Complete architectural and API documentation
├── render.yaml                             # Infrastructure-as-code blueprint for Render deployment
├── Procfile                                # Web process launch definition for Render / Heroku
├── vercel.json                             # Serverless deployment configuration for Vercel
├── .gitignore                              # Git ignore rules for virtual environments & secrets
├── crewai_projects (1).html                # Original project instructions
├── Project_01_Blog_Post_Crew.ipynb         # Agent 1 Notebook
├── Project_2_Competitor_Analysis_Crew.ipynb # Agent 2 Notebook
├── Project_3_Meeting_Notes_Crew.ipynb      # Agent 3 Notebook
├── Project_4_Data_Report_Crew.ipynb        # Agent 4 Notebook
├── Project_5_Customer_Support_Flow.ipynb   # Agent 5 Notebook
├── Project_6_Resume_Screening_Flow.ipynb   # Agent 6 Notebook
├── Project_7_Bug_Triage_Flow.ipynb         # Agent 7 Notebook
├── Project_8_Content_Repurposing_Flow.ipynb# Agent 8 Notebook
├── Project_9_Lead_Qualification_Flow.ipynb # Agent 9 Notebook
└── Project_10_Approval_Report_Flow.ipynb   # Agent 10 Notebook
```

---

## 📜 License
This project is licensed under the MIT License.
