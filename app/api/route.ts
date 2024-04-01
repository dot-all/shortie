import connectMongo from "@/utils/connectMongo";
import Urls from "@/models/urls";

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    await connectMongo();

    const sessionToken = request.headers.get('sessionToken');
    if (!sessionToken) {
      return new Response('[API_GET] Unauthorized', { status: 401 });
    }

    const url = await Urls.findOne({ sessionToken }).sort({date: 'desc'});
    return Response.json(url);

  } catch (error) {
    return new Response(`[API_GET] Error Interno: ${error}`, {
      status: 500
    });
  }
}


export async function POST(request: Request) {
  const {url, sessionToken} = await request.json();
  try {
    if(!url) {
      return new Response('Por favor, ingresa una URL', {
        status: 400,
      })
    }
    await connectMongo();
    const newUrl = await Urls.create({
      url, sessionToken
    });

    return Response.json(newUrl);

  } catch (error) {
    return new Response(`[API_POST] Error Interno: ${error}`, {
      status: 500
    })
  }
}