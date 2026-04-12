import React from "react";
import { useState, useRef } from "react";

const TEMPLATES = [
  { id: 1, name: "Classic", accent: "#1e3a8a", bg: "#f8fafc", sidebar: false },
  { id: 2, name: "Modern", accent: "#7c3aed", bg: "#faf5ff", sidebar: false },
  { id: 3, name: "Bold", accent: "#dc2626", bg: "#fff1f2", sidebar: false },
  { id: 4, name: "Minimal", accent: "#111827", bg: "#ffffff", sidebar: false },
  { id: 5, name: "Teal Pro", accent: "#0f766e", bg: "#f0fdfa", sidebar: false },
  { id: 6, name: "Sidebar", accent: "#1e3a8a", bg: "#f8fafc", sidebar: true },
  {
    id: 7,
    name: "Executive",
    accent: "#92400e",
    bg: "#fffbeb",
    sidebar: false,
  },
  { id: 8, name: "Creative", accent: "#be185d", bg: "#fdf2f8", sidebar: true },
];

const EMPTY = {
  name: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  exp1_role: "",
  exp1_company: "",
  exp1_date: "",
  exp1_desc: "",
  exp2_role: "",
  exp2_company: "",
  exp2_date: "",
  exp2_desc: "",
  edu_degree: "",
  edu_school: "",
  edu_date: "",
  edu_grade: "",
  edu_degree2: "",
  edu_school2: "",
  edu_date2: "",
  edu_grade2: "",
  edu_degree3: "",
  edu_school3: "",
  edu_date3: "",
  edu_grade3: "",
  project_1_title: "",
  project_1_link: "",
  project_1_date: "",
  project_1_desc: "",
  project_1_time_spent: "",
  project_2_title: "",
  project_2_link: "",
  project_2_date: "",
  project_2_desc: "",
  project_2_time_spent: "",
  skills: "",
};

function TemplateThumbnail({ tpl, selected, onClick }) {
  const a = tpl.accent;
  return (
    <button
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 110,
        cursor: "pointer",
        border: selected ? `2.5px solid ${a}` : "2px solid #e2e8f0",
        borderRadius: 10,
        overflow: "hidden",
        background: "#fff",
        padding: 0,
        boxShadow: selected ? `0 0 0 3px ${a}22` : "0 1px 4px rgba(0,0,0,0.07)",
        transition: "all 0.18s ease",
        outline: "none",
      }}
    >
      <div
        style={{
          height: 78,
          background: tpl.bg,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {tpl.sidebar && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 28,
              background: a,
              opacity: 0.9,
            }}
          />
        )}
        <div style={{ padding: tpl.sidebar ? "6px 5px 6px 33px" : "6px 7px" }}>
          <div
            style={{
              width: "60%",
              height: 5,
              borderRadius: 3,
              background: a,
              marginBottom: 3,
            }}
          />
          <div
            style={{
              width: "40%",
              height: 3,
              borderRadius: 2,
              background: a,
              opacity: 0.4,
              marginBottom: 6,
            }}
          />
          <div
            style={{
              width: "100%",
              height: 2,
              borderRadius: 1,
              background: "#e2e8f0",
              marginBottom: 2,
            }}
          />
          <div
            style={{
              width: "85%",
              height: 2,
              borderRadius: 1,
              background: "#e2e8f0",
              marginBottom: 2,
            }}
          />
          <div
            style={{
              width: "70%",
              height: 2,
              borderRadius: 1,
              background: "#e2e8f0",
              marginBottom: 5,
            }}
          />
          <div
            style={{
              width: "45%",
              height: 3,
              borderRadius: 2,
              background: a,
              opacity: 0.6,
              marginBottom: 3,
            }}
          />
          <div
            style={{
              width: "100%",
              height: 2,
              borderRadius: 1,
              background: "#e2e8f0",
              marginBottom: 2,
            }}
          />
          <div
            style={{
              width: "80%",
              height: 2,
              borderRadius: 1,
              background: "#e2e8f0",
            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: "5px 6px",
          fontSize: 11,
          fontWeight: 600,
          color: selected ? a : "#64748b",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          borderTop: "1px solid #f1f5f9",
        }}
      >
        {tpl.name}
      </div>
    </button>
  );
}

function ResumePreview({ tpl, data }) {
  const a = tpl.accent;
  const name = data.name || "Your Name";
  const title = data.title || "Job Title";
  const email = data.email || "email@example.com";
  const phone = data.phone || "+91 00000 00000";
  const loc = data.location || "City, Country";
  const summary =
    data.summary ||
    "A brief summary about yourself will appear here as you type...";
  const skills = data.skills
    ? data.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : ["Skill 1", "Skill 2", "Skill 3"];

  const labelStyle = {
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: a,
    marginBottom: 3,
    display: "block",
  };
  const secTitle = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: a,
    borderBottom: `1.5px solid ${a}`,
    paddingBottom: 3,
    marginBottom: 7,
    marginTop: 10,
  };
  const lineStyle = { fontSize: 8.5, color: "#475569", lineHeight: 1.5 };
  const metaStyle = { fontSize: 8, color: "#94a3b8", marginTop: 1 };

  if (tpl.sidebar) {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          fontFamily: "Georgia, serif",
          fontSize: 9,
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 120,
            background: a,
            color: "#fff",
            padding: "16px 10px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              margin: "0 auto 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 2,
              color: "#fff",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 8,
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 10,
            }}
          >
            {title}
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: 8,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                fontSize: 7.5,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 3,
              }}
            >
              {email}
            </div>
            <div
              style={{
                fontSize: 7.5,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 3,
              }}
            >
              {phone}
            </div>
            <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.65)" }}>
              {loc}
            </div>
          </div>
          <div
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 5,
            }}
          >
            Skills
          </div>
          {skills.map((s, i) => (
            <div
              key={i}
              style={{
                fontSize: 7.5,
                color: "#fff",
                background: "rgba(255,255,255,0.15)",
                borderRadius: 3,
                padding: "2px 5px",
                marginBottom: 3,
              }}
            >
              {s}
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{ flex: 1, padding: "14px 12px", background: tpl.bg }}>
          <div style={secTitle}>Summary</div>
          <p style={lineStyle}>{summary}</p>
          <div style={secTitle}>Experience</div>
          {(data.exp1_role || data.exp1_company) && (
            <div style={{ marginBottom: 6 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
                {data.exp1_role || "Role"}
              </div>
              <div style={metaStyle}>
                {data.exp1_company || "Company"}{" "}
                {data.exp1_date ? `· ${data.exp1_date}` : ""}
              </div>
              <p style={{ ...lineStyle, marginTop: 2 }}>
                {data.exp1_desc ||
                  "Describe your responsibilities and achievements."}
              </p>
            </div>
          )}
          {(data.exp2_role || data.exp2_company) && (
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
                {data.exp2_role}
              </div>
              <div style={metaStyle}>
                {data.exp2_company}{" "}
                {data.exp2_date ? `· ${data.exp2_date}` : ""}
              </div>
              <p style={{ ...lineStyle, marginTop: 2 }}>{data.exp2_desc}</p>
            </div>
          )}
          <div style={secTitle}>Education</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
            {data.edu_degree || ""}
          </div>
          <div style={metaStyle}>
            {data.edu_school || "University"}{" "}
            {data.edu_date ? `· ${data.edu_date}` : ""}
            {data.edu_grade ? `· Grade: ${data.edu_grade}` : ""}
          </div>

          <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
            {data.edu_degree2 || ""}
          </div>
          <div style={metaStyle}>
            {data.edu_school2 || "University"}{" "}
            {data.edu_date2 ? `· ${data.edu_date2}` : ""}
            {data.edu_grade2 ? `· Grade: ${data.edu_grade2}` : ""}
          </div>

          <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
            {data.edu_degree3 || ""}
          </div>
          <div style={metaStyle}>
            {data.edu_school3 || "University"}{" "}
            {data.edu_date3 ? `· ${data.edu_date3}` : ""}
            {data.edu_grade3 ? `· Grade: ${data.edu_grade3}` : ""}
          </div>
          <div style={secTitle}>projects</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>
            {data.edu_project_1_title || "project"}
          </div>
          <div>{data.edu_project_1_link || "Link "} </div>
          <p style={{ ...lineStyle, marginTop: 2 }}>
            {data.edu_project_1_desc}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        fontSize: 9,
        height: "100%",
        background: tpl.bg,
        padding: "16px 18px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 10,
          paddingBottom: 10,
          borderBottom: `2px solid ${a}`,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: a,
            letterSpacing: "-0.3px",
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 8,
            color: "#94a3b8",
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>{email}</span>
          <span>·</span>
          <span>{phone}</span>
          <span>·</span>
          <span>{loc}</span>
        </div>
      </div>
      {/* Summary */}
      <span style={labelStyle}>Summary</span>
      <p style={lineStyle}>{summary}</p>
      {/* Experience */}

      {/* Education */}
      <div style={secTitle}>Education</div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b" }}>
          {data.edu_degree || ""}
          <span
            style={{ color: a, fontWeight: 400, fontSize: 10, marginLeft: 5 }}
          >
            {data.edu_grade || ""}
          </span>
        </span>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: a }}>
          {data.edu_school || ""}
        </span>
      </div>
      <div
        style={{
          fontSize: 8.5,
          color: a,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{}</span>
        <span style={{ fontSize: 8, color: "#94a3b8" }}>
          {data.edu_date || ""}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b" }}>
          {data.edu_degree2 || ""}
          <span
            style={{ color: a, fontWeight: 400, fontSize: 10, marginLeft: 5 }}
          >
            {data.edu_grade2 || ""}
          </span>
        </span>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: a }}>
          {data.edu_school2 || ""}
        </span>
      </div>
      <div
        style={{
          fontSize: 8.5,
          color: a,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{""}</span>

        <span style={{ fontSize: 8, color: "#94a3b8" }}>
          {data.edu_date2 || ""}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b" }}>
          {data.edu_degree3 || ""}
          <span style={{ fontSize: 9.5,fontWeight:400,marginLeft:5, color: a }}>
            {data.edu_grade3 || ""}
          </span>
        </span>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: a }}>
          {data.edu_school3 || ""}
        </span>
      </div>
      <div
        style={{
          fontSize: 8.5,
          color: a,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{ ""}</span>
        <span style={{ fontSize: 8, color: "#94a3b8" }}>
          {data.edu_date3 || ""}
        </span>
      </div>
      {/* Projects */}
      <div style={secTitle}>Projects</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b" }}>
          {data.project_1_title || "title 1 "}
        </span>
        <span style={{ fontSize: 8, color: "#94a3b8" }}>
          {data.project_1_link || ""}
        </span>
      </div>
      <p style={lineStyle}>{data.project_1_desc || ""}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b" }}>
          {data.project_2_title || "title 2 "}
        </span>
        <span style={{ fontSize: 8, color: "#94a3b8" }}>
          {data.project_2_link || ""}
        </span>
      </div>
      <p style={lineStyle}>{data.project_2_desc || ""}</p>
      {/* Experience */}
      <div style={secTitle}>Experience</div>

      <div style={{ marginBottom: 7 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#1e293b" }}>
            {data.exp1_role || ""}
            <span style={{ color: a, fontSize: 15, marginLeft: 5 }}>
              {data.exp1_company || ""}
            </span>
          </span>
          <span style={{ fontSize: 8, color: "#94a3b8" }}>
            {data.exp1_date}
          </span>
        </div>
        <div style={{ fontSize: 9.5, color: a, marginBottom: 2 }}></div>
        <p style={lineStyle}>{data.exp1_desc || ""}</p>
      </div>

      <div style={{ marginBottom: 7 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#1e293b" }}>
            {data.exp2_role}
            <span style={{ color: a, fontSize: 15, marginLeft: 5 }}>
              {data.exp2_company || ""}
            </span>
          </span>
          <span style={{ fontSize: 8, color: "#94a3b8" }}>
            {data.exp2_date}
          </span>
        </div>
        <div style={{ fontSize: 9.5, color: a, marginBottom: 2 }}></div>
        <p style={lineStyle}>{data.exp2_desc}</p>
      </div>

      {/* Skills */}
      <div style={secTitle}>Skills</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {skills.map((s, i) => (
          <span
            key={i}
            style={{
              fontSize: 8,
              background: `${a}18`,
              color: a,
              border: `1px solid ${a}33`,
              borderRadius: 4,
              padding: "2px 6px",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

const Resume = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [data, setData] = useState(EMPTY);
  const sliderRef = useRef(null);

  const tpl = TEMPLATES.find((t) => t.id === selectedId);
  const a = tpl.accent;

  const set = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }));

  const scroll = (dir) => {
    if (sliderRef.current)
      sliderRef.current.scrollBy({ left: dir * 100, behavior: "smooth" });
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 11px",
    fontSize: 13,
    border: "1.5px solid #e2e8f0",
    borderRadius: 8,
    outline: "none",
    fontFamily: "system-ui, sans-serif",
    color: "#1e293b",
    background: "#fff",
    transition: "border-color 0.15s",
  };
  const labelCss = {
    fontSize: 11,
    fontWeight: 600,
    color: "#64748b",
    marginBottom: 4,
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  };
  const sectionHead = {
    fontSize: 12,
    fontWeight: 700,
    color: a,
    borderBottom: `2px solid ${a}`,
    paddingBottom: 6,
    marginBottom: 14,
    marginTop: 20,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  };

  return (
    <div className="mx-auto flex min-h-screen w-[min(1280px,94%)] flex-col justify-center rounded-lg bg-linear-to-br from-gray-900 via-gray-800 to-black pb-5 font-sans max-[680px]:w-[min(1280px,96%)] max-[680px]:py-6 max-[680px]:pb-10 max-[480px]:w-full max-[480px]:px-0 max-[480px]:py-4">
      {/* Step 1: Template slider */}
      <div className="border-b border-slate-200 px-7 py-4">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
          Step 1 — Choose a template
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => scroll(-1)}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-slate-200 bg-white text-base text-slate-500"
          >
            ‹
          </button>
          <div
            ref={sliderRef}
            className="flex flex-1 gap-3 overflow-x-auto pb-1 pt-0.5 [scrollbar-width:none]"
          >
            {TEMPLATES.map((t) => (
              <TemplateThumbnail
                key={t.id}
                tpl={t}
                selected={selectedId === t.id}
                onClick={() => setSelectedId(t.id)}
              />
            ))}
          </div>
          <button
            onClick={() => scroll(1)}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-slate-200 bg-white text-base text-slate-500"
          >
            ›
          </button>
        </div>
      </div>

      {/* Step 2: Editor + Preview */}
      <div className="m-4 flex flex-col lg:flex-row  gap-4 ">
        {/* Left: Input form */}
        <div className="w-full overflow-y-auto rounded-lg border-2 border-slate-200 bg-white p-5 lg:w-1/2 lg:max-h-[calc(110vh-10px)]">
          <div className="text-sm font-bold text-slate-900">
            Step 2 — Fill in your details
          </div>
          <div className="mb-4.5 text-xs text-slate-400">
            Your resume updates live as you type
          </div>
          {/* Personal */}
          <div style={sectionHead}>Personal Info</div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label style={labelCss}>Full name</label>
              <input
                style={inputStyle}
                placeholder="John Doe"
                value={data.name}
                onChange={set("name")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Job title</label>
              <input
                style={inputStyle}
                placeholder="Software Engineer"
                value={data.title}
                onChange={set("title")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Email</label>
              <input
                style={inputStyle}
                placeholder="john@email.com"
                value={data.email}
                onChange={set("email")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Phone</label>
              <input
                style={inputStyle}
                placeholder="+91 98765 43210"
                value={data.phone}
                onChange={set("phone")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Location</label>
              <input
                style={inputStyle}
                placeholder="Hyderabad, India"
                value={data.location}
                onChange={set("location")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          {/* Summary */}
          <div style={sectionHead}>Summary</div>
          <textarea
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Write a short professional summary..."
            value={data.summary}
            onChange={set("summary")}
            onFocus={(e) => (e.target.style.borderColor = a)}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
          />
          {/* Education */}
          <div style={sectionHead}>Education</div>
          <div className="mb-3 flex flex-col gap-3">
            <div>
              <label style={labelCss}>Degree</label>
              <input
                style={inputStyle}
                placeholder="B.Tech Computer Science"
                value={data.edu_degree}
                onChange={set("edu_degree")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>School / University</label>
              <input
                style={inputStyle}
                placeholder="Osmania University"
                value={data.edu_school}
                onChange={set("edu_school")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Year</label>
              <input
                style={inputStyle}
                placeholder="2018 – 2022"
                value={data.edu_date}
                onChange={set("edu_date")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>CGPA</label>
              <input
                style={inputStyle}
                placeholder="8.5"
                value={data.edu_grade}
                onChange={set("edu_grade")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          <div style={sectionHead}>Education2</div>
          <div className="mb-3 flex flex-col gap-3">
            <div>
              <label style={labelCss}>Degree</label>
              <input
                style={inputStyle}
                placeholder="B.Tech Computer Science"
                value={data.edu_degree2}
                onChange={set("edu_degree2")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>School / University</label>
              <input
                style={inputStyle}
                placeholder="Osmania University"
                value={data.edu_school2}
                onChange={set("edu_school2")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Year</label>
              <input
                style={inputStyle}
                placeholder="2018 – 2022"
                value={data.edu_date2}
                onChange={set("edu_date2")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Marks</label>
              <input
                style={inputStyle}
                type="number"
                placeholder="975/1000"
                value={data.edu_grade2}
                onChange={set("edu_grade2")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          <div style={sectionHead}>Education3</div>
          <div className="mb-3 flex flex-col gap-3">
            <div>
              <label style={labelCss}>Degree</label>
              <input
                style={inputStyle}
                placeholder="B.Tech Computer Science"
                value={data.edu_degree3}
                onChange={set("edu_degree3")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>School / University</label>
              <input
                style={inputStyle}
                placeholder="Osmania University"
                value={data.edu_school3}
                onChange={set("edu_school3")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Year</label>
              <input
                style={inputStyle}
                placeholder="2018 – 2022"
                value={data.edu_date3}
                onChange={set("edu_date3")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>GPA</label>
              <input
                style={inputStyle}
                placeholder="10/10"
                value={data.edu_grade3}
                onChange={set("edu_grade3")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          {/* projects */}
          {/* project 1  */}
          <div style={sectionHead}>Project 1</div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label style={labelCss}>Title</label>
                <input
                style={inputStyle}
                placeholder="Title goes here..."
                value={data.project_1_title}
                onChange={set("project_1_title")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>time spent</label>
              <input
                style={inputStyle}
                placeholder="4 Months.."
                value={data.project_1_time_spent}
                onChange={set("project_1_time_spent")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Demo Link</label>
              <input
                style={inputStyle}
                placeholder="https://demo-project.com"
                value={data.project_1_link}
                onChange={set("project_1_link")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Description</label>
              <textarea
                rows={2}
                  style={{ ...inputStyle, resize: "vertical" }}
                placeholder="What did you build or achieve?"
                value={data.project_1_desc}
                onChange={set("project_1_desc")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          {/* Project 2 */}
          <div style={sectionHead}>Project 2</div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label style={labelCss}>Title</label>
                <input
                style={inputStyle}
                placeholder="Title goes here..."
                value={data.project_2_title}
                onChange={set("project_2_title")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Time spent</label>
              <input
                style={inputStyle}
                placeholder="4 Months.."
                value={data.project_2_time_spent}
                onChange={set("project_2_time_spent")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            <div className="col-span-2">
              <label style={labelCss}>Demo link</label>
              <input
                style={inputStyle}
                placeholder="https://demo-project.com"
                value={data.project_2_link}
                onChange={set("project_2_link")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Description</label>
              <textarea
                rows={2}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="Key responsibilities and wins"
                value={data.project_2_desc}
                onChange={set("project_2_desc")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>{" "}
          {/* Experience 1 */}
          <div style={sectionHead}>Experience 1</div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label style={labelCss}>Role</label>
                <input
                style={inputStyle}
                placeholder="Frontend Developer"
                value={data.exp1_role}
                onChange={set("exp1_role")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Company</label>
              <input
                style={inputStyle}
                placeholder="Acme Corp"
                value={data.exp1_company}
                onChange={set("exp1_company")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Date range</label>
              <input
                style={inputStyle}
                placeholder="Jan 2022 – Present"
                value={data.exp1_date}
                onChange={set("exp1_date")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Description</label>
              <textarea
                rows={2}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="What did you build or achieve?"
                value={data.exp1_desc}
                onChange={set("exp1_desc")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          {/* Experience 2 */}
          <div style={sectionHead}>Experience 2</div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label style={labelCss}>Role</label>
                <input
                style={inputStyle}
                placeholder="Junior Developer"
                value={data.exp2_role}
                onChange={set("exp2_role")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div>
              <label style={labelCss}>Company</label>
              <input
                style={inputStyle}
                placeholder="Startup Inc."
                value={data.exp2_company}
                onChange={set("exp2_company")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Date range</label>
              <input
                style={inputStyle}
                placeholder="Jun 2020 – Dec 2021"
                value={data.exp2_date}
                onChange={set("exp2_date")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
            <div className="col-span-2">
              <label style={labelCss}>Description</label>
              <textarea
                rows={2}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="Key responsibilities and wins"
                value={data.exp2_desc}
                onChange={set("exp2_desc")}
                onFocus={(e) => (e.target.style.borderColor = a)}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          </div>
          {/* Skills */}
          <div style={sectionHead}>Skills</div>
          <div>
            <label style={labelCss}>Skills (comma separated)</label>
              <input
              style={inputStyle}
              placeholder="React, TypeScript, Node.js, Figma"
              value={data.skills}
              onChange={set("skills")}
              onFocus={(e) => (e.target.style.borderColor = a)}
              onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
            />
          </div>
        </div>

        {/* Right: Live preview */}
          <div className="flex flex-col gap-3 w-full rounded-lg bg-white p-6 lg:w-1/2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="text-sm font-bold text-slate-900">
                Live Preview
              </div>
              <div className="text-xs text-slate-400">
                Template:{" "}
                <span style={{ color: a, fontWeight: 600 }}>{tpl.name}</span>
              </div>
              <button
                className="cursor-pointer self-end rounded-lg border-none px-5 py-2 text-[13px] font-semibold text-white"
                style={{ background: a }}
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* A4 paper preview */}
          <div className="h-100vh min-h-120 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
            <ResumePreview tpl={tpl} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
