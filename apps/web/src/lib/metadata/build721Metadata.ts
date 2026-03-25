export function build721Metadata(input: {
  name: string
  description: string
  image?: string
  animation_url?: string
  attributes?: Array<{ trait_type: string; value: string }>
}) {
  return input
}
