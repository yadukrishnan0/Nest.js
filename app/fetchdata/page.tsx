import { log } from "console";

async function serversideFetch() {
  const res = await fetch(" https://jsonplaceholder.typicode.com/posts");
  if (!res) {
    throw new Error("faild to load ");
  }
  return res.json();
}

type fetchdataType = {
  userId:number,
  id:number,
  title:string,
  body:string
}

async function fetchData() {
  const data = await serversideFetch();
   console.log(data);
   
  return (
    <>
      <div>fetchdata</div>
      {data.map(( post:fetchdataType) => (
        <div key={post.id}>
          <p>kk</p>
        </div>
      
      ))}
    </>
  );
}

export default fetchData;
