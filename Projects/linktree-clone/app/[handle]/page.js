import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: handle });
  if(!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-purple-800 justify-center items-start py-10">
      {item && <div className="photo flex flex-col justify-center items-center gap-4">
        <img className="w-40 rounded-full outline-1" src={item.pic} alt="" />
        <span className="font-bold text-xl text-gray-100">@{item.handle}</span>
        <span className="desc w-80 text-center text-white">{item.desc}</span>
        <div className="links">
          {item.links.map((item, index) => {
            return <Link key={index} href={item.link}><div className="bg-purple-100 min-w-96 flex justify-center py-4 px-2 rounded-md my-3 shadow-lg" >
              {item.linktext}
            </div></Link>
          })}
        </div>
      </div>}
    </div>
  )
}