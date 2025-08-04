import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { User, Settings, Shield } from 'lucide-react';

interface UserProfile {
  id: string;
  user_id: string;
  display_name: string;
  email: string;
  avatar_url?: string;
  created_at: string;
}

const UserPanel = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  
  const { user, userRole, signOut } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        setProfile(data);
        setDisplayName(data.display_name || '');
        setAvatarUrl(data.avatar_url || '');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: displayName,
          avatar_url: avatarUrl,
        })
        .eq('user_id', user?.id);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: 'Profile updated successfully!',
        });
        fetchProfile();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed out',
      description: 'You have been signed out successfully',
    });
  };

  if (isLoadingProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              User Panel
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your account and preferences
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src={profile?.avatar_url} />
                <AvatarFallback className="text-lg">
                  {profile?.display_name?.charAt(0) || profile?.email?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{profile?.display_name || 'User'}</CardTitle>
              <CardDescription>{profile?.email}</CardDescription>
              <div className="flex justify-center mt-2">
                <Badge variant={userRole === 'admin' ? 'default' : 'secondary'} className="flex items-center gap-1">
                  {userRole === 'admin' ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                  {userRole || 'user'}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information and avatar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={updateProfile} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Display Name</Label>
                        <Input
                          id="displayName"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          placeholder="Enter your display name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avatarUrl">Avatar URL</Label>
                        <Input
                          id="avatarUrl"
                          value={avatarUrl}
                          onChange={(e) => setAvatarUrl(e.target.value)}
                          placeholder="Enter avatar URL"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input value={profile?.email || ''} disabled />
                        <p className="text-sm text-muted-foreground">
                          Email cannot be changed from this panel
                        </p>
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Updating...' : 'Update Profile'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences and security
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <h4 className="font-medium mb-2">Account Information</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">User ID:</span> {user?.id}</p>
                        <p><span className="font-medium">Role:</span> {userRole || 'user'}</p>
                        <p><span className="font-medium">Created:</span> {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-destructive">Danger Zone</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        These actions are irreversible. Please be careful.
                      </p>
                      <Button variant="destructive" onClick={handleSignOut}>
                        Sign Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;