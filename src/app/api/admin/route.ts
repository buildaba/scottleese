import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, generateId } from '@/lib/store';

export async function GET() {
  try {
    const store = readStore();
    return NextResponse.json(store);
  } catch {
    return NextResponse.json({ error: 'Failed to load store' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { collection, id, status } = body;
    const store = readStore();

    if (collection === 'advisoryLeads') {
      store.advisoryLeads = store.advisoryLeads.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else if (collection === 'talentEmployers') {
      store.talentEmployers = store.talentEmployers.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else if (collection === 'talentCandidates') {
      store.talentCandidates = store.talentCandidates.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else if (collection === 'speakingLeads') {
      store.speakingLeads = store.speakingLeads.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else if (collection === 'mediaLeads') {
      store.mediaLeads = store.mediaLeads.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else if (collection === 'podcastLeads') {
      store.podcastLeads = store.podcastLeads.map((item) =>
        item.id === id ? { ...item, status } : item
      );
    } else {
      return NextResponse.json({ error: 'Unknown collection' }, { status: 400 });
    }

    writeStore(store);
    return NextResponse.json({ success: true, store });
  } catch {
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;
    const store = readStore();

    if (action === 'publish_article') {
      const title = String(body.title || '').trim();
      const category = String(body.category || 'Tactical Advice').trim();
      const excerpt = String(body.excerpt || '').trim();
      const rawBody = String(body.body || '').trim();

      if (!title || !rawBody) {
        return NextResponse.json(
          { error: 'Title and article body are required.' },
          { status: 400 }
        );
      }

      const baseSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      const slug = baseSlug || generateId('dispatch');

      const words = rawBody.split(/\s+/).filter(Boolean).length;
      const minutes = Math.max(1, Math.round(words / 200));

      // Convert plain text paragraphs to HTML if not already HTML
      const contentHtml = rawBody.includes('<p>')
        ? rawBody
        : rawBody
            .split(/\n\s*\n/)
            .map((para) => {
              const trimmed = para.trim();
              if (trimmed.startsWith('## ')) {
                return `<h2>${trimmed.replace(/^##\s+/, '')}</h2>`;
              }
              if (trimmed.startsWith('### ')) {
                return `<h3>${trimmed.replace(/^###\s+/, '')}</h3>`;
              }
              return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
            })
            .join('');

      const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

      const newArticle = {
        slug,
        title,
        category,
        date: formattedDate,
        readTime: `${minutes} min read`,
        wordCount: words,
        excerpt: excerpt || rawBody.replace(/<[^>]+>/g, '').slice(0, 180) + '...',
        contentHtml,
        createdAt: new Date().toISOString(),
      };

      store.customArticles = [
        newArticle,
        ...store.customArticles.filter((a) => a.slug !== slug),
      ];
      writeStore(store);

      return NextResponse.json({ success: true, article: newArticle, store });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const collection = searchParams.get('collection');
    const id = searchParams.get('id');
    const store = readStore();

    if (collection === 'customArticles') {
      store.customArticles = store.customArticles.filter((a) => a.slug !== id);
    } else if (collection === 'advisoryLeads') {
      store.advisoryLeads = store.advisoryLeads.filter((a) => a.id !== id);
    } else if (collection === 'talentEmployers') {
      store.talentEmployers = store.talentEmployers.filter((a) => a.id !== id);
    } else if (collection === 'talentCandidates') {
      store.talentCandidates = store.talentCandidates.filter((a) => a.id !== id);
    } else if (collection === 'speakingLeads') {
      store.speakingLeads = store.speakingLeads.filter((a) => a.id !== id);
    } else if (collection === 'mediaLeads') {
      store.mediaLeads = store.mediaLeads.filter((a) => a.id !== id);
    } else if (collection === 'podcastLeads') {
      store.podcastLeads = store.podcastLeads.filter((a) => a.id !== id);
    } else if (collection === 'subscribers') {
      store.subscribers = store.subscribers.filter((a) => a.id !== id);
    }

    writeStore(store);
    return NextResponse.json({ success: true, store });
  } catch {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
