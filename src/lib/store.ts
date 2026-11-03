import fs from 'fs';
import path from 'path';

export interface AdvisoryLead {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  arr: string;
  interests: string[];
  message: string;
  status: 'new' | 'contacted' | 'in_pipeline' | 'archived';
  createdAt: string;
}

export interface TalentEmployerLead {
  id: string;
  company: string;
  website: string;
  name: string;
  email: string;
  linkedin: string;
  arrStage: string;
  rolesNeeded: string[];
  notes: string;
  status: 'new' | 'matching' | 'introduced' | 'archived';
  createdAt: string;
}

export interface TalentCandidateLead {
  id: string;
  name: string;
  email: string;
  linkedin: string;
  roleTrack: string;
  acvRange: string;
  quotaRecord: string;
  compExpectation: string;
  status: 'new' | 'vetted' | 'introduced' | 'archived';
  createdAt: string;
}

export interface SpeakingLead {
  id: string;
  name: string;
  email: string;
  organization: string;
  eventType: string;
  audienceSize: string;
  eventDate: string;
  budgetRange: string;
  details: string;
  status: 'new' | 'contacted' | 'booked' | 'archived';
  createdAt: string;
}

export interface MediaLead {
  id: string;
  name: string;
  email: string;
  company: string;
  packageInterest: string;
  budgetRange: string;
  message: string;
  status: 'new' | 'contacted' | 'closed' | 'archived';
  createdAt: string;
}

export interface PodcastLead {
  id: string;
  name: string;
  email: string;
  story: string;
  status: 'new' | 'reviewed' | 'booked' | 'archived';
  createdAt: string;
}

export interface SubscriberEntry {
  id: string;
  email: string;
  source: string;
  createdAt: string;
}

export interface CustomArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  wordCount: number;
  excerpt: string;
  contentHtml: string;
  createdAt: string;
}

export interface PlatformStore {
  advisoryLeads: AdvisoryLead[];
  talentEmployers: TalentEmployerLead[];
  talentCandidates: TalentCandidateLead[];
  speakingLeads: SpeakingLead[];
  mediaLeads: MediaLead[];
  podcastLeads: PodcastLead[];
  subscribers: SubscriberEntry[];
  customArticles: CustomArticle[];
}

const DEFAULT_STORE: PlatformStore = {
  advisoryLeads: [],
  talentEmployers: [],
  talentCandidates: [],
  speakingLeads: [],
  mediaLeads: [],
  podcastLeads: [],
  subscribers: [],
  customArticles: [],
};

function getStorePath(): string {
  // Use Railway persistent volume at /data if mounted and writable, else local ./data directory
  try {
    if (fs.existsSync('/data')) {
      fs.accessSync('/data', fs.constants.W_OK);
      return '/data/slc-store.json';
    }
  } catch {
    // fallback to project data dir
  }
  const localDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(localDir)) {
    fs.mkdirSync(localDir, { recursive: true });
  }
  return path.join(localDir, 'slc-store.json');
}

export function readStore(): PlatformStore {
  try {
    const filePath = getStorePath();
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(DEFAULT_STORE, null, 2), 'utf-8');
      return { ...DEFAULT_STORE };
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    return {
      advisoryLeads: parsed.advisoryLeads || [],
      talentEmployers: parsed.talentEmployers || [],
      talentCandidates: parsed.talentCandidates || [],
      speakingLeads: parsed.speakingLeads || [],
      mediaLeads: parsed.mediaLeads || [],
      podcastLeads: parsed.podcastLeads || [],
      subscribers: parsed.subscribers || [],
      customArticles: parsed.customArticles || [],
    };
  } catch {
    return { ...DEFAULT_STORE };
  }
}

export function writeStore(store: PlatformStore): void {
  const filePath = getStorePath();
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2), 'utf-8');
}

export function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
