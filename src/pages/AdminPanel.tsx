import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Users, Shield, Database, Settings } from 'lucide-react';

interface UserProfile {
  id: string;
  user_id: string;
  display_name: string;
  email: string;
  created_at: string;
  currentRole: 'admin' | 'user';
}

const AdminPanel = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState<string | null>(null);
  
  const { user, userRole, signOut } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user && userRole === 'admin') {
      fetchUsers();
    }
  }, [user, userRole]);

  const fetchUsers = async () => {
    try {
      // First get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*');

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        return;
      }

      // Then get all user roles
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) {
        console.error('Error fetching roles:', rolesError);
        return;
      }

      // Combine the data
      const usersWithRoles = profiles?.map(profile => {
        const userRole = roles?.find(role => role.user_id === profile.user_id);
        return {
          ...profile,
          currentRole: (userRole?.role as 'admin' | 'user') || 'user'
        };
      }) || [];

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: 'admin' | 'user') => {
    setUpdateLoading(userId);

    try {
      // First, delete existing roles for the user
      const { error: deleteError } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId);

      if (deleteError) {
        throw deleteError;
      }

      // Then insert the new role
      const { error: insertError } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: newRole });

      if (insertError) {
        throw insertError;
      }

      toast({
        title: 'Success',
        description: `User role updated to ${newRole}`,
      });

      fetchUsers();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUpdateLoading(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed out',
      description: 'You have been signed out successfully',
    });
  };

  if (userRole !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto text-destructive mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  const adminCount = users.filter(u => u.currentRole === 'admin').length;
  const userCount = users.filter(u => u.currentRole === 'user').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage users, roles, and system settings
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Admins</p>
                  <p className="text-2xl font-bold">{adminCount}</p>
                </div>
                <Shield className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Regular Users</p>
                  <p className="text-2xl font-bold">{userCount}</p>
                </div>
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Database</p>
                  <p className="text-2xl font-bold text-green-600">Online</p>
                </div>
                <Database className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              System Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((userProfile) => (
                      <TableRow key={userProfile.id}>
                        <TableCell className="font-medium">
                          {userProfile.display_name || 'No name'}
                        </TableCell>
                        <TableCell>{userProfile.email}</TableCell>
                        <TableCell>
                          <Badge variant={userProfile.currentRole === 'admin' ? 'default' : 'secondary'}>
                            {userProfile.currentRole}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(userProfile.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Select
                            value={userProfile.currentRole}
                            onValueChange={(value: 'admin' | 'user') => updateUserRole(userProfile.user_id, value)}
                            disabled={updateLoading === userProfile.user_id}
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Database Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">Connected and operational</span>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Authentication</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Provider:</span> Supabase Auth</p>
                    <p><span className="font-medium">Status:</span> Active</p>
                    <p><span className="font-medium">Email Verification:</span> Required</p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-destructive">Danger Zone</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    These actions require careful consideration.
                  </p>
                  <Button variant="destructive" onClick={handleSignOut}>
                    Sign Out as Admin
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;