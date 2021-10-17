import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  id,
  albumId,
  title,
  url,
  thumbnailUrl,
}) {
  // url =
  //   "https://cdn.4mation.com.au/app/uploads/2020/04/07094618/react-native-centered.png";
  return (
    <Card sx={{ width: 345 }} style={{ marginBottom: "1rem" }}>
      <CardMedia
        component="img"
        alt={`img ID: ${id}`}
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`ID: ${id} from albumId: ${albumId}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
          Delete this image
        </Button>
      </CardActions>
    </Card>
  );
}
