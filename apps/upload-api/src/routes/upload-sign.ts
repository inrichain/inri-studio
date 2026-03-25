import { createSignedUploadUrl } from '../services/pinataService'

export async function uploadSignRoute() {
  return createSignedUploadUrl()
}
