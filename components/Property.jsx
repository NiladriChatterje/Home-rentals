import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, phoneNumber , contactName} }) => (
  <Box mb={3} alignItens="center" >
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' borderRight='1px' borderColor="gray.800">
      <Box bg="gray.400"  >
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
      </Box>
      <Box w='full' borderBottom={3} borderColor="red.500">
        <Flex paddingTop='2' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.700'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>$ {price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex >
        <Flex flexDirection="row-reverse" alignItems='center' p='1' justifyContent='space-between' w='250px' color='red.600'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sq dm <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
        <Text fontSize='xs'>
         Phone Number: {phoneNumber.mobile.length != 0 ? phoneNumber.mobile: ""}<br />
         ALT phone Number:{phoneNumber.phone? phoneNumber.phone: ""}
        </Text>
        <Text color="green.500" fontSize={15} fontWeight='bold'>
         Whatsapp: {phoneNumber.whatsapp?"+"+phoneNumber.whatsapp: " "}
        </Text>
        <Text fontSize='xl'>
         {contactName.length?"Owner :  "+contactName:""}
        </Text>
        <Text fontSize='xl'>
         {agency.product.length?"Scheme :  "+agency.product:" Non- Premium"}
        </Text>
      </Box>
    </Flex>
  </Link>
  </Box>
);

export default Property;