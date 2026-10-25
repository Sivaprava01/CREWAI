/**
 * CREWAL Agentic AI Platform - Interactive Frontend Controller
 * Provides visual rendering for all 10 CrewAI Agents with live API execution.
 */

// Agent Specifications & Pre-populated Outputs
const AGENTS_CONFIG = {
  1: {
    id: 1,
    name: "Blog Post Generator Crew",
    type: "Sequential Crew",
    route: "/api/agent-1",
    method: "POST",
    desc: "Autonomous 3-agent pipeline: Researches topics via web crawlers, writes comprehensive technical drafts, and edits for tone & verifiable sources.",
    formFields: [
      { name: "topic", label: "Blog Topic / Research Subject", type: "text", default: "Edge AI in Modern Healthcare", hint: "Enter technical or business subject" }
    ],
    presets: [
      { title: "Edge AI Healthcare", data: { topic: "Edge AI in Modern Healthcare" } },
      { title: "Autonomous Agent Swarms", data: { topic: "Autonomous Multi-Agent Swarms in FinTech" } },
      { title: "Quantum Cryptography", data: { topic: "Post-Quantum Cryptography in Enterprise Cloud" } }
    ],
    defaultOutput: {
      agent: "Agent 1",
      name: "Blog Post Generator Crew",
      status: "success",
      topic: "Edge AI in Modern Healthcare",
      word_count: 245,
      blog_post: `# Edge AI In Modern Healthcare: Transforming Clinical Care\n\nAs healthcare infrastructure rapidly modernizes, **Edge AI in Modern Healthcare** has become a vital catalyst for low-latency clinical diagnostics and patient safety. Medical networks are moving beyond centralized cloud processing to deploy real-time inference directly at bedside monitors and surgical suites.\n\n## Key Drivers of Clinical Progress\n1. **Zero-Latency Patient Triage:** Processing telemetry locally allows life-critical alerts in milliseconds.\n2. **HIPAA & Data Privacy by Design:** Patient biometric data stays on-premise without raw transit over public clouds.\n3. **Resilient Offline Continuity:** Clinics maintain diagnostic intelligence during broadband blackouts.\n\n## Navigating Practical Implementation\nWhile the potential is substantial, practical adoption requires deliberate validation. Edge hardware certification, cryptographic firmware signing, and clinical compliance must be guaranteed at every node.\n\n## Looking Ahead\nEdge intelligence will transform clinical workflows from reactive charting to proactive continuous monitoring, giving clinicians immediate, trustworthy assistance.`,
      sources: [
        "https://research.example.org/edge-ai-in-modern-healthcare",
        "https://industry-benchmarks.example.com/2026-report",
        "https://standards.example.edu/publications"
      ]
    }
  },

  2: {
    id: 2,
    name: "Competitor Intelligence Crew",
    type: "Hierarchical Crew",
    route: "/api/agent-2",
    method: "POST",
    desc: "Manager-directed intelligence crew that analyzes competitor products, constructs 2x2 SWOT matrices, and audits pricing architectures.",
    formFields: [
      { name: "competitors", label: "Competitor URLs or Names (Comma-separated)", type: "text", default: "https://linear.app, https://asana.com, https://jira.com", hint: "Up to 5 competitor platforms" }
    ],
    presets: [
      { title: "Project Management", data: { competitors: "https://linear.app, https://asana.com, https://jira.com" } },
      { title: "Cloud AI Infrastructure", data: { competitors: "https://modal.com, https://runpod.io, https://replicate.com" } }
    ],
    defaultOutput: {
      agent: "Agent 2",
      name: "Competitor Intelligence Crew",
      status: "success",
      analyzed_competitors: ["https://linear.app", "https://asana.com", "https://jira.com"],
      swot_analysis: {
        strengths: ["Fast keyboard-first UI with sub-50ms sync", "Deep developer ecosystem and Git integrations", "Minimalist, distraction-free workflow"],
        weaknesses: ["Steeper initial learning curve for non-technical teams", "Limited native Gantt chart reporting out of the box"],
        opportunities: ["Expansion into enterprise compliance (FedRAMP, SOC2 Type II)", "Autonomous sprint backlog prioritization using agentic models"],
        threats: ["Incumbents bundling basic project management into larger enterprise suites", "Aggressive price cuts by legacy suite providers"]
      },
      pricing_overview: [
        { competitor: "linear.app", tier: "Free Tier", price: "$0/mo (up to 250 active issues)" },
        { competitor: "linear.app", tier: "Standard Tier", price: "$8/seat/mo billed annually" },
        { competitor: "linear.app", tier: "Enterprise Tier", price: "$14/seat/mo with SAML SSO" }
      ],
      executive_summary: "The developer productivity ecosystem is increasingly bifurcating between monolithic enterprise suites and ultra-fast, opinionated tools. Linear holds strong developer mindshare; strategic opportunity lies in maintaining UX velocity while expanding enterprise compliance."
    }
  },

  3: {
    id: 3,
    name: "Meeting Notes Summarizer Crew",
    type: "Parallel Tasks Crew",
    route: "/api/agent-3",
    method: "POST",
    desc: "Parallel extraction agents parsing transcripts to isolate executive summaries, assignable action items with deadlines, and ratified architectural decisions.",
    formFields: [
      { name: "transcript", label: "Meeting Transcript / Audio Log", type: "textarea", default: "Elena: We need to complete the Postgres database cutover by Nov 14.\nMarcus: I will finish the migration scripts and schema verification by Nov 8.\nSiddharth: I will configure the read-replicas and verify failover by Nov 10.\nElena: Agreed to use pg_upgrade to minimize downtime to under 5 minutes.", hint: "Dialogue or conference notes" }
    ],
    presets: [
      { title: "Database Cutover Call", data: { transcript: "Elena: We need to complete the Postgres database cutover by Nov 14.\nMarcus: I will finish the migration scripts and schema verification by Nov 8.\nSiddharth: I will configure the read-replicas and verify failover by Nov 10.\nElena: Agreed to use pg_upgrade to minimize downtime to under 5 minutes." } },
      { title: "Sprint Architecture Sync", data: { transcript: "David: API gateway latency spiked to 250ms yesterday.\nAmina: I will profile the Redis cache layer by tomorrow morning.\nDavid: Approved deploying the Envoy proxy update to staging first." } }
    ],
    defaultOutput: {
      agent: "Agent 3",
      name: "Meeting Notes Summarizer Crew",
      status: "success",
      summary_points: [
        "Engineering aligned on completing the PostgreSQL database upgrade and cutover by Nov 14.",
        "Downtime target established at under 5 minutes utilizing native pg_upgrade utility.",
        "Team members assigned individual milestones for scripts and replica validation."
      ],
      action_items: [
        { task: "Finish migration scripts & schema verification", assignee: "Marcus", deadline: "Nov 8" },
        { task: "Configure read-replicas & verify failover cluster", assignee: "Siddharth", deadline: "Nov 10" },
        { task: "Execute production database cutover window", assignee: "Elena / Team", deadline: "Nov 14" }
      ],
      decisions_made: [
        "Proceed with pg_upgrade in-place strategy to maintain strict 5-minute downtime SLA.",
        "Enforce staging dry-run 48 hours prior to production execution."
      ],
      formatted_notes_markdown: "### Meeting Briefing & Action Checklist\n\n- **Objective:** Production PostgreSQL Database Cutover\n- **Target Cutover Date:** Nov 14\n- **Strict SLA:** Sub-5 minute maintenance window"
    }
  },

  4: {
    id: 4,
    name: "Data Report & Audit Crew",
    type: "Structured Output Crew",
    route: "/api/agent-4",
    method: "POST",
    desc: "Ingests raw business transactions, computes analytical aggregates (revenue, units, margins), and enforces rigorous Pydantic audit validation.",
    formFields: [
      { name: "audit_note", label: "Audit Batch Label / Comment", type: "text", default: "Q4 Production Transaction Audit", hint: "Trigger full audit of active transactions" }
    ],
    presets: [
      { title: "Q4 Enterprise Audit", data: { audit_note: "Q4 Enterprise Transaction Audit" } },
      { title: "Global SaaS Ledger", data: { audit_note: "Global Cloud SaaS Transactions" } }
    ],
    defaultOutput: {
      agent: "Agent 4",
      name: "Data Report & Audit Crew",
      status: "success",
      total_records: 6,
      total_units_sold: 2840,
      total_revenue: 672850.0,
      top_selling_product: "Enterprise Cloud Agent Suite",
      highest_revenue_region: "North America",
      average_revenue_per_record: 112141.67,
      key_findings: [
        "Total audited gross revenue equals $672,850.00 across 6 regional business entities.",
        "North America represents the primary revenue driver, contributing over 65% of net enterprise ARR.",
        "Zero variance or checksum discrepancies detected across transaction timestamps."
      ],
      audit_status: "VERIFIED & AUDITED"
    }
  },

  5: {
    id: 5,
    name: "Customer Support Router Flow",
    type: "Event Flow Router",
    route: "/api/agent-5",
    method: "POST",
    desc: "Intelligent triage flow classifying incoming customer tickets into Billing, Technical, or Account tiers, triggering priority routing & instant draft resolutions.",
    formFields: [
      { name: "ticket", label: "Customer Support Message / Ticket", type: "textarea", default: "I was billed twice on invoice #9201 for my monthly subscription. Please refund the duplicate $49 charge immediately.", hint: "Customer inquiry or complaint" }
    ],
    presets: [
      { title: "Billing Duplicate Charge", data: { ticket: "I was billed twice on invoice #9201 for my monthly subscription. Please refund the duplicate $49 charge immediately." } },
      { title: "API Authentication Error", data: { ticket: "Getting 401 Unauthorized errors when passing Bearer token to /api/v2/analytics. Please advise." } },
      { title: "Account Recovery", data: { ticket: "Our administrator lost access to the MFA device for team account org_8941." } }
    ],
    defaultOutput: {
      agent: "Agent 5",
      name: "Customer Support Router Flow",
      status: "success",
      ticket: "I was billed twice on invoice #9201 for my monthly subscription. Please refund the duplicate $49 charge immediately.",
      category: "Billing & Invoicing",
      priority: "URGENT",
      resolution_reply: "Dear Customer,\n\nThank you for alerting us to this issue. We have reviewed invoice #9201 and confirmed the duplicate charge of $49.00 caused by a payment gateway timeout.\n\nA full refund of $49.00 has been credited back to your original payment method (Transaction Ref: #RF-9201-B). Please allow 2-3 business days for it to appear on your bank statement.\n\nWe apologize for this inconvenience and have credited 500 bonus API credits to your workspace."
    }
  },

  6: {
    id: 6,
    name: "Resume Screening Flow",
    type: "Routing & Scoring Flow",
    route: "/api/agent-6",
    method: "POST",
    desc: "Autonomous candidate evaluator parsing applicant resumes against job requirements, scoring candidate fit (0-100), and issuing interview invites or polite notices.",
    formFields: [
      { name: "job_description", label: "Job Description Requirements", type: "textarea", default: "Junior Backend Developer with strong Python, FastAPI, Docker, and SQL experience. Cloud experience is a plus.", hint: "Target role criteria" }
    ],
    presets: [
      { title: "Backend Engineer Role", data: { job_description: "Junior Backend Developer with strong Python, FastAPI, Docker, and SQL experience. Cloud experience is a plus." } },
      { title: "AI/ML Solutions Engineer", data: { job_description: "Senior ML Engineer with PyTorch, CrewAI, LangChain, vector databases, and Kubernetes production deployment experience." } }
    ],
    defaultOutput: {
      agent: "Agent 6",
      name: "Resume Screening Flow",
      status: "success",
      total_candidates: 3,
      evaluations: [
        {
          name: "Elena Rostova",
          score: 94,
          status: "Shortlisted for Interview",
          summary_or_rejection: "Exceptional profile matching 100% of required tech stack (Python, FastAPI, Docker, PostgreSQL) with 2 years demonstrable production API experience."
        },
        {
          name: "Carlos Mendez",
          score: 68,
          status: "Pending Additional Experience",
          summary_or_rejection: "Solid Python foundations, but lacks hands-on Docker containerization and async API architecture required for this high-throughput role."
        },
        {
          name: "Priya Sharma",
          score: 88,
          status: "Shortlisted for Interview",
          summary_or_rejection: "Strong backend experience with Python microservices and cloud deployments; demonstrated familiarity with automated test suites."
        }
      ]
    }
  },

  7: {
    id: 7,
    name: "Bug & Issue Triage Flow",
    type: "Triage & Specialist Crew",
    route: "/api/agent-7",
    method: "POST",
    desc: "Automated issue analyzer detecting severity levels (P0 Critical to P2 Normal), isolating root causes from logs, and drafting verified code patches.",
    formFields: [
      { name: "title", label: "Issue Headline / Title", type: "text", default: "Session token expires during multi-step checkout without saving draft", hint: "Summary of problem" },
      { name: "body", label: "Issue Details & Stacktrace", type: "textarea", default: "When filling out shipping and billing details for >15 minutes, page redirects and form data is cleared.", hint: "Steps to reproduce and error logs" }
    ],
    presets: [
      { title: "Checkout Token Expiry", data: { title: "Session token expires during multi-step checkout without saving draft", body: "When filling out shipping and billing details for >15 minutes, page redirects and form data is cleared." } },
      { title: "Database Connection Pool Exhaustion", data: { title: "Postgres connection pool exhausted under peak load", body: "Async worker threads failing with OperationalError: remaining connection slots are reserved for non-replication superuser connections." } }
    ],
    defaultOutput: {
      agent: "Agent 7",
      name: "Bug & Issue Triage Flow",
      status: "success",
      issue_type: "Frontend State & Authentication Bug",
      severity: "P1 - HIGH",
      triage_output: {
        investigation: "The JWT access token has a 15-minute TTL without automatic background refresh in multi-page stepper components. When token expires, global axios interceptor forcibly redirects to /login without persisting local draft state.",
        suggested_fix: "Implement silent token refresh via sliding window HttpOnly cookie 60 seconds prior to expiration, and persist form draft to sessionStorage.",
        target_squad: "Core Checkout & Payments Squad",
        verification_steps: "Set auth token TTL to 30 seconds in staging; confirm checkout form remains interactive and submits successfully."
      }
    }
  },

  8: {
    id: 8,
    name: "Content Repurposing Flow",
    type: "Multi-Channel Synthesis Flow",
    route: "/api/agent-8",
    method: "POST",
    desc: "Transforms long-form technical whitepapers or articles into multi-channel campaigns: LinkedIn leadership posts, 6-part Twitter threads, and email newsletters.",
    formFields: [
      { name: "article", label: "Source Technical Article / Essay", type: "textarea", default: "Many teams adopt microservices too early, introducing network latency and operational complexity. Modern software engineering teams are returning to modular monoliths for faster iteration.", hint: "Source material to repurpose" }
    ],
    presets: [
      { title: "Monoliths vs Microservices", data: { article: "Many teams adopt microservices too early, introducing network latency and operational complexity. Modern software engineering teams are returning to modular monoliths for faster iteration." } },
      { title: "Agentic Workflows 2026", data: { article: "Autonomous agentic workflows represent the transition from passive chatbot interfaces to asynchronous system orchestration capable of multi-step planning and tool usage." } }
    ],
    defaultOutput: {
      agent: "Agent 8",
      name: "Content Repurposing Flow",
      status: "success",
      linkedin_post: "🚀 Architectural Insights for Engineering Teams\n\nAre you defaulting to microservices before proving product-market fit?\n\nRecent industry data reveals a clear shift: high-velocity organizations are returning to modular monoliths. By establishing clear domain boundaries within a single codebase, teams eliminate distributed tracing overhead, network latency, and deployment friction.\n\nKey Takeaways:\n✅ Ship faster with painless local refactoring\n✅ Run integration tests in seconds, not hours\n✅ Extract microservices only when isolated scaling is genuinely needed\n\nPragmatic engineering beats premature complexity every single time. What architecture pattern is your team betting on this year?\n\n#SoftwareEngineering #CloudArchitecture #TechLeadership #WebDev",
      twitter_thread: [
        "1/6 🧵 Why high-growth engineering teams are choosing modular monoliths over premature microservices:",
        "2/6 Defaulting to microservices too early introduces network hops, distributed tracing complexity, and deployment headaches before product-market fit is achieved.",
        "3/6 A modular monolith preserves strict domain boundaries inside a unified codebase, giving you clean architecture without distributed transaction failures.",
        "4/6 Development velocity surges: engineers can refactor interfaces effortlessly and run end-to-end integration test suites locally in seconds.",
        "5/6 When a specific domain genuinely requires independent horizontal scaling or specialized hardware, extract it cleanly into an isolated service.",
        "6/6 Architectural pragmatism > premature complexity. Prioritize shipping velocity and domain clarity. What is your team's approach?"
      ],
      newsletter_intro: "In this week's issue, we examine why top engineering teams are stepping back from premature microservices and re-embracing modular monoliths for superior shipping velocity.",
      newsletter_bullets: [
        "The hidden operational cost of microservices before product-market fit.",
        "How modular monoliths achieve strict boundary encapsulation with zero network latency.",
        "The pragmatic heuristic: when and how to extract isolated services sustainably."
      ]
    }
  },

  9: {
    id: 9,
    name: "Lead Qualification Flow",
    type: "B2B Scoring & Outreach Flow",
    route: "/api/agent-9",
    method: "POST",
    desc: "Enriches corporate prospects, calculates qualification scores (Hot/Warm/Cold), and authors tailored executive outreach emails ready for sales reps.",
    formFields: [
      { name: "company_name", label: "Target Company Name", type: "text", default: "Apex Cloud Systems", hint: "Company legal or trade name" },
      { name: "website", label: "Website URL", type: "text", default: "https://apexcloud.example.com", hint: "Domain URL" },
      { name: "employees", label: "Employee Count", type: "number", default: 85, hint: "Total headcount" },
      { name: "annual_revenue", label: "Estimated Annual Revenue", type: "text", default: "$12M ARR", hint: "Revenue bracket" }
    ],
    presets: [
      { title: "Apex Cloud Systems", data: { company_name: "Apex Cloud Systems", website: "https://apexcloud.example.com", employees: 85, annual_revenue: "$12M ARR" } },
      { title: "Veritas Data Labs", data: { company_name: "Veritas Data Labs", website: "https://veritasdata.io", employees: 240, annual_revenue: "$35M ARR" } }
    ],
    defaultOutput: {
      agent: "Agent 9",
      name: "Lead Qualification Flow",
      status: "success",
      company_name: "Apex Cloud Systems",
      qualification_tier: "hot",
      lead_score: 95,
      outreach_strategy: "Immediate high-touch outreach from Senior Account Executive.",
      personalized_email_draft: "Subject: Scaling workflow operations at Apex Cloud Systems\n\nHi Team,\n\nI noticed Apex Cloud Systems has been accelerating team growth (85+ employees). Many organizations at your growth stage struggle with automation bottlenecks and scaling operational infrastructure.\n\nOur Agentic AI Platform has helped peer engineering leaders reduce manual processing overhead by 65% while maintaining strict data governance.\n\nWould you be open to a brief 10-minute briefing next Tuesday to see if we can deliver similar ROI for Apex Cloud Systems?\n\nBest regards,\nEnterprise Solutions Team",
      nurture_plan: null
    }
  },

  10: {
    id: 10,
    name: "Approval & Executive Report Flow",
    type: "Human Feedback Flow",
    route: "/api/agent-10",
    method: "POST",
    desc: "Human-in-the-loop executive intelligence system that drafts formal strategic briefs, listens for human editorial feedback, and publishes ratified versions.",
    formFields: [
      { name: "topic", label: "Report Subject / Topic", type: "text", default: "Adoption of Rust in High-Performance Systems", hint: "Subject of strategic brief" },
      { name: "audience", label: "Target Audience", type: "text", default: "Engineering Leadership & Directors", hint: "Executive readership" },
      { name: "feedback", label: "Human Reviewer Feedback (Optional)", type: "textarea", default: "Include specific metrics on cloud compute cost reduction from reduced memory footprint.", hint: "Reviewer corrections or guidance" }
    ],
    presets: [
      { title: "Rust in High-Performance Systems", data: { topic: "Adoption of Rust in High-Performance Systems", audience: "Engineering Leadership & Directors", feedback: "Include specific metrics on cloud compute cost reduction from reduced memory footprint." } },
      { title: "AI Code Assistants ROI", data: { topic: "Enterprise ROI of AI Coding Assistants", audience: "CTO & VP Engineering", feedback: "Emphasize security scanning and IP indemnification." } }
    ],
    defaultOutput: {
      agent: "Agent 10",
      name: "Approval & Executive Report Flow",
      status: "success",
      topic: "Adoption of Rust in High-Performance Systems",
      audience: "Engineering Leadership & Directors",
      approval_status: "revised",
      final_report_markdown: `# Executive Brief: Adoption Of Rust In High-Performance Systems\n**Prepared for:** Engineering Leadership & Directors  \n**Status:** REVISED & APPROVED\n\n## Executive Summary\nThis report provides an objective, evidence-based assessment of **Adoption of Rust in High-Performance Systems**, highlighting key technical milestones, operational implications, and strategic investment considerations.\n\n## Key Findings & Research Synthesis\n1. **Industry Benchmarks:** Adoption rates have increased by 42% year-over-year among top-tier organizations seeking enhanced performance and maintainability.\n2. **Operational Resilience:** By incorporating memory safety and strict type guarantees, engineering defect rates in production drop substantially.\n3. **Resource Efficiency:** Reduced CPU overhead and minimized garbage collection latency yield direct cloud compute cost savings of up to 34%.\n\n## Strategic Recommendations\n- Form an initial cross-functional pilot team to establish best-practice tooling and deployment templates.\n- Define explicit success criteria focused on throughput, latency, and developer onboarding velocity.\n- Conduct bi-weekly stakeholder reviews to validate technical and business ROI.\n\n> **Reviewer Feedback Incorporated:** "Include specific metrics on cloud compute cost reduction from reduced memory footprint."\n> Adjustments reflected in Section 3 and final strategic recommendations.`
    }
  }
};

// Application State
let activeAgentId = 1;
let currentAgentOutputs = {};

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // Pre-load default outputs
  Object.keys(AGENTS_CONFIG).forEach(id => {
    currentAgentOutputs[id] = AGENTS_CONFIG[id].defaultOutput;
  });

  // Check URL to determine active agent (e.g. /agent1, /agent2, etc.)
  const path = window.location.pathname.toLowerCase();
  const match = path.match(/\/agent-?(\d+)/);
  if (match && match[1] && AGENTS_CONFIG[match[1]]) {
    activeAgentId = parseInt(match[1]);
  }

  // Render components
  renderSidebar();
  loadAgent(activeAgentId, false);

  // Setup global event listeners
  setupEventListeners();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Render the sidebar list of 10 Agents
 */
function renderSidebar() {
  const sidebarList = document.getElementById("sidebar-agent-list");
  if (!sidebarList) return;

  sidebarList.innerHTML = "";

  Object.values(AGENTS_CONFIG).forEach(agent => {
    const li = document.createElement("li");
    li.className = "sidebar-item";

    const isActive = agent.id === activeAgentId;
    li.innerHTML = `
      <a class="agent-nav-link ${isActive ? 'active' : ''}" data-agent-id="${agent.id}" id="nav-agent-${agent.id}">
        <div class="agent-nav-icon">${agent.id}</div>
        <div class="agent-nav-info">
          <span class="agent-nav-name">Agent ${agent.id}</span>
          <span class="agent-nav-meta">${agent.name}</span>
        </div>
        <span class="agent-nav-badge">${agent.type.split(" ")[0]}</span>
      </a>
    `;

    li.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      loadAgent(agent.id, true);
    });

    sidebarList.appendChild(li);
  });
}

/**
 * Load and display a specific Agent project
 */
function loadAgent(agentId, updateUrl = true) {
  activeAgentId = agentId;
  const config = AGENTS_CONFIG[agentId];
  if (!config) return;

  if (updateUrl && window.history) {
    window.history.pushState(null, `Agent ${agentId}`, `/agent${agentId}`);
  }

  // Update active state in sidebar
  document.querySelectorAll(".agent-nav-link").forEach(el => {
    el.classList.toggle("active", parseInt(el.getAttribute("data-agent-id")) === agentId);
  });

  // Update Header Banner
  const pillClass = agentId <= 3 ? 'pill-cyan' : agentId <= 7 ? 'pill-purple' : 'pill-emerald';
  document.getElementById("header-agent-pill").className = `agent-pill ${pillClass}`;
  document.getElementById("header-agent-pill").textContent = `Agent ${config.id}`;
  document.getElementById("header-agent-type").textContent = config.type;
  document.getElementById("header-agent-title").textContent = config.name;
  document.getElementById("header-agent-desc").textContent = config.desc;
  document.getElementById("header-agent-route").textContent = `${config.method} ${config.route}`;

  // Render Input Form
  renderForm(config);

  // Render Presets
  renderPresets(config);

  // Render Output Area
  renderOutput(config, currentAgentOutputs[agentId]);

  // Re-run Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Render Input Form Controls
 */
function renderForm(config) {
  const container = document.getElementById("form-fields-container");
  if (!container) return;

  container.innerHTML = "";

  config.formFields.forEach(field => {
    const group = document.createElement("div");
    group.className = "form-group";

    const labelHtml = `
      <label class="form-label">
        <span>${field.label}</span>
        ${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}
      </label>
    `;

    let inputHtml = "";
    if (field.type === "textarea") {
      inputHtml = `<textarea id="field-${field.name}" name="${field.name}" class="form-textarea" rows="4">${field.default || ''}</textarea>`;
    } else {
      inputHtml = `<input type="${field.type}" id="field-${field.name}" name="${field.name}" class="form-input" value="${field.default || ''}">`;
    }

    group.innerHTML = labelHtml + inputHtml;
    container.appendChild(group);
  });
}

/**
 * Render Preset Scenario Chips
 */
function renderPresets(config) {
  const container = document.getElementById("preset-chips-container");
  if (!container) return;

  container.innerHTML = "";

  if (!config.presets || config.presets.length === 0) {
    container.parentElement.style.display = "none";
    return;
  }

  container.parentElement.style.display = "block";

  config.presets.forEach(preset => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip-btn";
    chip.innerHTML = `<i data-lucide="sparkles" style="width: 12px; height: 12px;"></i> ${preset.title}`;

    chip.addEventListener("click", () => {
      Object.keys(preset.data).forEach(key => {
        const input = document.getElementById(`field-${key}`);
        if (input) {
          input.value = preset.data[key];
        }
      });
    });

    container.appendChild(chip);
  });
}

/**
 * Render Agent Output with specialized visual cards
 */
function renderOutput(config, output) {
  const outputContainer = document.getElementById("agent-output-view");
  const rawJsonPre = document.getElementById("raw-json-output");
  const metaStat = document.getElementById("output-meta-stat");

  if (!outputContainer) return;

  if (rawJsonPre) {
    rawJsonPre.textContent = JSON.stringify(output, null, 2);
  }

  // Update meta bar stat
  if (config.id === 1 && output.word_count) {
    metaStat.textContent = `${output.word_count} words • ~1 min read`;
  } else if (config.id === 4 && output.total_revenue) {
    metaStat.textContent = `$${output.total_revenue.toLocaleString()} Verified Revenue`;
  } else if (config.id === 6 && output.total_candidates) {
    metaStat.textContent = `${output.total_candidates} Candidates Evaluated`;
  } else if (config.id === 9 && output.lead_score) {
    metaStat.textContent = `Lead Score: ${output.lead_score}/100`;
  } else {
    metaStat.textContent = `Execution Status: ${output.status || 'success'}`;
  }

  // Specialized Output Renderers by Agent ID
  switch (config.id) {
    case 1:
      renderAgent1Output(outputContainer, output);
      break;
    case 2:
      renderAgent2Output(outputContainer, output);
      break;
    case 3:
      renderAgent3Output(outputContainer, output);
      break;
    case 4:
      renderAgent4Output(outputContainer, output);
      break;
    case 5:
      renderAgent5Output(outputContainer, output);
      break;
    case 6:
      renderAgent6Output(outputContainer, output);
      break;
    case 7:
      renderAgent7Output(outputContainer, output);
      break;
    case 8:
      renderAgent8Output(outputContainer, output);
      break;
    case 9:
      renderAgent9Output(outputContainer, output);
      break;
    case 10:
      renderAgent10Output(outputContainer, output);
      break;
    default:
      outputContainer.innerHTML = `<pre class="raw-json-pre">${JSON.stringify(output, null, 2)}</pre>`;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   SPECIALIZED OUTPUT RENDERERS
   ========================================================================== */

function parseMd(text) {
  if (window.marked) {
    return window.marked.parse(text || "");
  }
  return text ? text.replace(/\n/g, "<br>") : "";
}

// Agent 1: Blog Post
function renderAgent1Output(container, data) {
  const sourcesHtml = (data.sources || []).map(src => `
    <a href="${src}" target="_blank" rel="noopener" class="source-item">
      <i data-lucide="external-link" style="width: 13px; height: 13px;"></i>
      <span>${src}</span>
    </a>
  `).join("");

  container.innerHTML = `
    <div class="markdown-body">
      ${parseMd(data.blog_post)}
    </div>
    
    <div class="sources-card">
      <div class="sources-title">
        <i data-lucide="check-check" style="width: 14px; height: 14px; color: #10B981;"></i>
        Verified Research Sources (${(data.sources || []).length})
      </div>
      <div class="sources-list">
        ${sourcesHtml}
      </div>
    </div>
  `;
}

// Agent 2: Competitor SWOT
function renderAgent2Output(container, data) {
  const swot = data.swot_analysis || { strengths: [], weaknesses: [], opportunities: [], threats: [] };
  
  const pricingRows = (data.pricing_overview || []).map(p => `
    <tr>
      <td style="padding: 0.6rem 0.8rem; font-weight: 600; color: #38BDF8;">${p.competitor}</td>
      <td style="padding: 0.6rem 0.8rem; color: #CBD5E1;">${p.tier}</td>
      <td style="padding: 0.6rem 0.8rem; font-family: var(--font-mono); color: #34D399;">${p.price}</td>
    </tr>
  `).join("");

  container.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF; margin-bottom: 0.4rem;">Executive Market Summary</h3>
      <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">${data.executive_summary || ''}</p>
    </div>

    <div class="swot-grid">
      <div class="swot-box swot-s">
        <div class="swot-box-title"><i data-lucide="shield-check"></i> Strengths</div>
        <ul class="swot-list">
          ${swot.strengths.map(s => `<li><i data-lucide="check" style="width: 14px; height: 14px; color: #10B981; flex-shrink: 0; margin-top: 3px;"></i> ${s}</li>`).join("")}
        </ul>
      </div>

      <div class="swot-box swot-w">
        <div class="swot-box-title"><i data-lucide="alert-triangle"></i> Weaknesses</div>
        <ul class="swot-list">
          ${swot.weaknesses.map(w => `<li><i data-lucide="x" style="width: 14px; height: 14px; color: #F43F5E; flex-shrink: 0; margin-top: 3px;"></i> ${w}</li>`).join("")}
        </ul>
      </div>

      <div class="swot-box swot-o">
        <div class="swot-box-title"><i data-lucide="trending-up"></i> Opportunities</div>
        <ul class="swot-list">
          ${swot.opportunities.map(o => `<li><i data-lucide="arrow-up-right" style="width: 14px; height: 14px; color: #38BDF8; flex-shrink: 0; margin-top: 3px;"></i> ${o}</li>`).join("")}
        </ul>
      </div>

      <div class="swot-box swot-t">
        <div class="swot-box-title"><i data-lucide="alert-octagon"></i> Threats</div>
        <ul class="swot-list">
          ${swot.threats.map(t => `<li><i data-lucide="shield-alert" style="width: 14px; height: 14px; color: #F59E0B; flex-shrink: 0; margin-top: 3px;"></i> ${t}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Competitor Pricing Architecture</h4>
      <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.85rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">
            <th style="padding: 0.5rem 0.8rem;">Platform</th>
            <th style="padding: 0.5rem 0.8rem;">Tier</th>
            <th style="padding: 0.5rem 0.8rem;">Pricing Structure</th>
          </tr>
        </thead>
        <tbody>
          ${pricingRows}
        </tbody>
      </table>
    </div>
  `;
}

// Agent 3: Meeting Notes
function renderAgent3Output(container, data) {
  const actionItemsHtml = (data.action_items || []).map(item => `
    <div class="action-item-card">
      <div class="action-item-main">
        <div class="action-item-checkbox"><i data-lucide="check" style="width: 12px; height: 12px;"></i></div>
        <span style="font-weight: 500; color: #E2E8F0;">${item.task}</span>
      </div>
      <div class="action-item-meta">
        <span class="assignee-badge"><i data-lucide="user" style="width: 10px; height: 10px; display: inline-block;"></i> ${item.assignee}</span>
        <span class="deadline-badge"><i data-lucide="calendar" style="width: 10px; height: 10px; display: inline-block;"></i> Due ${item.deadline}</span>
      </div>
    </div>
  `).join("");

  const summaryBullets = (data.summary_points || []).map(p => `
    <li style="margin-bottom: 0.45rem; color: #CBD5E1;"><i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: #38BDF8; display: inline-block; margin-right: 6px;"></i> ${p}</li>
  `).join("");

  const decisionsHtml = (data.decisions_made || []).map(d => `
    <div style="padding: 0.65rem 0.9rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10B981; border-radius: 4px; margin-bottom: 0.5rem; font-size: 0.85rem; color: #D1FAE5;">
      ${d}
    </div>
  `).join("");

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF; margin-bottom: 0.6rem;">Executive Summary Points</h3>
      <ul style="list-style: none; padding-left: 0; font-size: 0.92rem;">
        ${summaryBullets}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF; margin-bottom: 0.75rem;">Action Items & Assigned Deliverables</h3>
      <div class="action-items-list">
        ${actionItemsHtml}
      </div>
    </div>

    <div>
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF; margin-bottom: 0.6rem;">Key Ratified Decisions</h3>
      ${decisionsHtml}
    </div>
  `;
}

// Agent 4: Data Report & Audit
function renderAgent4Output(container, data) {
  const findingsHtml = (data.key_findings || []).map(f => `
    <div style="padding: 0.75rem 1rem; background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); margin-bottom: 0.6rem; font-size: 0.88rem; color: #CBD5E1; display: flex; align-items: flex-start; gap: 0.6rem;">
      <i data-lucide="activity" style="width: 15px; height: 15px; color: #38BDF8; flex-shrink: 0; margin-top: 2px;"></i>
      <span>${f}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-card-label">Audited Revenue</div>
        <div class="kpi-card-value">$${(data.total_revenue || 0).toLocaleString()}</div>
        <div class="kpi-card-sub"><i data-lucide="check" style="width: 12px; height: 12px;"></i> 100% Reconciled</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-label">Units Transacted</div>
        <div class="kpi-card-value">${(data.total_units_sold || 0).toLocaleString()}</div>
        <div class="kpi-card-sub"><i data-lucide="box" style="width: 12px; height: 12px;"></i> ${data.total_records || 0} Batches</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-label">Top Region</div>
        <div class="kpi-card-value" style="font-size: 1.35rem; color: #38BDF8;">${data.highest_revenue_region || 'N/A'}</div>
        <div class="kpi-card-sub" style="color: var(--text-muted);">${data.top_selling_product || ''}</div>
      </div>
    </div>

    <div style="margin-top: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF;">Audit Findings & Ledger Integrity</h3>
        <span class="badge-status status-success"><i data-lucide="check-circle" style="width: 12px; height: 12px; display: inline-block;"></i> ${data.audit_status || 'VERIFIED'}</span>
      </div>
      ${findingsHtml}
    </div>
  `;
}

// Agent 5: Customer Support Router
function renderAgent5Output(container, data) {
  const isUrgent = (data.priority || '').toUpperCase().includes('URGENT');
  const priColor = isUrgent ? '#F43F5E' : '#38BDF8';
  const priBg = isUrgent ? 'rgba(244, 63, 94, 0.15)' : 'rgba(56, 189, 248, 0.15)';

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Routed Category</span>
        <div style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: #FFF; margin-top: 0.3rem;">
          <i data-lucide="tag" style="width: 16px; height: 16px; color: #38BDF8; display: inline-block; vertical-align: middle;"></i> ${data.category || 'Support'}
        </div>
      </div>
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Priority SLA</span>
        <div style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: ${priColor}; margin-top: 0.3rem;">
          <span style="background: ${priBg}; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.85rem;">⚡ ${data.priority || 'Normal'}</span>
        </div>
      </div>
    </div>

    <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
      <div style="padding: 0.75rem 1.25rem; background: #090E1A; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em;">
          <i data-lucide="mail-check" style="width: 14px; height: 14px; color: #10B981; display: inline-block; vertical-align: middle;"></i> Generated Customer Resolution
        </span>
        <button class="btn-tool" onclick="copyTextToClipboard('${(data.resolution_reply || '').replace(/'/g, "\\'").replace(/\n/g, '\\n')}')">
          <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy Reply
        </button>
      </div>
      <div style="padding: 1.25rem; font-size: 0.92rem; line-height: 1.7; color: #E2E8F0; white-space: pre-wrap; font-family: var(--font-body);">
${data.resolution_reply || ''}
      </div>
    </div>
  `;
}

// Agent 6: Resume Screening
function renderAgent6Output(container, data) {
  const cardsHtml = (data.evaluations || []).map(cand => {
    const scoreClass = cand.score >= 85 ? 'score-high' : cand.score >= 70 ? 'score-med' : 'score-low';
    const isShortlisted = cand.score >= 75;

    return `
      <div class="candidate-card">
        <div class="candidate-info">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem;">
            <h4>${cand.name}</h4>
            <span class="badge-status ${isShortlisted ? 'status-success' : 'status-loading'}" style="font-size: 0.72rem;">
              ${cand.status}
            </span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${cand.summary_or_rejection}</p>
        </div>
        <div class="candidate-score-pill ${scoreClass}">
          ${cand.score}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; color: #FFF;">Applicant Match Scorecards</h3>
      <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">${(data.evaluations || []).length} Resumes Analyzed</span>
    </div>

    <div class="candidates-grid">
      ${cardsHtml}
    </div>
  `;
}

// Agent 7: Bug & Issue Triage
function renderAgent7Output(container, data) {
  const triage = data.triage_output || {};

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Issue Classification</span>
        <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #38BDF8; margin-top: 0.3rem;">
          <i data-lucide="bug" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle;"></i> ${data.issue_type || 'Software Defect'}
        </div>
      </div>
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Assigned Severity</span>
        <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #F43F5E; margin-top: 0.3rem;">
          <span style="background: rgba(244, 63, 94, 0.15); padding: 0.2rem 0.6rem; border-radius: 6px;">🔥 ${data.severity || 'P1'}</span>
        </div>
      </div>
    </div>

    <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); margin-bottom: 0.5rem;">Root Cause Investigation</h4>
      <p style="color: #E2E8F0; font-size: 0.92rem; line-height: 1.6;">${triage.investigation || ''}</p>
    </div>

    <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #34D399; margin-bottom: 0.5rem;"><i data-lucide="wrench" style="width: 14px; height: 14px; display: inline-block;"></i> Recommended Patch & Fix</h4>
      <p style="color: #D1FAE5; font-size: 0.92rem; line-height: 1.6;">${triage.suggested_fix || ''}</p>
    </div>

    <div style="display: flex; gap: 1.5rem; font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">
      <span><strong>Routing Target:</strong> ${triage.target_squad || 'Core Team'}</span>
      <span><strong>Verification:</strong> ${triage.verification_steps || 'Automated regression test'}</span>
    </div>
  `;
}

// Agent 8: Multi-Platform Repurposing
function renderAgent8Output(container, data) {
  const tweetsHtml = (data.twitter_thread || []).map(tweet => `
    <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 0.75rem; font-size: 0.92rem; color: #E2E8F0; line-height: 1.5;">
      ${tweet}
    </div>
  `).join("");

  const newsletterBullets = (data.newsletter_bullets || []).map(b => `
    <li style="margin-bottom: 0.4rem; color: #CBD5E1;">${b}</li>
  `).join("");

  container.innerHTML = `
    <div class="tab-nav">
      <button class="tab-btn active" onclick="switchRepurposeTab('linkedin')"><i data-lucide="linkedin" style="width: 13px; height: 13px; display: inline-block;"></i> LinkedIn Post</button>
      <button class="tab-btn" onclick="switchRepurposeTab('twitter')"><i data-lucide="twitter" style="width: 13px; height: 13px; display: inline-block;"></i> Twitter/X Thread (${(data.twitter_thread || []).length})</button>
      <button class="tab-btn" onclick="switchRepurposeTab('newsletter')"><i data-lucide="newspaper" style="width: 13px; height: 13px; display: inline-block;"></i> Newsletter</button>
    </div>

    <div id="tab-content-linkedin" class="repurpose-content">
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem; font-size: 0.92rem; line-height: 1.7; color: #E2E8F0; white-space: pre-wrap;">
${data.linkedin_post || ''}
      </div>
    </div>

    <div id="tab-content-twitter" class="repurpose-content" style="display: none;">
      ${tweetsHtml}
    </div>

    <div id="tab-content-newsletter" class="repurpose-content" style="display: none;">
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem;">
        <h4 style="font-family: var(--font-display); font-size: 1.1rem; color: #FFF; margin-bottom: 0.6rem;">Executive Lead-In</h4>
        <p style="color: #CBD5E1; font-size: 0.95rem; margin-bottom: 1.25rem;">${data.newsletter_intro || ''}</p>
        <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Featured Insights</h5>
        <ul style="padding-left: 1.25rem; font-size: 0.9rem;">
          ${newsletterBullets}
        </ul>
      </div>
    </div>
  `;
}

window.switchRepurposeTab = function(tabName) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  event.target.closest(".tab-btn").classList.add("active");

  document.querySelectorAll(".repurpose-content").forEach(el => el.style.display = "none");
  const target = document.getElementById(`tab-content-${tabName}`);
  if (target) target.style.display = "block";
};

// Agent 9: Lead Qualification
function renderAgent9Output(container, data) {
  const isHot = (data.qualification_tier || '').toLowerCase() === 'hot';
  const tierBg = isHot ? 'rgba(244, 63, 94, 0.15)' : 'rgba(56, 189, 248, 0.15)';
  const tierColor = isHot ? '#F43F5E' : '#38BDF8';

  const nurtureHtml = data.nurture_plan ? data.nurture_plan.map(n => `<li style="margin-bottom: 0.35rem; color: #CBD5E1;">${n}</li>`).join("") : '';

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Qualification Tier</span>
        <div style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: ${tierColor}; margin-top: 0.3rem;">
          <span style="background: ${tierBg}; padding: 0.2rem 0.6rem; border-radius: 6px;">
            ${isHot ? '🔥 HOT PROSPECT' : '⚡ ' + (data.qualification_tier || 'Warm').toUpperCase()}
          </span>
        </div>
      </div>
      <div class="kpi-card" style="padding: 1rem 1.25rem; margin-bottom: 0;">
        <div class="kpi-card-label">Proprietary Fit Score</div>
        <div class="kpi-card-value" style="color: #34D399;">${data.lead_score || 0}/100</div>
      </div>
    </div>

    <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); margin-bottom: 0.4rem;">Outreach Strategy</h4>
      <p style="color: #E2E8F0; font-size: 0.92rem;">${data.outreach_strategy || ''}</p>
    </div>

    ${data.personalized_email_draft ? `
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
        <div style="padding: 0.75rem 1.25rem; background: #090E1A; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
            <i data-lucide="send" style="width: 13px; height: 13px; color: #38BDF8; display: inline-block;"></i> Personalized Executive Email Draft
          </span>
          <button class="btn-tool" onclick="copyTextToClipboard('${(data.personalized_email_draft || '').replace(/'/g, "\\'").replace(/\n/g, '\\n')}')">
            <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy Email
          </button>
        </div>
        <div style="padding: 1.25rem; font-size: 0.92rem; line-height: 1.7; color: #E2E8F0; white-space: pre-wrap; font-family: var(--font-body);">
${data.personalized_email_draft}
        </div>
      </div>
    ` : ''}

    ${data.nurture_plan ? `
      <div style="background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-top: 1.25rem;">
        <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Nurture Cadence Sequence</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.9rem;">
          ${nurtureHtml}
        </ul>
      </div>
    ` : ''}
  `;
}

// Agent 10: Executive Report & Approval
function renderAgent10Output(container, data) {
  const isApproved = (data.approval_status || '').toLowerCase() === 'approved';

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; background: rgba(13, 19, 34, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
      <div>
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700;">Audience Target</span>
        <div style="font-size: 1rem; font-weight: 600; color: #FFF; margin-top: 0.2rem;">${data.audience || 'Leadership'}</div>
      </div>
      <div>
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 700; display: block; margin-bottom: 0.2rem;">Ratification Status</span>
        <span class="badge-status ${isApproved ? 'status-success' : 'status-loading'}">
          ${(data.approval_status || 'Pending').toUpperCase()}
        </span>
      </div>
    </div>

    <div class="markdown-body">
      ${parseMd(data.final_report_markdown)}
    </div>
  `;
}

/**
 * Setup Global Button and Interaction Handlers
 */
function setupEventListeners() {
  // Execute Agent Form Submit
  const form = document.getElementById("agent-run-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await executeAgent(activeAgentId);
    });
  }

  // Toggle Raw JSON
  const btnToggleJson = document.getElementById("btn-toggle-json");
  if (btnToggleJson) {
    btnToggleJson.addEventListener("click", () => {
      const container = document.getElementById("raw-json-container");
      if (container) {
        container.classList.toggle("open");
        btnToggleJson.classList.toggle("active");
      }
    });
  }

  // Copy Markdown/Text Output
  const btnCopy = document.getElementById("btn-copy-output");
  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const output = currentAgentOutputs[activeAgentId];
      if (output) {
        const textToCopy = output.blog_post || output.final_report_markdown || output.linkedin_post || output.resolution_reply || JSON.stringify(output, null, 2);
        copyTextToClipboard(textToCopy);
      }
    });
  }

  // Popstate for browser back/forward buttons
  window.addEventListener("popstate", () => {
    const path = window.location.pathname.toLowerCase();
    const match = path.match(/\/agent-?(\d+)/);
    if (match && match[1] && AGENTS_CONFIG[match[1]]) {
      loadAgent(parseInt(match[1]), false);
    }
  });
}

/**
 * Trigger Agent API Execution
 */
async function executeAgent(agentId) {
  const config = AGENTS_CONFIG[agentId];
  if (!config) return;

  const btnRun = document.getElementById("btn-run-agent");
  const statusBadge = document.getElementById("execution-status-badge");

  if (btnRun) btnRun.classList.add("loading");
  if (statusBadge) {
    statusBadge.className = "badge-status status-loading";
    statusBadge.textContent = "Executing Crew...";
  }

  // Gather Form Inputs
  const payload = {};
  config.formFields.forEach(field => {
    const input = document.getElementById(`field-${field.name}`);
    if (input) {
      let val = input.value;
      if (field.name === "competitors") {
        payload[field.name] = val.split(",").map(s => s.trim()).filter(Boolean);
      } else if (field.type === "number") {
        payload[field.name] = parseInt(val) || 0;
      } else {
        payload[field.name] = val;
      }
    }
  });

  // Handle specialized field formats for Agent 6 (resumes array)
  if (agentId === 6 && !payload.resumes) {
    payload.resumes = [
      { name: "Elena Rostova", text: "Senior Software Engineer with 4 years Python, FastAPI, Docker, and PostgreSQL expertise." },
      { name: "Carlos Mendez", text: "Frontend specialist with React, Next.js, and beginner Python script experience." },
      { name: "Priya Sharma", text: "Backend developer with 3 years Python, Django, SQL, and AWS infrastructure." }
    ];
  }

  try {
    const response = await fetch(config.route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();
    currentAgentOutputs[agentId] = data;

    renderOutput(config, data);

    if (statusBadge) {
      statusBadge.className = "badge-status status-success";
      statusBadge.textContent = "Success 200 OK";
    }
  } catch (err) {
    console.error("Agent execution error:", err);
    if (statusBadge) {
      statusBadge.className = "badge-status status-loading";
      statusBadge.style.background = "rgba(244, 63, 94, 0.15)";
      statusBadge.style.color = "#F43F5E";
      statusBadge.textContent = "Error: " + err.message;
    }
  } finally {
    if (btnRun) btnRun.classList.remove("loading");
  }
}

/**
 * Utility: Copy text to clipboard with notification
 */
window.copyTextToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard successfully!");
  }).catch(err => {
    console.error("Clipboard copy failed:", err);
  });
};
