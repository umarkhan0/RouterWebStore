import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import TextRating from './stars';
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250, margin: "auto" }}>
      <div >
        <CardMedia
          component="img"
          height="300"
          image="https://vmart.pk/wp-content/uploads/2010/12/TL-WR940N-Main.jpg"
          alt="green iguana"
          className="object-cover"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            <p className=' sm:text-[17px] text-[14px] font-[ralway] font-semibold leading-4'>TP-LINK TL-WR940N 450MBPS WIRELESS N ROUTER</p>
          </Typography>
          <TextRating />
          <Typography variant="body2" color="text.secondary">
            <p className=' py-1 pl-1'> Rs: <span className=' font-semibold'>9,690 </span></p>
          </Typography>
          <Stack spacing={2} direction="row">
            <Button sx={{ width: { sm: 130, xs: 90 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#001f3f' }} >Add to Cart</Button>
          </Stack>
        </CardContent>
      </div>
    </Card>
  );
}