export type PlatformId = 
  | 'tiktok' 
  | 'instagram' 
  | 'youtube' 
  | 'twitter' 
  | 'twitch' 
  | 'facebook' 
  | 'linkedin' 
  | 'pinterest' 
  | 'snapchat' 
  | 'threads' 
  | 'discord' 
  | 'spotify' 
  | 'reddit';

export interface Platform {
  id: PlatformId;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  isPremium?: boolean;
}

export type ToolCategory = 
  | 'analytics' 
  | 'planning' 
  | 'hashtags' 
  | 'templates';

export interface ToolCategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
}
