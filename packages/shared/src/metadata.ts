export type Attribute = { trait_type: string; value: string }

export type BaseMetadata = {
  name: string
  description: string
  image?: string
  animation_url?: string
  attributes?: Attribute[]
}
