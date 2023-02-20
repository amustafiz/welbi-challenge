This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To view final result: 

Checkout the deployment at https://recreation-dashboard.vercel.app/

## Development

First, run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The main page is in index.tsx.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are Api routes instead of React pages.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on

1. [http://localhost:3000/api/programs](http://localhost:3000/api/programs). This endpoint can be edited in `pages/api/programs.ts`.
2. [http://localhost:3000/api/residents](http://localhost:3000/api/residents). This endpoint can be edited in `pages/api/residents.ts`.
3. [http://localhost:3000/api/register-residents](http://localhost:3000/api/register-residents). This endpoint can be edited in `pages/api/register-residents.ts`.

Design inspiration: Google flights
![image](https://user-images.githubusercontent.com/60857129/220206161-51183975-8606-4b42-a5a7-3843edd4600a.png)

Theme and color inspirations: Your videos demonstrating the dashboards for users.

Ideas to work on further:
- Tests (jest and cypress, storybook- adding more features would not break exisiting ones: increased scalability)
- Add more pages to show residents and programs separately: add ability to add new residents and programs in those pages
- Select to be filterable to exclude people already added

Known Bugs:
Certain residents cannot be added to programs because of Prisma error.

Thank you for this opportunity.
