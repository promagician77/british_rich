"use client";

import { useState, useRef } from "react";
import {
  PIPELINE_STEPS,
  TABS,
  generateFallbackContent,
  type ContentData,
  type TabId,
} from "./data";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { StatsBar } from "./components/StatsBar";
import { IntakeForm } from "./components/IntakeForm";
import { PipelineView } from "./components/PipelineView";
import { ContentTabs } from "./components/ContentTabs";
import { ApprovalBar } from "./components/ApprovalBar";
import { PublishedView } from "./components/PublishedView";

export default function Home() {
  const [phase, setPhase] = useState<
    "intake" | "pipeline" | "content" | "published"
  >("intake");
  const [content, setContent] = useState<ContentData | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("len");
  const [stats, setStats] = useState({ props: 0, posts: 0, leads: 0 });
  const formRef = useRef<Record<string, string>>({});

  const handleSubmit = async (formData: Record<string, string>) => {
    formRef.current = formData;
    setPhase("pipeline");
  };

  const handlePipelineComplete = () => {
    const data = generateFallbackContent(formRef.current);
    setContent(data);
    setStats((s) => ({ ...s, props: s.props + 1 }));
    setPhase("content");
  };

  const handleApprove = () => {
    setStats((s) => ({ ...s, posts: s.posts + 4 }));
    setPhase("published");
  };

  const handleReset = () => {
    setPhase("intake");
    setContent(null);
    setActiveTab("len");
  };

  return (
    <>
      <div className="bg-mesh" />
      <div className="layout">
        <Sidebar />
        <div className="main-area">
          <Topbar />
          <StatsBar stats={stats} />
          <div className="content-scroll">
            <div className="container">
              {phase === "intake" && (
                <IntakeForm onSubmit={handleSubmit} />
              )}

              {phase === "pipeline" && (
                <PipelineView
                  steps={PIPELINE_STEPS}
                  onComplete={handlePipelineComplete}
                />
              )}

              {phase === "content" && content && (
                <>
                  <ContentTabs
                    tabs={TABS}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    content={content}
                  />
                  <ApprovalBar
                    onApprove={handleApprove}
                  />
                </>
              )}

              {phase === "published" && (
                <PublishedView onReset={handleReset} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
