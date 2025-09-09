import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FarmingLoader } from "@/components/ui/farming-loader";
import { 
  Send, 
  Mic, 
  MicOff, 
  Phone, 
  MessageSquare, 
  History,
  Volume2,
  VolumeX,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatInterfaceProps {
  userInfo: any;
}

interface Message {
  id: string;
  content: string;
  contentMalayalam?: string;
  sender: 'user' | 'assistant' | 'expert';
  timestamp: Date;
}

export const ChatInterface = ({ userInfo }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I am your agriculture assistant. How can I help you?`,
      contentMalayalam: `നമസ്കാരം! ഞാൻ നിങ്ങളുടെ കാർഷിക സഹായിയാണ്. എനിക്ക് എങ്ങനെ സഹായിക്കാം?`,
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "Rice pest problems",
    "Coconut tree diseases",
    "Best fertilizer for pepper",
    "Weather suitable for planting"
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setSearchHistory(prev => [inputValue, ...prev.slice(0, 9)]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: "Based on your description, this looks like a common pest issue. I recommend organic neem oil spray applied in the evening. Monitor for 3-5 days.",
          contentMalayalam: "നിങ്ങളുടെ വിവരണം അനുസരിച്ച്, ഇത് ഒരു സാധാരണ കീട പ്രശ്നമാണ്. വൈകുന്നേരം ജൈവ വേപ്പെണ്ണ സ്പ്രേ ചെയ്യാൻ ഞാൻ ശുപാർശ ചെയ്യുന്നു. 3-5 ദിവസം നിരീക്ഷിക്കുക."
        },
        {
          content: "This appears to be a nutrient deficiency. Apply organic compost and check soil pH. Would you like me to connect you with a local expert?",
          contentMalayalam: "ഇത് പോഷകങ്ങളുടെ കുറവാണെന്ന് തോന്നുന്നു. ജൈവ കമ്പോസ്റ്റ് ഇടുകയും മണ്ണിന്റെ pH പരിശോധിക്കുകയും ചെയ്യുക. ഒരു പ്രാദേശിക വിദഗ്ദ്ധനുമായി ബന്ധപ്പെടുത്താൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?"
        }
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        contentMalayalam: randomResponse.contentMalayalam,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Start voice recognition
      toast({
        title: "Voice Recognition Active",
        description: "Speak in Malayalam or English",
      });
    } else {
      toast({
        title: "Voice Recognition Stopped",
        description: "Processing your voice input...",
      });
    }
  };

  const handleSpeak = (text: string) => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      // Text-to-speech implementation would go here
      toast({
        title: "Speaking...",
        description: "Audio output active",
      });
    }
  };

  const connectExpert = () => {
    toast({
      title: "Connecting to Expert",
      description: "A Kerala agriculture expert will contact you shortly",
    });
  };

  const sendWhatsApp = () => {
    toast({
      title: "WhatsApp Integration",
      description: "Opening WhatsApp with agricultural expert",
    });
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="font-semibold">Kerala Krishi AI</h2>
              <p className="text-xs opacity-90 malayalam">കേരള കൃഷി AI സഹായി</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
              onClick={connectExpert}
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
            >
              <History className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <Card className={`max-w-[80%] ${
              message.sender === 'user' 
                ? 'bg-kerala-green text-white' 
                : message.sender === 'expert'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : 'bg-card'
            }`}>
              <CardContent className="p-3">
                {message.sender === 'expert' && (
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white">
                    🏆 Expert Response
                  </Badge>
                )}
                <p className="text-sm">{message.content}</p>
                {message.contentMalayalam && (
                  <p className="text-xs mt-1 opacity-90 malayalam">{message.contentMalayalam}</p>
                )}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                  {message.sender === 'assistant' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-white/20"
                      onClick={() => handleSpeak(message.content)}
                    >
                      {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <Card className="bg-card">
              <CardContent className="p-4">
                <FarmingLoader message="AI is analyzing your query... / AI നിങ്ങളുടെ ചോദ്യം വിശകലനം ചെയ്യുന്നു..." />
              </CardContent>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-muted/30">
        <div className="flex space-x-2 mb-3 overflow-x-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="whitespace-nowrap"
            onClick={connectExpert}
          >
            📞 Connect Expert
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="whitespace-nowrap"
            onClick={sendWhatsApp}
          >
            💬 WhatsApp
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            📧 SMS
          </Button>
        </div>

        {/* Search History */}
        {searchHistory.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-2">Recent searches:</p>
            <div className="flex flex-wrap gap-1">
              {searchHistory.slice(0, 3).map((search, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs cursor-pointer hover:bg-primary hover:text-white"
                  onClick={() => setInputValue(search)}
                >
                  {search}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-border">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your agriculture question... / നിങ്ങളുടെ കാർഷിക ചോദ്യം ടൈപ്പ് ചെയ്യുക..."
              className="pr-12 malayalam"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="ghost"
              size="sm"
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 ${
                isListening ? 'text-red-500 bg-red-50' : 'text-muted-foreground'
              }`}
              onClick={handleVoiceToggle}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
          </div>
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-kerala-green hover:bg-kerala-green/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};