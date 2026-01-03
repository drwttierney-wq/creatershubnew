import { Platform, Tool, ToolCategoryInfo } from '@/types/platform';

export const platforms: Platform[] = [
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'bg-tiktok', description: 'Short-form video content' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: 'bg-instagram', description: 'Photos, Reels & Stories' },
  { id: 'youtube', name: 'YouTube', icon: '▶️', color: 'bg-youtube', description: 'Long-form video & Shorts' },
  { id: 'twitter', name: 'X / Twitter', icon: '𝕏', color: 'bg-twitter', description: 'Microblogging & threads' },
  { id: 'twitch', name: 'Twitch', icon: '🎮', color: 'bg-twitch', description: 'Live streaming' },
  { id: 'facebook', name: 'Facebook', icon: '👥', color: 'bg-facebook', description: 'Community & Groups' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'bg-linkedin', description: 'Professional networking' },
  { id: 'pinterest', name: 'Pinterest', icon: '📌', color: 'bg-pinterest', description: 'Visual discovery' },
  { id: 'snapchat', name: 'Snapchat', icon: '👻', color: 'bg-snapchat', description: 'Ephemeral content' },
  { id: 'threads', name: 'Threads', icon: '@', color: 'bg-threads', description: 'Text-based conversations' },
  { id: 'discord', name: 'Discord', icon: '💬', color: 'bg-discord', description: 'Community servers' },
  { id: 'spotify', name: 'Spotify', icon: '🎧', color: 'bg-spotify', description: 'Podcasts & audio' },
  { id: 'reddit', name: 'Reddit', icon: '🔴', color: 'bg-reddit', description: 'Communities & forums' },
];

export const toolCategories: ToolCategoryInfo[] = [
  { id: 'analytics', name: 'Analytics & Insights', description: 'Track growth, engagement, and performance', icon: '📊' },
  { id: 'planning', name: 'Content Planning', description: 'Schedule and organize your content', icon: '📅' },
  { id: 'hashtags', name: 'Hashtag & SEO', description: 'Optimize discoverability', icon: '🔍' },
  { id: 'templates', name: 'Templates & Editing', description: 'Create stunning content', icon: '✨' },
];

export const getToolsForPlatform = (platformId: string): Tool[] => {
  const baseTools: Record<string, Tool[]> = {
    analytics: [
      { id: 'follower-tracker', name: 'Follower Tracker', description: 'Real-time follower count & growth rate', category: 'analytics', icon: '👥' },
      { id: 'engagement-rate', name: 'Engagement Calculator', description: 'Calculate true engagement metrics', category: 'analytics', icon: '📈' },
      { id: 'best-time', name: 'Best Time to Post', description: 'AI-powered posting time suggestions', category: 'analytics', icon: '⏰' },
      { id: 'competitor-analysis', name: 'Competitor Analysis', description: 'Track competitor performance', category: 'analytics', icon: '🔎', isPremium: true },
      { id: 'audience-insights', name: 'Audience Demographics', description: 'Understand your audience', category: 'analytics', icon: '🎯' },
      { id: 'viral-predictor', name: 'Viral Predictor', description: 'AI content virality score', category: 'analytics', icon: '🚀', isPremium: true },
      { id: 'revenue-tracker', name: 'Revenue Tracker', description: 'Track earnings & monetization', category: 'analytics', icon: '💰' },
    ],
    planning: [
      { id: 'content-calendar', name: 'Content Calendar', description: 'Visual drag-and-drop scheduler', category: 'planning', icon: '📅' },
      { id: 'idea-bank', name: 'Idea Bank', description: 'Save and organize content ideas', category: 'planning', icon: '💡' },
      { id: 'trend-alerts', name: 'Trend Alerts', description: 'Get notified about trending topics', category: 'planning', icon: '🔔' },
      { id: 'collab-finder', name: 'Collab Finder', description: 'Find creators to collaborate with', category: 'planning', icon: '🤝', isPremium: true },
      { id: 'content-series', name: 'Series Planner', description: 'Plan multi-part content', category: 'planning', icon: '📚' },
      { id: 'batch-creator', name: 'Batch Creator', description: 'Plan batch content sessions', category: 'planning', icon: '⚡' },
    ],
    hashtags: [
      { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'AI-powered hashtag suggestions', category: 'hashtags', icon: '#️⃣' },
      { id: 'trending-hashtags', name: 'Trending Now', description: 'Real-time trending hashtags', category: 'hashtags', icon: '🔥' },
      { id: 'hashtag-analytics', name: 'Hashtag Performance', description: 'Track hashtag effectiveness', category: 'hashtags', icon: '📊' },
      { id: 'keyword-research', name: 'Keyword Research', description: 'SEO keyword suggestions', category: 'hashtags', icon: '🔑' },
      { id: 'caption-optimizer', name: 'Caption Optimizer', description: 'Optimize captions for reach', category: 'hashtags', icon: '✍️' },
      { id: 'banned-checker', name: 'Banned Hashtag Checker', description: 'Check for shadowban risks', category: 'hashtags', icon: '⚠️' },
    ],
    templates: [
      { id: 'bio-generator', name: 'Bio Generator', description: 'AI-crafted bio templates', category: 'templates', icon: '📝' },
      { id: 'caption-templates', name: 'Caption Templates', description: 'Ready-to-use caption formats', category: 'templates', icon: '💬' },
      { id: 'thumbnail-maker', name: 'Thumbnail Maker', description: 'Create eye-catching thumbnails', category: 'templates', icon: '🖼️', isPremium: true },
      { id: 'hook-generator', name: 'Hook Generator', description: 'Viral opening lines', category: 'templates', icon: '🎣' },
      { id: 'cta-templates', name: 'CTA Templates', description: 'Call-to-action templates', category: 'templates', icon: '👆' },
      { id: 'script-writer', name: 'Script Writer', description: 'AI video script generator', category: 'templates', icon: '🎬', isPremium: true },
      { id: 'reply-templates', name: 'Reply Templates', description: 'Quick response templates', category: 'templates', icon: '💌' },
    ],
  };

  return [
    ...baseTools.analytics,
    ...baseTools.planning,
    ...baseTools.hashtags,
    ...baseTools.templates,
  ];
};
