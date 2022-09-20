import React from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useGithub } from '../contexts/GithubContext';

function SearchResult() {
  const {searches} = useGithub();
  return (
    <div style={{marginTop: 20}}>
      {searches && searches.map((s, k) => (
         <Box sx={{ minWidth: 275, maxWidth: 700, marginBottom: 2 }} key={k}>
         <Card variant="outlined">
           <CardContent>
           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {s.display_name}
           </Typography>
           <Typography variant="h5" component="div">
           {s.created_by}
           </Typography>
           <Typography variant="body2">
             {s.short_description}
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small">Updated: {s.created_at.toLocaleString()}</Button>
           <Button size="small">Updated: {s.updated_at.toLocaleString()}</Button>
       </CardActions>
       </Card>
      </Box>
      ))
      }
    </div>
  )
}

export default SearchResult
