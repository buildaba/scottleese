'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { PlatformStore } from '@/lib/store';

type AdminTab =
  | 'overview'
  | 'advisory'
  | 'talent'
  | 'events_media'
  | 'cms'
  | 'subscribers';

const ARTICLE_CATEGORIES = [
  'Tactical Advice',
  'Leadership',
  'Strategy',
  'Personal Growth',
  'Being an Individual Contributor',
  'Career Paths',
  'News',
];

export default function AdminDashboardPage() {
  const [store, setStore] = useState<PlatformStore | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [talentSubTab, setTalentSubTab] = useState<'employers' | 'candidates'>('employers');

  // CMS Editor State
  const [cmsTitle, setCmsTitle] = useState('');
  const [cmsCategory, setCmsCategory] = useState('Tactical Advice');
  const [cmsExcerpt, setCmsExcerpt] = useState('');
  const [cmsBody, setCmsBody] = useState('');
  const [cmsPublishing, setCmsPublishing] = useState(false);
  const [cmsSuccessSlug, setCmsSuccessSlug] = useState<string | null>(null);

  const fetchStore = useCallback(async () => {
    try {
      const res = await fetch('/api/admin', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setStore(data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  const updateStatus = async (collection: string, id: string, status: string) => {
    const res = await fetch('/api/admin', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ collection, id, status }),
    });
    if (res.ok) {
      const data = await res.json();
      setStore(data.store);
    }
  };

  const deleteItem = async (collection: string, id: string) => {
    const res = await fetch(
      `/api/admin?collection=${encodeURIComponent(collection)}&id=${encodeURIComponent(id)}`,
      { method: 'DELETE' }
    );
    if (res.ok) {
      const data = await res.json();
      setStore(data.store);
    }
  };

  const handlePublishArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setCmsPublishing(true);
    setCmsSuccessSlug(null);
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'publish_article',
          title: cmsTitle,
          category: cmsCategory,
          excerpt: cmsExcerpt,
          body: cmsBody,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setStore(data.store);
        setCmsSuccessSlug(data.article.slug);
        setCmsTitle('');
        setCmsExcerpt('');
        setCmsBody('');
      }
    } finally {
      setCmsPublishing(false);
    }
  };

  const exportCsv = (filename: string, rows: Record<string, unknown>[]) => {
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    const csvContent = [
      headers.join(','),
      ...rows.map((r) =>
        headers
          .map((h) => {
            const val = r[h];
            const str = Array.isArray(val) ? val.join('; ') : String(val ?? '');
            return `"${str.replace(/"/g, '""')}"`;
          })
          .join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading || !store) {
    return (
      <div className="min-h-screen bg-[#fcfaf8] pt-36 px-6 text-center text-[#111111]">
        <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50">
          Loading Executive Command Center...
        </div>
      </div>
    );
  }

  const totalSpeakingMediaPodcast =
    store.speakingLeads.length + store.mediaLeads.length + store.podcastLeads.length;

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#111111] pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-medium mb-4">
              <span>Scott Leese Consulting</span>
              <span className="text-white/40">&bull;</span>
              <span>Executive Command Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#111111]">
              Platform Admin &amp; Lead Desk
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={fetchStore}
              className="shrink-0 whitespace-nowrap px-4 py-2.5 border border-black/15 hover:border-[#111111] bg-white text-xs uppercase tracking-[0.18em] font-medium text-[#111111] cursor-pointer transition-colors"
            >
              Refresh Data ↻
            </button>
            <Link
              href="/blog"
              className="shrink-0 whitespace-nowrap px-4 py-2.5 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              View Live Site &rarr;
            </Link>
          </div>
        </div>

        {/* KPI Pulse Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-black/10 border border-black/10 my-8">
          <button
            type="button"
            onClick={() => setActiveTab('advisory')}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {store.advisoryLeads.length}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              Advisory Leads
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('talent');
              setTalentSubTab('employers');
            }}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {store.talentEmployers.length}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              Companies Hiring
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('talent');
              setTalentSubTab('candidates');
            }}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {store.talentCandidates.length}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              Bench Candidates
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('events_media')}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {totalSpeakingMediaPodcast}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              Speaking &amp; Media
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('subscribers')}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {store.subscribers.length}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              New Subscribers
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cms')}
            className="bg-[#fcfaf8] hover:bg-[#f5f4ef] p-5 text-left transition-colors cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-serif text-[#111111]">
              {153 + store.customArticles.length}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/55 font-medium mt-1">
              Published Essays
            </div>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-black/15 mb-10 no-scrollbar">
          {[
            { id: 'overview', label: '01. Overview' },
            { id: 'advisory', label: `02. Advisory Leads (${store.advisoryLeads.length})` },
            {
              id: 'talent',
              label: `03. Talent Bench CRM (${store.talentEmployers.length + store.talentCandidates.length})`,
            },
            {
              id: 'events_media',
              label: `04. Speaking & Media (${totalSpeakingMediaPodcast})`,
            },
            { id: 'cms', label: '05. Publish Essay (CMS)' },
            { id: 'subscribers', label: `06. Subscribers (${store.subscribers.length})` },
          ].map((t) => {
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as AdminTab)}
                className={`shrink-0 whitespace-nowrap px-5 py-3.5 text-xs uppercase tracking-[0.18em] font-medium border-b-2 transition-colors cursor-pointer ${
                  active
                    ? 'border-[#111111] text-[#111111] bg-[#f5f4ef]'
                    : 'border-transparent text-[#111111]/55 hover:text-[#111111]'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="border border-black/10 bg-white p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-2">
                  Live Pipeline &amp; Desk Status
                </div>
                <h2 className="text-2xl font-serif text-[#111111] mb-4">
                  Every Form on scottleese.com Feeds Here Automatically
                </h2>
                <p className="text-sm text-[#111111]/65 font-light leading-relaxed mb-6">
                  All 7 intake forms across Advisory, The SLC Talent Bench (Employers &amp; Candidates), Speaking, Media Kit Sponsorships, Podcasts, and The Leese Effect Newsletter are wired directly into this command center.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/10 text-sm">
                  <div className="p-4 bg-[#fcfaf8] border border-black/10">
                    <div className="font-serif text-lg text-[#111111] mb-1">
                      Advisory &amp; RevOps Desk
                    </div>
                    <p className="text-xs text-[#111111]/60 font-light mb-3">
                      Captures $3K Starter, $5K RevOps, $10K Complete, and Surf &amp; Sales B2B buyout inquiries.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab('advisory')}
                      className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] hover:text-[#d9534f] cursor-pointer"
                    >
                      Open Advisory Inbox &rarr;
                    </button>
                  </div>

                  <div className="p-4 bg-[#fcfaf8] border border-black/10">
                    <div className="font-serif text-lg text-[#111111] mb-1">
                      SLC Talent Bench Matchmaking
                    </div>
                    <p className="text-xs text-[#111111]/60 font-light mb-3">
                      Match founders hiring AEs/VPs with operators applying from Scott&apos;s 406.5K+ network.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab('talent')}
                      className="text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] hover:text-[#d9534f] cursor-pointer"
                    >
                      Open Talent Bench CRM &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="border border-black/10 bg-[#f5f4ef] p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/50 font-medium mb-2">
                  Quick Publishing
                </div>
                <h3 className="text-2xl font-serif text-[#111111] mb-3">
                  Publish a New Thursday Dispatch
                </h3>
                <p className="text-xs text-[#111111]/65 font-light leading-relaxed mb-6">
                  Have a new edition of The Leese Effect or a new tactical essay? Publish it directly to the top of `/blog` in 10 seconds without touching code.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('cms')}
                  className="w-full py-3.5 px-6 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                >
                  Write &amp; Publish New Essay &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADVISORY LEADS */}
        {activeTab === 'advisory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif text-[#111111]">
                  Advisory, RevOps &amp; Retainer Inquiries
                </h2>
                <p className="text-xs text-[#111111]/60 font-light">
                  Submissions from the `/advisory` Get Started form ($3K Starter, $5K RevOps, $10K Complete, and Surf &amp; Sales B2B Buyouts).
                </p>
              </div>
              {store.advisoryLeads.length > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    exportCsv(
                      'slc-advisory-leads.csv',
                      store.advisoryLeads as unknown as Record<string, unknown>[]
                    )
                  }
                  className="shrink-0 whitespace-nowrap px-4 py-2.5 border border-black/20 hover:border-[#111111] bg-white text-xs uppercase tracking-[0.18em] font-medium cursor-pointer"
                >
                  Export CSV ↓
                </button>
              )}
            </div>

            {store.advisoryLeads.length === 0 ? (
              <div className="border border-black/10 bg-white p-12 text-center">
                <p className="font-serif text-xl text-[#111111] mb-2">No advisory leads yet</p>
                <p className="text-xs text-[#111111]/55 font-light">
                  Test the form on `/advisory#contact` and your submission will appear here immediately.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {store.advisoryLeads.map((lead) => (
                  <div key={lead.id} className="border border-black/15 bg-white p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xl font-serif text-[#111111]">{lead.name}</span>
                          <span className="text-xs text-[#111111]/50">&bull;</span>
                          <span className="text-sm font-medium text-[#111111]">{lead.company}</span>
                          {lead.arr && (
                            <span className="text-xs text-[#111111]/60 font-light">({lead.arr})</span>
                          )}
                        </div>
                        <div className="text-xs text-[#111111]/55 mt-1">
                          {lead.email} {lead.role ? ` • LinkedIn: ${lead.role}` : ''} •{' '}
                          {new Date(lead.createdAt).toLocaleString()}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus('advisoryLeads', lead.id, e.target.value)}
                          className="px-3 py-1.5 text-xs uppercase tracking-[0.15em] border border-black/20 bg-[#fcfaf8] text-[#111111]"
                        >
                          <option value="new">Status: New</option>
                          <option value="contacted">Status: Contacted</option>
                          <option value="in_pipeline">Status: In Pipeline</option>
                          <option value="archived">Status: Archived</option>
                        </select>
                        <a
                          href={`mailto:${lead.email}?subject=Re:%20Scott%20Leese%20Consulting%20%E2%80%94%20${encodeURIComponent(lead.company)}`}
                          className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em] font-medium"
                        >
                          Reply ↗
                        </a>
                        <button
                          type="button"
                          onClick={() => deleteItem('advisoryLeads', lead.id)}
                          className="text-xs text-[#111111]/40 hover:text-[#d9534f] px-2 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {lead.interests?.length > 0 && (
                      <div className="flex flex-wrap gap-2 my-4">
                        {lead.interests.map((interest) => (
                          <span
                            key={interest}
                            className="px-2.5 py-1 bg-[#f5f4ef] border border-black/10 text-[11px] uppercase tracking-[0.15em] font-medium text-[#111111]"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    )}

                    {lead.message && (
                      <p className="text-sm text-[#111111]/80 font-light leading-relaxed mt-3 whitespace-pre-wrap">
                        {lead.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: THE SLC TALENT BENCH CRM */}
        {activeTab === 'talent' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTalentSubTab('employers')}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium border cursor-pointer transition-colors ${
                    talentSubTab === 'employers'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-black/15'
                  }`}
                >
                  Companies Hiring ({store.talentEmployers.length})
                </button>
                <button
                  type="button"
                  onClick={() => setTalentSubTab('candidates')}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium border cursor-pointer transition-colors ${
                    talentSubTab === 'candidates'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-black/15'
                  }`}
                >
                  Candidate Bench Pool ({store.talentCandidates.length})
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  talentSubTab === 'employers'
                    ? exportCsv(
                        'slc-talent-employers.csv',
                        store.talentEmployers as unknown as Record<string, unknown>[]
                      )
                    : exportCsv(
                        'slc-talent-candidates.csv',
                        store.talentCandidates as unknown as Record<string, unknown>[]
                      )
                }
                className="shrink-0 whitespace-nowrap px-4 py-2.5 border border-black/20 hover:border-[#111111] bg-white text-xs uppercase tracking-[0.18em] font-medium cursor-pointer"
              >
                Export {talentSubTab === 'employers' ? 'Employers' : 'Candidates'} CSV ↓
              </button>
            </div>

            {talentSubTab === 'employers' ? (
              store.talentEmployers.length === 0 ? (
                <div className="border border-black/10 bg-white p-12 text-center">
                  <p className="font-serif text-xl text-[#111111] mb-2">
                    No employer hiring requests yet
                  </p>
                  <p className="text-xs text-[#111111]/55 font-light">
                    When founders submit Door 01 on `/talent`, their hiring brief appears here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {store.talentEmployers.map((emp) => (
                    <div key={emp.id} className="border border-black/15 bg-white p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/10">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xl font-serif text-[#111111]">{emp.company}</span>
                            <span className="px-2.5 py-0.5 bg-[#f5f4ef] border border-black/10 text-xs font-medium">
                              {emp.arrStage}
                            </span>
                          </div>
                          <div className="text-xs text-[#111111]/60 mt-1">
                            {emp.name} ({emp.email}) • {emp.website} • LinkedIn: {emp.linkedin}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <select
                            value={emp.status}
                            onChange={(e) =>
                              updateStatus('talentEmployers', emp.id, e.target.value)
                            }
                            className="px-3 py-1.5 text-xs uppercase tracking-[0.15em] border border-black/20 bg-[#fcfaf8]"
                          >
                            <option value="new">New</option>
                            <option value="matching">Matching</option>
                            <option value="introduced">Introduced</option>
                            <option value="archived">Archived</option>
                          </select>
                          <a
                            href={`mailto:${emp.email}?subject=The%20SLC%20Talent%20Bench%20%E2%80%94%20${encodeURIComponent(emp.company)}`}
                            className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em] font-medium"
                          >
                            Email Founder ↗
                          </a>
                          <button
                            type="button"
                            onClick={() => deleteItem('talentEmployers', emp.id)}
                            className="text-xs text-[#111111]/40 hover:text-[#d9534f] px-2 cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      {emp.rolesNeeded?.length > 0 && (
                        <div className="flex flex-wrap gap-2 my-4">
                          {emp.rolesNeeded.map((r) => (
                            <span
                              key={r}
                              className="px-2.5 py-1 bg-[#111111] text-white text-[11px] uppercase tracking-[0.15em]"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      )}

                      {emp.notes && (
                        <p className="text-sm text-[#111111]/75 font-light mt-2 whitespace-pre-wrap">
                          {emp.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )
            ) : store.talentCandidates.length === 0 ? (
              <div className="border border-black/10 bg-white p-12 text-center">
                <p className="font-serif text-xl text-[#111111] mb-2">
                  No candidate profiles submitted yet
                </p>
                <p className="text-xs text-[#111111]/55 font-light">
                  When operators apply via Door 02 on `/talent`, their confidential profile lands here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {store.talentCandidates.map((cand) => (
                  <div key={cand.id} className="border border-black/15 bg-white p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xl font-serif text-[#111111]">{cand.name}</span>
                          <span className="px-2.5 py-0.5 bg-[#111111] text-white text-[11px] uppercase tracking-[0.15em]">
                            {cand.roleTrack}
                          </span>
                        </div>
                        <div className="text-xs text-[#111111]/60 mt-1">
                          {cand.email} • LinkedIn: {cand.linkedin} • Stage/ACV: {cand.acvRange} • Comp:{' '}
                          {cand.compExpectation}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={cand.status}
                          onChange={(e) =>
                            updateStatus('talentCandidates', cand.id, e.target.value)
                          }
                          className="px-3 py-1.5 text-xs uppercase tracking-[0.15em] border border-black/20 bg-[#fcfaf8]"
                        >
                          <option value="new">New</option>
                          <option value="vetted">Vetted</option>
                          <option value="introduced">Introduced</option>
                          <option value="archived">Archived</option>
                        </select>
                        <a
                          href={`mailto:${cand.email}?subject=The%20SLC%20Talent%20Bench%20%E2%80%94%20Confidential%20Role%20Match`}
                          className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em] font-medium"
                        >
                          Contact Candidate ↗
                        </a>
                        <button
                          type="button"
                          onClick={() => deleteItem('talentCandidates', cand.id)}
                          className="text-xs text-[#111111]/40 hover:text-[#d9534f] px-2 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/45 font-semibold mb-1">
                        Quota &amp; Operator Track Record
                      </div>
                      <p className="text-sm text-[#111111]/80 font-light whitespace-pre-wrap">
                        {cand.quotaRecord}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: SPEAKING, MEDIA & PODCAST */}
        {activeTab === 'events_media' && (
          <div className="space-y-10">
            {/* Speaking */}
            <div>
              <h2 className="text-2xl font-serif text-[#111111] mb-4">
                Speaking &amp; Keynote Inquiries ({store.speakingLeads.length})
              </h2>
              {store.speakingLeads.length === 0 ? (
                <div className="border border-black/10 bg-white p-8 text-sm text-[#111111]/55 font-light">
                  No speaking requests yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {store.speakingLeads.map((spk) => (
                    <div key={spk.id} className="border border-black/15 bg-white p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="text-lg font-serif text-[#111111]">
                            {spk.organization} — {spk.name} ({spk.email})
                          </div>
                          <div className="text-xs text-[#111111]/60 mt-1">
                            Type: {spk.eventType || 'N/A'} • Date: {spk.eventDate || 'TBD'} • Size:{' '}
                            {spk.audienceSize || 'N/A'} • Budget: {spk.budgetRange || 'N/A'}
                          </div>
                        </div>
                        <a
                          href={`mailto:${spk.email}?subject=Scott%20Leese%20Speaking%20Inquiry%20%E2%80%94%20${encodeURIComponent(spk.organization)}`}
                          className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em]"
                        >
                          Reply ↗
                        </a>
                      </div>
                      {spk.details && (
                        <p className="text-sm text-[#111111]/75 font-light mt-3">{spk.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Media Sponsorships */}
            <div>
              <h2 className="text-2xl font-serif text-[#111111] mb-4">
                Media &amp; Brand Sponsorship Inquiries ({store.mediaLeads.length})
              </h2>
              {store.mediaLeads.length === 0 ? (
                <div className="border border-black/10 bg-white p-8 text-sm text-[#111111]/55 font-light">
                  No media sponsorship inquiries yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {store.mediaLeads.map((med) => (
                    <div key={med.id} className="border border-black/15 bg-white p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="text-lg font-serif text-[#111111]">
                            {med.company} — {med.name} ({med.email})
                          </div>
                          <div className="text-xs text-[#111111]/60 mt-1">
                            Package: {med.packageInterest || 'N/A'} • Budget:{' '}
                            {med.budgetRange || 'N/A'}
                          </div>
                        </div>
                        <a
                          href={`mailto:${med.email}?subject=Scott%20Leese%202026%20Brand%20Partnership%20%E2%80%94%20${encodeURIComponent(med.company)}`}
                          className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em]"
                        >
                          Reply ↗
                        </a>
                      </div>
                      {med.message && (
                        <p className="text-sm text-[#111111]/75 font-light mt-3">{med.message}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Podcast Pitches */}
            <div>
              <h2 className="text-2xl font-serif text-[#111111] mb-4">
                Podcast Guest &amp; Story Pitches ({store.podcastLeads.length})
              </h2>
              {store.podcastLeads.length === 0 ? (
                <div className="border border-black/10 bg-white p-8 text-sm text-[#111111]/55 font-light">
                  No podcast pitches yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {store.podcastLeads.map((pod) => (
                    <div key={pod.id} className="border border-black/15 bg-white p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="text-lg font-serif text-[#111111]">
                          {pod.name} ({pod.email})
                        </div>
                        <a
                          href={`mailto:${pod.email}?subject=Re:%20Podcast%20Inquiry`}
                          className="shrink-0 whitespace-nowrap px-4 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.15em]"
                        >
                          Reply ↗
                        </a>
                      </div>
                      <p className="text-sm text-[#111111]/75 font-light mt-3">{pod.story}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: PUBLISH ESSAY (CMS) */}
        {activeTab === 'cms' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="border border-black/15 bg-white p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-2">
                  The Leese Effect &amp; Field Notes CMS
                </div>
                <h2 className="text-3xl font-serif text-[#111111] mb-6">
                  Publish a New Essay or Newsletter Issue
                </h2>

                {cmsSuccessSlug && (
                  <div className="mb-8 p-5 bg-[#f5f4ef] border border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111]">
                        Dispatch Published Live
                      </div>
                      <div className="text-sm text-[#111111]/70 font-light mt-1">
                        Your article is now live at the top of `/blog`.
                      </div>
                    </div>
                    <Link
                      href={`/blog/${cmsSuccessSlug}`}
                      className="shrink-0 whitespace-nowrap px-5 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-[0.18em] font-medium"
                    >
                      View Published Essay &rarr;
                    </Link>
                  </div>
                )}

                <form onSubmit={handlePublishArticle} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={cmsTitle}
                        onChange={(e) => setCmsTitle(e.target.value)}
                        placeholder="e.g., How to Audit Your Pipeline Before Q3"
                        className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                        Category *
                      </label>
                      <select
                        value={cmsCategory}
                        onChange={(e) => setCmsCategory(e.target.value)}
                        className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                      >
                        {ARTICLE_CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                      Short Summary / Excerpt (Optional — auto-generated if blank)
                    </label>
                    <input
                      type="text"
                      value={cmsExcerpt}
                      onChange={(e) => setCmsExcerpt(e.target.value)}
                      placeholder="1–2 sentence hook shown on the Field Notes archive card..."
                      className="w-full bg-transparent border-b border-black/20 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#111111]/60 mb-2">
                      Article Body * (Plain text paragraphs, `## Headings`, or HTML)
                    </label>
                    <textarea
                      required
                      rows={12}
                      value={cmsBody}
                      onChange={(e) => setCmsBody(e.target.value)}
                      placeholder="Paste your newsletter issue or essay here. Separate paragraphs with a blank line. Use ## Heading for section titles..."
                      className="w-full bg-[#fcfaf8] border border-black/15 p-4 text-[#111111] focus:outline-none focus:border-[#111111] font-light leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={cmsPublishing}
                    className="w-full py-4 px-8 bg-[#111111] hover:bg-[#333333] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                  >
                    {cmsPublishing ? 'Publishing...' : 'Publish Dispatch Live to /blog →'}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="border border-black/10 bg-white p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#111111]/45 font-medium mb-2">
                  Custom Published Dispatches ({store.customArticles.length})
                </div>
                <p className="text-xs text-[#111111]/60 font-light mb-4">
                  In addition to the 153 historical editions in the archive, any dispatches published here appear at the top of `/blog`.
                </p>

                {store.customArticles.length === 0 ? (
                  <div className="text-xs text-[#111111]/45 italic py-4 border-t border-black/10">
                    No custom dispatches published yet.
                  </div>
                ) : (
                  <div className="divide-y divide-black/10 border-t border-black/10">
                    {store.customArticles.map((art) => (
                      <div key={art.slug} className="py-3 flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/blog/${art.slug}`}
                            className="text-sm font-serif text-[#111111] hover:underline"
                          >
                            {art.title}
                          </Link>
                          <div className="text-[11px] text-[#111111]/50">
                            {art.category} • {art.date}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => deleteItem('customArticles', art.slug)}
                          className="text-xs text-[#111111]/40 hover:text-[#d9534f] cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: NEWSLETTER SUBSCRIBERS */}
        {activeTab === 'subscribers' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif text-[#111111]">
                  The Leese Effect — Newsletter Subscribers ({store.subscribers.length})
                </h2>
                <p className="text-xs text-[#111111]/60 font-light">
                  Every email captured across `/newsletter`, `/blog`, and article footers.
                </p>
              </div>
              {store.subscribers.length > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    exportCsv(
                      'the-leese-effect-subscribers.csv',
                      store.subscribers as unknown as Record<string, unknown>[]
                    )
                  }
                  className="shrink-0 whitespace-nowrap px-4 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-[0.18em] font-medium cursor-pointer"
                >
                  Export Subscribers CSV ↓
                </button>
              )}
            </div>

            {store.subscribers.length === 0 ? (
              <div className="border border-black/10 bg-white p-12 text-center">
                <p className="font-serif text-xl text-[#111111] mb-2">
                  No new subscribers captured yet
                </p>
                <p className="text-xs text-[#111111]/55 font-light">
                  Enter an email on `/newsletter` or `/blog` to test live capture.
                </p>
              </div>
            ) : (
              <div className="border border-black/15 bg-white divide-y divide-black/10">
                {store.subscribers.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 px-6 flex items-center justify-between text-sm"
                  >
                    <div>
                      <span className="font-medium text-[#111111]">{sub.email}</span>
                      <span className="text-xs text-[#111111]/45 ml-3">
                        {new Date(sub.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteItem('subscribers', sub.id)}
                      className="text-xs text-[#111111]/40 hover:text-[#d9534f] cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
