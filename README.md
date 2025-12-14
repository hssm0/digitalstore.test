
# test01 — Vercel + Firebase + Admin Key

## Admin Key (put in Vercel env)
```
ADMIN_KEY=hA9$M2x!Zp4Lq7@Qw3
```

## Firebase service account
Convert your serviceAccountKey.json → base64:

```
base64 serviceAccountKey.json
```

Copy result into Vercel env:
```
FIREBASE_SERVICE_ACCOUNT_BASE64=YOUR_BASE64_STRING
```

## Protected routes
- GET /api/orders  → requires header: `x-admin-key: hA9$M2x!Zp4Lq7@Qw3`
- POST /api/products  (admin not required unless you want to restrict, optional to add)
