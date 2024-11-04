
import Link from "next/link";

export default function Page ({
  params,
}: {
  params: { country: string };
}) {


  return (
    <>
    <h1>메인 페이지</h1>
    <Link href={`${params.country}/products`} style={{backgroundColor: '#000', color:'#fff', width:'100px', padding:'10px 20px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', fontWeight:'700'}}>상품 이동</Link>
    </>
  )
};

