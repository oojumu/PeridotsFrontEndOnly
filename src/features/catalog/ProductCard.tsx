
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";


interface Props
{
    product: Product;
}


export default function ProductCard({product} : Props)
{
    return (
                // <ListItem key = {product.id}>
                //     <ListItemAvatar>
                //         <Avatar src = {product.pictureUrl} />
                //     </ListItemAvatar>
                //     <ListItemText>
                //         {product.name} - {product.price}
                //     </ListItemText>
                // </ListItem>

                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar ={ 
                            <Avatar sx ={{bgcolor: 'secondary.main'}} >
                                {product.name.charAt(0).toUpperCase()}
                            </Avatar>
                        }                       
                        
                        title={product.name}

                        titleTypographyProps={{ 
                                    fontWeight: 'bold', 
                                    color: 'primary.main'
                        }}
                        
                    />
                    <CardMedia
                        sx={{ height: 140, backgroundSize: 'contain', bgcolor:'primary' }}
                        image={product.pictureUrl}//"http://picsum.photos/200"
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom  color='secondary'  variant="h5">
                        £{(product.price/ 100 ).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.brand} / {product.type}

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to cart</Button>
                        <Button size="small" component={Link} to ={`/catalog/${product.id}`}> View </Button>
                    </CardActions>
                </Card>

    )
}