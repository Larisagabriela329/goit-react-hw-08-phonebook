import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', gap: 1, py: 2 }}>
      <Typography variant="h6">Contact Book</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          component={Link} 
          to="/register"
          sx={{ 
            color: 'white', 
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' } // Darker blue on hover
          }}
        >
          Register
        </Button>
        <Button 
          component={Link} 
          to="/login"
          sx={{ 
            color: 'white', 
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          Login
        </Button>
        <Button 
          component={Link} 
          to="/contacts"
          sx={{ 
            color: 'white', 
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          Contacts
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navigation;
