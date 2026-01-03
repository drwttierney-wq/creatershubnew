import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Send, Phone, Video, MoreVertical, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const conversations = [
  { id: 1, name: 'Alex Rivera', message: 'Hey! Loved your latest video 🔥', time: '2m', unread: 2, online: true },
  { id: 2, name: 'Jordan Lee', message: 'Can we collab on the next project?', time: '15m', unread: 0, online: true },
  { id: 3, name: 'Sam Taylor', message: 'The analytics look great!', time: '1h', unread: 0, online: false },
  { id: 4, name: 'Casey Morgan', message: 'Thanks for the shoutout!', time: '3h', unread: 0, online: false },
  { id: 5, name: 'Riley Chen', message: 'Check out this trend...', time: '5h', unread: 1, online: true },
  { id: 6, name: 'Avery Kim', message: 'Meeting tomorrow at 3?', time: '1d', unread: 0, online: false },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="h-[calc(100vh-8rem)]">
      <Card className="premium-card h-full overflow-hidden">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-80 border-r border-border/50 flex flex-col">
            <div className="p-4 border-b border-border/50">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search messages..." 
                  className="pl-10 bg-secondary/50 border-none"
                />
              </div>
            </div>
            
            <ScrollArea className="flex-1">
              <div className="p-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={cn(
                      'w-full p-3 rounded-lg flex items-start gap-3 transition-colors text-left',
                      selectedConversation.id === conv.id 
                        ? 'bg-accent' 
                        : 'hover:bg-secondary/50'
                    )}
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-medium">
                        {conv.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {conv.online && (
                        <Circle className="absolute -bottom-0.5 -right-0.5 w-3 h-3 fill-emerald-500 text-emerald-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-foreground">{conv.name}</span>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.message}</p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground font-medium">
                        {conv.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-medium">
                    {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {selectedConversation.online && (
                    <Circle className="absolute -bottom-0.5 -right-0.5 w-3 h-3 fill-emerald-500 text-emerald-500" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{selectedConversation.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedConversation.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-[70%] rounded-2xl rounded-bl-md bg-secondary/50 p-3">
                    <p className="text-sm text-foreground">{selectedConversation.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{selectedConversation.time}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-2xl rounded-br-md bg-primary text-primary-foreground p-3">
                    <p className="text-sm">Thanks! Really appreciate the support 🙌</p>
                    <p className="text-xs opacity-70 mt-1">Just now</p>
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Input 
                  placeholder="Type a message..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-secondary/50 border-none"
                />
                <Button size="icon" className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
