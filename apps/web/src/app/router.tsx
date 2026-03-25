import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { CreateCollectionPage } from '../pages/CreateCollectionPage'
import { MyCollectionsPage } from '../pages/MyCollectionsPage'
import { CollectionDetailsPage } from '../pages/CollectionDetailsPage'
import { CreateNFTPage } from '../pages/CreateNFTPage'
import { MyNFTsPage } from '../pages/MyNFTsPage'
import { ExplorePage } from '../pages/ExplorePage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter(
  [
    { path: '/', element: <HomePage /> },
    { path: '/create-collection', element: <CreateCollectionPage /> },
    { path: '/my-collections', element: <MyCollectionsPage /> },
    { path: '/collections/:address', element: <CollectionDetailsPage /> },
    { path: '/collections/:address/create-nft', element: <CreateNFTPage /> },
    { path: '/my-nfts', element: <MyNFTsPage /> },
    { path: '/explore', element: <ExplorePage /> },
    { path: '*', element: <NotFoundPage /> },
  ],
  {
    basename: '/inri-studio/',
  }
)
