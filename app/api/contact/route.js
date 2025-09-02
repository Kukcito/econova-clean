export async function POST(req){
  const data = await req.formData();
  const payload = Object.fromEntries(data.entries());
  console.log('CONTACTO ECONOVA:', payload);
  return new Response(JSON.stringify({ok:true}), { headers:{'Content-Type':'application/json'} });
}
