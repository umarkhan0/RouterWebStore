import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import TextRating from './stars';
export default function ActionAreaCard(props) {
  // console.log(props);
  let {title , price , image , key} = props
  
  return (
    <Card sx={{ maxWidth: 250, margin: "auto" , cursor: "pointer" }}>
      <div>
        <CardMedia
          component="img"
          height="300px"
        />
        <img className=' object-cover h-[200px] w-full' src={image} alt="" />
        <CardContent>
          <Typography gutterBottom component="div">
            <p className=' sm:text-[17px] text-[14px] font-[ralway] font-semibold leading-4'>{
              title
            }</p>
          </Typography>
          <TextRating />
          <Typography variant="body2" color="text.secondary">
            <p className=' py-1 pl-1'> Rs: <span className=' font-semibold'>{
              price
            }</span></p>
          </Typography>
          <Stack spacing={2} direction="row">
            <Button sx={{ width: { sm: 130, xs: 90 }, padding: { sm: 1, xs: 0.2 }, fontSize: { sm: 12, xs: 10 } }} variant="contained" style={{ backgroundColor: '#008080' }} >Add to Cart</Button>
          </Stack>
        </CardContent>
      </div>
    </Card>
  );
}