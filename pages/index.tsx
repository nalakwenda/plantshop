import { AppBar, CircularProgress, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Green } from '../utilities/colors'
import Image from 'next/image'
import Hero from '../public/hero.jpg'
import Indoor from '../public/indoor.jpg'
import Outdoor from '../public/outdoor.jpg'
import { ColorButton } from '../components/Button'
import { Plant, Seed } from '../public/icons/Icons'
import { api } from '../queries/getProducts.generated'
import { Grid4x4 } from '@mui/icons-material'
import ResponsiveAppBar from '../components/appbar'

const serviceInformation = [
  {
    title: "Plant Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ex molestie, convallis nisl sed, consequat massa. . ",
    icons: <Plant />
  },
  {
    title: "Seeds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ex molestie, convallis nisl sed, consequat massa. . ",
    icons: <Seed />
  },
  {
    title: "Plant Care Tool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ex molestie, convallis nisl sed, consequat massa. . ",
    icons: <Plant />
  },
]

const Home: NextPage = () =>
{

  const { error, isFetching, isLoading, data, refetch } = api.endpoints.getProducts.useQuery({ first: 3 });
  console.log(JSON.stringify(data))
  return (
    <div>
      <Head>
        <title>Planty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar/>
      <Grid container >
        <Grid sx={{ marginTop: "2rem", height: "80%", paddingLeft: "5rem" }} container spacing={1} direction='row' justifyContent="center" alignItems="center">
          <Grid item direction="column" sx={{ padding: "1rem" }} justifyContent="center" alignItems="center" xs={12} md={5}>
            <Typography variant="h3" component="p">Give your Personal Space a Touch of Nature With Beautiful <span style={{ color: `${Green}` }}>Green Plants</span></Typography>
            <Typography variant="h5" component="p" sx={{ paddingTop: "1.5rem" }}>Explore our store’s best indoor and outdoor plants ready to grow in your personal space.</Typography>
            <ColorButton sx={{ padding: "1rem", paddingLeft: "3rem", paddingRight: "3rem", borderRadius: "1.4rem", marginTop: "2rem" }}>Buy Now</ColorButton>
          </Grid>
          <Grid xs={12} md={7} item direction="column" sx={{}}>
            <div style={{

            }}>
              <Image src={Hero} width={450}
                height={300} layout='responsive' />
            </div>

          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Grid item sx={{ paddingBottom: "4rem" }} >
            <Typography variant="h4" component="p">Services</Typography>
          </Grid>
          <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ marginTop: "0.5rem", padding: "2rem" }} >

            {serviceInformation.map(({ title, description, icons }, index) =>
            {
              return (
                <Grid container direction="column" sm={12} md={4} lg={3} key={index} item  sx={{ padding: "1rem", margin: "0.5rem", boxShadow: 20 }}>
                  <Grid>
                    {icons}
                  </Grid>
                  <Grid sx={{ paddingTop: "1rem" }}> <Typography variant="h5">{title}</Typography></Grid>
                  <Grid sx={{ paddingTop: "0.5rem" }}>  <Typography>{description}</Typography></Grid>
                </Grid>
              )
            })}
            
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "2rem" }} direction="row" justifyContent="center" alignItems="center">
          <Grid container xs={12} md={6} direction="column" sx={{ padding: "2rem", }} >
            <Typography variant="h4">Indoor Plants</Typography>
            <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ marginTop: "1.5rem" }}>
              <Grid item sm={12} md={6} direction="column">
                <Typography variant="h6">Plants to keep you company in your indoor space.</Typography>
                <ColorButton sx={{ padding: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", borderRadius: "1.4rem", marginTop: "2rem" }}>Buy Now</ColorButton>
              </Grid>
              <Grid item sm={12} md={6} direction="column" sx={{}}>
                <div style={{ borderRadius: '3rem', overflow: 'hidden', position: "relative" }}>
                  <Image src={Indoor} layout="responsive" objectFit="cover" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} md={6} direction="column" sx={{ padding: "2rem", }} >
            <Typography variant="h4">Outdooor Plants</Typography>
            <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ marginTop: "1.5rem" }}>
              <Grid item sm={12} md={6} direction="column">
                <Typography variant="h6">Add more nature to your beautiful environment</Typography>
                <ColorButton sx={{ padding: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", borderRadius: "1.4rem", marginTop: "2rem" }}>Buy Now</ColorButton>
              </Grid>
              <Grid item sm={12} md={6} direction="column" sx={{}}>
                <div style={{ borderRadius: '3rem', overflow: 'hidden', position: "relative" }}>
                  <Image src={Outdoor} layout="responsive" objectFit="cover" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container >
          <Grid container justifyContent="center" alignItems="center" sx={{marginTop:"2rem"}}>
          <Typography variant="h4">Our Latest Products</Typography>
          </Grid>
          <Grid container sx={{ marginTop: "2rem" }}>
            {isFetching ?
              <>
                <CircularProgress />
              </> :
              <>
                {data?.products ?
                  <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ padding: "2rem" }}>
                    {data.products.edges !== undefined ?
                      <>
                        {data.products?.edges.map(({ node }, index) =>
                        {
                          const { id, name, pricing, thumbnail } = node
                          return (

                          
                            <Grid key={index} item sm={12} md={4} lg={3}  sx={{margin:"2rem", boxShadow:20}}>
                                <div style={{ borderRadius: '3rem', overflow: 'hidden', position: "relative" }}>
                                  <Image src={thumbnail?.url ? thumbnail?.url :"" } layout="responsive" width={50} height={60} objectFit="cover" />
                                </div>
                              
                           <Typography>{name}</Typography>
                            </Grid>
                          )
                        })}
                      </>
                      : <Grid><Typography>There are no products available</Typography></Grid>}
                  </Grid>
                  : <>
                    <Typography></Typography>
                  </>}</>}
          </Grid>
          <Grid>  
          </Grid>
        </Grid>
      </Grid>

    </div >
  )
}

export default Home
