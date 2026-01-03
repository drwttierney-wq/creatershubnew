import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Flame, Lightbulb, Users, Heart, MessageCircle, Share2 } from 'lucide-react';

const trendingIdeas = [
  {
    id: 1,
    title: 'Green Screen Transition Hack',
    platform: 'TikTok',
    platformIcon: '🎵',
    author: 'CreatorPro',
    likes: 2340,
    comments: 89,
    shares: 156,
    tags: ['editing', 'transitions', 'viral'],
    isHot: true,
  },
  {
    id: 2,
    title: 'B-Roll Storytelling Formula',
    platform: 'YouTube',
    platformIcon: '▶️',
    author: 'FilmMaster',
    likes: 1890,
    comments: 67,
    shares: 234,
    tags: ['cinematic', 'storytelling', 'b-roll'],
    isHot: true,
  },
  {
    id: 3,
    title: 'Carousel Hook Templates',
    platform: 'Instagram',
    platformIcon: '📸',
    author: 'DesignGuru',
    likes: 1456,
    comments: 45,
    shares: 189,
    tags: ['carousel', 'engagement', 'templates'],
    isHot: false,
  },
  {
    id: 4,
    title: 'Podcast Clip Strategy',
    platform: 'Spotify',
    platformIcon: '🎧',
    author: 'PodcastPro',
    likes: 987,
    comments: 34,
    shares: 78,
    tags: ['podcast', 'repurpose', 'clips'],
    isHot: false,
  },
];

const Discover = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Discover</h1>
        <p className="text-muted-foreground mt-1">Trending ideas and viral content strategies from top creators</p>
      </div>

      {/* Featured Section */}
      <Card className="premium-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-gradient-to-br from-primary/20 via-purple-500/10 to-background p-8">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">Trending Now</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              This Week's Viral Formats
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Discover the content formats getting the most engagement across all platforms this week.
            </p>
            <Button className="mt-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Explore Trends
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Ideas */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Viral Ideas
          </h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingIdeas.map((idea, index) => (
            <Card 
              key={idea.id} 
              className="premium-card animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{idea.platformIcon}</span>
                    <span className="text-sm text-muted-foreground">{idea.platform}</span>
                  </div>
                  {idea.isHot && (
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                      <Flame className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>

                <h3 className="font-display font-semibold text-foreground mb-2">{idea.title}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-500" />
                  <span className="text-sm text-muted-foreground">@{idea.author}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{idea.likes.toLocaleString()}</span>
                  </button>
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{idea.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">{idea.shares}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Creators */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Top Creators
          </h2>
          <Button variant="outline" size="sm">See All</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Alex', 'Jordan', 'Sam', 'Taylor', 'Casey', 'Morgan'].map((name, index) => (
            <Card key={name} className="premium-card text-center animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
              <CardContent className="p-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-bold">
                  {name[0]}
                </div>
                <p className="font-medium text-foreground mt-3">{name}</p>
                <p className="text-xs text-muted-foreground">45.2K followers</p>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
