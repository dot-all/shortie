import Urls from "@/models/urls";
import connectMongo from "@/utils/connectMongo";
import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = 'force-dynamic'

export async function GET( request: Request, { params }: { params: { code: string } }
  ) {
    try {
      const code = params.code;
      await connectMongo();
      const data = await Urls.find({code});
      if (data.length > 0) {
          data[0].clicked+=1;
          data[0].save();
          return Response.redirect(data[0].url)
        } else return new Response(`[SLUG_GET] Error: 404`, {status: 404});
      } catch (error) {
          return new Response(`[SLUG_GET] Error: ${error}`, {
              status: 500
            })
          }
}