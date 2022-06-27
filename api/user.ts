import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res:VercelResponse): void => {
    res.json({
        name: "John Doe",
        email: "pkiragu@tinka.co.ke"
    });    
}