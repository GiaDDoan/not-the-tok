import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  return (
    <h1 className='text-3xl font-bold underline'>
      Hellow world!
    </h1>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return {
    props: {}
  }
}
