import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import NextAuth from "next-auth";
// import jwt from "jsonwebtoken";
// import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials"
// import { env } from "process";
import bcrypt  from "bcrypt";

export const authOptions = {
    providers: [
      // GoogleProvider({
      //     clientId:env("GOOGLE_CLIENT_ID"),
      //      clientSecret:env("GOOGLE_CLIENT_SECRET")
      // }),
      // EmailProvider({
      //   server: {
      //     host: "YOUR_SMTP_HOST",
      //     port: "YOUR_SMTP_PORT",
      //     auth: {
      //       user: "YOUR_EMAIL_USERNAME",
      //       pass: "YOUR_EMAIL_PASSWORD",
      //     },
      //   },
      //   from: "YOUR_EMAIL_FROM_ADDRESS",
      // }),
      CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: '',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@" },
            password: { label: "Password", type: "password",placeholder:"your-pass" },
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
  
            console.log("credentials",credentials)
            const res = await prisma.user.findFirst({
              where:{
                  email:credentials.email,
              }
            });
            const isEquel = await bcrypt.compare(credentials.password,res.password);

            if(res.id,isEquel){
                return res
            }      
            // If no error and we have user data, return it
            if (credentials.csrfToken) {
              return credentials.csrfToken
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
    ]
  };

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST }

 


