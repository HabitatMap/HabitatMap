// Netlify Edge Function: returns the visitor's country from edge geolocation.
// Classic serverless functions don't receive geo, but Edge Functions do via
// context.geo. The cart uses this to default the "Ship to country" dropdown
// to the buyer's actual location. Country code only; no PII is returned.
export default async (_request, context) => {
  const country = context.geo && context.geo.country ? context.geo.country.code || null : null;
  return new Response(JSON.stringify({ country }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
};

export const config = { path: "/geo-country" };
