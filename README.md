# INRI Studio

Starter monorepo for the INRI Studio app.

## Apps
- `apps/web`: React + Vite front-end for `studio.inri.life`
- `apps/upload-api`: small Node API for signed uploads / pricing / validation
- `packages/shared`: shared rules and types

## Quick start
```bash
pnpm install
pnpm dev:web
pnpm dev:upload-api
```

## INRI contracts
Configured in `apps/web/src/lib/contracts/addresses.ts`:
- Registry: `0x5d853994B518C3820Efc8eab4918973b8Cf2c4d2`
- Template 721: `0xAC7A424f2CF365CEBAF466c1C181c9e759215460`
- Template 1155: `0xf65Ef1aCe61A34B1f7baFce2ea522b0a827E45dC`
- Deployer 721: `0xAD4a51164ED31FCf26abfe65f9FAC3ce5Bf865aC`
- Deployer 1155: `0x6DbD1B3f21310B0aDaC04e6fBdE1460edff1FEdE`
- Factory: `0x9Ad370Bed7e14D41bcc2664bB9BE96738D45904a`
