import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = (prop) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='12' borderBottom="2px" borderColor="gray.800">
    <Flex p='5' justifyContent="flex-end" flexDirection="column-reverse">
      <Text color='green.700' fontSize='sm' fontWeight='medium'>{prop.purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{prop.title1}<br />{prop.title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='green.900'>{prop.desc1}<br />{prop.desc2}</Text>
      <Button fontSize='xl' bg="gray.800" color="white" variant="solid">
        <Link href={prop.linkName}><a>{prop.buttonText}</a></Link>
      </Button>
    </Flex>
    <Image src={prop.imageUrl} width={500} height={300} alt="Image"/>
  </Flex>
);


function  Home({ propertiesForSale, propertiesForRent }){
 return (
    <Box bgGradient='linear(to-r, gray.100, white, gray.100)'>
    <Banner
      purpose="HOME AVAILABLE FOR RENT"
      title1="Rental Homes for"
      title2="Everyone"
      desc1=" Get your dream Apartments, builders or Villas Here"
      desc2="and explore more here"
      buttonText="Find Rents.."
      linkName="/search?purpose=for-rent"
      imageUrl="https://th.bing.com/th/id/R.ab284b50ef43aafd9aef73941e2be92f?rik=3Nql0n%2fHQL0bzg&riu=http%3a%2f%2fwww.superwallpapers.in%2fhdwallpapers%2finterior-wallpaper-hd-15.jpg&ehk=N8itgL%2fci3xunl31nzTxP%2biADK3R%2fCc%2bYp4oBCDWOcU%3d&risl=&pid=ImgRaw&r=0"
    />
    <Flex flexWrap='wrap' justifyContent='center'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}  
    </Flex>
    <Banner
      purpose="GET A HOME"
      title1="Find, Buy & Own Your"
      title2="Dream Home"
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl="https://th.bing.com/th/id/R.ccafa7119c31362dd520915115201644?rik=8HlwY9WGYHTC2Q&riu=http%3a%2f%2fwww.idesignarch.com%2fwp-content%2fuploads%2fCat-Mountain-Residence_12.jpg&ehk=AD%2fu%2b%2b4QUabhVe0V1afdqpANFHKftBj57J67Vj0amVA%3d&risl=&pid=ImgRaw&r=0"
    />
    <Flex flexWrap='wrap' borderRight={2} borderColor="blue.900" justifyContent='center'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
  );
 }

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  };
}

export default Home;
