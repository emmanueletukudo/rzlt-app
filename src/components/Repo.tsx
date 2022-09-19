import React from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

type  RProps = {
  name: string;
  url: string,
  description: string
}

function Repo(repo: RProps) {
  const {name, url, description} = repo;
  return (
      <Box sx={{ minWidth: 275, maxWidth: 700, marginBottom: 2 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography variant="body2">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url} style={{ textDecoration: "none"}}>
        <Button size="small">{name}</Button>
        </a>
    </CardActions>
    </Card>
   </Box>
  )
}

export default Repo
