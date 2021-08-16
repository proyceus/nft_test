Messing around with OpenSea API for a gallery NFT site.

Site pulls in most recently sold NFTs and shows them on the homepage. User can click the Refresh button to update the NFTs. If there are no updated NFT sales, then the same images will remain (it is capped at 20 but some NFTs are getting filtered out due to bad metadata).

![Home Page](/project_images/HomePage.png)

Users are able to login and favorite NFTs. All favorited NFTs are linked to the username and can be fetched from the back end server (MongoDB).

![Profile Page](/project_images/ProfilePage.png)